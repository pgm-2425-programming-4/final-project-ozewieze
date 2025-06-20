export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? 'https://jammin-api-oprk.onrender.com/api'
  : 'http://localhost:1337/api';

export const API_TOKEN = import.meta.env.PROD
  ? '7ffd5369e53e00e8aa420eeb8fc7dcd9c3f9a103bb07803c156c18f3cc3fd2887ce4178ee6f704aeb6d55276b17cca7604cc45bc2d114f94848af380aab9fc96bdd315bc10d2510c8c619523754e7fa9dfd32107b2b6c387b3a6673ea9e83ac05787f72617dbe531db0640d6ada43836246cc5289b33d04ce54b7072cca222a9'
  : '7607c79762d69d8d1b6f99193a924ebdaf9b85d66b4b9555b354486c28c5ea2c225523b180a70a224dfff16684d2a1329a7e4a898a9d8be28020c5a496c6cf9cf3434e7b0f3d1e759332f791073266e9311e5747ecda0b408e1432f42e631ad37ee21398830a21a33ee151af8562810b0e9ced600d7afbe2624faff1951efdae';
