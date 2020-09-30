<!-- armirage .github README.md -->
[:earth_americas: :speech_balloon: English](https://github.com/armirage/eslint-config-armirage/blob/master/docs/l10n/index.md)\
[Table of Contents](#table-of-contents)

<!-- Armirage OSS Header -->
<div align="right">
	<a href="https://armirage.github.io" target="_blank" rel="noopener">
		<img src="https://armirage.github.io/images/banners/armirage-oss-header.webp" alt="Armirage OSS Header. The Armirage logo; A person icon wrapped in a leaf forming an 'A'. Armirage name and a tilted rubber stamp of approval with the letters 'OSS' cover the rightmost corner." width="160px">
	</a>
</div>

<!-- Banner -->
<div align="center" id="anchor-1">
	<img src="https://raw.githubusercontent.com/armirage/eslint-config-armirage/master/docs/images/eslint-config-armirage-banner.webp" alt="A child's hand reaches from the bottom of the frame holding a broad dandy brush. It is oversized for the small hand. The child uses it to brush the hair of a large horse. Combing the horse's messy hair into a smooth coat." width="100%">
	<div align="right">
		<small>Untitled [child brushing horse] by Chris Bair, licensed under Unsplash.</small>
		<sup>
			<a href="#banner-note">[1]</a>
		<sup>
	</sup></sup></div>
</div>

&nbsp;
<!-- Content -->
<!-- Workaround to display <h1> coreectly in NPM lest it duplicate rendering. -->
# <sup><em>@armirage/</em></sup>eslint-config-armirage&nbsp;&nbsp;<a href="https://www.npmjs.com/package/@armirage/eslint-config-armirage" alt="npm package link"><img src="https://armirage.github.io/images/external-companies/npm/npm-logo/classic/npm-2009.svg" alt="npm logo" width="64"></a>&nbsp;&nbsp;<a href="https://github.com/armirage/eslint-config-armirage" alt="github repo link"><img src="https://armirage.github.io/images/external-companies/github/github-mark/GitHub-Mark-64px.png" alt="github logo" width="32"></a>

[![GitHub tag (latest by date)](https://img.shields.io/github/v/release/armirage/eslint-config-armirage)](https://github.com/armirage/eslint-config-armirage/releases)
[![GitHub issues](https://img.shields.io/github/issues/armirage/eslint-config-armirage)](https://github.com/armirage/eslint-config-armirage/issues/)
[![Github code size](https://img.shields.io/github/languages/code-size/armirage/eslint-config-armirage)](https://github.com/armirage/eslint-config-armirage/releases)
[![GitHub license](https://img.shields.io/github/license/armirage/eslint-config-armirage)](https://github.com/armirage/eslint-config-armirage/blob/master/LICENSE.md)
[![armirage-style](https://img.shields.io/badge/code%20style-armirage-brightgreen)](https://github.com/armirage/eslint-config-armirage)

> A consistent style makes code easier to read, debug, and helps catch errors. It takes a team of 100 programmers to come together and write the next big application, yet it should look as if one person coded it. With the aid of linters, code can be programmatically checked for adherence to a convention. Making everyone's work easy to mesh together into one cohesive source of truth.

&nbsp;
<div align="center">
	<img src="https://raw.githubusercontent.com/armirage/eslint-config-armirage/master/docs/images/example-style.gif" alt="Screen recording showing inconsistent code being linted into the Armirage style." width="720">
</div>

<!-- omit in toc -->
## Table of Contents
- [About](#about)
- [Install](#install)
- [Usage](#usage)
- [Options](#options)
- [How to Contribute](#how-to-contribute)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
- [Footnotes](#footnotes)

## About

Shareable configs <sup id="anchor-2">[2](#sharable-configs-note)</sup> alter or extend the base rules of ESLint.<sup id="anchor-3">[3](#eslint-note)</sup> Making it easy to distribute a styling convention among developers. The [Armirage JavaScript Style Guide](https://github.com/armirage/eslint-config-armirage/blob/master/docs/javascript-style-guide.md) has more details on the linting rules we apply and why.

## Install

Open open a terminal in, or change directory to, your working directory. This should be the project folder with NPM's `package.json` in it.

To install ESLint and Armirage sharable config, run the following commands in the terminal:

```console
npm install eslint @armirage/eslint-config-armirage --save-dev
```
* :pencil: NOTE: The sharable config is a scoped npm package and will need to be referenced that way.

This will save both as developer dependencies. Linters are development tools and unnecessary in production builds.

While in the terminal, create the configuration file `.eslintrc.json`

```console
touch .eslintrc.json
```
* :pencil: NOTE: The `.eslintrc.json` begins with a period. This is a hidden file on many systems. To see it, enable 'show hidden files' for your OS.

To complete installation See [Usage](#usage).

## Usage

Once the eslint-config-armirage package is installed, you can activate the rules in the ESLint configuration file.

// .eslintrc.json
```json
{
  "extends": "@armirage/eslint-config-armirage",
  "rules": {}
}
```

There are several rules in the eslint:recommended ruleset that Armirage does set. Rules we feel are better handled on a case for case basis. You might want to enforce these rules in your project for a more complete implementation.

// .eslintrc.json
```json
{
  "extends": [
    "eslint:recommended",
    "@armirage/eslint-config-armirage"
  ],
  "rules": {}
}
```

You can mix in other ESLint sharable configs, and extend them as well. The last ruleset in the array will have precedence.

## Options

You can also override individual rules. This can be helpful to apply rules per project. For instance I often use the following:

// .eslintrc.json
```json
{
  "extends": [
    "eslint:recommended",
    "@armirage/eslint-config-armirage"
  ],
  "rules": {
    "prefer-destructuring": ["warn", {"object": true, "array": true}]
  }
}
```

This gives me the added coverage of the `eslint:recommended`, the Armirage conventions, and I get warnings when objects or arrays could be de-structured. Something that may be project, intent, maintainability dependent.

## How to Contribute

We need more modular rulesets. The base eslint ruleset is ECMAScript 2020. It should be easy to add other modular configs to the package to account for more environments.

Review the [Contributing Guidelines](https://github.com/armirage/.github/blob/master/CONTRIBUTING.md) for ways to make this repository better.

Open Source Software (OSS) is only as strong as our Community.

## Acknowledgements

ESLint for their exhaustive efforts to keep pace with the ECMAScript yearly cycle. 

## Contact

Armirage Github repositories and @armirage scoped NPM modules are maintained by [Armirage](https://www.armirage.com), A Technology Solutions company, feel free to <a href="mailto:helloyall@armirage.com">contact us</a>!

## Footnotes

<b id="banner-note">[1]:</b> [Untitled \[child brushing horse\]](https://unsplash.com/photos/sJBBCn4vk8Y) by [Chris Bair](https://unsplash.com/@chrisbair), licensed under [Unsplash](https://unsplash.com/license) [:arrow_heading_up:](#anchor-1)

<b id="sharable-configs-note">[2]:</b> Shareable Configs <https://eslint.org/docs/developer-guide/shareable-configs> [accessed 29 September 2020] [:arrow_heading_up:](#anchor-2)

<b id="eslint-note">[3]:</b> ESLint - Pluggable JavaScript linter <https://eslint.org/> [accessed 29 September 2020] [:arrow_heading_up:](#anchor-2)

&nbsp;

&nbsp;

<div align="right">
  <p>Armirage logos Copyright © 2020, Clinton Mulligan. All rights reserved.</p>
</div>
</https:>
