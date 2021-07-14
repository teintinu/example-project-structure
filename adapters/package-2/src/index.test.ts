import { Class1 } from 'package-1'

it('exports correct name', () => {
  expect(new Class1(1).get()).toEqual(1)
})
