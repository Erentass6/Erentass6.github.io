const languageButton = document.querySelector(".language-toggle");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const themeButton = document.querySelector(".theme-toggle");

function setTheme(theme, persist = true) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeButton.setAttribute("aria-pressed", String(isDark));
  const isTurkish = document.documentElement.lang === "tr";
  const label = isTurkish
    ? (isDark ? "Açık temayı etkinleştir" : "Koyu temayı etkinleştir")
    : (isDark ? "Enable light mode" : "Enable dark mode");
  themeButton.setAttribute("aria-label", label);
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#111613" : "#f5f3ef";

  if (persist) {
    try {
      localStorage.setItem("eren-portfolio-theme", isDark ? "dark" : "light");
    } catch {
      // Theme changes still work for this visit when browser storage is unavailable.
    }
  }
}

setTheme(document.documentElement.dataset.theme || "light", false);
themeButton.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

function setLanguage(language) {
  const isTurkish = language === "tr";
  document.documentElement.lang = language;

  document.querySelectorAll("[data-en][data-tr]").forEach((element) => {
    element.innerHTML = isTurkish ? element.dataset.tr : element.dataset.en;
  });

  document.querySelectorAll("[data-en-aria][data-tr-aria]").forEach((element) => {
    element.setAttribute(
      "aria-label",
      isTurkish ? element.dataset.trAria : element.dataset.enAria,
    );
  });

  languageButton.textContent = isTurkish ? "EN" : "TR";
  languageButton.setAttribute(
    "aria-label",
    isTurkish ? "Dili İngilizce yap" : "Dili Türkçe yap",
  );
  setTheme(document.documentElement.dataset.theme || "light", false);

  try {
    localStorage.setItem("eren-portfolio-language", language);
  } catch {
    // The page still works when browser storage is unavailable.
  }
}

languageButton.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "en" ? "tr" : "en");
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  });
});

let preferredLanguage = "en";
try {
  preferredLanguage = localStorage.getItem("eren-portfolio-language") || "en";
} catch {
  // English is the default when browser storage is unavailable.
}
setLanguage(preferredLanguage === "tr" ? "tr" : "en");
