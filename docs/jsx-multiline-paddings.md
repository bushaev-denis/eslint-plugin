# jsx-multiline-paddings

> This rule requires paddings between multiline jsx statements

## Examples

```jsx
// ✅ Valid
<div>
  <h1>Some title</h1>

  <div className="bg-[#000000] text-white hover:bg-[#eeeeee]">
    Some multiline div
  </div>

  <h2>Other title</h2>

  <div className="bg-[#000000] text-white hover:bg-[#eeeeee]">
    Some multiline div
  </div>

  <div className="bg-[#000000] text-white hover:bg-[#eeeeee]">
    Some multiline div
  </div>
</div>
```

```jsx
// ❌ Invalid
<div>
  <h1>Some title</h1>
  <div className="bg-[#000000] text-white hover:bg-[#eeeeee]">
    Some multiline div
  </div>

  <div className="bg-[#000000] text-white hover:bg-[#eeeeee]">
    Some multiline div
  </div>
  <h2>Other title</h2>

  <div className="bg-[#000000] text-white hover:bg-[#eeeeee]">
    Some multiline div
  </div>
  <div className="bg-[#000000] text-white hover:bg-[#eeeeee]">
    Some multiline div
  </div>
</div>
```
