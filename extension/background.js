let urlSet = new Set();
let unsupportedUrlSet = new Set();

chrome.action.onClicked.addListener(async (tab) => {
  const url = new URL(tab.url).host;
  const cleanUrl = getCleanUrl(url)

  console.log(url)
  console.log(cleanUrl)
  if (unsupportedUrlSet.has(url) || unsupportedUrlSet.has(cleanUrl)) {
    await chrome.tabs.sendMessage(tab.id, {
      action: "alertUnsupportedSite",
    });
  } else {
    try {
      await chrome.tabs.sendMessage(tab.id, {
        action: "displayStylarWindow",
        context: "manualEnable",
      });
    } catch (e) {
      console.log(e);
    }
  }
});

// chrome.runtime.onInstalled.addListener(async (object) => {
//   await fetchUrlSet();
//   if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({ url: "https://stylar.com/new-user-onboarding" });
//   }
// });

chrome.runtime.onStartup.addListener(async () => {
  await fetchUrlSet();
  // clear disabled sites that user have set that session
  await chrome.storage.local.set({
    disabledSites: [],
  });
});

chrome.webNavigation.onCompleted.addListener(async (details) => {
  if (details.frameType !== "outermost_frame") return;

  await checkUrl(details);
});

chrome.webNavigation.onHistoryStateUpdated.addListener(async (details) => {
  if (details.frameType !== "outermost_frame") return;

  await checkUrl(details);
});

async function checkUrl(details) {
  if (!urlSet || urlSet.size === 0) await fetchUrlSet();

  const url = new URL(details.url).host;
  const cleanUrl = getCleanUrl(url)

  try {
    if (!unsupportedUrlSet.has(url) && !unsupportedUrlSet.has(cleanUrl) && (urlSet.has(url) || urlSet.has(cleanUrl))) {
      await chrome.tabs.sendMessage(details.tabId, {
        action: "displayStylarWindow",
        context: "initialLoad",
      });
    }
  } catch (e) {}
}

function getCleanUrl(url) {
  const cleanUrl = url
    .replace("www.", "")
    .replace("www2.", "")
    .replace("www1.", "");
  return cleanUrl;
}

async function fetchUrlSet() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbpqH4PW6LjKmMn7UGbQuDrd0-dtj0Zs35HZdXVeM3R6hdXr6h0crEyDU4urovxEskFhiYhO8RXoIa/pub?gid=1872047530&single=true&output=csv";
  const text = await fetch(url).then((response) => response.text());
  urlSet = new Set(text.split("\r\n"));

  const unsupportedUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbpqH4PW6LjKmMn7UGbQuDrd0-dtj0Zs35HZdXVeM3R6hdXr6h0crEyDU4urovxEskFhiYhO8RXoIa/pub?gid=1200063546&single=true&output=csv";
  const utext = await fetch(unsupportedUrl).then((response) => response.text());
  unsupportedUrlSet = new Set(utext.split("\r\n"));
}
