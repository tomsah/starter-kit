# Starter kit
### motivation
This is a personal project, where I try gather all the latest of my knowledge, tips and ticks about the React ecosystem
,that I gather through work, friends, reading books, articles and tutorials.   
I am trying to create a solution that works well for me. That I can understand and own.       
The goal is to provide some ready-made, React environment with linting, formatting, testing, production ready
build with webpack, all set, configured and ready to go.  
To be able kick start React project fast and with confidence. 

The folder structure, naming convention, choice of package and technologies are obviously opinionated. 
However, this is one structure that works well for me. 
This should with time evolved, improved and get updated as often as I can.

## how to use it
 - git clone
 - rename starter-kit folder ``` mv starter-kit [project-name]```
 - cd to the project-name folder ``` cd [project-name]```
 - reset git to your project repo 
 -     rm -rf .git 
       git remote add origin https://github.com/[repo-name]
 - cd to the base folder ``` cd base``` (this need changing, unnecessary step)
 - run ```npm i```
 - for dev run ```npm run dev``` => it will launch the example app
 - for prod run ``` npm run build```
 
 ## Folder Structure
 
 This is the folder structure after install
 ```
 base/
     build-utils/ => all webpack config are living here
         presets/ => webpack presets are living her
             webpack.analyze.js // analyze of the build display in a graph
             webpack.compress.js // compress build when used
         loadPresets.js // load webpack presets
         records.json // json of stats from the last webpack build
     node_modules/
     Notes/
         general-notes 
     public/
         index.html
     src/
         shared/ => code for the app
             __server_tests__/ => test code for server should be here if needed or removed
             __tests__/ => test files for js files at this folder level
                 utils.js // test code for the utils file
             assets/ => assets folder such as fonts, svg, gif etc...
                 images/ 
             components/ => ui components code
                 example/ => Ugly dummy app with test to illustrate, TO BE DELETED
             server/ => code for server should be here if needed or TO BE DELETED
             styles/ => Sass files
             utils.js // Utils functions for the main app
         App.js
         index.js
         main.scss
     test/ => jest helpers and test utils
         file-mock.js // mock file utils
         jest-client.js // jest config for client test
         jest.lint.js // jest config for jest running eslint
         jest.server.js // jest config for server test
         jest-common.js // jest config shared by client and server 
         style-mock.js // jest util to mock css module, can be removed if not needed
     .babelrc.js // babel config file
     .eslintrc.js // eslint config file
     .gitignore // file to be ignored by git
     .huskyrc// husky setting (run some check before commit)
     .lintstagedrc // lint staged config (run linter only on file that are going to be commited)
     .prettierrc // prettier config (formatting )
     .travils.yml // travis config for ci integration
     jest.config.js // jest config entry point
     package.json // mother of all truth
     postcss.config.js // post css config file, (uglyfy css for prod)
     webpack.config.js // webpack config entry point
 README.md // you are here!!
 ```
## Repo organisation   
Master branch will be the simplest branch of all with only React & jest.
That way it will be easier to decline and extend with other technologies to other branch.

all projects are not in need of redux, graphQl, router or E2E testing. To avoid having unnecessary code and packages
I will keep each branch with its own stack of technology added to react.

- master => React + Sass + Jest + React testing Library 
- Router => React + Sass + React-router + Jest + React testing Library // TODO
- Redux => React + Sass + Redux + Jest + React testing Library // TODO
- graphql => React + Sass + graphql + Jest + React testing Library  // TODO
- Full =>  React + Sass + React-router + Redux + Jest + React testing Library + cypress // TODO
- Express/Redux => React + Sass + React-router + express router + Redux + Jest + React testing Library + cypress // TODO
- Express/graphql => React + Sass + React-router + express router + graphql + Jest + React testing Library + cypress // TODO

## Technologies used
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/) 
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Travis](https://travis-ci.com/)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [React-testing-library](https://testing-library.com/docs/react-testing-library/intro)
- [Redux](https://redux.js.org/) // To be added
- [React-router](https://github.com/ReactTraining/react-router) // To be added
- [express server](https://expressjs.com/) // To be added
- [graphql](https://graphql.org/) // To be added
- [cypress](https://www.cypress.io/) // To be added

##TODO next
- add Jest and React testing library WIP
- add react router + jest utils
- add redux + jest redux setting
- add cypress
- add express
- add testing for Node, and server
- add graphql + jest graphql testing utils
- add Typescript version for each project branch

## Reference
###Tutorial  
[Testing javascript](https://testingjavascript.com/)   
[Webpack fundamentals](https://frontendmasters.com/courses/webpack-fundamentals/)  
[Webpack performance](https://frontendmasters.com/courses/performance-webpack/) 

####Books
[survivejs webpack](https://survivejs.com/webpack/preface/) 

###Articles
[webpack prefetch & preLoad](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)



