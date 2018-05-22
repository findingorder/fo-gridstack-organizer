let fs = require('fs')
let path = require('path')

// Command line parameter is the path of the file to be converted.

let mainFile = process.argv[2]
let templateFile = process.argv[3]

console.log('merge-template.js: mainFile = ' + mainFile)
console.log('merge-template.js: templateFile = ' + templateFile)

let mainFileContents     = fs.readFileSync(mainFile, 'utf8').toString()
let templateFileContents = fs.readFileSync(templateFile, 'utf8').toString()

let mainFileSplit = mainFileContents.split('{{vueTemplate}}')
let mergedFileContents = mainFileSplit[0] + templateFileContents + mainFileSplit[1]

// // Save the merged file.

// console.log('merge-template.js: mergedFileContents = ')
// console.log(mergedFileContents)

var baseName = path.basename(mainFile)
nameToUse = baseName.split('.js')[0]
console.log('merge-template.js: nameToUse = ' + nameToUse)

let outputFileName = nameToUse + '-merged.js'
console.log('merge-template.js: outputFileName = ' + outputFileName)

fs.writeFileSync('./' + outputFileName, mergedFileContents)
