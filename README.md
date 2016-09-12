#Quiz App Intro to ES2015/2016/2017

This is intended as a simple, example-based introduction to coding with some of the features from the newer editions of Ecmascript. Some aspects of the application will be there simply to illustrate points about the language and to exercise particular features. Some parts of this repository won't have much to do with the application at all, as they're just there to show as clearly as possible how some point of syntax happens to work. Feel free to borrow and steal, but remember you are doing so at your own risk.

##Tooling##
To even begin to get ES2015 and up to work in browsers, you'll need to use a transpiler. We're using [Babel](https://babeljs.io/), which is kind of the gold standard for transpiling Ecmascript. You may run into other transpilers and there are a variety of systems for loading in dependencies and getting your application ready for delivery. For the most part, though, these are going to wind up using Babel for the transpile step.

Babel requires a fair amount of setup, as its philosophy is geared more toward being flexible than a lot of out-of-the-box wow factor. If you look in `package.json`, there's a bunch of dependencies babel needs to know how to transpile the code we're making. There's also a polyfill plugin, and a plugin for making dependencies load in a way that will be a bit more intuitive for anyone who has used Node.

Besides transpiling, we're going to need to bundle up our dependencies to send down to the browser. There are lots of approaches we could choose for doing this. The simplest, most common no-frills option is [Browserify](http://browserify.org/).

##`let`, `const`, `=>`##

##Iterating##

##Template Strings##

##Classes and Generators##

