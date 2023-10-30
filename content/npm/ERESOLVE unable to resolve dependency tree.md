
Hi, This is a group of resources if you’re facing an error while trying to install a npm package in your project.

````javascript
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: nexttwin@0.1.0
npm ERR! Found: react@17.0.1
npm ERR! node_modules/react
npm ERR!   react@"17.0.1" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^16.8.0" from react-hook-mousetrap@2.0.4
npm ERR! node_modules/react-hook-mousetrap
npm ERR!   react-hook-mousetrap@"*" from the root project
npm ERR!
````

If you don’t know what’s going on, then please know more about

1. [About semantic versioning](https://docs.npmjs.com/about-semantic-versioning)
2. [What's the difference between dependencies, devDependencies, and peerDependencies in NPM package.json file?](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencie)
3. [npm install —legacy-peer-deps vs —force](https://www.linkedin.com/pulse/npm-install-legacy-peer-deps-vs-force-shaharyar-saleem?utm_source=share&utm_medium=member_ios&utm_campaign=share_via)

So check all the links above and now you’ll have a better understanding of what’s happened and how to fix it.