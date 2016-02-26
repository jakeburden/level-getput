var once = require('once')

module.exports = getput
getput.install = install

function getput (db, key, value, cb) {
  if (typeof db === 'undefined') throw new Error('database required')
  if (typeof key === 'undefined') throw new Error('key required')
  if (typeof value === 'undefined') throw new Error('key required')
  if (typeof cb === 'undefined') throw new Error('callback required')

  cb = once(cb)

  db.createReadStream({
    gte: key,
    lte: key
  })
  .on('data', function (data) {
    cb(null, data.value)
  })
  .on('error', function (err) {
    cb(err)
  })
  .on('end', function () {
    db.put(key, value, function (err) {
      if (err) console.error(err)
      db.get(key, cb)
    })
  })
}

function install (db) {
  db.getput = function (key, value, cb) {
    getput(db, key, value, cb)
  }
}

