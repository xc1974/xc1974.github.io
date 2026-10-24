(() => {
  'use strict';
  const root = document.documentElement;
  const languageButton = document.querySelector('[data-language]');
  const menu = document.querySelector('.mobile-menu');
  const feedback = document.querySelector('.copy-feedback');
  // Keep the authored Chinese markup; English strings are always inserted as text.
  const translations = [...document.querySelectorAll('[data-en]')].map(element => ({element, zh: element.innerHTML, en: element.dataset.en.replaceAll('\\n', '\n')}));
  const attributes = ['aria-label', 'alt'].flatMap(attribute => [...document.querySelectorAll('[data-en-' + attribute + ']')].map(element => ({element, attribute, zh: element.getAttribute(attribute), en: element.getAttribute('data-en-' + attribute)})));
  let language = 'zh';
  let copyTimer;
  function readPreference() {
    try { return localStorage.getItem('xc11-language'); } catch { return null; }
  }
  function setLanguage(next, persist = false) {
    language = next === 'en' ? 'en' : 'zh';
    root.lang = language === 'en' ? 'en' : 'zh-Hant';
    translations.forEach(item => {
      if (language === 'en') item.element.textContent = item.en;
      else item.element.innerHTML = item.zh;
    });
    attributes.forEach(item => item.element.setAttribute(item.attribute, item[language]));
    languageButton.textContent = language === 'en' ? '繁中' : 'EN';
    languageButton.setAttribute('aria-label', language === 'en' ? '切換至繁體中文' : 'Switch to English');
    document.title = language === 'en' ? 'xc11 — Music, backstage, and what comes next.' : 'xc11 — 音樂、幕後，還有下一件事。';
    feedback.textContent = '';
    if (persist) {
      try { localStorage.setItem('xc11-language', language); } catch { /* Works without storage too. */ }
      const url = new URL(location.href);
      if (language === 'en') url.searchParams.set('lang', 'en');
      else url.searchParams.delete('lang');
      history.replaceState(null, '', url);
    }
  }
  const requested = new URLSearchParams(location.search).get('lang');
  setLanguage(['en', 'zh'].includes(requested) ? requested : readPreference());
  languageButton.hidden = false;
  languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en', true));
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
  document.addEventListener('keydown', event => {
    root.dataset.input = 'keyboard';
    document.querySelectorAll('.intro').forEach(element => element.classList.remove('intro'));
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  document.addEventListener('pointerdown', () => { root.dataset.input = 'pointer'; }, {passive: true});
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('click', event => { if (menu.open && !menu.contains(event.target)) menu.open = false; });
  matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) menu.open = false; });
  const copyButton = document.querySelector('[data-copy-email]');
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    clearTimeout(copyTimer);
    try {
      await navigator.clipboard.writeText('s1401121@gmail.com');
      feedback.textContent = language === 'en' ? 'Copied!' : '已複製！';
    } catch {
      feedback.textContent = language === 'en' ? 'Select the email above to copy it.' : '請選取上方電郵地址複製。';
    }
    copyTimer = setTimeout(() => { feedback.textContent = ''; }, 3500);
  });
})();
