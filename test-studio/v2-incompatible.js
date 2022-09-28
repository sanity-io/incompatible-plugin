import {showIncompatiblePluginDialog} from '@sanity/incompatible-plugin'

export default showIncompatiblePluginDialog({
  name: 'sanity-plugin-mux-input',
  versions: {v3: '2.0.0-v3-studio.12', v2: '1.1.8'},
  sanityExchangeUrl: 'https://www.sanity.io/plugins/sanity-plugin-mux-input',
})
