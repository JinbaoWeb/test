function getParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

function renderHomePage() {
  const grid = document.getElementById('category-grid');
  if (!grid) return;

  grid.innerHTML = blogData.categories
    .map(
      (cat) => `
      <a class="card" href="category.html?category=${cat.id}">
        <h3>${cat.name}</h3>
        <p>${cat.description}</p>
        <span class="badge">${cat.posts.length} 篇文章</span>
      </a>
    `
    )
    .join('');
}

function renderCategoryPage() {
  const list = document.getElementById('post-list');
  if (!list) return;

  const categoryId = getParam('category');
  const category = blogData.categories.find((cat) => cat.id === categoryId);
  const title = document.getElementById('category-title');

  if (!category) {
    title.textContent = '类目不存在';
    list.innerHTML = '<li class="card">未找到对应类目。</li>';
    return;
  }

  title.textContent = category.name;
  list.innerHTML = category.posts
    .map(
      (post) => `
      <li class="card post-item">
        <a href="post.html?category=${category.id}&post=${post.id}">
          <h3>${post.title}</h3>
        </a>
        <p class="meta">${formatDate(post.date)} · 阅读 ${post.views}</p>
        <div class="tags">${post.tags
          .map((tag) => `<span class="tag">${tag}</span>`)
          .join('')}</div>
      </li>
    `
    )
    .join('');
}

function renderPostPage() {
  const content = document.getElementById('post-content');
  if (!content) return;

  const categoryId = getParam('category');
  const postId = getParam('post');

  const category = blogData.categories.find((cat) => cat.id === categoryId);
  const post = category?.posts.find((item) => item.id === postId);

  if (!category || !post) {
    document.getElementById('post-title').textContent = '文章不存在';
    content.innerHTML = '<p>未找到对应文章。</p>';
    return;
  }

  document.getElementById('back-to-category').href = `category.html?category=${category.id}`;
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-meta').textContent = `${formatDate(post.date)} · 阅读 ${post.views}`;
  content.innerHTML = `${post.content}<hr /><p class="tags">${post.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join('')}</p>`;

  if (window.hljs) {
    document.querySelectorAll('pre code').forEach((block) => window.hljs.highlightElement(block));
  }

  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

renderHomePage();
renderCategoryPage();
renderPostPage();
