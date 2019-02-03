// package: example
// file: example/example.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as other_other_pb from "../other/other_pb";

export class Root extends jspb.Message {
  clearChildList(): void;
  getChildList(): Array<Root.Child>;
  setChildList(value: Array<Root.Child>): void;
  addChild(value?: Root.Child, index?: number): Root.Child;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearIdsList(): void;
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): void;
  addIds(value: number, index?: number): number;

  getLongnum(): string;
  setLongnum(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Root.AsObject;
  static toObject(includeInstance: boolean, msg: Root): Root.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Root, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Root;
  static deserializeBinaryFromReader(message: Root, reader: jspb.BinaryReader): Root;
}

export namespace Root {
  export type AsObject = {
    childList: Array<Root.Child.AsObject>,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    idsList: Array<number>,
    longnum: string,
  }

  export class Child extends jspb.Message {
    getGrandchildrenMap(): jspb.Map<string, Root.Child.Grandchild>;
    clearGrandchildrenMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Child.AsObject;
    static toObject(includeInstance: boolean, msg: Child): Child.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Child, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Child;
    static deserializeBinaryFromReader(message: Child, reader: jspb.BinaryReader): Child;
  }

  export namespace Child {
    export type AsObject = {
      grandchildrenMap: Array<[string, Root.Child.Grandchild.AsObject]>,
    }

    export class Grandchild extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Grandchild.AsObject;
      static toObject(includeInstance: boolean, msg: Grandchild): Grandchild.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Grandchild, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Grandchild;
      static deserializeBinaryFromReader(message: Grandchild, reader: jspb.BinaryReader): Grandchild;
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

