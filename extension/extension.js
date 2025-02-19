const dragHandleOffsetX = 30;
const dragHandleOffsetY = 23;
const actionWindowOffsetX = 89;
const actionWindowOffsetY = 6;

let isPicking = false;
let isLoaded = false;
let isContentVisible = false;
let hasOpened = false;
let displayContentActivated = false;
let frameTop = window.innerHeight - 94;
let frameLeft = window.innerWidth - 350;
let overflow = false;
let lastPositionLeft = "0px";
let isDragging = false;

window.addEventListener(
  "message",
  async (e) => {
    console.log("MES " + e.data["id"]);
    if (e.data["id"] === "expandActions") {
      extensionActions.style.width = "252px";

      const { left } = extensionActions.getBoundingClientRect();

      if (left + 252 > window.innerWidth) {
        overflow = true;
        extensionActions.classList.add("overflow");

        lastFrameLeft = extensionActions.style.left;

        setTimeout(() => {
          extensionActions.style.left = window.innerWidth - 252 + "px";
        }, 100);

        setTimeout(() => {
          extensionActions.classList.remove("overflow");
        }, 100);
      }
    }
    if (e.data["id"] === "shrinkActions") {
      extensionActions.style.width = "100px";

      if (overflow) {
        extensionActions.classList.add("overflow");

        setTimeout(() => {
          extensionActions.style.left = lastFrameLeft;
        }, 100);

        setTimeout(() => {
          extensionActions.classList.remove("overflow");
        }, 100);
        overflow = false;
      }
    }
    if (e.data["id"] === "toggleContent") toggleMainWindow();

    if (e.data["id"] === "hideActions") {
      const url = window.location.host;
      await setExtensionInactive();
      await addSiteToInactiveList(url);
    }
    if (e.data["id"] === "finishedGeneration") {
      messageFrame("finishedGeneration", e.data.content);
      messageActionsFrame("finishedGeneration", e.data.content);
      if (!isContentVisible) {
        if (!frame.src) {
          frame.src = `${BASE_URL}/login`;
          frame.onload = initAccessToken;
        }
        setContentWindowVisible();
      }
    }
    if (e.data["id"] === "generating") {
      messageFrame("generating", e.data.content);
      messageActionsFrame("generating", e.data.content);
    }
    if (e.data["id"] === "replaceModel") {
      const { referenceImageURL, userImageB64 } = e.data.content;
      const imgTag = document.querySelector(`img[src='${referenceImageURL}']`);
      if (imgTag && userImageB64) {
        imgTag.src = userImageB64;
      }
    }
    if (e.data["id"] === "generationSuccess") {
      messageFrame("generationSuccess", e.data.content);
    }
    if (e.data["id"] === "startGeneration") {
      await handleStartGeneration(e);
    }

    if (e.data["id"] === "setStylarToken") {
      const token = e.data["content"]["value"];

      chrome.storage.local.set({
        token,
      });
    }
    if (e.data["id"] === "firstTimeUser") {
      chrome.storage.local.set({
        firstTimeUser: false,
      });
    }
    if (e.data["id"] === "logout") {
      chrome.storage.local.remove("token");
    }
    if (e.data["id"] === "setActiveCollection") {
      const activeCollection = e.data["content"]["value"];

      chrome.storage.local.set({
        activeCollection,
      });
    }
  },
  false
);

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.action === "displayStylarWindow") {
    const url = window.location.host;

    // only display by default if user hasn't closed the floating icon previously
    if (request.context === "initialLoad" && (await isSiteOnInactiveList(url)))
      return;

    setExtensionActive();
    await removeSiteFromInactiveList(url);

    // log when user visits a supported site
    if (request.context === "initialLoad")
      messageActionsFrame("visitedSupportedSite", url);
    else if (request.context === "manualEnable")
      messageActionsFrame("manualEnableOnSite", url);
  } else if (request.action === "openStylarWindow") {
    setExtensionActive();
    setContentWindowVisible();
  } else if (request.action === "alertUnsupportedSite") {
    alert(
      "Stylar is not compatible with this site yet - please check back at a later time."
    );
  }
});

// picker demo
const frame = document.createElement("iframe");
frame.id = "vto-content";
frame.src = BASE_URL;
frame.sandbox =
  "allow-same-origin allow-scripts allow-downloads allow-popups allow-forms";
document.body.appendChild(frame);
frame.onload = initAccessToken;
frame.allow = "clipboard-write";

const closeBtn = document.createElement("button");
closeBtn.id = "vto-close-btn";
closeBtn.onclick = toggleMainWindow;

const closeIcon = document.createElement("img");
const closeIconUrl = chrome.runtime.getURL("assets/img/close-icon.svg");
closeIcon.src = closeIconUrl;
closeBtn.appendChild(closeIcon);

