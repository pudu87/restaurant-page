const insertMenu = () => {
  const section = document.querySelector('section');
  section.classList.add('menu');

  const article1 = document.createElement('article');
  const div1 = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  div1.classList.add('mashed');
  p1.textContent = 'Mashed potatoes';
  p2.textContent = '5$';
  article1.appendChild(div1);
  article1.appendChild(p1);
  article1.appendChild(p2);

  const article2 = document.createElement('article');
  const div2 = document.createElement('div');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  div2.classList.add('fried');
  p3.textContent = 'Fried potatoes';
  p4.textContent = '5$';
  article2.appendChild(div2);
  article2.appendChild(p3);
  article2.appendChild(p4);

  const article3 = document.createElement('article');
  const div3 = document.createElement('div');
  const p5 = document.createElement('p');
  const p6 = document.createElement('p');
  div3.classList.add('boiled');
  p5.textContent = 'Potatoes';
  p6.textContent = '5$';
  article3.appendChild(div3);
  article3.appendChild(p5);
  article3.appendChild(p6);

  section.appendChild(article1);
  section.appendChild(article2);
  section.appendChild(article3);
}

export { insertMenu }
