# SDG Code Test

Hey this is my Code Test for SDG created with **node and gulp**.
A small landing page with JS, Sass and HTML5.

This Kit includes an HTML template engine, the SASS preprocessor and a local server that allows you to automate tasks to develop more comfortably.

In the Kit there are 3 types of files and folders:

- The files that are loose in the repository root, such as gulpfile.js, package.json ... They are the project's configuration.
- The `src /` folder: these are the files of the website, such as HTML, CSS, JS ...
- The `public /` and `docs /` folders, which are automatically generated when we start the project. The Kit reads the files inside `src /`, processes them and generates them inside `public /` and `docs /`.

## Quick Start Guide

> **NOTE:** You need to have [Node JS] (https://nodejs.org/) installed to work with this Project:

### Steps to start the project:

Once we have installed the dependencies, we are going to start the project. ** The project must be started every time you start programming. ** To do this, execute the command:

bash
npm start
`` ''

This command:

- **Open a Chrome window and show your web page**.
- Also **observe** all the files in the `src/` folder, so that every time you modify a file **it refreshes your page in Chrome**.
- It also **processes the HTML, SASS / CSS and JS files and generates and saves them in the `public/` folder ** For example:

  - Convert SASS files into CSS.
  - Combine the different HTML files and group them in one or more HTML files.

## Folder structure:

```
src
 ├─ js
 |  ├─ index.js
 |
 ├─ scss
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 └─ html
    └─ intex.html
```
