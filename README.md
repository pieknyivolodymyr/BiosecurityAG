# WebFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## The project architecture

### src - app - modules

The 'modules' folder is used for developing the main parts of the project. It consists of: shared, profiles, admin, api.

#### shared:

This is where components that will be used in different parts of the application are located: `footer`, `header`, and others (we will expand as the project develops)

#### profiles:

This block will contain the `main page`, `sign-in` and `sign-up` pages, as well as the `user's dashboard`. This is where the main user functionality will be located.

#### admin:

It will also consist of `sign-in`, `sign-up`, and an `administrator control panel`

#### api:

This is where services and other files intended for working with the server will be located

### src - app - enums

The 'enums' contains enumerations for organizing named constants, which facilitates understanding and avoids errors in the code.

### src - app - guards

The 'guards' folder contains files that contain implementations of guards, which control access to different parts of the application according to defined conditions and access rights

### src - app - interceptors

The 'interceptors' folder contains files that contain implementations of interceptors, which allow processing and modifying HTTP requests and responses before sending them to the server or after receiving them from the server

### src - app - interfaces

The 'interfaces' folder contains files with descriptions of interfaces used to describe the structure of data in the program.

### src - app - pipes

The 'pipes' folder contains files that contain implementations of pipes, which are used for data transformation in Angular applications

### src - app - store

The `store` folder contains files for managing the state of the application in Angular.

### src - app - ui

The 'ui' folder contains files for displaying components such as buttons, forms, and tables
