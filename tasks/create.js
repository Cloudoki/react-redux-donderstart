import chalk from 'chalk'
import commander from 'commander'
import prompts from 'prompts'
import fs from 'fs/promises'
import path from 'path'

// import packageJson from '../packages/minimal/package.json'

async function checkDirExists (name) {
  try {
    await fs.access(name)
    console.log('Directory already exists!')
    process.exit(1)
  } catch(err) {
    return false
  }
}

async function createDir (name) {
  try {
    await fs.mkdir(name)
    console.log('Directory created!')
  } catch(err) {
    console.log('Failed to create directory.')
  }
}

async function copyContent (name) {
  try {
    const minimalPath = path.resolve('./packages/minimal')
    const destinationPath = path.resolve(name)

    const jsonFile = await fs.readFile(`${minimalPath}/package.json`)
    const packageJson = JSON.parse(jsonFile) 
    packageJson.name = name
    
    await fs.cp(minimalPath, destinationPath, { recursive: true })
    await fs.writeFile(path.join(name, 'package.json'), JSON.stringify(packageJson, null, 2))
  } catch(err) {
    console.log(err)
  }
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
  //  const plugins = await getPlugins()
  const dirExists = await checkDirExists(name)

  if (!dirExists) await createDir(name)

  await copyContent(name)

}


init()
