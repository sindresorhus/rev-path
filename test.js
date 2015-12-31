import test from 'ava';
import fn from './';

test(t => {
	const hash = 'bb9d8fe615';
	const pth = 'src/unicorn.png';
	const hashed = fn(pth, hash);
	t.is(hashed, 'src/unicorn-bb9d8fe615.png');
	t.is(fn('unicorn.png', hash), 'unicorn-bb9d8fe615.png');
	t.is(fn.revert(hashed, hash), pth);
});
