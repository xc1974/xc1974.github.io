(() => {
  'use strict';
  const root = document.documentElement;
  const menu = document.querySelector('.mobile-menu');
  const feedback = document.querySelector('.copy-feedback');
  let copyTimer;
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
  document.addEventListener('keydown', event => {
    root.dataset.input = 'keyboard';
    document.querySelectorAll('.intro').forEach(element => element.classList.remove('intro'));
    if (event.key === 'Escape' && menu?.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  document.addEventListener('pointerdown', () => { root.dataset.input = 'pointer'; }, {passive:true});
  if (menu) {
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
    document.addEventListener('click', event => { if (menu.open && !menu.contains(event.target)) menu.open = false; });
    matchMedia('(min-width:761px)').addEventListener('change', event => { if (event.matches) menu.open = false; });
  }
  const copyButton = document.querySelector('[data-copy-email]');
  if (copyButton && feedback) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      clearTimeout(copyTimer);
      try {
        await navigator.clipboard.writeText('s1401121@gmail.com');
        feedback.textContent = 'Copied!';
      } catch {
        feedback.textContent = 'Select the email above to copy it.';
      }
      copyTimer = setTimeout(() => { feedback.textContent = ''; }, 3500);
    });
  }
})();