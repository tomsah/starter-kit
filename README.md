### Starter kit

Personal project aiming to be a simple starting point for creating React applications in different scenarios.  
there is the excellent create-react-app but sometimes you want to use something of or own, lighter that you understand
and control better, or you simply cannot use CRA in a technical test, and you need a neat and quick start.
By starting a project from this blueprint you should just be able to have all those tools setting properly and working
together correctly.
this is the base of technology configure together:
- React
- Webpack
- Babel
- Jest
- [Eslint](https://eslint.org/)
- Prettier
- Husky
- sass

in the future the goal is to create variation of this base for different scenarios such as
- Redux
- React router
- with an express server
- graphql
- with cypress


this is build after following some tutorials
list of the main tutorial here:    
[Testing javascript](https://testingjavascript.com/)   
[Webpack fundamentals](https://frontendmasters.com/courses/webpack-fundamentals/)  
[Webpack performance](https://frontendmasters.com/courses/performance-webpack/)  


### Ideal Performance Budget
 <= 200kb (uncompressed) Initial JS [total],   
 <=100kb  (uncompressed) Initial CSS [total],

Initial = the amount of JS/CSS that you ship to get your initial experience loaded 
 
 90% code coverage (only 10% code unused) to be check on the Chrome dev tool (cmd + P)   
 so that's mean, 90% of the code your are shipping for you initial experienced is actually used    
  !!!! You need a full source mapping turned on to have a useful feedback on the chrome dev tool to see what part
   of the code has not been used.
   
## code Splitting
Creating at build time separate chunks of JS that will only be loaded asynchronously

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
