# What is JavaScript?

- Dynamic Pages
- Interactive
- Client side (Browser) as well as Server side (Node Runtime Environment)
- Scripting Language
- Asynchronous
  > Libuv Lib -> C++ Thread Pool
  > Browser -> WebWorkers / different thread environment
- Single Threaded - T1
- I/O Non Blocking
- Event Loop - T1
- Event Driven
- Light-weight
- High Level
- Garbage Collection
- Compiled and create Abstract Syntax Tree (AST) and then interpreted

## Dealing Async JavaScript

- Callbacks: functions supplied as parameter to another function
- Promises: placeholders for future value
- Observables: stream of events

### Async Code in JavaScript

- MicroTask: Promise, queueMicrotask()
- MacroTask: Timer, XHR, Sockets, I/O

### JavaScript Full Stack (RAD)

- MEAN: Mongo Express Angular Node
- MERN: Mongo Express React Node
- MEVN: Mongo Express Vue Node

## NoSQL Database

- Document : Mongo
- Column : Cassendra
- Key-value : Redis
- Graph : Neo4

### Mongo :

- JSON/BSON Document

### JSON: Format for exchanging the data

### Web Application Frameworks for NodeJS Platform

- Express
- NestJS
- Koa
- Hapi
- SailsJS
- Kraken
- NextJS

### JavaScript Datatypes

- Primitive Types : String, Number, Boolean, Symbol
- Reference Types : Objects, Array, Date, Function

### Shallow Copy and Deep Copy

## ES6+ Features

- Arrow functions =>
- Rest/ Spread Operator (...)
- Destructuring
- Template Literals (``)
- Block Scoping (let / const)
- Default Parameter
- Promises - placeholder for future value
  > then...catch
  > async...await
  > Promise API - Static Methods
  - all
  - allSettled
  - race
  - any
  - resolve
  - reject

---

# TypeScript

## Custom Types

- type keyword
- classes
- interfaces

## TypeScript Project

> npm create vite@latest
> npm run dev

## TypeScript Concepts

- Types in TS
- Class
- Generics: function, classes, interfaces

## Decorators

- Classes : @Component(), @Directive(), @Pipe(), @Injectable(), @NgModule()
- Methods: @HostListener()
- Properties: @Input(), @Output(), @HostBinding(), @ViewChild()
- Parameters: @Skip(), @Host(), @Optional()

## Modules

- creates local scope
- avoids global pollution
- modular approach
- import / export the functionality

# JavaScript Libraries and Frameworks

- Angular\* (latest): Signals, effects, standalone components, SSR, SSG, Google Team

  > SPA
  > Form Validation
  > Template oriented
  > Components
  > Moduler Approach
  > 2 way data binding
  > DOM Manipulation
  > State Management
  > Angular Material Components
  > Server Side Rendering
  > MVC Pattern
  > Animation
  > Shadow DOM (Smaller part of Actual DOM- DOM Encapsulation)
  > AoT (Ahead of Time) Compiler (by default): 40% of build size
  > Tree-shaking : removing unused code from the app; final build with less size
  > Load faster on UI/Browser
  > Ivy Renderer
  > ngcc

- AngularJS (v1.x): Library; 2011
- React: 35kb, Library, render the UI quickly, Virtual DOM, Diffing Algo, Reconciliation Process, State, Props, Component based architecture, Facebook Team

  > SPA: react-router (20kb)
  > Form Validation : react-hook-form, formik, joe, superstruct etc
  > State Management: react-redux

- NextJS : Server-side framework for React App
- Vue Framework : 'Evan You'. Progressive Framework, template oriented, Virtual DON, Components, State Management, Form Validation, DOM Manipulation, 2 way data binding etc
- jQuery: Library - DOM Manipulation, AJAX, Animation
- KnockoutJS Libray: MVVM Pattern; efficient for 2 way data binding
- BackboneJS Library: MVC Pattern at client side
- Bootstrap: Responsive Web Development; Components, CSS Classes
- Stencil: Component based, VDOM
- Polymer: Rich Web Components
- D3: Charts

- NodeJS: Server side platform
- ExpressJS: Server side web application framework

---

# ANGULAR

## Angular CLI Tool

> npm install @angular/cli@17 -g
> ng version
> ng new frontend --no-routing --no-standalone
> cd frontend
> npm start | ng serve

Angular Workspace -> Multiple Angular Apps / Libraries

### Angular Building Blocks

- Component : ng g c components/users
- Directive
- Pipe
- Service
- Module

## Atomic Design Principle

- Atom : Button, Input field
- Molecules: combo of atoms. eg. Search Bar - One input field + one button
- Organism: combo of molecules. eg. Navigation Bar
- Template: combo of organism. eg. Form
- Page: a complete page

## Installing Bootstrap

- npm install bootstrap
- update style property under build option in angular.json

> "./node_modules/bootstrap/dist/css/bootstrap.min.css"

- Restart Angular Dev Server

## Data Binding

- Property Binding
- Event Binding
- Two way data binding (Banana in the box [(ngModel)] - FormsModule )

## Nested Component Communication

- Parent to Child => PB + Input
- Child to Parent => EB + Output + EventEmitter

## Content Projection: Slot API

## Component Life Cycle

