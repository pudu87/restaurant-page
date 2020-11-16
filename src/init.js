const initContent = () => {
  const content = document.querySelector('#content');

  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const section = document.createElement('section');

  const h1 = document.createElement('h1');
  h1.textContent = 'Potatoes';
  header.appendChild(h1);

  const home = document.createElement('div');
  const menu = document.createElement('div');
  const contact = document.createElement('div');
  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  content.appendChild(header);
  content.appendChild(nav);
  content.appendChild(section);
}

export { initContent }
