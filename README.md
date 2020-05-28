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

Made recipe.service.ts injectable. Shopping-list service was injected into recipe service (we can use shopping-list service inside recipe service). So we can add the ingredients in the recipe component to the shopping list directly.


## Project-Routing
Created routing between pages. 
Created routing relationship using the header between shopping list page and recipe page.
Created a recipe-start component as child of recipe component.
Modified recipe-detail component as a routing child of recipe component to display recipe detail section using routing. Each recipe detail component has an id which is the index of the recipe in the array. The id is set to params id value. So that the url has been set up.
In recipe-item component, we added a routerlink with index to the item so that the page can be routed to recipe detail. The index was received from recipe-list component.

In recipe-list component, got new recipe button working using router.navigate. In recipe-detail component, got edit recipe button working using router.navigate.


## Project-Observables
Replaced event emitter in two services with subject. Replaced emit() with next().
Subject is more active. We can actively call next() from outside.

## Project-FormControl
Replaced the form in the shopping-edit component with template-driven form using ngSubmit, ngForm, ngModel.
Created shopping list update, delete and clear button functionalities by modifing shoppingListService code.
Implemented all the buttons in recipe-edit and recipe-detail component including new recipe, edit recipe, delete recipe, save, cancel, add ingredient and so on.
For new recipe and edit recipe buttons, reactive form module was mainly used.



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
