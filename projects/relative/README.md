# Relative

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Code scaffolding

Run `ng generate component component-name --project relative` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project relative`.

> Note: Don't forget to add `--project relative` or else it will be added to the default project in your `angular.json` file.

Add the new components on `publish-api.ts`.

Change the version on `package.json`.

## Build

Run `npm run build:lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `npm run build:lib`, go to the dist folder `cd dist/relative` and run `npm publish --access public`.

## Running unit tests

Run `ng test relative` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Using the styles

Add new global styles on angular project configuration 'projects/my-project-name/architect/build/options/styles' with this "node_modules/@ferranpetit/relative/src/assets/base.css"


## Link the library

Navigate with `cd dist/relative` use `npm link` there, then you move into your project and run `npm link @ferranpetit/relative`.

If you want to see the change you should use `nx build relative --watch` on library base location directory.