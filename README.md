# @sanity/incompatible-plugin

Small helper library that will display a warning in Sanity Studio v2 when a plugin built for Studio v3 is installed.

## Installation

> npm i --save @sanity/incompatible-plugin

or 

> yarn add @sanity/incompatible-plugin

## Usage

In your plugin root directory, create two files:

`v2-incompatible.js`
```js
const {showIncompatiblePluginDialog} = require('@sanity/incompatible-plugin')
const {name, version} = require('./package.json')

export default showIncompatiblePluginDialog({
  name: name,
  versions: {
    v3: version,
    // Optional: If there is not v2 version of your plugin, v2 can be omitted
    v2: '^1.2.5', 
  },
  // Optional: Feel free to put this as field in package.json and import it alongside name and version above
  sanityExchangeUrl: 'https://www.sanity.io/plugins/<plugin-on-sanity-exchanged>'
})
```

`sanity.json`
```json
{
  "parts": [
    {
      "implements": "part:@sanity/base/sanity-root",
      "path": "./v2-incompatible.js"
    }
  ]
}
```

Add these to `files` in the plugin `package.json` alongside anything else already there, for instance:

```json
{
  "files": [
    "src",
    "lib",
    "v2-incompatible.js",
    "sanity.json"
  ]
}
```

Done! 

If your v3 plugin gets installed in a V2 studio by mistake, a dialog will display how to fix it.
