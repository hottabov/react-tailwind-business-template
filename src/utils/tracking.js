const STORAGE_KEYS = {
  firstTouch: "mpp:first-touch",
  lastTouch: "mpp:last-touch",
};

const TRACKING_QUERY_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "fbclid",
  "msclkid",
  "ttclid",
];

function safeJsonParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function getWindowValue() {
  return typeof window !== "undefined" ? window : null;
}

function buildSnapshot() {
  const currentWindow = getWindowValue();
  if (!currentWindow) return {};

  const { location, navigator, document, screen } = currentWindow;
  const params = new URLSearchParams(location.search);
  const queryTracking = TRACKING_QUERY_KEYS.reduce((acc, key) => {
    const value = params.get(key);
    if (value) acc[key] = value;
    return acc;
  }, {});

  return {
    ...queryTracking,
    landing_page: `${location.pathname}${location.search}`,
    page_url: location.href,
    page_path: location.pathname,
    referrer: document.referrer || "",
    page_title: document.title || "",
    language: navigator.language || "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    screen_size: screen ? `${screen.width}x${screen.height}` : "",
    captured_at: new Date().toISOString(),
  };
}

function readStorageSnapshot(key) {
  const currentWindow = getWindowValue();
  if (!currentWindow) return null;

  return safeJsonParse(currentWindow.localStorage.getItem(key));
}

function writeStorageSnapshot(key, value) {
  const currentWindow = getWindowValue();
  if (!currentWindow) return;

  currentWindow.localStorage.setItem(key, JSON.stringify(value));
}

export function getTrackingFields() {
  const currentWindow = getWindowValue();
  if (!currentWindow) return {};

  const currentSnapshot = buildSnapshot();
  const existingFirstTouch = readStorageSnapshot(STORAGE_KEYS.firstTouch);
  const firstTouch = existingFirstTouch || currentSnapshot;

  writeStorageSnapshot(STORAGE_KEYS.firstTouch, firstTouch);
  writeStorageSnapshot(STORAGE_KEYS.lastTouch, currentSnapshot);

  return {
    first_landing_page: firstTouch.landing_page || "",
    first_page_url: firstTouch.page_url || "",
    first_referrer: firstTouch.referrer || "",
    first_page_title: firstTouch.page_title || "",
    first_captured_at: firstTouch.captured_at || "",
    first_utm_source: firstTouch.utm_source || "",
    first_utm_medium: firstTouch.utm_medium || "",
    first_utm_campaign: firstTouch.utm_campaign || "",
    first_utm_term: firstTouch.utm_term || "",
    first_utm_content: firstTouch.utm_content || "",
    first_utm_id: firstTouch.utm_id || "",
    first_gclid: firstTouch.gclid || "",
    first_fbclid: firstTouch.fbclid || "",
    first_msclkid: firstTouch.msclkid || "",
    first_ttclid: firstTouch.ttclid || "",
    last_landing_page: currentSnapshot.landing_page || "",
    last_page_url: currentSnapshot.page_url || "",
    last_page_path: currentSnapshot.page_path || "",
    last_referrer: currentSnapshot.referrer || "",
    last_page_title: currentSnapshot.page_title || "",
    last_captured_at: currentSnapshot.captured_at || "",
    last_utm_source: currentSnapshot.utm_source || "",
    last_utm_medium: currentSnapshot.utm_medium || "",
    last_utm_campaign: currentSnapshot.utm_campaign || "",
    last_utm_term: currentSnapshot.utm_term || "",
    last_utm_content: currentSnapshot.utm_content || "",
    last_utm_id: currentSnapshot.utm_id || "",
    last_gclid: currentSnapshot.gclid || "",
    last_fbclid: currentSnapshot.fbclid || "",
    last_msclkid: currentSnapshot.msclkid || "",
    last_ttclid: currentSnapshot.ttclid || "",
    user_language: currentSnapshot.language || "",
    user_timezone: currentSnapshot.timezone || "",
    screen_size: currentSnapshot.screen_size || "",
  };
}

export const netlifyQuoteFormFields = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "message",
  "form_context",
  "subject",
  "first_landing_page",
  "first_page_url",
  "first_referrer",
  "first_page_title",
  "first_captured_at",
  "first_utm_source",
  "first_utm_medium",
  "first_utm_campaign",
  "first_utm_term",
  "first_utm_content",
  "first_utm_id",
  "first_gclid",
  "first_fbclid",
  "first_msclkid",
  "first_ttclid",
  "last_landing_page",
  "last_page_url",
  "last_page_path",
  "last_referrer",
  "last_page_title",
  "last_captured_at",
  "last_utm_source",
  "last_utm_medium",
  "last_utm_campaign",
  "last_utm_term",
  "last_utm_content",
  "last_utm_id",
  "last_gclid",
  "last_fbclid",
  "last_msclkid",
  "last_ttclid",
  "user_language",
  "user_timezone",
  "screen_size",
];
