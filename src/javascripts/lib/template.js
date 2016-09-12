/* eslint-env browser, es6 */
const tpl = obj => `<span>${obj.label}</span>
  <input ${obj.checked ? 'checked ' : ''}
    name="${obj.id}"
    type="${obj.type ? obj.type : 'text'}"
    value="${obj.value ? obj.value : ''}" />`;

function render(obj) {
  const frag = document.createDocumentFragment();
  const label = document.createElement('label');
  label.classList.add(obj.type || 'text');
  label.innerHTML = tpl(obj);
  frag.appendChild(label);
  return frag;
}

export default render;
