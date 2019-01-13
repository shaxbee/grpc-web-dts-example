import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Root {
  constructor ();
  getChild(): Root.Child;
  setChild(a: Root.Child): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp;
  setTimestamp(a: google_protobuf_timestamp_pb.Timestamp): void;
  toObject(): Root.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Root;
}

export namespace Root {
  export type AsObject = {
    child: Root.Child;
    timestamp: google_protobuf_timestamp_pb.Timestamp;
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
  }
}
