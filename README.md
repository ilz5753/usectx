# @ilz5753/usectx

`@ilz5753/usectx` is a small, customizable TypeScript library that provides a React hook (`useCtx`) for retrieving context values and throwing errors when the retrieved value is null.

## Installation

You can install the package using npm:

```bash
npm install @ilz5753/usectx
```

Or with yarn:

```bash
yarn add @ilz5753/usectx
```

## Usage

```tsx
import useCtx from "@ilz5753/usectx";

import MyContext from "./MyContext";

const Component = () => {
  const value = useCtx(MyContext, "Context value is null");

  // Use the value in your component
};
```

## Parameters

- `ctx`: The React context from which you want to retrieve the value.

- `errorMsg`: A custom error message to be thrown if the context value is null.

## Return Value

The retrieved value from the context. If the value is null, an error will be thrown with the specified error message.

> **Note**
>
> This hook should be used within a React component. It relies on the React useContext hook to retrieve the context value and uses the Lodash isNull function to check if the value is null.
