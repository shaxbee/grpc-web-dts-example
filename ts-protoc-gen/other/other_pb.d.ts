// package: other
// file: other/other.proto

import * as jspb from "google-protobuf";

export class Other extends jspb.Message {
  getFoo(): string;
  setFoo(value: string): void;

  getBar(): string;
  setBar(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Other.AsObject;
  static toObject(includeInstance: boolean, msg: Other): Other.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Other, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Other;
  static deserializeBinaryFromReader(message: Other, reader: jspb.BinaryReader): Other;
}

export namespace Other {
  export type AsObject = {
    foo: string,
    bar: string,
  }
}

