const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: 'WebX From Scratch',
  version: '0.0.0',
  action: {
    default_popup: 'html/popup/index.html',
  },
  options_ui: {
    page: 'html/options/index.html',
  },
  background: {
    service_worker: './background.js',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['content-scripts.js'],
      // css: ['content-scripts.css'],
    },
  ],
  web_accessible_resources: [
    {
      matches: ['<all_urls>'],
      resources: ['content-scripts.css'],
    },
  ],
};

export default manifest;
