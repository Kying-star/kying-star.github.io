# vuepress-theme-solarized

[![npm](https://img.shields.io/npm/v/vuepress-theme-solarized)](https://www.npmjs.com/package/vuepress-theme-solarized) [![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE) [![Vuepress](https://img.shields.io/github/package-json/dependency-version/Puritanic/vuepress-theme-solarized/@vuepress/plugin-search?label=vuepress)](https://github.com/vuejs/vuepress) [![Build Status](https://travis-ci.org/Puritanic/vuepress-theme-solarized.svg?branch=master)](https://travis-ci.org/Puritanic/vuepress-theme-solarized)

The Solarized theme for Vuepress

## Features

-   **Customizable typography**: Import and use your favorite web-fonts. Customize font sizes and text-adjustment for body text
-   **Dark and light themes**: With a theme-switcher and native theme detection to set the theme automatically as per the user preference

## Get Started

Add the dependency to your existing Vuepress project via Yarn or NPM.

```sh
yarn add -D vuepress-theme-solarized
npm install -D vuepress-theme-solarized
```

Update `.vuepress/config.js` as follows.

```js
module.exports = {
	theme: 'vuepress-theme-solarized',
	globalUIComponents: ['ThemeManager'],
};
```

`ThemeManager` provides theme-switching functionality across the app.

Note that you can also use the shorthand name for the theme.

```js
module.exports = {
	theme: 'solarized',
	globalUIComponents: ['ThemeManager'],
};
```

## Plugins

This theme has the following plugins built in:

-   [@vuepress/plugin-active-header-links](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-active-header-links)
-   [@vuepress/plugin-google-analytics](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-google-analytics)
-   [@vuepress/plugin-search](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-search)
