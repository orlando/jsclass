# jsclass

Simple class factory that supports `super`. This approach uses
`arguments.callee.caller` to get the caller method and then the name of
the function, that's why this isn't going to work in `strict mode`;

## Limitations

* Doesn't work in `strict mode`
* All functions in prototype should be named functions

## Example

```js
var TestClass = Class('TestClass', {
  say: function say() {
    console.log('Test Class says');
    this._super('Test Class is calling');
  }
});

var SuperClass = Class('SuperClass', {
  say: function say(string) {
    console.log('Super Class says ' + string);
  }
});

TestClass.inherits(SuperClass);

testClass = new TestClass();
testClass.say();
# =>
#  'Test Class says'
#  'Super Class says Test Class is calling'
```

## Running Tests

`grunt test`

## Note

This is just an experiment, and is not meant to be use **anywhere!**,
not even for fun.

## Contributing

1. Fork it
1. Create your feature branch (git checkout -b my-new-feature)
1. Commit your changes (git commit -am 'Add some feature')
1. Push to the branch (git push origin my-new-feature)
1. Create new Pull Request

## Licensing

jsclass is written by [Orlando Del Aguila](github.com/orlando) and is under the MIT License.

The MIT License (MIT)

Copyright (c) Orlando Del Aguila, 2015

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
