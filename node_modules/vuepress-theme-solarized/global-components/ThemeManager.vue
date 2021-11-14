<template>
	<div style="visibility: hidden; display: none"></div>
</template>

<script>
/* eslint-disable no-underscore-dangle */

export default {
	name: 'ThemeManager',

	beforeMount() {
		window.__onThemeChange = function() {};
		let preferredTheme;

		function setTheme(newTheme) {
			window.__theme = newTheme;
			preferredTheme = newTheme;
			document.body.setAttribute('data-theme', newTheme);
			window.__onThemeChange(newTheme);
		}

		try {
			preferredTheme = localStorage.getItem('theme');
		} catch (err) {
			// eslint-disable-next-line no-console
			console.log('Theme Manager error: ', err);
		}

		window.__setPreferredTheme = function(newTheme) {
			setTheme(newTheme);
			try {
				localStorage.setItem('theme', newTheme);
			} catch (err) {
				// eslint-disable-next-line no-console
				console.log('Theme Manager error: ', err);
			}
		};

		const isColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)');

		isColorSchemeDark.addListener(function(e) {
			window.__setPreferredTheme(e.matches ? 'dark' : 'light');
		});

		setTheme(preferredTheme || (isColorSchemeDark.matches ? 'dark' : 'light'));
	},
};
</script>