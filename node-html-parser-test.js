import { parse, valid } from 'node-html-parser';

const html = `<hn-comment comment="{&quot;content&quot;: &quot;<a>baz</a>&quot;}"></hn-comment>`;
const root = parse(html, {
  script: true,
  style: true,
  noscript: true,
  pre: true,
});

console.log('innerHTML', root.innerHTML);
console.log('isValid', valid(html));