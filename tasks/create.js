#!/usr/bin/env node

import chalk from 'chalk'
import prompts from 'prompts'
import fs from 'fs/promises'
import path from 'path'
import { exec } from 'child_process'
import { fileURLToPath } from 'url'

let projectName
const rootPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../', 'packages') 

async function checkDirExists (name) {
  try {
    await fs.access(name)
    console.log(chalk.blue('Directory already exists, choose other!'))
    return true
  } catch(err) {
    return false
  }
}

async function createDir (name) {
  try {
    await fs.mkdir(name)
    projectName = name
    console.log(chalk.green('Directory created!'))
  } catch(err) {
    console.log(chalk.bgRed('Failed to create directory.'))
  }
}

async function copyMinimalContent () {
  try {
    const minimalPath = path.resolve(`${rootPath}/minimal`)
    const destinationPath = path.resolve(projectName)

    const jsonFile = await fs.readFile(`${minimalPath}/package.json`)
    const packageJson = JSON.parse(jsonFile) 
    packageJson.name = projectName
    
    if (destinationPath) {
      await fs.cp(minimalPath, destinationPath, { recursive: true })
      await fs.writeFile(path.join(projectName, 'package.json'), JSON.stringify(packageJson, null, 2))
    } else {
      console.log('Could not find destination folder...')
      process.exit(1)
    }
  } catch(err) {
    console.log('Failed to copy content...', err)
    process.exit(1)
  }
}

async function copyPluginsContent (plugins) {
  try {
    for (const plugin of plugins) {
      const pluginPath = path.resolve(`${rootPath}/${plugin}`)
      const destinationPath = path.resolve(projectName)

      const jsonFile = await fs.readFile(`${destinationPath}/package.json`)
      const packageJson = JSON.parse(jsonFile)
      const packages = []
      
      if (plugin === 'translations') {
        packages.push(...await getPackagesVersion(['i18next', 'react-i18next']))
      } else {
        packages.push(...await getPackagesVersion([plugin]))
      }

      for (const pkg of packages) {
        const key = Object.keys(pkg)[0]
        packageJson.dependencies[key] = pkg[key]
      }

      if (destinationPath) {
        await fs.cp(pluginPath, destinationPath, { recursive: true })
        await fs.writeFile(path.join(projectName, 'package.json'), JSON.stringify(packageJson, null, 2))
      } else {
        console.log(chalk.bgRed('Could not find destination folder...'))
        process.exit(1)
      }
    }
  } catch(err) {
    console.log(err)
  }
}

async function getPackagesVersion (plugins) {
  console.log(`Getting package versions for ${plugins}...`)
  return Promise.all(plugins.map((plugin) => new Promise ((resolve, reject) => {
    exec(`npm show ${plugin} version`, (err, stdout) => {
      if (err) reject(err)
      resolve({ [plugin]: String(stdout).trim() })
    })
  })))
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
    instructions: false,
    choices: [
      { title: 'Cypress', value: 'cypress' },
      { title: 'Translations', value: 'translations' },
    ]
  })
  return response.plugins
}

async function init () {
  let name = ''
  let dirExists = true
  
  while (dirExists) {
    name = await getName()
    dirExists = await checkDirExists(name)
  }

  const plugins = await getPlugins()

  if (!dirExists) await createDir(name)
  
  await copyMinimalContent()
  if (plugins.length) await copyPluginsContent(plugins)

  process.chdir(projectName)

  console.log(chalk.blue('Changing to project dir.'))
  console.log(chalk.bgGreen('Installing packages, please wait...'))
  
  const install = exec('yarn')
  install.stdout.pipe(process.stdout)
  
  install.on('close', function() {
    console.log('You can now run the app with', chalk.red('yarn dev'))
  })
}

init()
