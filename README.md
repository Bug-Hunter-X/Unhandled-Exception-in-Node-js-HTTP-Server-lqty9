# Unhandled Exception in Node.js HTTP Server

This repository demonstrates an example of an unhandled exception in a Node.js HTTP server and how to properly handle it.

## Bug

The `bug.js` file contains a Node.js HTTP server that throws an unhandled exception.  This causes the server to crash without gracefully handling the error.

## Solution

The `bugSolution.js` file demonstrates how to use `try...catch` blocks to handle exceptions and prevent the server from crashing.  It includes logging of the error for debugging purposes, and sends an appropriate error response to the client.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` to see the server crash.
4. Run `node bugSolution.js` to see the server handle the error gracefully.