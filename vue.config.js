module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/thbt-mots/' : '/',
  pwa: {
    name: 'ThiMots',
    themeColor: '#9280ff',
    msTileColor: '#9280ff',
  },
};
