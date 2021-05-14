# @euberdeveloper/asciify

How we say in Italy: **"Che fai? ASCIIFY!"**.

## What it does

@euberdeveloper/asciify is a simple npm module to convert a unicode string to the best equivalent ascii string.

## How to use it

Install it via:

```bash
npm i @euberdeveloper/asciify
```

Then just use it!!!

```js
const asciify = require('@euberdeveloper/asciify');

const unicodeString = 'caffè';
const asciiString = asciify.traduce(unicodeString);

console.log(asciiString); // The result will be "caffe"
```