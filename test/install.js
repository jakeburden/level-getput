var test = require('tape')
var level = require('level')
var getput = require('../')

var db = level(__dirname + '/install.db')

test('test install', function (t) {
  t.plan(1)
  getput.install(db)

  db.getput('foo', 'bar', function (err, value) {
    if (err) console.error(err)
    t.same(value, 'bar')
    db.close(function () {
      require('leveldown').destroy(__dirname + '/install.db', function (err) {
        if (err) console.error(err)
      })
    })
  })
})
