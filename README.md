### Starter kit

Personal project aiming to be a simple starting point for creating React applications in different scenarios.  
there is the excellent create-react-app but sometimes you want to use something of or own, lighter that you understand
and control better, or you simply cannot use CRA in a technical test, and you need a neat and quick start.
By starting a project from this blueprint you should just be able to have all those tools setting properly and working
together correctly.
this is the base of technology configure together:
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/) // TODO
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [node-sass](https://www.npmjs.com/package/node-sass)

in the future the goal is to create variation of this base for different scenarios such as
- [Redux](https://redux.js.org/) // TODO
- [React-router](https://github.com/ReactTraining/react-router) // TODO
- [express server](https://expressjs.com/) // TODO
- [graphql](https://graphql.org/) // TODO
- [cypress](https://www.cypress.io/) // TODO


this is build after following some tutorials
list of the main tutorial here:    
[Testing javascript](https://testingjavascript.com/)   
[Webpack fundamentals](https://frontendmasters.com/courses/webpack-fundamentals/)  
[Webpack performance](https://frontendmasters.com/courses/performance-webpack/) 

books
[survivejs webpack](https://survivejs.com/webpack/preface/) 

Article
[webpack prefetch & preLoad](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)

#### TODO next
- add Jest
- add react router + jest utils
- add redux + jest redux setting
- add cypress
- add express
- add testing for Node, and server
- add graphql + jest graphql testing utils

- add Typescript version for each project branch

#### Notes on Webpack
## code Splitting
Creating at build time separate chunks of JS that will only be loaded asynchronously

"Code splitting exists to solve performance, and to solve the number 1 problem of performance, which is the amount of
 JavaScript you ship on your initial experience"

what does webpack under the hood???
it takes your entry point,   
it passes it to a resolver (just making sure the file exists)   
it reads the source code, parse it and look for the dependency statements (like imports, requires, the commonJS
, AMD syntax etc.)   
for code splitting 
when webpack spots dependencies instead to include it in its main graph it will create a new separate bundle
for that chunk.  
 
 dynamic import = import() (it is a web specification [whatwg/loader](https://github.com/whatwg/loader))   
 this allows you in a browser to just at run time dynamically fetch any piece of JS and use it like a module.

there are 2 types of code splitting
- static 
heavy libraries are a good use cases, you need 3js but not with initial load
anything temporal, if it is not there initially, it appears and then go away (modal, tooltip)
anything that's not visible on the page and will conditionally load (even things like scrolling down the page)
Routes, you can code split for each route and serve only what is needed

- "dynamic"" (in quote cause in webpack nothing is purely dynamic, everything it does is at build tine.)
example: const getTheme = (themeName) => import(`./src/themes/${themeName}`)
what's happening ?   
webpack will use the static path "./src/themes/" go to that folder and, it will find all the modules in this partial
 path. then it will create a bundle for each one of them.
    
### The Preset config
the point of presets is that you can add isolated functionality that allows you to experiment or test.
you can just add on with a flag or add on with an extra script.

## Ideal Performance Budget
 <= 200kb (uncompressed) Initial JS [total],   
 <=100kb  (uncompressed) Initial CSS [total],

Initial = the amount of JS/CSS that you ship to get your initial experience loaded 
 
 90% code coverage (only 10% code unused) to be check on the Chrome dev tool (cmd + P)   
 so that's mean, 90% of the code your are shipping for you initial experienced is actually used    
  !!!! You need a full source mapping turned on to have a useful feedback on the chrome dev tool to see what part
   of the code has not been used.

#### Note on Jest
