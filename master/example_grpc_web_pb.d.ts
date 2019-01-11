import * as grpcWeb from 'grpc-web';
import {
  Root,
  Child,
  Grandchild,
  Empty,
  Timestamp} from './example_pb';

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

}

export class ExamplePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  foo(
    request: Root,
    metadata?: grpcWeb.Metadata
  ): Promise<Empty>;

}

