#Quiz App Intro to ES2015/2016/2017

This is intended as a simple, example-based introduction to coding with some of the features from the newer editions of Ecmascript. Some aspects of the application will be there simply to illustrate points about the language and to exercise particular features. Some parts of this repository won't have much to do with the application at all, as they're just there to show as clearly as possible how some point of syntax happens to work. Feel free to borrow and steal, but remember you are doing so at your own risk.

##Tooling##

###Transpiler###
To even begin to get ES2015 and up to work in browsers, you'll need to use a transpiler. We're using [Babel](https://babeljs.io/), which is kind of the gold standard for transpiling Ecmascript. You may run into other transpilers and there are a variety of systems for loading in dependencies and getting your application ready for delivery. For the most part, though, these are going to wind up using Babel for the transpile step.

Babel requires a fair amount of setup, as its philosophy is geared more toward being flexible than a lot of out-of-the-box wow factor. If you look in `package.json`, there's a bunch of dependencies babel needs to know how to transpile the code we're making. There's also a polyfill library, and a plugin for making dependencies load in a way that will be a bit more intuitive for anyone who has used Node. Our fairly barebones `.babelrc` (the best way to configure babel) includes presets for the Ecmascript versions we want to support, a well as that plugin we just mentioned.

###Bundler###
Besides transpiling, we're going to need to bundle up our dependencies to send down to the browser. There are lots of approaches we could choose for doing this. The simplest, most common no-frills option is [Browserify](http://browserify.org/). If you look in `package.json`, you'll see where we've added Babelify, which lets Browserify integrate with Babel:

```json
  ...
    "browserify": {
      "transform": [
        "babelify"
      ]
    }
  ...
```
And, if you look at `Gulpfile.js`, you'll see that the javascripts task applies those transforms and follows the dependency tree starting from our entrypoint (`index.js`), and pipes that output to a `dist` directory (which is what we'd wind up shipping to production).

###Testing###

###Code Quality###

##`let`, `const`, `=>`##
Have a look at `test/letConstArrow.js`. The tests illustrate some of the key features of new Ecmascript language structures. `const` and `let` are newer alternatives to `var`, with `const` imposing unchangeability on the relevant value, and `let` applying block scoping. `const` is something altogether new, while `let` should server as the replacment for `var`.

##Iterating##

##Template Literals##

##Classes and Generators##

