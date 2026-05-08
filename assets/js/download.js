function trackDownloadPage() {
  if (typeof gtag === "function") {
    gtag("event", "download_page_view", {
      page_location: window.location.href,
      page_title: document.title
    });
  }
}

function trackTesterRequestStart() {
  const countryEl = document.querySelector('select[name="country"]');
  const profileEl = document.querySelector('select[name="profile"]');
  const otherCountryEl = document.getElementById("other-country");

  const country =
    countryEl && countryEl.value === "OTHER" && otherCountryEl
      ? `OTHER: ${otherCountryEl.value.trim()}`
      : countryEl
        ? countryEl.value
        : "";

  if (typeof gtag === "function") {
    gtag("event", "tester_request_start", {
      source: "download_page",
      method: "formsubmit",
      country: country,
      profile: profileEl ? profileEl.value : ""
    });
  }
}

function setupDownloadFormState() {
  const form = document.querySelector(".download-form");
  const button = document.querySelector(".download-submit");

  if (!form || !button) return;

  function updateSubmitState() {
    const isValid = form.checkValidity();

    button.disabled = !isValid;
    button.classList.toggle("is-ready", isValid);
  }

  form.addEventListener("input", updateSubmitState);
  form.addEventListener("change", updateSubmitState);

  updateSubmitState();
}

function setupOtherCountryField() {
  const countrySelect = document.querySelector('select[name="country"]');
  const otherWrapper = document.getElementById("other-country-wrapper");
  const otherInput = document.getElementById("other-country");

  if (!countrySelect || !otherWrapper || !otherInput) {
    console.warn("Other country field not initialized");
    return;
  }

  function updateOtherCountry() {
    const isOther = countrySelect.value === "OTHER";

    otherWrapper.hidden = !isOther;
    otherWrapper.style.display = isOther ? "block" : "none";

    otherInput.required = isOther;

    if (!isOther) {
      otherInput.value = "";
    }
  }

  countrySelect.addEventListener("change", updateOtherCountry);
  updateOtherCountry();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setupOtherCountryField();
    setupDownloadFormState();
  });
} else {
  setupOtherCountryField();
  setupDownloadFormState();
}