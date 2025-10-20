// i18n.js - Language utility functions
import { translations } from './translations';

// Get current language from localStorage or default to 'az'
export function getCurrentLanguage() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'az';
  }
  return 'az';
}

// Set current language
export function setLanguage(lang) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
    updatePageLanguage(lang);
  }
}

// Get translation for a specific key
export function t(key, lang = null) {
  const currentLang = lang || getCurrentLanguage();
  return translations?.[currentLang]?.[key] || key;
}

// Update all elements with data-i18n attribute
export function updatePageLanguage(lang) {
  if (typeof document === 'undefined') return;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (key) {
      const translation = t(key, lang);
      if (translation) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.setAttribute('placeholder', translation);
        } else {
          element.textContent = translation;
        }
      }
    }
  });

  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', lang);
}

// Initialize language on page load
export function initLanguage() {
  if (typeof document === 'undefined') return;

  const currentLang = getCurrentLanguage();
  updatePageLanguage(currentLang);

  // Set active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Make translations available globally
if (typeof window !== 'undefined') {
  window.__translations__ = translations;
  window.i18n = {
    t,
    setLanguage,
    getCurrentLanguage,
    updatePageLanguage,
    initLanguage
  };
}
