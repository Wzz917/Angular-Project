# MyApp

## Project-Component
Created components for shopping list and recipes including shopping-list, shopping edit, recipes, recipe-list, recipe-detail, recipe-item and header.

## Project-Data Binding
Created data-binding and passed data between components.
header: passed 'shopping-list' or 'recipe' string up to app.component.ts. (app.component.ts determines what to display based on passed string *ngIf)
recipe-item: passed void up to parent recipe-list. 
             received recipe object from parent recipe-list.(list/display)
             
recipe-list: passed recipe object down to child recipe-item.
             passed recipe object up to parent recipe.
             received void from child recipe-item. (item clicked -> Trigger the data-passing from recipe-list to recipe)

recipe-detail: received the recipe object from parent recipe which is passed from recipe-list.(Display the recipe detail of the object)

recipe: received the recipe object from child recipe-list.
        passed the received recipe object down to recipe-detail for display.

shopping-edit: passed ingredient object up to parent shopping-list (user input as ingredient object)

shopping-list: received the ingredient object from child shopping-edit (push the object to the list and Display the list)


## Project-Directive
Created a directive called dropdown.directive.ts to build dropdown buttons in header and recipe detail. 
Remeber to add the directive to the app.module.ts.

## Project-Service
Created shopping-list.service.ts and recipe.service.ts to manage shopping list and recipes components. (Replaced some data-binding functionalities)
Passed the recipe object from recipe-item component directly to recipe component.
Passed the ingredient object array from shopping-edit component to shopping-list compoent to update the ingredient objects array.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

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
