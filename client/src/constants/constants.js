export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? 'https://jammin-api-oprk.onrender.com/api'
  : 'http://localhost:1337/api';

export const API_TOKEN = import.meta.env.PROD
  ? '47b8b8f35abc74645cceb0abda5affa4b1c4bbbdc6cdf2b0b1076a31deee1dfb068e266e7c97edb25ec110d95a1e6b1ea88b10e96d1145bcf2872dbf23ac5f3881118c9e447ab97c79ce0be72c7562848ca9fe40adc0f6ad505b8396416fb09a60023c5374244f210407e5b74476581f18e57b50cfe8a3eb8fe063025bc5b5e0'
  : '7607c79762d69d8d1b6f99193a924ebdaf9b85d66b4b9555b354486c28c5ea2c225523b180a70a224dfff16684d2a1329a7e4a898a9d8be28020c5a496c6cf9cf3434e7b0f3d1e759332f791073266e9311e5747ecda0b408e1432f42e631ad37ee21398830a21a33ee151af8562810b0e9ced600d7afbe2624faff1951efdae';
