// Service worker: guarda os arquivos no aparelho para o app funcionar offline.
// Sempre que mudar algum arquivo, aumente o número da versão abaixo.
const VERSAO = 'lapre-v40';
const ARQUIVOS = [
  './', './index.html', './manifest.webmanifest', './icon.svg', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png',
  './imagens/corredor.svg', './imagens/logo-marca.svg',
  './css/style.css', './js/data.js', './js/preseason.js', './js/questionarios.js', './js/quest.js', './js/app.js',
  './fonts/Switzer-Regular.woff2', './fonts/Switzer-Medium.woff2', './fonts/Switzer-Semibold.woff2', './fonts/Switzer-Bold.woff2'
];

self.addEventListener('install', e => {
  // cache: 'reload' obriga a baixar a versão nova do servidor (e não uma cópia velha do navegador)
  e.waitUntil(caches.open(VERSAO).then(c => Promise.all(ARQUIVOS.map(u => c.add(new Request(u, { cache: 'reload' }))))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // Remove caches de versões antigas
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Usa o cache primeiro; se não tiver, busca na internet
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
