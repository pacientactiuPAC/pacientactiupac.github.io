// assets/js/analytics.js
const GA_ID = "G-KSJEFLT3ZZ";

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

(function loadGoogleAnalytics() {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", GA_ID, {
    anonymize_ip: true
  });
})();

function trackManualModule(moduleName) {
  gtag("event", "manual_module_view", {
    module_name: moduleName,
    page_location: window.location.href,
    page_title: document.title
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-ga-module]").forEach((link) => {
    link.addEventListener("click", () => {
      gtag("event", "manual_module_click", {
        module_name: link.dataset.gaModule,
        link_url: link.href
      });
    });
  });
});

function trackAppModule(moduleName) {
  gtag("event", "app_module_view", {
    module_name: moduleName,
    page_location: window.location.href,
    page_title: document.title
  });
}

function trackDownloadPage() {
  gtag("event", "download_page_view", {
    page_location: window.location.href,
    page_title: document.title
  });
}

function trackTesterRequest(profile, country) {
  gtag("event", "tester_request", {
    profile: profile || "unknown",
    country: country || "unknown",
    page_location: window.location.href
  });
}
