import { initContent } from './init.js';
import { insertHome } from './home.js';
import { insertContact } from './contact.js';
import { insertMenu } from './menu.js';
const content = { 
  insertHome,
  insertMenu,
  insertContact
};

initContent();
insertHome();

const nav = document.querySelector('nav');
nav.childNodes.forEach(div => {
  div.addEventListener('click', selectTab);
})

const section = document.querySelector('section');
function selectTab(e) {
  section.textContent = '';
  section.classList = '';
  let tab = e.target.textContent;
  console.log(tab)
  content['insert' + tab]();
}
