document.addEventListener("DOMContentLoaded", () => {

  const terms = {
    prom: {
      title: "PROM",
      text: "Patient-Reported Outcome Measures: dades aportades directament pel pacient sobre la seva evolució, símptomes, qualitat de vida o recuperació."
    },
    iief5: {
      title: "IIEF-5",
      text: "Qüestionari abreujat utilitzat en l’àmbit clínic per valorar la funció erèctil."
    },
    fsfi: {
      title: "FSFI",
      text: "Female Sexual Function Index: qüestionari utilitzat per valorar diferents dimensions de la funció sexual femenina."
    },
    bristol: {
      title: "Escala de Bristol",
      text: "Escala que classifica les femtes en set tipus segons forma i consistència."
    },
    "diari-miccional": {
      title: "Diari miccional",
      text: "Registre estructurat d’ingesta, miccions, volums, pèrdues i incidències urinàries."
    },
    "sol-pelvia": {
      title: "Sòl pelvià",
      text: "Conjunt de músculs que ajuden al control urinari, intestinal i a la funció sexual."
    },
    kegel: {
      title: "Exercicis de Kegel",
      text: "Exercicis de contracció del sòl pelvià destinats a enfortir els músculs que intervenen en el control urinari, intestinal i en la funció sexual."
    }
  };

  const modal = document.getElementById("term-modal");
  const title = document.getElementById("term-title");
  const text = document.getElementById("term-text");
  const closeBtn = document.querySelector(".term-close");

  if (!modal) return; // evita errors en pàgines sense modal

  document.querySelectorAll(".term-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      const term = terms[btn.dataset.term];
      if (!term) return;

      title.textContent = term.title;
      text.textContent = term.text;
      modal.hidden = false;
    });
  });

  closeBtn.addEventListener("click", () => modal.hidden = true);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.hidden = true;
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.hidden = true;
  });

});