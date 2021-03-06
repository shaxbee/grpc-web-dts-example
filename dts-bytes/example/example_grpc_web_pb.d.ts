import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as other_other_pb from '../other/other_pb';

import {Root} from './example_pb';

export class ExampleClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  foo(
    request: Root,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  other(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: other_other_pb.Other) => void
  ): grpcWeb.ClientReadableStream<other_other_pb.Other>;

}

export class ExamplePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  foo(
    request: Root,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  other(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<other_other_pb.Other>;

}

