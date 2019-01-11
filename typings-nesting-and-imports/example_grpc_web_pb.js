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
   * @private @const {!proto.example.ExampleClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.example.ExampleClient(
      hostname, credentials, options);

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
 *     The XHR Node Readable Stream
 */
proto.example.ExamplePromiseClient.prototype.foo =
    function(request, metadata) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    _this.delegateClient_.foo(
      request, metadata, function (error, response) {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.example;

