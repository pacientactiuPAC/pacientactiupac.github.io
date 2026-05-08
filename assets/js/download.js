function currentLang() {
  return localStorage.getItem("lang") || "ca";
}

function valueOf(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("tester-request-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = valueOf("req-name");
    const country = valueOf("req-country");
    const email = valueOf("req-email");
    const profileEl = document.getElementById("req-profile");
    const profile = profileEl ? profileEl.value : "";
    const profileText = profileEl ? profileEl.options[profileEl.selectedIndex].text : "";
    const comment = valueOf("req-comment");

    if (!country || !email || !profile) {
      form.reportValidity();
      return;
    }

    if (typeof trackTesterRequest === "function") {
      trackTesterRequest(profile, country);
    }

    const subject = t("download_mail_subject");
    const intro = t("download_mail_intro");
    const body = `${intro}` +
      `Nom / entitat: ${name || "-"}
` +
      `País: ${country}
` +
      `Correu Google Play: ${email}
` +
      `Perfil: ${profileText} (${profile})
` +
      `Idioma web: ${currentLang()}
` +
      `Comentari: ${comment || "-"}
`;

    const mailto = `mailto:support@pacientactiu.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
});