const extensionActions = document.createElement("iframe");
extensionActions.id = "vto-actions";
extensionActions.src = `${BASE_URL}/extension-actions`;
extensionActions.sandbox =
  "allow-same-origin allow-scripts allow-downloads allow-popups allow-forms";
extensionActions.onmouseenter = showDragHandle;
extensionActions.onmouseleave = hideDragHandle;

const dragHandle = document.createElement("img");
dragHandle.id = "vto-drag-handle";
dragHandle.onmousedown = handleDragStart;
dragHandle.src = chrome.runtime.getURL("assets/img/grab-handle.svg");
dragHandle.style.right = actionWindowOffsetX + "px";
dragHandle.style.bottom = actionWindowOffsetY + "px";

const dragBoundingBox = document.createElement("div");
dragBoundingBox.id = "vto-drag-bounding-box";

setExtensionInactive();

if (!isLoaded) {
  document.body.appendChild(frame);
  document.body.appendChild(closeBtn);
  document.body.appendChild(dragHandle);
  document.body.appendChild(dragBoundingBox);
  document.body.appendChild(extensionActions);

  isLoaded = true;
}

async function initAccessToken() {
  const token = await chrome.storage.local.get("token");
  const activeCollection = await chrome.storage.local.get("activeCollection");
  if (token) {
    messageFrame("receiveStylarToken", token.token);
    messageFrame("receiveActiveCollection", activeCollection);
  }

  const bottomData = await chrome.storage.local.get("bottom");
  let bottomOffset = 17;
  if (bottomData.bottom) {
    bottomOffset = bottomData.bottom;
  }
  dragHandle.style.bottom = bottomOffset + "px";
  extensionActions.style.bottom = bottomOffset - actionWindowOffsetY + "px";

  const rightData = await chrome.storage.local.get("right");
  let rightOffset = 286;
  if (rightData.right) {
    rightOffset = rightData.right;
  }
  dragHandle.style.right = rightOffset + "px";
  extensionActions.style.right = rightOffset - actionWindowOffsetX + "px";

  const firstTimeUser = await chrome.storage.local.get("firstTimeUser");

  console.log(firstTimeUser.firstTimeUser);
  if (
    firstTimeUser.firstTimeUser === undefined ||
    firstTimeUser.firstTimeUser === true
  ) {
    messageActionsFrame("firstTimeUser");
  }
}

function setExtensionActive() {
  if (!frame.src) {
    frame.src = BASE_URL;
    frame.onload = initAccessToken;
  }
  if (!displayContentActivated) {
    displayContentActivated = true;
  }
  window.addEventListener("mouseover", handleMouseOver);

  setFloatingIconVisible();
}

async function setExtensionInactive() {
  frame.classList.remove("vto-open");
  closeBtn.classList.remove("vto-open");
  extensionActions.classList.remove("vto-open");

  setContentWindowHidden();
  setFloatingIconHidden();

  isContentVisible = false;
  window.removeEventListener("mouseover", handleMouseOver);
}

function setContentWindowVisible() {
  setFloatingIconVisible();
  frame.classList.add("vto-open");
  closeBtn.classList.add("vto-open");
  extensionActions.classList.add("vto-open");
  dragHandle.classList.add("vto-open");

  hasOpened = true;
  isContentVisible = true;

  // user has opened the content window at least once
  chrome.storage.local.set({
    firstTimeUser: false,
  });
}

function setContentWindowHidden() {
  frame.classList.remove("vto-open");
  closeBtn.classList.remove("vto-open");
  extensionActions.classList.remove("vto-open");
  dragHandle.classList.remove("vto-open");

  isContentVisible = false;
}

function setFloatingIconVisible() {
  extensionActions.classList.remove("hidden");
  dragHandle.classList.remove("hidden");
}

function setFloatingIconHidden() {
  extensionActions.classList.add("hidden");
  dragHandle.classList.add("hidden");
}

function toggleMainWindow() {
  if (isContentVisible) {
    setContentWindowHidden();
  } else {
    if (!frame.src) {
      frame.src = BASE_URL;
      frame.onload = initAccessToken;
    }
    setContentWindowVisible();
  }
}

// set extension to inactive by default for these sites
async function addSiteToInactiveList(url) {
  const disabledSites = await getDisabledSites(url);

  if (!disabledSites.includes(url)) {
    disabledSites.push(url);
    await chrome.storage.local.set({
      disabledSites: disabledSites,
    });
  }
}

async function removeSiteFromInactiveList(url) {
  const disabledSites = await getDisabledSites(url);

  if (disabledSites.includes(url)) {
    await chrome.storage.local.set({
      disabledSites: disabledSites.filter((s) => s !== url),
    });
  }
}

