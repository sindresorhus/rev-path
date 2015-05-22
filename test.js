'use strict';
var test = require('ava');
var revPath = require('./');

test(function (t) {
	var hash = 'bb9d8fe615';
	var pth = 'src/unicorn.png';
	var hashed = revPath(pth, hash);
	t.assert(hashed === 'src/unicorn-bb9d8fe615.png');
	t.assert(revPath('unicorn.png', hash) === 'unicorn-bb9d8fe615.png');
	t.assert(revPath.revert(hashed, hash) === pth);
	t.end();
});
