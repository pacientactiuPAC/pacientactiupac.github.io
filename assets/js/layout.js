function renderHeader({ active = "home", basePath = ".", subtitleKey = null } = {}) {
  const header = document.getElementById("site-header");
  if (!header) return;

  header.innerHTML = `
    <header class="site-header">
      <div class="header-inner">

        <a class="brand" href="${basePath}/index.html">
          <img src="${basePath}/../assets/img/icons/pac.png" alt="PAC">
          <span class="brand-text-wrap">
            <span class="brand-text">
              <span data-i18n="brand_name">PACient Actiu (PAC)</span><sup>©</sup>
            </span>
           ${
              subtitleKey
                ? `<span class="brand-subtitle" data-i18n="${subtitleKey}"></span>`
                : ""
            }
          </span>
        </a>

        <nav class="main-nav">
          <a href="${basePath}/index.html"
             class="${active === "home" ? "active" : ""}"
             data-i18n="menu_home">Inici</a>

          <a href="${basePath}/privacitat.html"
             class="${active === "privacy" ? "active" : ""}"
             data-i18n="menu_privacy">Privacitat</a>

          <a href="${basePath}/disclaimer.html"
             class="${active === "legal" ? "active" : ""}"
             data-i18n="menu_legal">Avís legal</a>
        </nav>

        <div class="lang-menu">
          <button class="lang-btn" aria-label="Canviar idioma">
            <svg class="lang-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20Zm0 2c1.1 1.3 1.8 3 2.1 5H9.9c.3-2 1-3.7 2.1-5Zm-4.1.9A12.5 12.5 0 0 0 6.9 9H4.3a8 8 0 0 1 3.6-4.1ZM4 12c0-.3 0-.7.1-1h2.6a14.8 14.8 0 0 0 0 2H4.1A8.2 8.2 0 0 1 4 12Zm.3 3h2.6c.2 1.5.5 2.9 1 4.1A8 8 0 0 1 4.3 15Zm7.7 5c-1.1-1.3-1.8-3-2.1-5h4.2c-.3 2-1 3.7-2.1 5Zm2.4-7H9.6a12.7 12.7 0 0 1 0-2h4.8a12.7 12.7 0 0 1 0 2Zm1.7 6.1c.5-1.2.8-2.6 1-4.1h2.6a8 8 0 0 1-3.6 4.1ZM17.3 13a14.8 14.8 0 0 0 0-2h2.6a8.2 8.2 0 0 1 0 2h-2.6Zm-.2-4c-.2-1.5-.5-2.9-1-4.1A8 8 0 0 1 19.7 9h-2.6Z"/>
            </svg>
            <span>CA</span>
          </button>

          <div class="lang-dropdown">
            <a href="#" data-lang="ca">Català</a>
            <a href="#" data-lang="es">Español</a>
            <a href="#" data-lang="en">English</a>
            <a href="#" data-lang="eu">Euskara</a>
          </div>
        </div>

      </div>
    </header>
  `;
}

function renderFooter({ basePath = "." } = {}) {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div>
        PACient Actiu (PAC)<sup>©</sup>
      </div>

      <div class="contact">
        <span data-i18n="footer_contact">Contacte:</span>
        <a href="mailto:pacientactiu.app@gmail.com">
          pacientactiu.app@gmail.com
        </a>
      </div>

      <div class="contact-note" data-i18n="footer_contact_note">
        Pots enviar suggeriments, informar de problemes o fer consultes.
      </div>
    </footer>
  `;
}

function renderLayout(options = {}) {
  const config = {
    active: options.active || "home",
    basePath: options.basePath || ".",
    subtitleKey: options.subtitleKey || null
  };

  renderHeader(config);
  renderFooter(config);

  initLanguageMenu();

  const lang = localStorage.getItem("lang") || "ca";
  setLanguage(lang);
}