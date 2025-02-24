/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-undef */

const HIGHLIGHTER_ID = "selector-grab-highlighter";
const SAVE_BUTTON_ID = "save-button-selector";
const SAVE_BUTTON_IFRAME_ID = "save-button-iframe";
let lastHighlightTarget;

function terminate() {
  // The `click` listener is automatically removed after it has been called once
  window.removeEventListener("mouseover", handleMouseOver);
  removeHighlight();
}

window.addEventListener(
  "message",
  (e) => {
    console.log("picker is receiving " + e.data["id"]);
    if (e.data["id"] === "selectOptions") {
      saveButtonIframe.style.height = "136px";
      saveButtonIframe.style.width = "176px";
      saveButtonIframe.style.borderRadius = "8px";

      const { right } = lastHighlightTarget.getBoundingClientRect();

      saveButtonIframe.style.left = right - 176 - 8 + "px";
    }
    if (e.data["id"] === "receiveStylarToken") {
      //console.log(e.data.content);
      messagePickerFrame("receiveStylarToken", e.data.content);
    }
    if (e.data["id"] === "refreshContent") {
      messagePickerFrame("refreshContent");
    }
  },
  false
);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "displayStylarWindow") {
    setPickerVisible();
  }
});

const saveButtonIframe = document.createElement("iframe");

saveButtonIframe.id = SAVE_BUTTON_IFRAME_ID;
saveButtonIframe.sandbox =
  "allow-same-origin allow-scripts allow-downloads allow-popups allow-forms";

saveButtonIframe.style.position = "absolute";
saveButtonIframe.style.zIndex = "9999";
saveButtonIframe.style.height = "28px";
saveButtonIframe.style.width = "78px";
saveButtonIframe.style.borderRadius = "99px";

saveButtonIframe.style.overflow = "visible";
saveButtonIframe.style.display = "none";
saveButtonIframe.src = `${BASE_URL}/picker-mode`;

document.body.appendChild(saveButtonIframe);

setPickerHidden();

function setPickerHidden() {
  saveButtonIframe.classList.add("hidden");
}
function setPickerVisible() {
  saveButtonIframe.style.display = "block";
  saveButtonIframe.classList.remove("hidden");
}

function addHighlight() {
  const div = document.createElement("div");
  div.id = HIGHLIGHTER_ID;
  const { style } = div;
  style.backgroundColor = "#46308880";
  style.boxSizing = "border-box";
  style.border = "solid 1px #7000FF";
  style.position = "fixed";
  style.zIndex = "9999";
  style.pointerEvents = "none";
  document.body.appendChild(div);
}

function updateHighlight({ target }) {
  if (!(target instanceof HTMLElement) || target === lastHighlightTarget) {
    return;
  }

  const trueImageElement = getTrueImageElement(target);

  let rect;
  if (trueImageElement && trueImageElement[0])
    rect = trueImageElement[0].getBoundingClientRect();
  else
    rect = target.getBoundingClientRect();
  const { top, left, right, width, height } = rect;

  const highlighter = document.getElementById(HIGHLIGHTER_ID);
  const saveButtonIframe = document.getElementById(SAVE_BUTTON_IFRAME_ID);

  if (!saveButtonIframe || target.id === SAVE_BUTTON_IFRAME_ID) {
    return;
  }

  lastHighlightTarget = target;

  if (!trueImageElement || width < 120 || height < 120) {
    messagePickerFrame("renderSaveButton", { show: false });
    saveButtonIframe.style.height = "28px";
    saveButtonIframe.style.width = "78px";
    saveButtonIframe.style.display = "none";
    setPickerHidden();
    return;
  }

  setPickerVisible();

  saveButtonIframe.style.display = "block";
  saveButtonIframe.style.top = top + 8 + window.scrollY + "px";
  saveButtonIframe.style.left = right - 78 - 8 + "px";

  const referenceData = getReferenceData(trueImageElement);
  if (referenceData)
    messagePickerFrame("renderSaveButton", referenceData);

  // messagePickerFrame("renderSaveButton", {
  //   imageUrl: lastHighlightTarget.src,
  //   productUrl: string,
  //   productName: string,
  // });
}

