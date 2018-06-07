const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite.add('Rambda.find', () => {
  R.find(val => val > 2, [ 1, 2, 3, 4 ])
})
  .add('Ramda', () => {
    Ramda.find(val => val > 2, [ 1, 2, 3, 4 ])
  })
  .add('Lodash', () => {
    _.find([ 1, 2, 3, 4 ], val => val > 2)
  })

module.exports = suite
