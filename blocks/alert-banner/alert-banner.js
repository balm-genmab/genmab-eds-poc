export default function decorate(block) {
  const text = block.querySelector('p, div')?.textContent.trim() || '';
  block.innerHTML = `<p>${text}</p>`;
}