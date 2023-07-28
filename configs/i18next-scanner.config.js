const typescriptTransform = require('i18next-scanner-typescript');
const config = require('./i18n.config');

module.exports = {
  input: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/__test__/**', '!**/node_modules/**'],
  options: {
    debug: true,
    sort: true,
    removeUnusedKeys: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx'],
      fallbackKey: (_, value) => value,
      supportBasicHtmlNodes: true,
    },
    lngs: config.LNGS,
    ns: config.NS,
    defaultLng: config.DEFAULT_LNG,
    defaultNs: config.DEFAULT_NS,
    defaultValue: (lng, _, key) => (lng === 'en' ? key : ''),
    resource: {
      loadPath: './submodules/dla-ui-i18n/{{lng}}/{{ns}}.json',
      savePath: './build-i18n/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: config.NS_SEPARATOR,
    keySeparator: false,
  },
  transform: typescriptTransform({
    extensions: ['.ts', '.tsx'],
    tsOptions: {
      target: 'es2017',
    },
  }),
};
