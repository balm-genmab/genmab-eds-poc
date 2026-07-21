export default function decorate(block) {
  const text = block.textContent.trim();
  block.innerHTML = '<p>${text}</p>';
}