export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? 'https://jammin-api-2swh.onrender.com/api'
  : 'http://localhost:1337/api';

export const API_TOKEN = import.meta.env.PROD
  ? 'fa3da887bfc4af45c843e138d7b7aa2aecb9d7c8aed60cf8e790f72b707a9510f4c3dbb47975722df846e8e72d022f1d6f22d587f5565e4f74977ef22d1ef6a2e965688cb8e5bc8cafa4fcfe67c8aa5be17babd06dc705f8cc7cd55e6d242a1a187267a0e3e787a0f8ac593d490b75cef559191b437e7d4e8171289b81ccc5ce'
  : '56a9020669d105abc8d3aa6e60a516b72d40a9eb191a7fa96261b5af727ee06594aba65b1dfb4f7584db00838d24ae53d23a9a718982bb4e6eaa18cede48b291966c18870e7328082f2a387f028820eceeccfb809c1ead28c1d9fcef72eeea469a1a7c27f0978d617c007a93eb17edc8ebf373fcbce95d873b323f66a619f621';
