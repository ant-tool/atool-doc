## code
```js

import fetch from 'isomorphic-fetch';

document.getElementById('__exampleDom').innerHTML = 'loading...';

fetch('/something')
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }

    res.json().then(json => {
      document.getElementById('__exampleDom').innerHTML = json.result;
    });
  });

```

## desc

This example show you how to use mock data, you can check the request in devTools

Conditions using command with `--build` included ara **not supported** currently
