import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  const btn = document.createElement('button');
  btn.className = 'to-top-btn';
  btn.textContent = '↑ Top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(btn);

  const toggle = () => btn.classList.toggle('show', window.scrollY > 600);
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}
