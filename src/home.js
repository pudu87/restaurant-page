const createArticle = (par1, par2) => {
  const article = document.createElement('article');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  p1.textContent = par1;
  p2.textContent = par2;
  article.appendChild(p1);
  article.appendChild(p2);
  return article;
}

const insertHome = () => {
  const section = document.querySelector('section');
  const articles = [];
  section.classList.add('home');
  articles.push(createArticle(
    'Potatoes are the best.',
    'Come and eat delicious potatoes at Potatoes.'
  ));
  articles.forEach(article => section.appendChild(article));
}

export { insertHome }
