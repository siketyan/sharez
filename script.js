const e = encodeURIComponent;
const providers = [
  {
    name: 'Twitter',
    color: '#1DA1F2',
    url: (text, url) => `https://twitter.com/share?text=${e(text)}&url=${e(url)}`,
  },
  {
    name: 'Facebook',
    color: '#4267B2',
    url: (_, url) => `https://www.facebook.com/sharer/sharer.php?u=${e(url)}`,
  },
  {
    name: 'LINE',
    color: '#00B900',
    url: (text, url) => `https://social-plugins.line.me/lineit/share?text=${e(text)}&url=${e(url)}`,
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const ul = document.getElementById('buttons');
  const preview = document.getElementById('preview');
  const params = new URLSearchParams(window.location.search);
  const text = params.get('text');
  const url = params.get('url');

  preview.textContent = `${text}\n${url}`;

  for (const provider of providers) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    ul.append(li);
    li.append(a);

    a.classList.add('btn', 'btn-primary');
    a.href = provider.url(text, url);
    a.textContent = provider.name;
    a.style.backgroundColor = a.style.borderColor = provider.color;
  }
});
