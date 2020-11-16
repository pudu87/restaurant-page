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

const index = (function() {

  const nav = document.querySelector('nav');
  const section = document.querySelector('section');

  const selectTab = (e) => {
    removeContent();
    unstyleTabs();
    let tab = e.target;
    tab.classList.add('selected');
    content['insert' + tab.textContent]();
  }
  const removeContent = () => {
    section.textContent = '';
    section.classList = '';
  }
  const unstyleTabs = () => {
    nav.childNodes.forEach(div => {
      div.classList.remove('selected')
    })
  }

  nav.childNodes.forEach(div => {
    div.addEventListener('click', selectTab)
  })

})();
