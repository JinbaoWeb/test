const blogData = {
  categories: [
    {
      id: 'frontend',
      name: '前端开发',
      description: 'HTML、CSS、JavaScript 与工程化实践',
      posts: [
        {
          id: 'responsive-layout',
          title: '移动优先布局实践',
          date: '2026-02-10',
          views: 1234,
          tags: ['CSS', '响应式', '移动端'],
          content: `
            <p>移动端开发推荐先从小屏开始设计，再逐步增强到平板和桌面。</p>
            <h2>示例代码</h2>
            <pre><code class="language-css">.container {
  width: min(100% - 2rem, 960px);
  margin-inline: auto;
}</code></pre>
            <h2>简单公式</h2>
            <p>当屏幕宽度变化时，我们常用比例关系：$scale = \\frac{w_{current}}{w_{base}}$。</p>
          `
        },
        {
          id: 'performance-tips',
          title: '前端性能优化清单',
          date: '2026-01-26',
          views: 978,
          tags: ['性能优化', 'Web Vitals'],
          content: `
            <p>性能优化可以从资源加载、渲染和缓存三个方向进行。</p>
            <pre><code class="language-js">const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry.name, entry.duration);
  }
});
observer.observe({ entryTypes: ['largest-contentful-paint'] });</code></pre>
          `
        }
      ]
    },
    {
      id: 'backend',
      name: '后端工程',
      description: '服务设计、数据库与架构',
      posts: [
        {
          id: 'sql-index',
          title: '数据库索引入门',
          date: '2026-02-03',
          views: 845,
          tags: ['MySQL', '索引'],
          content: `
            <p>索引可以显著提升查询速度，但也会增加写入成本。</p>
            <pre><code class="language-sql">EXPLAIN SELECT * FROM posts WHERE category_id = 1 ORDER BY created_at DESC;</code></pre>
            <p>复杂度可近似理解为：$O(\\log n)$ 与 $O(n)$ 的差异。</p>
          `
        }
      ]
    },
    {
      id: 'ai',
      name: 'AI 与算法',
      description: '机器学习与实战笔记',
      posts: [
        {
          id: 'linear-regression',
          title: '线性回归的直观理解',
          date: '2026-02-15',
          views: 1560,
          tags: ['机器学习', '数学'],
          content: `
            <p>线性回归目标是最小化均方误差：</p>
            <p>$$J(\\theta) = \\frac{1}{2m} \\sum_{i=1}^{m}(h_\\theta(x^{(i)}) - y^{(i)})^2$$</p>
            <pre><code class="language-python">import numpy as np

def predict(x, theta0, theta1):
    return theta0 + theta1 * x</code></pre>
          `
        }
      ]
    }
  ]
};