- ngOnChanges
- ngOnInit
- ngDoCheck
- ngAfterContentInit
- ngAfterContentChecked
- ngAfterViewInit
- ngAfterViewChecked
- ngOnDestroy

## ViewEncapsulation

- Emulated (default): Both Global and Local CSS will be applied but priority given to local CSS rules
- ShadowDOM : full encapsulation; Global CSS will not affect local template, only Local CSS rules will be applied
- None: No encapsulation; local CSS will affect other components template as well. Global CSS will be applied

### View Encapsulation Scenerio

- Comp A : ShadowDOM - h1 {color : blue} -> h1 element
- Comp B : None - h1 {color : green}

---

# Directive - markers available on UI

- Component
- Structural: *ngFor, *ngIf, \*ngSwitch / @for, @if, @switch
- Attributes: ngStyle, ngClass

- ng g d directives/better-highlight
  > ElementRef : Reference of DOM native Element
  > Renderer2 : safe environment / browser agnostic way for accessing the DOM Element
  > @HostListener() : Listens to the events ocuured on the host element
  > @HostBinding() : binds the host element attribute with the property available in the class

# Pipes: format the UI

- ng g p pipes/country-code

## Pure and Impure Pipe

let user = { name : "Monica" }

user.name = "Joey" // Impure Change

user = { name : "Rachel" } // Pure Change

let friends = ["Monica", "Ross", "Rachel"]

frineds.push("Chandler") // Impure Change

friends = ["Monica", "Ross", "Rachel", "Chandler"] // Pure Change

# Forms

## Template Driven Form

- Loaded asynchronously
- Vanilla HTML5 validation
- Validation are imposed inside template
- Suitable for small / mid-size forms
- Hard to test
- Static Form

## Model Driven Form / Reactive Form

- Angular State and CSS Classes
- Synchronous Form
- Validations are imposed on class model
- Easy to Test
- Custom validators
- Suitable for dynamic forms
- Angular Validations

## Form State and CSS Classes

- ngTouched / ngUntouched
- ngPristine / ngDirty
- ngValid / ngInvalid

### More Form Elements to look for-

- Radio Buttons
- Checkboxes
- Drop down

# Services : Injectable / DI

- DIP: Dependency Injection Principle
- SRP: Single Responsibility Principle

- ng g s services/data

## Tree-shaking

- Removing the unused code from the final build
- Reduce the final build size
- Bootstrap app quickly in the browser

### ProvideIn Values - Self-registration of Service

- root : Root of the App. Singleton instance will be available throughout the app
- platform : Apps running under the same platform will share the same singleton service instance
- any : Lazy loaded modules

### DI Injector Tree

- Root Module: All components alongwith all services will receive the same singleton instance
- Component Level: Same component as well as all the nested children component will receive the same singleton instance

### DI Modifiers - changes default DI behaviour

- @Self(): search only for current component. Don't look for any upward component/module
- @SkipSelf(): skips current component to search for service registration
- @Host(): search only self component as well as parent component. No further lookup needed.
- @Optional(): makes the service optional. Avoids Null Injector Error by making service as optional

# RxJS

rxjs.dev

## Observables

- series of events
- Lazy in nature (unless consume)
- Both Async and Sync
- Powerful operators support
- Can be cancelled
- Stream of events
- subscribe() to consume

## Promise

- One shot (Resolve / Reject)
- Eagerly executed
- Always async
- No Operators
- Can't be cancelled
- then()...catch() / async...await to consume

### Subjects

- Both Observer and Observable
- Multi-casted / Multiple subscriber

#### Types of Subject

> BehaviorSubject : Initial value is supplied. Last emitted value becomes the seed value for the subsequent subscriber
> ReplaySubject: replays n number of last emitted events
> AsyncSubject: last emitted value upon completion

# JSON-SERVER: Free fake REST API Server

- [sudo] npm install -g json-server@0.17.4
- Create db.json file
- json-server --watch db.json

# HttpClient -> GET, POST, PATCH, DELETE

- Expenses App (CRUD app)

- Streamlined error handling
- Typed Request and Response
- Interceptors
- Observable API

## Interceptors - intercet the outging request and incoming responses

## Global Error Handler

# Single Page Apps

- Complete app is sent to the browser in one go
- Very fast
- Less network bandwidth
- Better UX
- AJAX
- HTML5Mode: Regular Mode
  > eg. http://www.example.com/index/first

## Router Terminologies

- Routes: to create route configuration
- RouterModule (forRoot / forChild): supply route config to angular app
- RouterLink: creates links, preventing the page reloading
- RouterOutlet: loads the component template on UI
- Router Service: programmtically navigate the user
- ActivatedRoute Service: current path available in the URL
- Guards:
  > CanActivate : allow / disallow to enter into route
  > CanDeactivate: allow/disallow to leave the route
- Resolve: pre-populate data into route, can be accessed using 'ActivatedRoute Snapshot Data' property

## Nested Routing / Child Routing

http://localhost:4200/courses
http://localhost:4200/products/add-course
http://localhost:4200/courses/{courseId}
http://localhost:4200/products/{courseId}/edit

### Requirement

- Courses API on JSON Server
- Courses Service to make remote server call
- Courses Component
- AddCourse Component
- CourseDetails Component
- CourseEdit Component