function getTrueImageElement(target) {
  let image = null;
  if (target instanceof Image) {
    image = $(target);
    //console.log(target.src + " is image");
    if ((target.src && target.src.startsWith("data")) || !target.src) {
      image = $(target).siblings("source");
      if (!isValidImage(image)) image = $(target).closest("source");
      if (!isValidImage(image)) image = $(target).find("source");
    }
  }
  if (!isValidImage(image)) image = $(target).find("img");
  if (!isValidImage(image)) image = $(target).closest('img[src!=""]');
  if (!isValidImage(image)) image = $(target).closest('img[srcset!=""]');
  if (!isValidImage(image)) image = $(target).siblings("img");
  if (!isValidImage(image) || image.length === 0) {
    // search neighbors for image
    const siblings = $(target).siblings();
    for (var i=0; i<siblings.length; i++) {
      const subImage = $(siblings[i]).find("img")
      if (isValidImage(subImage)) {
        image = subImage;
        break;
      }
    }
  }

  return image;
}

function isValidImage(elem) {
  return !!(elem && (elem.attr('src') || elem.attr('srcset') || elem.attr('data-src') || elem.attr('data-srcset')))
}

function getReferenceData(image) {
  if (image && image[0]) {
    const productName = document.title.trim();
    let imageUrl = "";
    let imageAttr = image.attr("srcset")
    if (!imageAttr)
      imageAttr = image.attr("data-srcset")
    if (imageAttr) {
      const regex = /\s\d+[wh],?/
      const srcSet = imageAttr.trim().split(regex);
      for (let i=srcSet.length-1; i>=0; i--)
        if (srcSet[i]) {
          imageUrl = srcSet[i].trim()
          break;
        }
    } else if (image.attr("src")) {
      imageUrl = image.attr("src");
    } else if (image.attr("data-src")) {
      imageUrl = image.attr("data-src");
    }
    let productUrl = image.closest("a").attr("href");

    if (!productUrl) productUrl = window.location.toString();

    const productAuthor = getAuthor(productUrl);

    productUrl = processUrl(productUrl);
    imageUrl = processUrl(imageUrl);

    //console.log(imageUrl + " is Image URL");

    return {
      imageUrl,
      productName,
      productUrl,
      productAuthor,
    };
  } else {
    console.log("Could not find image");
  }
}

function removeHighlight() {
  const highlighter = document.getElementById(HIGHLIGHTER_ID);
  if (highlighter) {
    document.body.removeChild(highlighter);
  }
}

function generateSelector(element) {
  if (!element) return "";

  let selector = getSelector(element);
  while (!isUnique(selector) && element) {
    element = element.parentElement;
    const newSelector = getSelector(element);
    if (newSelector) selector = newSelector + ">" + selector;
  }

  return selector;
}

function getSelector(element) {
  if (!element) return "";

  const { tagName, id } = element;
  const tag = tagName.toLowerCase();
  if (tag === "body" || tag === "html") return tag;

  let selector = tag;
  if (!isUnique(selector)) selector += id ? "#" + id : "";

  return appendPseudoSelector(element, selector);
}

function appendPseudoSelector(element, selector) {
  return isUnique(selector)
    ? selector
    : `${selector}:nth-child(${getChildIndex(element)})`;
}

function getChildIndex({ previousElementSibling: sibling }) {
  return sibling ? getChildIndex(sibling) + 1 : 1;
}

function getQueryLength(selector) {
  return document.querySelectorAll(selector).length;
}

function isUnique(selector) {
  return getQueryLength(selector) <= 1;
}

function checkTerminateKeys(event) {
  const { key } = event;
  if (key === "Escape" || key === "Esc") {
    event.preventDefault();
    terminate();
  }
}

function handleMouseOver(event) {
  event.stopPropagation();
  event.preventDefault();

  throttle(updateHighlight(event));
}

function throttle(func, limit = 100) {
  let inThrottle;
  let lastResult;

  return function () {
    const args = arguments;
    const context = this;

    if (!inThrottle) {
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
      lastResult = func.apply(context, args);
    }

    return lastResult;
  };
}

function messagePickerFrame(id, content) {
  //console.log(content + " is Content " + id + "is ID");
  const targetOrigin = "chrome-extension://kdhjiaombocakfdmpbdebjaejaclaghh";
  saveButtonIframe.contentWindow.postMessage(
    {
      id,
      content,
    },
    "*"
  );
}
