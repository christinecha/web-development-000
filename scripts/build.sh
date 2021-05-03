#!/bin/bash

rm -rf public
mkdir public
node scripts/generate-content.js

cp -a assets public/assets
cp src/index.css public/index.css
cp src/index.js public/index.js