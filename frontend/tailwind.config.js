module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  corePlugins: { outline: false },
};
