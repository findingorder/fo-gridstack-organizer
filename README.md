# fo-gridstack-organizer Component for Vue.js

*Disclaimer: This Vue.js component is in its early stages of development. It might not work at all, and this README.md file might not contain accurate information. USE AT YOUR OWN RISK.*

*When we decide that it's ready for others to use, we'll remove this message and change the version number to 1.X.X.*

---

**fo-gridstack-organizer** is a **Vue.js** component that is a wrapper around the [gridstack.js](http://gridstackjs.com/) jQuery plugin.

fo-gridstack-organizer is written in **ECMAScript 6th Edition** (a.k.a. **ECMAScript 2015**, a.k.a. **ES6**) and is intended for inclusion in an ES6 application.  No provision has been made for supporting earlier JavaScript editions.

fo-gridstack-organizer is provided as an **ES6 module**. No provision has been made for older idiosyncratic module formats such as CommonJS or AMD.

fo-gridstack-organizer is packaged into a single file using **rollup.js**.  Currently the bundle is not minified or uglified; we intend to do this in a later release.

## Using fo-gridstack-organizer

To include fo-gridstack-organizer in your project, simply import it using the ES6 *import* statement:

```JavaScript
import FoGridstackOrganizer from 'fo-gridstack-organizer-bundle.js'
```

Then include it as a component in your Vue.js model:

```JavaScript
var vueModel = new Vue({
    el: '#app',
    components: {
        FoGridstackOrganizer
    }
})
```

This will make the *\<fo-gridstack-organizer\>* tag available for use within your project's HTML. 

### Attributes

The following attributes can be included in an *\<fo-gridstack-organizer\>* tag:

- *id*&nbsp;&nbsp;&nbsp;Required; every *\<fo-gridstack-organizer\>* instance must have a unique *id* value
- *backgroundColor*
- *color*
- *items*&nbsp;&nbsp;&nbsp;The data structure that specifies the items to be organized by gridstack.js
 
The following attributes are used to set default values for new items that are added to the gridstack:

- *itemDefaultBackground*
- *itemDefaultColor*
- *itemDefaultContent*
- *itemDefaultDataGsX*
- *itemDefaultDataGsY*
- *itemDefaultDataGsWidth*
- *itemDefaultDataGsHeight*
- *itemDefaultFontFamily*
- *itemDefaultFontSize*
- *itemDefaultPadding*
- *itemDefaultTextAlign*

Note that these attributes are expressed in camelCase, but when used within an *\<fo-gridstack-organizer\>* tag, should be expressed as kebab-case per VueJS rules.

### Example

```html
<fo-gridstack-organizer v-bind:items='items'></fo-gridstack-organizer>
```

## Building fo-gridstack-organizer

The source code for fo-gridstack-organizer can be found in the **src** directory. The build process uses the file **fo-gridstack-organizer.js** plus files from the **src/lib** directory and the **src/node_modules** directory.

When you clone or download the **git** repo, you don't get the **src/node_modules** directory. Since this directory can be easily re-generated using **npm**, there's no reason to include it in the git repo.  The **src/package.json** contains all of the information needed to re-generate the **src/node_modules** directory.  To do this, *cd* to the **src** directory and enter the command:

```bash
npm install
```

npm will fetch and install all of the node modules listed in **package.json**.

fo-gridstack-organizer is built into a rollup.js bundle using the **build.sh** script found in the **src** directory..

To build the bundle, *cd* to the **src** directory and enter the command

```bash
./build.sh
```

After a successful build, you should see the following results:

```
fo-gridstack-organizer.js → ../dist/fo-gridstack-organizer-bundle.js...
created ../dist/fo-gridstack-organizer-bundle.js in 1.8s
```

## Running the Test Application

The included test application can be run from the **test** directory.

As you did with the **src** directory, you must run *npm install* to re-generate the **node_modules** directory used by the test application.

The test application can be run using the *http-server* npm module.  To run it, *cd* to the **test** directory and enter the command

```bash
http-server
```

This will open a simple web server that serves its content on *http://localhost:8080*.

## Dependencies

fo-gridstack-organizer's dependencies fall into two categories, those that are bundled into **fo-gridstack-organizer-bundle-js** and those that are expected to be present in the project in which fo-gridstack-organizer is used.

The latter category includes widely-used libraries such as JQuery, Lodash, and Vue.js.

Bundled into **fo-gridstack-organizer-bundle-js** are libraries that are unique or specific to fo-gridstack-organizer.

You can change which libraries you want to bundle or keep external by editing the **src/package.json** file and moving them between the *dependencies* and *devDependencies* sections, or through use of the *external* option in **src/rollup.config.js**.  You need to re-build the bundle after making any such changes.

## Getting fo-gridstack-organizer from NPM

If you want to use the **dist/fo-gridstack-organizer-bundle.js** in your project and don't think you'll ever need to re-build it, you can obtain it from NPM using the command

```bash
npm install fo-gridstack-organizer
```

This will place a copy of **fo-gridstack-organizer-bundle.js** in your project's **node_modules** directory along with its dependencies.  You can then import it into your ES6 JavaScript using the command

```JavaScript
import FoMarkdownNote from 'node_modules/fo-gridstack-organizer/fo-gridstack-organizer-bundle.js'
```

In this scenario, **fo-gridstack-organizer-bundle.js** will contain all of the bundled dependencies, and the external dependencies will be made known to NPM in the **npm/package.json** file.  This **package.json** file is different from the one found in the **src** directory, and is used only for publishing on NPM.  

## Acknowledgements

Like most open source projects, fo-gridstack-organizer is based on the work of others. The small value fo-gridstack-organizer adds is to wrap and bundle these components into a single-file Vue.js component.  The greater value is provided by these amazing projects:

- [gridstack.js](http://gridstackjs.com/) by [numerous contributors](https://github.com/gridstack/gridstack.js/graphs/contributors) is the jQuery plugin that this Vue.js component wraps.
- [Vue.js](https://vuejs.org/) by [Evan You](https://github.com/yyx990803) and a host of [other contributors](https://vuejs.org/v2/guide/team.html)
- [rollup.js](https://rollupjs.org) by [Rich Harris](https://github.com/Rich-Harris), [Lukas Taegert](https://github.com/lukastaegert), and a host of [other contributors](https://github.com/rollup/rollup/graphs/contributors)
- Other code snippets from various web forums and articles. If you see some of your code and want to let me know who you are, I'll add you individually to this list.

We also gratefully acknowledge the [JQuery](https://jquery.com/) and [Lodash](https://lodash.com/) projects on which so much the web is built.