import chalk from 'chalk'
import commander from 'commander'
import prompts from 'prompts';

// import packageJson from '../packages/minimal/package.json'

let projectName

function changePackageName () {
  
} 

async function getName () {
  const response = await prompts({
    type: 'text',
    name: 'projectName',
    message: 'Choose project name'
  })

  return response.projectName
}

async function getPlugins () {
  const response = await prompts({
    type: 'multiselect',
    name: 'plugins',
    message: 'Choose plugins to install',
    choices: [
      { title: 'Cypress', value: 'cypress' },
      { title: 'Translations', value: 'translations' },
    ]
  })
  return response.plugins
}

async function init () {
  const name = await getName()  
  const plugins = await getPlugins()
}

init()
