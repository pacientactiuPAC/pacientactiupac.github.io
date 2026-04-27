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