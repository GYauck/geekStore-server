const origin = 'https://geek-store-client.vercel.app';
const corsConfig = {
  origin,
  credentials: true,
  optionSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS",
};

module.exports = corsConfig;