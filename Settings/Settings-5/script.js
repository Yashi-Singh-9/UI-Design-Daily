document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const showMoreButton = document.querySelector(".show-more");
    const cancelButton = document.querySelector(".cancel");
    const saveButton = document.querySelector(".save");
    const currentLanguageInput = document.getElementById("current-language");
    const languageOptions = document.querySelectorAll('input[name="language"]');
    const languageForm = document.getElementById("language-form");
  
    // Container for messages
    const showMoreMessageContainer = document.createElement("div");
    showMoreMessageContainer.className = "show-more-message";
    showMoreButton.insertAdjacentElement("afterend", showMoreMessageContainer);
  
    // Language-specific messages
    const languageContent = {
      Deutsch: {
        header: "In welcher Sprache möchten Sie unser Produkt verwenden?",
        menu: [
          "Sucheinstellungen",
          "Suchergebnisse",
          "Sprachen",
          "Erscheinungsbild",
          "Hilfe"
        ],
        currentResults: "Derzeit werden Suchergebnisse angezeigt in:"
      },
      hrvatski: {
        header: "Na kojem jeziku želite koristiti naš proizvod?",
        menu: [
          "Postavke pretraživanja",
          "Rezultati pretraživanja",
          "Jezici",
          "Izgled",
          "Pomoć"
        ],
        currentResults: "Trenutno prikazujemo rezultate pretraživanja na:"
      },
      English: {
        header: "In what language would you like to use our product?",
        menu: [
          "Search settings",
          "Search results",
          "Languages",
          "Appearance",
          "Help"
        ],
        currentResults: "Currently showing search results in:"
      },
      Nederlands: {
        header: "In welke taal wilt u ons product gebruiken?",
        menu: [
          "Zoekinstellingen",
          "Zoekresultaten",
          "Talen",
          "Uiterlijk",
          "Help"
        ],
        currentResults: "Momenteel zoekresultaten weergegeven in:"
      },
      español: {
        header: "¿En qué idioma le gustaría usar nuestro producto?",
        menu: [
          "Configuración de búsqueda",
          "Resultados de búsqueda",
          "Idiomas",
          "Apariencia",
          "Ayuda"
        ],
        currentResults: "Actualmente mostrando resultados de búsqueda en:"
      },
      polski: {
        header: "W jakim języku chciałbyś korzystać z naszego produktu?",
        menu: [
          "Ustawienia wyszukiwania",
          "Wyniki wyszukiwania",
          "Języki",
          "Wygląd",
          "Pomoc"
        ],
        currentResults: "Obecnie wyświetlane wyniki wyszukiwania w języku:"
      },
      Italiano: {
        header: "In quale lingua desideri utilizzare il nostro prodotto?",
        menu: [
          "Impostazioni di ricerca",
          "Risultati di ricerca",
          "Lingue",
          "Aspetto",
          "Aiuto"
        ],
        currentResults: "Attualmente mostrando risultati di ricerca in:"
      },
      "português (Brasil)": {
        header: "Em que idioma você gostaria de usar nosso produto?",
        menu: [
          "Configurações de pesquisa",
          "Resultados de pesquisa",
          "Idiomas",
          "Aparência",
          "Ajuda"
        ],
        currentResults: "Atualmente mostrando resultados de pesquisa em:"
      }
    };
  
    // Update the UI based on language selection
    languageOptions.forEach((option) => {
      option.addEventListener("change", (event) => {
        const selectedLanguage = event.target.value;
        currentLanguageInput.value = selectedLanguage;
        const content =
          languageContent[selectedLanguage] || languageContent["English"];
  
        // Update header
        const header = document.querySelector(".menu-right h3");
        header.textContent = content.header;
  
        // Update menu
        const menuItems = document.querySelectorAll(".menu-left span");
        content.menu.forEach((text, index) => {
          if (menuItems[index]) {
            menuItems[index].textContent = text;
          }
        });
  
        // Update current results text
        const currentResultsLabel = document.querySelector(
          ".current-language span"
        );
        currentResultsLabel.textContent = content.currentResults;
      });
    });
  
    // Cancel button functionality
    cancelButton.addEventListener("click", () => {
      const defaultLanguage = "English"; // Default language
      currentLanguageInput.value = defaultLanguage;
      document.querySelector(`input[value="${defaultLanguage}"]`).checked = true;
      const content = languageContent[defaultLanguage];
  
      // Reset header
      const header = document.querySelector(".menu-right h3");
      header.textContent = content.header;
  
      // Reset menu
      const menuItems = document.querySelectorAll(".menu-left span");
      content.menu.forEach((text, index) => {
        if (menuItems[index]) {
          menuItems[index].textContent = text;
        }
      });
  
      // Reset current results text
      const currentResultsLabel = document.querySelector(
        ".current-language span"
      );
      currentResultsLabel.textContent = content.currentResults;
    });
  
    // Save button functionality
    saveButton.addEventListener("click", () => {
      const selectedLanguage = currentLanguageInput.value;
      alert(`Settings saved! Selected language: ${selectedLanguage}`);
    });
  
    // Show More button functionality
    showMoreButton.addEventListener("click", () => {
      showMoreMessageContainer.innerHTML =
        "<p>More language options will be available soon!</p>";
    });
  });
  