const createArticle = (title, par) => {
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  h2.textContent = title;
  p.textContent = par;
  article.appendChild(h2);
  article.appendChild(p);
  return article;
}

const insertContact = () => {
  const section = document.querySelector('section');
  const articles = [];
  section.classList.add('contact');
  articles.push(createArticle('Address', 'Potato Av.42'));
  articles.push(createArticle('Email', 'potato@potato.com'));
  articles.forEach(article => section.appendChild(article));
}

export { insertContact }
