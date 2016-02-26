# level-getput

[![build status](http://img.shields.io/travis/jekrb/level-getput.svg?style=flat)](http://travis-ci.org/jekrb/level-getput)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

If the key exists then get it's value.
Otherwise put the key and value in the db and then get the value.

## Install

```
npm install level-getput -S
```

## Usage

### getput()
```js
const getput = require('level-getput')
const level = require('level')

const db = level(__dirname + '/your.db')

getput(db, 'foo', 'bar', function (err, value) {
  console.log(value) // 'bar'
  getput(db, 'foo', 'wow', function (err, value) {
    console.log(value) // still 'bar'
  })
})
```

### getput.install()

```js
const getput = require('level-getput')
const level = require('level')

const db = level(__dirname + '/your.db')

getput.install(db)

db.getput('foo', 'bar', function (err, value) {
  console.log(value) // 'bar'
  db.getput('foo', 'wow', function (err, value) {
    console.log(value) // still 'bar'
  })
})
```

## API


#### `getput(db, key, value, cb)`

Takes a leveldb object, a key, a value, and a callback.
It checks if the key exist. If it does, then it returns the value.
If the key does not exist in the db then it puts the ket and value in the db.
Then it gets the value.

#### `getput.install(db)`

Rather than calling the getput function, you can add a getput method to the db.
You can then use `db.getput(key, value, cb)`.



## The MIT License (MIT)

Copyright © 2016 Jacob Burden, <Jacob.JW.Burden@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
