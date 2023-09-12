import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Define the available languages for your application
const availableLanguages = ["en", "hi", "sa"];

// Define the language detection options
const option = {
  order: ["navigator", "htmlTag", "path", "subdomain"],
  checkWhiteList: true,
};

// Initialize i18n with the specified configuration
i18n
  .use(Backend) // Use i18next-http-backend for loading translations
  .use(LanguageDetector) // Use i18next-browser-languagedetector for language detection
  .use(initReactI18next) // Initialize i18next for React

  // Initialize i18n with configuration options
  .init({
    fallbackLng: "en", // Fallback language if the detected language is not available
    debug: true, // Enable debugging mode
    whiteList: availableLanguages, // List of available languages
    detection: option, // Language detection options
    interpolation: {
      escapeValue: false, // Disable escaping of HTML entities in translations
    },
  });

// Export the configured i18n instance for use in your application
export default i18n;
