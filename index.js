'use strict';
const modifyFilename = require('modify-filename');

module.exports = (pth, hash, separatingCharacter) => {
	if (!(pth && hash)) {
		throw new Error('`path` and `hash` required');
	}

	const _separatingCharacter = separatingCharacter || '-';

	return modifyFilename(pth, (filename, ext) => `${filename}${_separatingCharacter}${hash}${ext}`);
};

module.exports.revert = (pth, hash, separatingCharacter) => {
	if (!(pth && hash)) {
		throw new Error('`path` and `hash` required');
	}

	const _separatingCharacter = separatingCharacter || '-';

	return modifyFilename(pth, (filename, ext) => filename.replace(new RegExp(`${_separatingCharacter}${hash}$`), '') + ext);
};
