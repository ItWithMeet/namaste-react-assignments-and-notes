## Q.1 -> What is `Emmet`?
## Answer: 

Emmet is a tool which gives you basic structure/skeleton of code to you. You don't need to write long code and just using some command you can generate a skeleton of repetivie code. Emmet saves lot of time.

`For E.G:`
you can generate basic html 5 code using just ```html:5```. VS code have emmet built in.

## Q.2 -> Difference between a `Library` and `Framework`?
## Answer: 

A library is a collection of pre-written code (functions, classes, modules, etc.) that developers can use in their own programs, whereas a framework is a more comprehensive and structured set of tools, guidelines, and conventions that dictate the overall architecture and flow of an application.

It typically provides specific functionalities or features that can be called by the developer's code. Unlike libraries, which are used for specific tasks, frameworks provide a scaffolding for the entire application.

Libraries do not dictate the overall structure or flow of the application; they are essentially tools that developers use to perform specific tasks. Frameworks often impose a specific structure on the application and may provide inversion of control, where the framework manages the flow of control.


## Q.3 -> What is `CDN`? Why do we use it?
## Answer: 

CDN stands for Content Delivery Network.
A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.

CDNs boost website speed, handle traffic spikes, optimize bandwidth, enhance security, and enable global content delivery for an improved user experience. CDNs play a crucial role in optimizing website performance, handling traffic efficiently, reducing costs, enhancing security, and providing a superior user experience on a global scale.

## Q.4 -> Why is `React` known as `React`?
## Answer: 

React is a JavaScript library for building user interfaces. It was developed by Facebook, and the name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.” The library was designed to “react” to changes in data.

## Q.5 -> What is `cross-origin` in the `script` tag?
## Answer: 

The crossorigin attribute provides support for CORS , defining how the element handles cross-origin requests. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

The crossorigin attribute, valid on the `<audio>, <img>, <link>, <script>`, and `<video>` elements, provides support for CORS, defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element"'"s fetched data. Depending on the element, the attribute can be a CORS settings attribute.


## Q.6 -> What is the difference between `React` and `ReactDOM`?
## Answer: 

`React` is a JavaScript library for building `user interfaces`. `ReactDOM` is the JavaScript library that allows React to `interact with the DOM`.

React is a` declarative, efficient, and flexible JavaScript library for building user interfaces`. It lets you compose complex UIs from small and isolated pieces of code called “components”.

ReactDOM is the `glue between React and the DOM`. It takes React elements and updates the DOM accordingly.

React provides the tools and concepts to define component-based user interfaces, while ReactDOM handles the task of rendering those interfaces in a web environment.

## Q.7 -> What is difference between `react.development.js` and `react.production.js` files via `CDN`?
## Answer: 

The development link is typically used during the development phase of your application.
It includes additional debugging tools, warnings, and helpful error messages.
It is larger in file size and may negatively impact the performance of your application.
It is not optimised for production use.

e.g:
```
<!-- React Development Version (includes warnings) -->
<script crossorigin src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
```



The production link is meant for deploying your application in a production environment.
It excludes development-specific tools, warnings, and error messages.
It is smaller in file size, which improves the performance of your application.
It is optimized for production use.

e.g:
```
<!-- React Production Version (minified) -->
<script crossorigin src="https://unpkg.com/react@16.13.1/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js"></script>
```

## Q.8 -> What are async and defer?
## Answer: 

Async and defer are attributes in JavaScript that tell the browser to continue loading a page while scripts are being downloaded. Both load JavaScript asynchronously without blocking render. 
Here are some differences between async and defer:

`Async`:
Scripts execute as soon as they are downloaded, which is not necessarily in the order in which they appear in the document. Async is a good choice because it still loads and executes the code as soon as possible.

`Defer`:
Scripts execute after the document has been parsed. Defer preserves the order and ensures that scripts execute in sequence at the end of the page load, just before the DOMContentLoaded event. Defer also means that the code will run slightly later than with async. 
