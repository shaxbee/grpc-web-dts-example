/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var other_other_pb = require('../other/other_pb.js');
goog.object.extend(proto, other_other_pb);
goog.exportSymbol('proto.example.Root', null, global);
goog.exportSymbol('proto.example.Root.Child', null, global);
goog.exportSymbol('proto.example.Root.Child.Grandchild', null, global);
goog.exportSymbol('proto.example.Root.Child.Grandchild.Bar', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.example.Root = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.example.Root.repeatedFields_, null);
};
goog.inherits(proto.example.Root, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.example.Root.displayName = 'proto.example.Root';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.example.Root.Child = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.example.Root.Child, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.example.Root.Child.displayName = 'proto.example.Root.Child';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.example.Root.Child.Grandchild = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.example.Root.Child.Grandchild, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.example.Root.Child.Grandchild.displayName = 'proto.example.Root.Child.Grandchild';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.example.Root.repeatedFields_ = [1,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.example.Root.prototype.toObject = function(opt_includeInstance) {
  return proto.example.Root.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.example.Root} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.example.Root.toObject = function(includeInstance, msg) {
  var f, obj = {
    childList: jspb.Message.toObjectList(msg.getChildList(),
    proto.example.Root.Child.toObject, includeInstance),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    idsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    longnum: (f = jspb.Message.getFieldWithDefault(msg, 4, "0")) == null ? undefined : f,
    pb_package: (f = jspb.Message.getFieldWithDefault(msg, 5, "")) == null ? undefined : f,
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.example.Root}
 */
proto.example.Root.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.example.Root;
  return proto.example.Root.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.example.Root} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.example.Root}
 */
proto.example.Root.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.example.Root.Child;
      reader.readMessage(value,proto.example.Root.Child.deserializeBinaryFromReader);
      msg.addChild(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setIdsList(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setLongnum(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackage(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.example.Root.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.example.Root.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.example.Root} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.example.Root.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChildList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.example.Root.Child.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
  f = message.getLongnum();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      4,
      f
    );
  }
  f = message.getPackage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.example.Root.Child.prototype.toObject = function(opt_includeInstance) {
  return proto.example.Root.Child.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.example.Root.Child} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.example.Root.Child.toObject = function(includeInstance, msg) {
  var f, obj = {
    grandchildrenMap: (f = msg.getGrandchildrenMap()) ? f.toObject(includeInstance, proto.example.Root.Child.Grandchild.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.example.Root.Child}
 */
proto.example.Root.Child.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.example.Root.Child;
  return proto.example.Root.Child.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.example.Root.Child} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.example.Root.Child}
 */
proto.example.Root.Child.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getGrandchildrenMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.example.Root.Child.Grandchild.deserializeBinaryFromReader, "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.example.Root.Child.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.example.Root.Child.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.example.Root.Child} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.example.Root.Child.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGrandchildrenMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.example.Root.Child.Grandchild.serializeBinaryToWriter);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.example.Root.Child.Grandchild.prototype.toObject = function(opt_includeInstance) {
  return proto.example.Root.Child.Grandchild.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.example.Root.Child.Grandchild} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.example.Root.Child.Grandchild.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.example.Root.Child.Grandchild}
 */
proto.example.Root.Child.Grandchild.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.example.Root.Child.Grandchild;
  return proto.example.Root.Child.Grandchild.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.example.Root.Child.Grandchild} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.example.Root.Child.Grandchild}
 */
proto.example.Root.Child.Grandchild.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.example.Root.Child.Grandchild.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.example.Root.Child.Grandchild.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.example.Root.Child.Grandchild} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.example.Root.Child.Grandchild.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.example.Root.Child.Grandchild.Bar = {
  UNKNOWN: 0,
  FOO: 1,
  BAR: 2
};

/**
 * map<string, Grandchild> grandchildren = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.example.Root.Child.Grandchild>}
 */
proto.example.Root.Child.prototype.getGrandchildrenMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.example.Root.Child.Grandchild>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.example.Root.Child.Grandchild));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.example.Root.Child.prototype.clearGrandchildrenMap = function() {
  this.getGrandchildrenMap().clear();
};


/**
 * repeated Child child = 1;
 * @return {!Array<!proto.example.Root.Child>}
 */
proto.example.Root.prototype.getChildList = function() {
  return /** @type{!Array<!proto.example.Root.Child>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.example.Root.Child, 1));
};


/** @param {!Array<!proto.example.Root.Child>} value */
proto.example.Root.prototype.setChildList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.example.Root.Child=} opt_value
 * @param {number=} opt_index
 * @return {!proto.example.Root.Child}
 */
proto.example.Root.prototype.addChild = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.example.Root.Child, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.example.Root.prototype.clearChildList = function() {
  this.setChildList([]);
};


/**
 * optional google.protobuf.Timestamp timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.example.Root.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.example.Root.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.example.Root.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.example.Root.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated int32 ids = 3;
 * @return {!Array<number>}
 */
proto.example.Root.prototype.getIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<number>} value */
proto.example.Root.prototype.setIdsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 */
proto.example.Root.prototype.addIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.example.Root.prototype.clearIdsList = function() {
  this.setIdsList([]);
};


/**
 * optional int64 longnum = 4;
 * @return {string}
 */
proto.example.Root.prototype.getLongnum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/** @param {string} value */
proto.example.Root.prototype.setLongnum = function(value) {
  jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional string package = 5;
 * @return {string}
 */
proto.example.Root.prototype.getPackage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.example.Root.prototype.setPackage = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bytes data = 6;
 * @return {string}
 */
proto.example.Root.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes data = 6;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.example.Root.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.example.Root.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.example.Root.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 6, value);
};


goog.object.extend(exports, proto.example);
