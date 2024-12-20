import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'http://localhost:2368', // Replace with your Ghost URL
  key: '1db9a15b9f0b84a93aba755aca', // Replace with your Content API Key
  version: 'v5.0', // Specify the API version
});

export default api;

