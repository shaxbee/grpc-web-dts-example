import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as other_other_pb from '../other/other_pb';

export class Root extends jspb.Message {
  getChildList(): Array<Root.Child>;
  setChildList(value: Array<Root.Child>): void;
  clearChildList(): void;
  addChild(value?: Root.Child, index?: number): Root.Child;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimestamp(): boolean;
  clearTimestamp(): void;

  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): void;
  clearIdsList(): void;
  addIds(value: number, index?: number): void;

  getLongnum(): string;
  setLongnum(value: string): void;

  getPackage(): string;
  setPackage(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Root.AsObject;
  static toObject(includeInstance: boolean, msg: Root): Root.AsObject;
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
    pb_package: string,
    data: Uint8Array | string,
  }

  export class Child extends jspb.Message {
    getGrandchildrenMap(): jspb.Map<string, Root.Child.Grandchild>;
    clearGrandchildrenMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Child.AsObject;
    static toObject(includeInstance: boolean, msg: Child): Child.AsObject;
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

