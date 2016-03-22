## code
```js
import num from './data.json';

document.getElementById('__exampleDom').innerHTML = `
  <h4>Load by import</h4>
  <pre><code>${JSON.stringify(num)}</code></pre>
`
```

## desc

This example show you how to load modules by `import` or `require`;
