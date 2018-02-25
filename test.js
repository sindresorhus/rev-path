import test from 'ava';
import m from '.';

test(t => {
	const hash = 'bb9d8fe615';
	const pth = 'src/unicorn.png';
	const hashed = m(pth, hash);
	t.is(hashed, 'src/unicorn-bb9d8fe615.png');
	t.is(m('unicorn.png', hash), 'unicorn-bb9d8fe615.png');
	t.is(m.revert(hashed, hash), pth);
	t.is(m(pth, hash, '.'), 'src/unicorn.bb9d8fe615.png');
	t.is(m.revert('src/unicorn.bb9d8fe615.png', hash, '.'), pth);
	t.is(m(pth, hash, '_'), 'src/unicorn_bb9d8fe615.png');
	t.is(m.revert('src/unicorn_bb9d8fe615.png', hash, '_'), pth);
	t.is(m(pth, hash, '#'), 'src/unicorn#bb9d8fe615.png');
	t.is(m.revert('src/unicorn#bb9d8fe615.png', hash, '#'), pth);
});
