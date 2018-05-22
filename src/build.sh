#!/usr/bin/env bash

# Merge the templates into the main JavaScript files.

node ./merge-template.js ./fo-gridstack-organizer.js ./fo-gridstack-organizer-template.html 
node ./merge-template.js ./fo-gridstack-item.js      ./fo-gridstack-item-template.html 

# Build the bundle.

rollup -c

# Go ahead and copy the files that will be published on npm to the npm directory.

cp -f ../dist/fo-gridstack-organizer-bundle.js ../npm/fo-gridstack-organizer-bundle.js
echo Copied fo-gridstack-organizer-bundle.js to npm directory.
cp -f ../README.md ../npm/README.md
echo Copied README.md to npm directory.
