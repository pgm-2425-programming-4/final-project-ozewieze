export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? 'https://jammin-api-oprk.onrender.com/api'
  : 'http://localhost:1337/api';

export const API_TOKEN = import.meta.env.PROD
  ? 'fa3da887bfc4af45c843e138d7b7aa2aecb9d7c8aed60cf8e790f72b707a9510f4c3dbb47975722df846e8e72d022f1d6f22d587f5565e4f74977ef22d1ef6a2e965688cb8e5bc8cafa4fcfe67c8aa5be17babd06dc705f8cc7cd55e6d242a1a187267a0e3e787a0f8ac593d490b75cef559191b437e7d4e8171289b81ccc5ce'
  : '7607c79762d69d8d1b6f99193a924ebdaf9b85d66b4b9555b354486c28c5ea2c225523b180a70a224dfff16684d2a1329a7e4a898a9d8be28020c5a496c6cf9cf3434e7b0f3d1e759332f791073266e9311e5747ecda0b408e1432f42e631ad37ee21398830a21a33ee151af8562810b0e9ced600d7afbe2624faff1951efdae';
