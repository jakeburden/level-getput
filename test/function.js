var test = require('tape')
var level = require('level')
var getput = require('../')

var db = level(__dirname + '/function.db')

test('test getput function', function (t) {
  t.plan(1)

  getput(db, 'foo', 'bar', function (err, value) {
    if (err) console.error(err)
    t.same(value, 'bar')
    db.close(function () {
      require('leveldown').destroy(__dirname + '/function.db', function (err) {
        if (err) console.error(err)
      })
    })
  })
})
