
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 500, hash: '134c37a0c35a5ce3b3d037e764ce7cdcaa129fcdc90c3fc4992b43ffb3004638', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1013, hash: '64a08f2775eeb85d01111ae854a074a0883744c4da5622d89cba5015a0f5cc8b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
