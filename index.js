import modifyFilename from 'modify-filename';

export function revPath(path, hash) {
	if (!(path && hash)) {
		throw new Error('`path` and `hash` are required');
	}

	return modifyFilename(path, (filename, fileExtension) => `${filename}-${hash}${fileExtension}`);
}

export function unrevPath(path, hash) {
	if (!(path && hash)) {
		throw new Error('`path` and `hash` are required');
	}

	return modifyFilename(path, (filename, fileExtension) => filename.replace(new RegExp(`-${hash}$`), '') + fileExtension);
}
