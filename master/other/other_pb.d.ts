import * as jspb from "google-protobuf"

export class Other extends jspb.Message {
  constructor ();
  getFoo(): string;
  setFoo(a: string): void;
  getBar(): string;
  setBar(a: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Other.AsObject;
  static toObject(includeInstance: boolean, msg: Other): Other.AsObject;
  static serializeBinaryToWriter(message: Other, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Other;
  static deserializeBiinaryFromReader(message: Other, reader: jspb.BinaryReader): Other;
}

export namespace Other {
  export type AsObject = {
    foo: string;
    bar: string;
  }
}

