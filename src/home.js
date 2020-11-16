const insertHome = () => {
  const section = document.querySelector('section');
  section.classList.add('home');

  const article = document.createElement('article');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  p1.textContent = 'Potatoes are the best.';
  p2.textContent = 'Come and eat delicious potatoes at Potatoes.';
  article.appendChild(p1);
  article.appendChild(p2);

  section.appendChild(article);
}

export { insertHome }
