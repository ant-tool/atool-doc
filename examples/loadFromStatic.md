## code
```js

import fetch from 'isomorphic-fetch';

document.getElementById('__exampleDom').innerHTML = 'loading...';

fetch('/statics/result.json')
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }

    res.json().then(json => {
      document.getElementById('__exampleDom').innerHTML = json.name;
    });
  });

```

## desc

This example show you how to load data from static assets, you can check the request in devTools

The default assets folder is `statics`, you can using `atool-doc --asset someDir` to customize
