/* eslint-env node */

/*! version: 1.0.1
		author: Clinton Mulligan
		license: BSD 3-Clause License
		Copyright (c) 2020, Clinton Mulligan. All rights reserved.
		Full License at https://github.com/armirage/eslint-config-armirage/blob/master/LICENSE.md !*/

module.exports = {
	"extends": [
		"./configs/es11-eslintrc.json"
	].map( require.resolve ),
	"rules": { }
};
