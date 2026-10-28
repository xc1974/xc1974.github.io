(() => {
  const link = document.querySelector('[data-application-link]');
  if (!link) return;
  const destination = new URL(link.href);
  const context = new URLSearchParams(location.search);
  if (context.get('via') === 'invitation') destination.searchParams.set('via', 'invitation');
  if (context.get('event') === '2026-end-mix') destination.searchParams.set('event', '2026-end-mix');
  link.href = destination.href;
  location.replace(destination.href);
})();
