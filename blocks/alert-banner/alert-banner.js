export default function decorate(block) {
  const rows = block.querySelectorAll('div');
  const text = rows[0]?.textContent.trim() || '';
  block.innerHTML = `<p>${text}</p>`;
}