#!/usr/bin/env bash
set -e

## Create documentation using JSdoc annotation here
## Run the command `npm run jsdoc-documentation <source> <output>`, you can generate only 1 markdown file per command but you can use N source using glob pattern.
## JSdoc function must be annotated @public for being exported in the markdown

## 1. Uncomment this line to generate the full docs
npm run jsdoc-documentation 'src/**/*.js' docs/js/jsdoc.md
## 2. Add in styleguide/styleguide.ext.json the section { "name": "JSdoc", "content": "docs/js/jsdoc.md" }

