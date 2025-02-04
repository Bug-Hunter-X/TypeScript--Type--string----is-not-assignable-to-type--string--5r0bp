# TypeScript Type Error: Type 'string[]' is not assignable to type 'string'
This example demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.  The solution shows how to correctly handle this using type guards or by modifying the function signature.

## How to reproduce the bug:
1. Compile the `bug.ts` file using the TypeScript compiler.
2. Run the resulting JavaScript code.  You will see a type error indicating that the array cannot be assigned to the string type.

## Solution:
The `bugSolution.ts` file provides a solution using type guards.  This allows the function to correctly handle both individual strings and arrays of strings.  Alternatively, you can modify the function signature to accept an array of strings if that is the intended behavior.