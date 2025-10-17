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

# Directive

- ng g d directives/better-highlight
  > ElementRef : Reference of DOM native Element
  > Renderer2 : safe environment / browser agnostic way for accessing the DOM Element
  > @HostListener() : Listens to the events ocuured on the host element
  > @HostBinding() : binds the host element attribute with the property available in the class

# Pipes

- ng g p pipes/country-code
