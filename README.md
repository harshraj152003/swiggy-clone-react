# Learning React 🚀
# MY NOTES ------>



# npm
- stands for Node Package manager
- Manage packages(Biggest Package Manager)

# When we want to make our code Production-Ready, We needed many more things:
like AUTHENTICATION , DATABASE CONNECTIVITY , UI Components , Utility func.
Instead of writing it from Scratch, We just install pre-built packages using npm.

# package.json : It is configuration for npm.

# package-lock.json : Manages exact version of each dependecies.

# (~) and (^) : Both are Imp , When u see this signs before Version.

# We did : npm install -D parcel 
# Here why -D?
Because there are 2 types of dependencies: 1. Normal 2. Dev(Development)
# (-D) stands for Development Dependency Here...


# node_modules folder -> It consists of many packages...
like to use parcel we need Parcel package..So parcel is our dependency...And for parcel as a project .May be something is dependency and for them something and so on....
this is known as
# TRANSITIVE DEPENDENCY

# Parcel
- Dev build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm - (Written in C++)
- Image Optimization
- Minification of files
- Bundling
- Compression of files
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking Algorithm - remove unused code
- Different dev and prod bundles

# React.createElement => Object => HTMLElement(render)
# JSX - is NOT HTML inside JS
- It looks HTML-like or XML-like.
- JSX (Transpiled, before it goes to JS engine) - PARCEL  - Babel.

# React Component :
- 1. Class-based Component - Old
- 2. Functional-based Component - New

# {data from api} - JSX sanitize and then pass?? What means? Cross-Site Scripting Attack?

# props(args)
# config-driven UI
# keys

# Types of import/default :
- default export/import

export default Component;
import Component from "path";

- named export/import

export const Component;
import {Component} from "path";


...
# React Hooks
    (Normal JS utility functions):
- useState() - Superpoerful State Variables
- useEffect()

# Reconciliation Algorithm(React16)
- Also known as ReactFiber.

# Diff Algorithm

# Virtual and Actual DOM

# Monolith and MicroService Architecture

# Optional Chaining
# Shimmer UI

# What will happen if we use useEffect() on some element in a component...Is it will re-render only that component...or the whole page? and how the const updated? BTS re-rendering makes it a new const variable? Give consize to the point note on this.


# onChange() and value=""



  // const fetchData = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5694398&lng=77.43705899999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

  //   const jsonData = await data.json();

  //   console.log(jsonData);

  // };