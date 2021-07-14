export class Class1 {
  // eslint-disable-next-line no-useless-constructor
  constructor (private prop1:number) {

  }

  inc () {
    this.prop1++
  }

  get () {
    return this.prop1
  }
}
