const insertContact = () => {
  const section = document.querySelector('section');
  section.classList.add('contact');

  const article1 = document.createElement('article');
  const h2_1 = document.createElement('h2');
  const p1 = document.createElement('p');
  h2_1.textContent = 'Address';
  p1.textContent = 'Potato Av.42';
  article1.appendChild(h2_1);
  article1.appendChild(p1);
  section.appendChild(article1);

  const article2 = document.createElement('article');
  const h2_2 = document.createElement('h2');
  const p2 = document.createElement('p');
  h2_2.textContent = 'Email';
  p2.textContent = 'potato@potato.com';
  article2.appendChild(h2_2);
  article2.appendChild(p2);
  section.appendChild(article2);
}

export { insertContact }
