const frame = document.getElementById('ugoFrame');
const status = document.getElementById('status');

frame.addEventListener('load', () => {
  status.textContent = 'UGO iframe loaded';
  status.classList.add('is-loaded');
});

setTimeout(() => {
  if (!status.classList.contains('is-loaded')) {
    status.textContent = 'If UGO stays blank, framing is being blocked by UGO/Cloudflare headers or auth.';
  }
}, 5000);
