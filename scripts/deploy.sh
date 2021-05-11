#!/bin/bash

yarn run build
git add .
git commit -m "Deploy 🎉"
git push origin main