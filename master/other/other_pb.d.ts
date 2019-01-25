export class Other {
  constructor ();
  getFoo(): string;
  setFoo(a: string): void;
  getBar(): string;
  setBar(a: string): void;
  toObject(): Other.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Other;
}

export namespace Other {
  export type AsObject = {
    foo: string;
    bar: string;
  }
}

