# jsx-multiline-paddings

> This rule requires paddings between multiline object properties

## Examples

```jsx
// ✅ Valid
const someObject = {
  firstMultiline: {
    someFunction: () => {
        return 'yay!'
    }

    someNull: null
  },

  test: 123,

  multilineTest: {
    nestedSingleLine: "some text",

    nestedMultiline: {
      stopDiveToDeep: true,
    },
  },

  test: "other some text",

  lastMultiline: [true],
};
```

```jsx
// ❌ Invalid
const someObject = {
  firstMultiline: {
    someFunction: () => {
        return 'yay!'
    }
    someNull: null
  },
  test: 123,
  multilineTest: {
    nestedSingleLine: "some text",
    nestedMultiline: {
      stopDiveToDeep: true,
    },
  },
  test: "other some text",
  lastMultiline: [true],
};
```