async function isSiteOnInactiveList(url) {
  return (await getDisabledSites()).includes(url);
}

async function getDisabledSites() {
  const data = await chrome.storage.local.get("disabledSites");
  return data.disabledSites || [];
}

function getAuthor(url) {
  let metaAuthor = document.querySelector('meta[name="author"]');
  let productAuthor = "";

  if (metaAuthor) {
    productAuthor = metaAuthor.getAttribute("content");
  } else {
    metaAuthor = document.querySelector('meta[property="og:site_name"]');
    if (metaAuthor) {
      productAuthor = metaAuthor.getAttribute("content");
    } else {
      metaAuthor = url.split("www.")[1]?.split(".")[0];

      if (metaAuthor) {
        productAuthor = `${metaAuthor[0]?.toUpperCase()}${metaAuthor?.slice(
          1
        )}`;
      }
    }
  }
  productAuthor = productAuthor.split(".com")[0];

  return productAuthor;
}

function processUrl(url) {
  if (!url) return "";
  if (url.startsWith("//")) return window.location.protocol + url;
  if (url.startsWith("/")) return window.location.origin + url;
  if (!url.startsWith("http")) return window.location.origin + '/' + url;

  return url;
}

async function handleStartGeneration(e) {
  setFloatingIconVisible();

  const image = document.createElement("img");
  image.id = "animatedImage";
  image.src = e.data.content.referenceImageURL;

  const { left, top } = saveButtonIframe.getBoundingClientRect();
  image.style.top = top + "px";
  image.style.left = left + "px";

  window.addEventListener(
    "message",
    (e) => {
      if (e.data["id"] === "setStylarToken") {
        chrome.storage.local.set({
          token: e.data["content"]["value"],
        });
      } else if (e.data["id"] === "enableCursorMode") {
        setContentWindowHidden();
      }
    },
    false
  );

  document.body.appendChild(image);

  function animateImage() {
    let top, left;
    if (extensionActions.classList.contains("vto-open")) {
      const rect = frame.getBoundingClientRect();
      top = rect.bottom;
      left = rect.left;
    } else {
      const rect = extensionActions.getBoundingClientRect();
      top = rect.top;
      left = rect.left;
    }

    image.style.top = top + "px";
    image.style.left = left + "px";
    image.style.opacity = "0";

    setTimeout(() => document.body.removeChild(image), 1000);
  }

  // Trigger the animation after a short delay
  image.addEventListener("load", () => {
    setTimeout(animateImage, 100); // 1 second delay before animation starts
  });
}

function messageFrame(id, content) {
  frame.contentWindow.postMessage(
    {
      id,
      content,
    },
    "*"
  );
}

function messageActionsFrame(id, content) {
  extensionActions.contentWindow.postMessage(
    {
      id,
      content,
    },
    "*"
  );
}

initAccessToken();

// dragging functionality

function handleDragStart(evt) {
  if (isDragging) return;

  evt.stopPropagation();
  evt.preventDefault();

  document.addEventListener("mouseup", handleDragEnd);
  document.addEventListener("mousemove", handlePageMousemove);
  isDragging = true;
  extensionActions.style.pointerEvents = "none";
  dragBoundingBox.style.opacity = "1";
  dragBoundingBox.style.display = "block";
}

async function handleDragEnd() {
  document.removeEventListener("mouseup", handleDragEnd);
  document.removeEventListener("mousemove", handlePageMousemove);
  isDragging = false;
  extensionActions.style.pointerEvents = "unset";
  dragBoundingBox.style.opacity = "0";
  dragBoundingBox.style.display = "none";
}

function handlePageMousemove(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  let clientX = Math.max(
    90,
    Math.min(window.innerWidth - evt.clientX, 500 + 30)
  );
  let clientY = Math.max(
    35,
    Math.min(window.innerHeight - evt.clientY, 500 - 25)
  );

  const actionRight = clientX - dragHandleOffsetX - actionWindowOffsetX;
  const actionBottom = clientY - dragHandleOffsetY - actionWindowOffsetY;

  extensionActions.style.right = actionRight + "px";
  extensionActions.style.bottom = actionBottom + "px";

  const dragHandleRight = clientX - dragHandleOffsetX;
  const dragHandleBottom = clientY - dragHandleOffsetY;
  dragHandle.style.right = dragHandleRight + "px";
  dragHandle.style.bottom = dragHandleBottom + "px";

  chrome.storage.local.set({
    right: dragHandleRight,
    bottom: dragHandleBottom,
  });
}

function showDragHandle() {
  dragHandle.classList.add("vto-drag-handle-hover");
}

function hideDragHandle() {
  dragHandle.classList.remove("vto-drag-handle-hover");
}
