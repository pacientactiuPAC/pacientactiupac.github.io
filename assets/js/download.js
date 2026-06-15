const GOOGLE_PLAY_WEB_URL = "https://play.google.com/apps/testing/com.pacientactiu.controldesalut";
const GOOGLE_PLAY_ANDROID_URL = "https://play.google.com/store/apps/details?id=com.pacientactiu.controldesalut";

function trackDownloadPage() {
  if (typeof gtag === "function") {
    gtag("event", "download_page_view", {
      page_location: window.location.href,
      page_title: document.title
    });
  }
}

function trackPlayStoreClick(target = "web") {
  const linkUrl = target === "android" ? GOOGLE_PLAY_ANDROID_URL : GOOGLE_PLAY_WEB_URL;

  if (typeof gtag === "function") {
    gtag("event", "play_store_click", {
      source: "download_page",
      target,
      link_url: linkUrl
    });
  }
}

function trackFeedbackRequestStart() {
  const profileEl = document.querySelector('select[name="profile"]');

  if (typeof gtag === "function") {
    gtag("event", "feedback_form_start", {
      source: "download_page",
      method: "formsubmit",
      profile: profileEl ? profileEl.value : ""
    });
  }
}
