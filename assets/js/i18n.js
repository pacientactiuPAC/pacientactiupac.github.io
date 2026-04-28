let currentTranslations = {};

async function loadTranslations(lang) {
  const response = await fetch(`/assets/i18n/${lang}.json`);

  if (!response.ok) {
    console.error(`No s'ha pogut carregar l'idioma: ${lang}`);
    return {};
  }

  return await response.json();
}

function applyLoadedTranslations(translations) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key]) {
      el.innerHTML = translations[key];
    }
  });
}

async function applyTranslations(lang) {
  currentTranslations = await loadTranslations(lang);
  applyLoadedTranslations(currentTranslations);
}

function t(key) {
  return currentTranslations[key] || key;
}

function initLanguageMenu() {
  const btn = document.querySelector(".lang-btn");
  const menu = document.querySelector(".lang-dropdown");

  if (!btn || !menu) return;

  btn.onclick = (e) => {
    e.stopPropagation();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  };

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".lang-menu")) {
      menu.style.display = "none";
    }
  });

  document.querySelectorAll(".lang-dropdown a").forEach(link => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();

      const newLang = link.getAttribute("data-lang");
      if (!newLang) return;

      await setLanguage(newLang);

      menu.style.display = "none";
    });
  });
}

async function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  await applyTranslations(lang);

  const langLabel = document.querySelector(".lang-btn span");
  if (langLabel) langLabel.textContent = lang.toUpperCase();

  if (typeof initTermLinks === "function") {
    initTermLinks();
  }
}