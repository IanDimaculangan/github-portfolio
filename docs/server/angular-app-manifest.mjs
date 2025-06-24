
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/github-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/github-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/github-portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23701, hash: '2dace96b3417971fef524362e836c877c4b08529a135ba45361514ab4ee3e4fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17252, hash: '5959a6814f3019b420ae065bc38d1f6823023fbb6d6fb2ca4cc6fa2fd0700750', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 62921, hash: 'b64fc3a655b5e026c35a8f3ab3077c8ff55dae1751267af6e050fa798732b9e6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-T75H7RYP.css': {size: 7002, hash: 'gm/HAPLOAbU', text: () => import('./assets-chunks/styles-T75H7RYP_css.mjs').then(m => m.default)}
  },
};
