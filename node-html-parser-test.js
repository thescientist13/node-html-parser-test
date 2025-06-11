import * as htmlparser from 'node-html-parser';

const html = `
  <body>
    <hn-comment comment="{&quot;content&quot;: &quot;<a>baz</a>&quot;}"></hn-comment>
  </body>
`;

const pageRoot = htmlparser.parse(html, {
  script: true,
  style: true,
  noscript: true,
  pre: true,
});

console.log(pageRoot.querySelector('body').innerHTML);