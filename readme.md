# rev-path

> Create a [revved file path](http://blog.risingstack.com/automatic-cache-busting-for-your-css/)

## Install

```sh
npm install rev-path
```

## Usage

```js
import {revPath, unrevPath} from 'rev-path';

const hash = 'bb9d8fe615'

const path = revPath('src/unicorn.png', hash);
//=> 'src/unicorn-bb9d8fe615.png'

revPath('src/unicorn.png', Date.now());
//=> 'src/unicorn-1432309925925.png'

// You can also revert an already hashed path
unrevPath(path, hash);
//=> 'src/unicorn.png'
```

## Related

- [rev-file](https://github.com/sindresorhus/rev-file) - Get the revved file path of a file
