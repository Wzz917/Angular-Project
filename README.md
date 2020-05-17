# Demoapp

The project is built to learn Angular step by step. The project contains small pieces of code such as components, directives, service, routing, NGRX(reducer, action , state) and so on. 

For NGRX part, reducer.ts and action.ts have been implemented for product-list component. Store module also has been added to app.module.ts which is the only store of the entire application. The action such as AddProduct automatically reaches all the reducers that store knows. In this case, the store only contains production-list reducer.  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
