import * as grpcWeb from 'grpc-web';
import {
  Root,
  Child,
  Grandchild,
  Empty,
  Timestamp,
  Other} from './example_pb';

export class ExampleClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  foo(
    request: Root,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Empty) => void
  ): grpcWeb.ClientReadableStream<Empty>;

  other(
    request: Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Other) => void
  ): grpcWeb.ClientReadableStream<Other>;

}

export class ExamplePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  foo(
    request: Root,
    metadata?: grpcWeb.Metadata
  ): Promise<Empty>;

  other(
    request: Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<Other>;

}

