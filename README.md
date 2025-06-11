# node-html-parser-test

## Overview

A reproduction repo for use cases in Greenwood that leverage [**node-html-parser**](https://www.npmjs.com/package/node-html-parser).

## Setup

1. Clone the repo
1. Run `npm ci`

## Reproductions

### Incomplete Attributes with HTML

Based on a use case where you have HTML like this

```html
<body>
  <hn-comment comment="{&quot;content&quot;: &quot;<a>baz</a>&quot;}"></hn-comment>
</body>
```

The version in Greenwood (`1.x`) will produce this incorrect output, stripping the `</a>` tag

```sh
% node node-html-parser-test.js

<hn-comment comment="{&quot;content&quot;: &quot;<a>baz&quot;}"></hn-comment>
```

In this repo, using the current version (`7.x`), will produce the expected output, preserving the closing `</a>` tag

```sh
% node node-html-parser-test.js

<hn-comment comment="{&quot;content&quot;: &quot;<a>baz</a>&quot;}"></hn-comment>
```