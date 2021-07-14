import { Class1 } from 'package-1'
import { dummy } from './index'

it('exports correct name', () => {
  expect(new Class1(1).get()).toEqual(1)
})

it('exports correct name', () => {
  expect(dummy()).toEqual("package2,function")
})
