const IFRAME_URL = `${BASE_URL}/cutout-mode`

let currSize = 300;
const sizeInc = 10;

if (document.getElementById("stylarCutout")) {
  // enableCutout()
  toggleCutout();
} else {
  initCutout();
}

function toggleCutout() {
  let frame = document.getElementById("stylarCutout");
  if (frame.style.display !== "none") {
    frame.style.display = "none";
  } else {
    frame.style.display = "initial";
  }
}
function enableCutout() {
  let frame = document.getElementById("stylarCutout");
  let stylarFrame = document.getElementById("stylarFrame");
  // image.src = baseImage;
  // image.style.maskImage = `url("${mask}")`;
  window.focus();

  document.onkeydown = (event) => {
    switch (event.key) {
      case "1":
        messageFrame("cutoutAction", {
          action: "showTop",
        });
        break;
      case "2":
        messageFrame("cutoutAction", {
          action: "showBottom",
        });
        break;
      case "[":
        messageFrame("cutoutAction", {
          action: "prevItem",
        });
        break;
      case "]":
        messageFrame("cutoutAction", {
          action: "nextItem",
        });
        break;
      case "-":
        currSize -= sizeInc;
        break;
      case "=":
      case "+":
        currSize += sizeInc;
        break;
      case "Escape":
      case "\\":
        messageFrame("cutoutAction", {
          action: "disableCursorMode",
        });
        disableCutout();
        break;
      case "?":
        // event.preventDefault();
        messageFrame("cutoutAction", {
          action: "toggleShortcuts",
        });
        break;
    }
    frame.style.height = currSize * 1.93 + "px";
    frame.style.width = currSize + "px";
  };
  function messageFrame(id, content) {
    stylarFrame.contentWindow.postMessage(
      {
        id,
        content,
      },
      "*"
    );
  }
  frame.style.display = "initial";
}
function disableCutout() {
  document.onkeydown = null;
  let frame = document.getElementById("stylarCutout");
  frame.style.display = "none";
}
function initCutout() {
  window.addEventListener(
    "message",
    (e) => {
      if (e.data["id"] === "enableCursorMode") enableCutout();
      if (e.data["id"] === "disableCursorMode") disableCutout();
    },
    false
  );

  // init cutout
  let cutoutContainer = document.createElement("div");
  let cutoutOverlay = document.createElement("div");
  let cutoutFrame = document.createElement("iframe");

  cutoutOverlay.style.width = "100%";
  cutoutOverlay.style.height = "100%";
  cutoutOverlay.style.position = "absolute";

  cutoutContainer.style.display = "none";

  cutoutFrame.style.width = "100%";
  cutoutFrame.style.height = "100%";
  cutoutFrame.style.colorScheme = "none";
  // cutoutFrame.src = chrome.runtime.getURL("assets/iframe-example.html");
  cutoutFrame.src = IFRAME_URL;
  // cutoutFrame.src = chrome.runtime.getURL("assets/img/0001.png");
  // cutoutFrame.style.maskImage = `url("${chrome.runtime.getURL("assets/img/mask.png")}")`;

  cutoutFrame.style.border = "none";

  cutoutContainer.id = "stylarCutout";
  cutoutFrame.id = "stylarFrame";
  cutoutContainer.style.position = "fixed";
  cutoutContainer.style.left = "0";
  cutoutContainer.style.top = "0";
  cutoutContainer.style.zIndex = "99999999999999";
  cutoutContainer.style.height = currSize * 1.93 + "px";
  cutoutContainer.style.width = currSize + "px";
  cutoutContainer.appendChild(cutoutOverlay);
  cutoutContainer.appendChild(cutoutFrame);
  document.body.appendChild(cutoutContainer);

  // document.onmousemove = (event) => {
  //   cutoutContainer.style.left =
  //     event.clientX - cutoutFrame.offsetWidth / 2 + "px";
  //   cutoutContainer.style.top = event.clientY + "px";
  // };
}
