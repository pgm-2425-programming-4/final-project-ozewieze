export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? 'https://jammin-api-oprk.onrender.com/api'
  : 'http://localhost:1337/api';

export const API_TOKEN = import.meta.env.PROD
  ? '1d3d373dd7b4e7b90b155bc964dc2f318c04e97af1ba21b19d2bac061e13f88bc2cd22db663b4ca3b251822bf5b95f27cc97cc8d79eeddb0f3ac6abc07e73c7dc6d85c76558fa8ac01a5dd9ceaaf9b47a4577ffb0d4365b4c869e624989aa40f0dc869d2d312f94097224ce0a5f22949363f3a0a5e5f70eb0ddd19b659714ac1'
  : '7607c79762d69d8d1b6f99193a924ebdaf9b85d66b4b9555b354486c28c5ea2c225523b180a70a224dfff16684d2a1329a7e4a898a9d8be28020c5a496c6cf9cf3434e7b0f3d1e759332f791073266e9311e5747ecda0b408e1432f42e631ad37ee21398830a21a33ee151af8562810b0e9ced600d7afbe2624faff1951efdae';
