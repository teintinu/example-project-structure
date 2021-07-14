import { Given, When, Then, Fusion, Before } from 'jest-cucumber-fusion'

import { Class1 } from '../src/index'
let obj: Class1

Before(() => { obj = new Class1(0) })

Given(/^obj is instance of Class1\((.+)\)$/, (arg0) => {
  const value = parseInt(arg0 as any)
  obj = new Class1(value)
})

When('I call obj.inc()', () => {
  obj.inc()
})

Then(/obj.prop1 must be (.*)$/, (arg0) => {
  const next = parseInt(arg0 as any)
  expect(obj.get()).toBe(next)
})

Fusion('test1.feature')
