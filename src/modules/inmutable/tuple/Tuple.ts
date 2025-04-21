type TTuple = any[]

function deepFreeze(obj: any): any {
  if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    for (const key of Object.keys(obj)) {
      deepFreeze(obj[key]);
    }
  }
  return obj;
}

function deepEqual(a: any, b: any): boolean {
  // Check if are the same value
  if (a === b) return true;

  // Check if are different type
  if (typeof a !== typeof b) return false;

  // Check object values
  if (a && b && typeof a === 'object') {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    for (const key of aKeys) {
      if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
  }

  return false;
}


export default class Tuple {
  #tuple: TTuple = []

  public setTuple(tuple: TTuple) {
    this.#tuple = tuple
  }

  public getTuple(): Readonly<TTuple> {
    return deepFreeze([...this.#tuple]);
  }

  public getTupleLength() {
    return this.#tuple.length
  }

  static equal(tuple1: TTuple, tuple2: TTuple): boolean {
    if (tuple1.length !== tuple2.length) return false;

    for (let i = 0; i < tuple1.length; i++) {
     if (!deepEqual(tuple1[i], tuple2[i])) return false;
    }

    return true;
  }
}
