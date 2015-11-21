The below command uses the presets flag which indicates that we want to transpile ES2015. The output is piped to a new file called app.js

babel app.js.es6 --presets es2015 > app.js

The above command can be made little shorter by writing the presets to a file called .babelrc. This file will be automatically read by the babel command everytime we run it from the root folder.

babel app.js.es6 > app.js
