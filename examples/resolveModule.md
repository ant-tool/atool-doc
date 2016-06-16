## code
```js
import './resolveModule.less';
/*
#__exampleDom {
  color: red;
}
*/
import num from './data.json';
/*
{
  "name": "atool-doc",
  "desc": "static demo generator"
}
*/
import data from '!raw!./data.txt';
// this is a normal text file

document.getElementById('__exampleDom').innerHTML = `
  <h4>Load by import</h4>
  <pre><code>${JSON.stringify(num)}</code></pre>
  <pre><code>${data}</code></pre>
`;
```

## desc

This example show you how to load modules by `import` or `require`;

You can using other loaders to handle some specific file, like `import '!raw!./data.txt'`;