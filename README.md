# Random Number Generator

This is a simple JavaScript application that generates a specified number of random numbers within a given range.

## Features

- Generate a specified number of random numbers within a given range.
- Option to generate only unique random numbers.
- Validation to ensure the range is valid and the number of values to generate is a positive number.

## How to Use

1. Open the application in a web browser : https://oluchukwucatherineobi-njoku.github.io/Random-Number-Generator/
2. Enter the minimum and maximum values of the range in the form.
3. Enter the number of random numbers to generate.
4. Check the "Unique" checkbox if you want a guarantee that all generated numbers are unique.
5. Click the "Generate" button to generate the random numbers.

The generated numbers will be displayed on the page.

## Code Overview

The main JavaScript code is in the `index.js` file. 
It adds an event listener to the form submission event. 
When the form is submitted, it prevents the default form submission action, 
gets the input values from the form, validates the inputs, and generates random numbers.
