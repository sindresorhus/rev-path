import test from 'ava';
import {revPath, unrevPath} from './index.js';

test('main', t => {
	const hash = 'bb9d8fe615';
	const path_ = 'src/unicorn.png';
	const hashed = revPath(path_, hash);
	t.is(hashed, 'src/unicorn-bb9d8fe615.png');
	t.is(revPath('unicorn.png', hash), 'unicorn-bb9d8fe615.png');
	t.is(unrevPath(hashed, hash), path_);
});
