const path = require('path')
const fs = require('fs')

const ENV_PATH = {
  ENTRY: path.resolve(__dirname, '../../', 'static'),
  DISTS: path.resolve(__dirname, '../../', 'dist')
}

function getEntries() {
  const apps = fs.readdirSync(ENV_PATH.ENTRY)
  const temp = {}

  apps.forEach(app => {
    const files = fs.readdirSync(path.resolve(__dirname, ENV_PATH.ENTRY, app))

    files.filter(file => {
      return /\index\.js$/i.test(file)
    }).forEach(file => {
      file = file.replace(/\.js/, '')

      if (app in temp) return

      temp[app] = path.resolve(ENV_PATH.ENTRY, app, `${file}.js`)
    })
  })

  return temp
}

exports.config = {
  entry: getEntries(ENV_PATH.ENTRY)
}