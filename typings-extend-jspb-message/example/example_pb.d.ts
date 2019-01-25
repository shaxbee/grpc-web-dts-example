import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as other_other_pb from '../other/other_pb';

export class Root extends jspb.Message {
  constructor ();
  getChild(): Root.Child;
  setChild(a: Root.Child): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp;
  setTimestamp(a: google_protobuf_timestamp_pb.Timestamp): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Root.AsObject;
  static toObject(includeInstance: boolean, msg: Root): Root.AsObject;
  static serializeBinaryToWriter(message: Root, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Root;
  static deserializeBiinaryFromReader(message: Root, reader: jspb.BinaryReader): Root;
}

export namespace Root {
  export type AsObject = {
    child: Root.Child;
    timestamp: google_protobuf_timestamp_pb.Timestamp;
  }

  export class Child extends jspb.Message {
    constructor ();
    getGrandchild(): Root.Child.Grandchild;
    setGrandchild(a: Root.Child.Grandchild): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Child.AsObject;
    static toObject(includeInstance: boolean, msg: Child): Child.AsObject;
    static serializeBinaryToWriter(message: Child, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Child;
    static deserializeBiinaryFromReader(message: Child, reader: jspb.BinaryReader): Child;
  }

  export namespace Child {
    export type AsObject = {
      grandchild: Root.Child.Grandchild;
    }

    export class Grandchild extends jspb.Message {
      constructor ();
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Grandchild.AsObject;
      static toObject(includeInstance: boolean, msg: Grandchild): Grandchild.AsObject;
      static serializeBinaryToWriter(message: Grandchild, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Grandchild;
      static deserializeBiinaryFromReader(message: Grandchild, reader: jspb.BinaryReader): Grandchild;
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

