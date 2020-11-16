const createArticle = (cssClass, name, price) => {
  const article = document.createElement('article');
  const div = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  div.classList.add(cssClass);
  p1.textContent = name;
  p2.textContent = price;
  article.appendChild(div);
  article.appendChild(p1);
  article.appendChild(p2);
  return article;
}

const insertMenu = () => {
  const section = document.querySelector('section');
  const articles = [];
  section.classList.add('menu');
  articles.push(createArticle('mashed', 'Mashed Potatoes', '5$'));
  articles.push(createArticle('fried', 'Fried Potatoes', '5$'));
  articles.push(createArticle('boiled', 'Potatoes', '5$'));
  articles.forEach(article => section.appendChild(article));
}

export { insertMenu }
