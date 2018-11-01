const path = require('path')
const fs = require('fs')

const STATIC_PATH = path.resolve(__dirname, '../../', 'static')
const ENTRY_PATH = path.resolve(__dirname, STATIC_PATH)

const ENV_PATH = {
  ENTRY: ENTRY_PATH
}

function getEntries() {
  const apps = fs.readdirSync(ENV_PATH.ENTRY)
  const temp = {}

  apps.forEach(app => {
    const realPath = path.resolve(ENTRY_PATH, app)
    // if not a dir
    if (!fs.statSync(realPath).isDirectory()) return

    const files = fs.readdirSync(realPath)

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