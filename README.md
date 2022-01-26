# React/Redux Donderstarter

This boilerplate is designed to get you up and running with React/Router/Redux/Sagas workflow
The primary goal of this boilerplate is to provide a stable foundation upon which to build modern web applications.

## Table of Contents
1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Development](#development)
1. [Project Structure](#project-structure)
1. [Translations](#translations)
1. [Cypress](#cypress)

## Requirements
We are using LTS versions since are more stable

* node `16.13.2` or higher
* yarn `1.22.15` or higher

## Installation

After confirming that your environment meets the above [requirements](#requirements), you can create a new project based on `react-redux-donderstart` by doing the following:

```bash
$ git clone https://github.com/Cloudoki/react-redux-donderstart.git <my-project-name>
$ cd <my-project-name>
```

When that's done, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/).

```bash
$ yarn  # Install project dependencies (or `npm install`)
```

## Development

After completing the [installation](#installation) step, you're ready to start developing your App!


**All scripts at your disposal:**

|`yarn <script>`    |Description|
|-------------------|-----------|
|`dev`            	|Serves your app at [localhost:9000](http://localhost:9000)|
|`commmit`          |Runs `git-cz`, to help with commit conventions|
|`test`             |Opens cypress UI and test framework|
|`build`            |Builds the application to ./dist folder|
|`release`			    |Generates `CHANGELOG.md` file, bumps `package.json` version and creates tags from conventional commits - see [standard-version](https://github.com/conventional-changelog/standard-version) for more|

## Project Structure

We are using react latest version which uses react hooks, by this approach and since we no longer use the HOC approach, we are spliting the primary business logic components (old containers) in pages which seems more straightfoward. 

There are 2 plugins that can be merged if needed, that is `i18n for translations` and `cypress for testing`, the master branch does not have any plugin and its the minimal build.

```
.
├── dist                           # All build-related source code
├── .circleci                      # Circle CI sample build and deploy script
├── nginx                          # nginx config for docker file
├── cypress                        # Cypress main folder and configuration files
│ └── fixtures                      # Tests mock data
│ └── integration                   # Tests spec files
│ └── plugins                       # Custom plugins for cypress
│ └── support                       # Custom commands or presets for cypress
│ └── tsconfig.json                 # Typescript sub config for cypress
│
└── src                             # Application source code
    ├── index.html                    # Main HTML page container for app
    ├── index.tsx                     # Application entry point
    │
    ├── assets                        # asset files to be required
    ├── App                           # Main App entry point
    │   ├── index.tsx                   # Folder entry point
    │   ├── App.tsx                     # This is the main component before any route
    │   ├── PrivateRoute.tsx            # Private routing component checks auth or redirects
    │   ├── routes.tsx                  # App routes config and redux middleware for redirects
    │   ├── styles.ts                   # Component styling
    │   └── types.ts                    # Component types
    │
    ├── components                    # Global reusable components
    │   └── Component                   # Component folder
    │       ├── index.tsx                 # Component entry point
    │       ├── Component.tsx             # Component file
    │       ├── styles.ts                 # Component styling
    │       └── types.ts                  # Component types
    │
    ├── pages                         # Components with business logic
    │   └── Page                        # Component with business logic folder
    │       └── views                     # Bigger components might require to split views
    │       │    └── view_01                # View 01 folder
    │       │       ├── index.tsx             # Component entry point
    │       │       ├── Component.tsx         # Component file
    │       │       ├── styles.ts             # Component styling
    │       │       └── types.ts              # Component types
    │       │  
    │       ├── index.tsx             # Component entry point
    │       ├── Component.tsx         # Component file
    │       ├── styles.ts             # Component styling
    │       └── types.ts              # Component types
    │
    ├── constants                     # Global constants
    │
    ├── store                         # Redux store
    │   └── resourceName                # Stores are splited by resource
    │   │   └── actions                   # Redux action definitions
    │   │   │   ├── acton01.ts             # action definition file
    │   │   │   ├── acton02.ts             # action definition file
    │   │   │   └── types.ts               # actions types
    │   │   ├── reducer.ts              # resource reducer
    │   │   └── types.ts                # resource definition file
    │   │
    │   ├── combinedReducers.ts       # Combine all reducers in one place
    │   ├── combinedSagas.ts          # Combine all sagas in one place
    │   └── index.ts                  # Redux store bootstrap
    │
    ├── theme                       # Global styles and theme
    ├── translations                # App translations
    └── util
        ├── Router.tsx              # Custom React Router V6 to use with custom history object
        └── request.ts              # Fetch API handler
```

## Translations

Same boilerplate with `i18n` support is on this [branch](https://github.com/Cloudoki/react-redux-donderstart/tree/feat/translations). You can create a new project based on `react-redux-donderstart` with `i18n` support by doing the following:

```bash
$ git clone -b feat/translations https://github.com/Cloudoki/react-redux-donderstart.git <my-project-name>
$ cd <my-project-name>
$ git checkout master
$ git merge feat/translations
```

### Adding translations
You have a sample file in  `src/translations/english.ts`
Add a new language file to `src/translations/{language}.ts`

Currently we follow the page approach, but there might be some generic like buttons and titles the structure is as follows: 

```javascript
export const english = {
  generic: { // generic translations
    ok: 'ok',
    no: 'no'
  }
  login:{ // page 
    buttons: { // components
      login: 'Login', // translation 
      backToLogin: 'Back to login',
      resetPassword: 'Request new password',
      forgotPassword: 'Forgot password ?',
    },
    titles: {
      welcome: 'Welcome!',
      welcomeBack: 'Welcome back!',
      setPassword: 'Please set a new password',
      resetPassword: 'Request a new password',
      enterEmaiL: 'Please enter your e-mail address.',

    },
  },
}
```
Then you can add to the `index.ts` the new language file as follows:

```javascript
...
import { dutch } from './dutch.ts'

export default i18n
  .use(initReactI18next)
  .init({
    resources: {
      'en': { translation: english },
      // add here new file
      'nl': { translation: dutch }
    },
    fallbackLng: 'en',
  })
```

## Cypress
Cypress testing framework is used for integration testing, we follow the user behaviour testing flow, dont test implementation details! the app should be tested as how users see it and interact with it, you will find some samples in `cypress/integration/spec.ts`

### Adding new tests
Simply add a new spec file to  `cypress/integration/{name}_spec.ts`
You can find cypress apis [here](https://docs.cypress.io/api/table-of-contents)

Example login flow: 

```javascript
describe('Login', () => {
  it('should login and go to home page', () => {
    cy.visit('https://localhost.dev.io:9000/login')
    
    cy.get('input').should('have.length', 2) // we should have the email and password inputs
    cy.get('button').should('be.disabled', true) // the login button should be disabled

    cy.get('input').eq(0).type('John') // lets fill the username / email
    cy.get('input').eq(1).type('somepassword') // fill password
    
    cy.get('button').should('not.be.disabled') // the button should now be enabled

    cy.get('button').click() // login

    cy.url().should('eq', 'https://localhost.dev.io:9000/') // we should be redirected to home page
  })
})
```

### Running tests
Cypress has an UI so you can run the tests simply use the script `yarn test` and it will open the cypress UI.

When running on the CI the tests are going to run in cli mode you can also do it by using `yarn cypress run`