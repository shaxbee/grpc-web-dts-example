export class Root {
  constructor ();
  getChild(): Root.Child;
  setChild(a: Root.Child): void;
  getTimestamp(): Timestamp;
  setTimestamp(a: Timestamp): void;
  toObject(): Root.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Root;
}

export namespace Root {
  export type AsObject = {
    child: Root.Child;
    timestamp: Timestamp;
  }
  export type Child = RootChild;
}

export class RootChild {
  constructor ();
  getGrandchild(): Root.Child.Grandchild;
  setGrandchild(a: Root.Child.Grandchild): void;
  toObject(): RootChild.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => RootChild;
}

export namespace RootChild {
  export type AsObject = {
    grandchild: Root.Child.Grandchild;
  }
  export type Grandchild = RootChildGrandchild;
}

export class RootChildGrandchild {
  constructor ();
  toObject(): RootChildGrandchild.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => RootChildGrandchild;
}

export namespace RootChildGrandchild {
  export type AsObject = {
  }

  export enum Bar { 
    UNKNOWN = 0,
    FOO = 1,
    BAR = 2,
  }
}

export class Child {
  constructor ();
  getGrandchild(): Root.Child.Grandchild;
  setGrandchild(a: Root.Child.Grandchild): void;
  toObject(): Child.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Child;
}

export namespace Child {
  export type AsObject = {
    grandchild: Root.Child.Grandchild;
  }
  export type Grandchild = ChildGrandchild;
}

export class ChildGrandchild {
  constructor ();
  toObject(): ChildGrandchild.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ChildGrandchild;
}

export namespace ChildGrandchild {
  export type AsObject = {
  }

  export enum Bar { 
    UNKNOWN = 0,
    FOO = 1,
    BAR = 2,
  }
}

export class Grandchild {
  constructor ();
  toObject(): Grandchild.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Grandchild;
}

export namespace Grandchild {
  export type AsObject = {
  }

  export enum Bar { 
    UNKNOWN = 0,
    FOO = 1,
    BAR = 2,
  }
}

export class Empty {
  constructor ();
  toObject(): Empty.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Timestamp {
  constructor ();
  getSeconds(): number;
  setSeconds(a: number): void;
  getNanos(): number;
  setNanos(a: number): void;
  toObject(): Timestamp.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    seconds: number;
    nanos: number;
  }
}

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

