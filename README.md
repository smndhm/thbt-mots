# thbt-mots

## Install

### Clone the repo and install dependancies

`git clone git@github.com:smndhm/thbt-mots.git && cd thbt-mots && npm ci`

### Compiles and hot-reloads for development

`npm run serve`

## Build

### Words

You can define your words lists in the [`words.json`](./words.json) file.

### mp3

After your words lists are defined you have to generate the mp3s. To do so you'll need to get a Google Cloud access token by [following those 4 steps](https://github.com/googleapis/nodejs-text-to-speech#before-you-begin).  
Then add your downloaded service account json file to the project and list it in the `.env` file.  
You can now generate the mp3s with the command `npm run mp3s`.

## Deploy

Using [Github Actions](https://docs.github.com/en/actions), everytime you'll push on the `master` branch it will build the project to a `gh-pages` branch.  
You'll just have to [activate the Github Pages](./settings/pages) and select the branch as source.
