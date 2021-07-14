import { Class1 } from 'package-1'

const packageName = 'package2'

export function dummy() {
  return [packageName, typeof Class1].join()
}
