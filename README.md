# ReactJS Quiz App
A simple ReactJS Quizz application to learn about react

-------

For This I'm using [ES2015][1] and [JSX][2] syntax, both are not supported by the browsers, so we need to precompile them before giving them to browser.

To Auto compile the ES2015 and .jsx format I'm using the [babel][3] which converts the .jsx and es2015 script to plain javascript.

## Installing [babel command line tool][4] using npm
    npm install --global babel-cli
## Install babel-preset-react and babel-preset-es2015
    npm install babel-preset-react
    npm install babel-preset-es2015

## To autocompile the files which we change, run a babel watcher
    babel --watch js --extensions .jsx --out-dir build
  This compiles all the files in ```js``` folder with ```.jsx``` extension to ```build/*.js```
## Example:
    js/app.jsx --> build/app.js
These preset options are present in ```.babelrc``` file

[1]: https://babeljs.io/docs/learn-es2015/
[2]: https://facebook.github.io/react/docs/jsx-in-depth.html
[3]: http://babeljs.io/
[4]: http://babeljs.io/docs/usage/cli/
