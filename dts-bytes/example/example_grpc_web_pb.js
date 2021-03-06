/**
 * @fileoverview gRPC-Web generated client stub for example
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var other_other_pb = require('../other/other_pb.js')
const proto = {};
proto.example = require('./example_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.example.ExampleClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.example.ExamplePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.example.Root,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Example_Foo = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.example.Root} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.example.Root} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.example.ExampleClient.prototype.foo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/example.Example/Foo',
      request,
      metadata || {},
      methodInfo_Example_Foo,
      callback);
};


/**
 * @param {!proto.example.Root} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.example.ExamplePromiseClient.prototype.foo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/example.Example/Foo',
      request,
      metadata || {},
      methodInfo_Example_Foo);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.other.Other>}
 */
const methodInfo_Example_Other = new grpc.web.AbstractClientBase.MethodInfo(
  other_other_pb.Other,
  /** @param {!proto.google.protobuf.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  other_other_pb.Other.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.other.Other)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.other.Other>|undefined}
 *     The XHR Node Readable Stream
 */
proto.example.ExampleClient.prototype.other =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/example.Example/Other',
      request,
      metadata || {},
      methodInfo_Example_Other,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.other.Other>}
 *     A native promise that resolves to the response
 */
proto.example.ExamplePromiseClient.prototype.other =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/example.Example/Other',
      request,
      metadata || {},
      methodInfo_Example_Other);
};


module.exports = proto.example;

