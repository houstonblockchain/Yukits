/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Property = (function() {

    /**
     * Properties of a Property.
     * @exports IProperty
     * @interface IProperty
     * @property {string|null} [name] Property name
     * @property {string|null} [recordId] Property recordId
     * @property {PropertySchema.DataType|null} [dataType] Property dataType
     * @property {Array.<Property.IReporter>|null} [reporters] Property reporters
     * @property {number|null} [currentPage] Property currentPage
     * @property {boolean|null} [wrapped] Property wrapped
     * @property {boolean|null} [fixed] Property fixed
     * @property {number|null} [numberExponent] Property numberExponent
     * @property {Array.<string>|null} [enumOptions] Property enumOptions
     * @property {Array.<IPropertySchema>|null} [structProperties] Property structProperties
     */

    /**
     * Constructs a new Property.
     * @exports Property
     * @classdesc Represents a Property.
     * @implements IProperty
     * @constructor
     * @param {IProperty=} [properties] Properties to set
     */
    function Property(properties) {
        this.reporters = [];
        this.enumOptions = [];
        this.structProperties = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Property name.
     * @member {string} name
     * @memberof Property
     * @instance
     */
    Property.prototype.name = "";

    /**
     * Property recordId.
     * @member {string} recordId
     * @memberof Property
     * @instance
     */
    Property.prototype.recordId = "";

    /**
     * Property dataType.
     * @member {PropertySchema.DataType} dataType
     * @memberof Property
     * @instance
     */
    Property.prototype.dataType = 0;

    /**
     * Property reporters.
     * @member {Array.<Property.IReporter>} reporters
     * @memberof Property
     * @instance
     */
    Property.prototype.reporters = $util.emptyArray;

    /**
     * Property currentPage.
     * @member {number} currentPage
     * @memberof Property
     * @instance
     */
    Property.prototype.currentPage = 0;

    /**
     * Property wrapped.
     * @member {boolean} wrapped
     * @memberof Property
     * @instance
     */
    Property.prototype.wrapped = false;

    /**
     * Property fixed.
     * @member {boolean} fixed
     * @memberof Property
     * @instance
     */
    Property.prototype.fixed = false;

    /**
     * Property numberExponent.
     * @member {number} numberExponent
     * @memberof Property
     * @instance
     */
    Property.prototype.numberExponent = 0;

    /**
     * Property enumOptions.
     * @member {Array.<string>} enumOptions
     * @memberof Property
     * @instance
     */
    Property.prototype.enumOptions = $util.emptyArray;

    /**
     * Property structProperties.
     * @member {Array.<IPropertySchema>} structProperties
     * @memberof Property
     * @instance
     */
    Property.prototype.structProperties = $util.emptyArray;

    /**
     * Creates a new Property instance using the specified properties.
     * @function create
     * @memberof Property
     * @static
     * @param {IProperty=} [properties] Properties to set
     * @returns {Property} Property instance
     */
    Property.create = function create(properties) {
        return new Property(properties);
    };

    /**
     * Encodes the specified Property message. Does not implicitly {@link Property.verify|verify} messages.
     * @function encode
     * @memberof Property
     * @static
     * @param {IProperty} message Property message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Property.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.recordId != null && message.hasOwnProperty("recordId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.recordId);
        if (message.dataType != null && message.hasOwnProperty("dataType"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.dataType);
        if (message.reporters != null && message.reporters.length)
            for (var i = 0; i < message.reporters.length; ++i)
                $root.Property.Reporter.encode(message.reporters[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.currentPage != null && message.hasOwnProperty("currentPage"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.currentPage);
        if (message.wrapped != null && message.hasOwnProperty("wrapped"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.wrapped);
        if (message.fixed != null && message.hasOwnProperty("fixed"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.fixed);
        if (message.numberExponent != null && message.hasOwnProperty("numberExponent"))
            writer.uint32(/* id 10, wireType 0 =*/80).sint32(message.numberExponent);
        if (message.enumOptions != null && message.enumOptions.length)
            for (var i = 0; i < message.enumOptions.length; ++i)
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.enumOptions[i]);
        if (message.structProperties != null && message.structProperties.length)
            for (var i = 0; i < message.structProperties.length; ++i)
                $root.PropertySchema.encode(message.structProperties[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Property message, length delimited. Does not implicitly {@link Property.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Property
     * @static
     * @param {IProperty} message Property message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Property.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Property message from the specified reader or buffer.
     * @function decode
     * @memberof Property
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Property} Property
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Property.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Property();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.recordId = reader.string();
                break;
            case 3:
                message.dataType = reader.int32();
                break;
            case 4:
                if (!(message.reporters && message.reporters.length))
                    message.reporters = [];
                message.reporters.push($root.Property.Reporter.decode(reader, reader.uint32()));
                break;
            case 5:
                message.currentPage = reader.uint32();
                break;
            case 6:
                message.wrapped = reader.bool();
                break;
            case 9:
                message.fixed = reader.bool();
                break;
            case 10:
                message.numberExponent = reader.sint32();
                break;
            case 11:
                if (!(message.enumOptions && message.enumOptions.length))
                    message.enumOptions = [];
                message.enumOptions.push(reader.string());
                break;
            case 12:
                if (!(message.structProperties && message.structProperties.length))
                    message.structProperties = [];
                message.structProperties.push($root.PropertySchema.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Property message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Property
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Property} Property
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Property.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Property message.
     * @function verify
     * @memberof Property
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Property.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.recordId != null && message.hasOwnProperty("recordId"))
            if (!$util.isString(message.recordId))
                return "recordId: string expected";
        if (message.dataType != null && message.hasOwnProperty("dataType"))
            switch (message.dataType) {
            default:
                return "dataType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
        if (message.reporters != null && message.hasOwnProperty("reporters")) {
            if (!Array.isArray(message.reporters))
                return "reporters: array expected";
            for (var i = 0; i < message.reporters.length; ++i) {
                var error = $root.Property.Reporter.verify(message.reporters[i]);
                if (error)
                    return "reporters." + error;
            }
        }
        if (message.currentPage != null && message.hasOwnProperty("currentPage"))
            if (!$util.isInteger(message.currentPage))
                return "currentPage: integer expected";
        if (message.wrapped != null && message.hasOwnProperty("wrapped"))
            if (typeof message.wrapped !== "boolean")
                return "wrapped: boolean expected";
        if (message.fixed != null && message.hasOwnProperty("fixed"))
            if (typeof message.fixed !== "boolean")
                return "fixed: boolean expected";
        if (message.numberExponent != null && message.hasOwnProperty("numberExponent"))
            if (!$util.isInteger(message.numberExponent))
                return "numberExponent: integer expected";
        if (message.enumOptions != null && message.hasOwnProperty("enumOptions")) {
            if (!Array.isArray(message.enumOptions))
                return "enumOptions: array expected";
            for (var i = 0; i < message.enumOptions.length; ++i)
                if (!$util.isString(message.enumOptions[i]))
                    return "enumOptions: string[] expected";
        }
        if (message.structProperties != null && message.hasOwnProperty("structProperties")) {
            if (!Array.isArray(message.structProperties))
                return "structProperties: array expected";
            for (var i = 0; i < message.structProperties.length; ++i) {
                var error = $root.PropertySchema.verify(message.structProperties[i]);
                if (error)
                    return "structProperties." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Property message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Property
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Property} Property
     */
    Property.fromObject = function fromObject(object) {
        if (object instanceof $root.Property)
            return object;
        var message = new $root.Property();
        if (object.name != null)
            message.name = String(object.name);
        if (object.recordId != null)
            message.recordId = String(object.recordId);
        switch (object.dataType) {
        case "TYPE_UNSET":
        case 0:
            message.dataType = 0;
            break;
        case "BYTES":
        case 1:
            message.dataType = 1;
            break;
        case "BOOLEAN":
        case 2:
            message.dataType = 2;
            break;
        case "NUMBER":
        case 3:
            message.dataType = 3;
            break;
        case "STRING":
        case 4:
            message.dataType = 4;
            break;
        case "ENUM":
        case 5:
            message.dataType = 5;
            break;
        case "STRUCT":
        case 6:
            message.dataType = 6;
            break;
        case "LOCATION":
        case 7:
            message.dataType = 7;
            break;
        }
        if (object.reporters) {
            if (!Array.isArray(object.reporters))
                throw TypeError(".Property.reporters: array expected");
            message.reporters = [];
            for (var i = 0; i < object.reporters.length; ++i) {
                if (typeof object.reporters[i] !== "object")
                    throw TypeError(".Property.reporters: object expected");
                message.reporters[i] = $root.Property.Reporter.fromObject(object.reporters[i]);
            }
        }
        if (object.currentPage != null)
            message.currentPage = object.currentPage >>> 0;
        if (object.wrapped != null)
            message.wrapped = Boolean(object.wrapped);
        if (object.fixed != null)
            message.fixed = Boolean(object.fixed);
        if (object.numberExponent != null)
            message.numberExponent = object.numberExponent | 0;
        if (object.enumOptions) {
            if (!Array.isArray(object.enumOptions))
                throw TypeError(".Property.enumOptions: array expected");
            message.enumOptions = [];
            for (var i = 0; i < object.enumOptions.length; ++i)
                message.enumOptions[i] = String(object.enumOptions[i]);
        }
        if (object.structProperties) {
            if (!Array.isArray(object.structProperties))
                throw TypeError(".Property.structProperties: array expected");
            message.structProperties = [];
            for (var i = 0; i < object.structProperties.length; ++i) {
                if (typeof object.structProperties[i] !== "object")
                    throw TypeError(".Property.structProperties: object expected");
                message.structProperties[i] = $root.PropertySchema.fromObject(object.structProperties[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Property message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Property
     * @static
     * @param {Property} message Property
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Property.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.reporters = [];
            object.enumOptions = [];
            object.structProperties = [];
        }
        if (options.defaults) {
            object.name = "";
            object.recordId = "";
            object.dataType = options.enums === String ? "TYPE_UNSET" : 0;
            object.currentPage = 0;
            object.wrapped = false;
            object.fixed = false;
            object.numberExponent = 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.recordId != null && message.hasOwnProperty("recordId"))
            object.recordId = message.recordId;
        if (message.dataType != null && message.hasOwnProperty("dataType"))
            object.dataType = options.enums === String ? $root.PropertySchema.DataType[message.dataType] : message.dataType;
        if (message.reporters && message.reporters.length) {
            object.reporters = [];
            for (var j = 0; j < message.reporters.length; ++j)
                object.reporters[j] = $root.Property.Reporter.toObject(message.reporters[j], options);
        }
        if (message.currentPage != null && message.hasOwnProperty("currentPage"))
            object.currentPage = message.currentPage;
        if (message.wrapped != null && message.hasOwnProperty("wrapped"))
            object.wrapped = message.wrapped;
        if (message.fixed != null && message.hasOwnProperty("fixed"))
            object.fixed = message.fixed;
        if (message.numberExponent != null && message.hasOwnProperty("numberExponent"))
            object.numberExponent = message.numberExponent;
        if (message.enumOptions && message.enumOptions.length) {
            object.enumOptions = [];
            for (var j = 0; j < message.enumOptions.length; ++j)
                object.enumOptions[j] = message.enumOptions[j];
        }
        if (message.structProperties && message.structProperties.length) {
            object.structProperties = [];
            for (var j = 0; j < message.structProperties.length; ++j)
                object.structProperties[j] = $root.PropertySchema.toObject(message.structProperties[j], options);
        }
        return object;
    };

    /**
     * Converts this Property to JSON.
     * @function toJSON
     * @memberof Property
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Property.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    Property.Reporter = (function() {

        /**
         * Properties of a Reporter.
         * @memberof Property
         * @interface IReporter
         * @property {string|null} [publicKey] Reporter publicKey
         * @property {boolean|null} [authorized] Reporter authorized
         * @property {number|null} [index] Reporter index
         */

        /**
         * Constructs a new Reporter.
         * @memberof Property
         * @classdesc Represents a Reporter.
         * @implements IReporter
         * @constructor
         * @param {Property.IReporter=} [properties] Properties to set
         */
        function Reporter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reporter publicKey.
         * @member {string} publicKey
         * @memberof Property.Reporter
         * @instance
         */
        Reporter.prototype.publicKey = "";

        /**
         * Reporter authorized.
         * @member {boolean} authorized
         * @memberof Property.Reporter
         * @instance
         */
        Reporter.prototype.authorized = false;

        /**
         * Reporter index.
         * @member {number} index
         * @memberof Property.Reporter
         * @instance
         */
        Reporter.prototype.index = 0;

        /**
         * Creates a new Reporter instance using the specified properties.
         * @function create
         * @memberof Property.Reporter
         * @static
         * @param {Property.IReporter=} [properties] Properties to set
         * @returns {Property.Reporter} Reporter instance
         */
        Reporter.create = function create(properties) {
            return new Reporter(properties);
        };

        /**
         * Encodes the specified Reporter message. Does not implicitly {@link Property.Reporter.verify|verify} messages.
         * @function encode
         * @memberof Property.Reporter
         * @static
         * @param {Property.IReporter} message Reporter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reporter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.publicKey);
            if (message.authorized != null && message.hasOwnProperty("authorized"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.authorized);
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.index);
            return writer;
        };

        /**
         * Encodes the specified Reporter message, length delimited. Does not implicitly {@link Property.Reporter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Property.Reporter
         * @static
         * @param {Property.IReporter} message Reporter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reporter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reporter message from the specified reader or buffer.
         * @function decode
         * @memberof Property.Reporter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Property.Reporter} Reporter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reporter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Property.Reporter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.publicKey = reader.string();
                    break;
                case 2:
                    message.authorized = reader.bool();
                    break;
                case 3:
                    message.index = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Reporter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Property.Reporter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Property.Reporter} Reporter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reporter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Reporter message.
         * @function verify
         * @memberof Property.Reporter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reporter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                if (!$util.isString(message.publicKey))
                    return "publicKey: string expected";
            if (message.authorized != null && message.hasOwnProperty("authorized"))
                if (typeof message.authorized !== "boolean")
                    return "authorized: boolean expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            return null;
        };

        /**
         * Creates a Reporter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Property.Reporter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Property.Reporter} Reporter
         */
        Reporter.fromObject = function fromObject(object) {
            if (object instanceof $root.Property.Reporter)
                return object;
            var message = new $root.Property.Reporter();
            if (object.publicKey != null)
                message.publicKey = String(object.publicKey);
            if (object.authorized != null)
                message.authorized = Boolean(object.authorized);
            if (object.index != null)
                message.index = object.index >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Reporter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Property.Reporter
         * @static
         * @param {Property.Reporter} message Reporter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reporter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.publicKey = "";
                object.authorized = false;
                object.index = 0;
            }
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                object.publicKey = message.publicKey;
            if (message.authorized != null && message.hasOwnProperty("authorized"))
                object.authorized = message.authorized;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            return object;
        };

        /**
         * Converts this Reporter to JSON.
         * @function toJSON
         * @memberof Property.Reporter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reporter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Reporter;
    })();

    return Property;
})();

$root.PropertyContainer = (function() {

    /**
     * Properties of a PropertyContainer.
     * @exports IPropertyContainer
     * @interface IPropertyContainer
     * @property {Array.<IProperty>|null} [entries] PropertyContainer entries
     */

    /**
     * Constructs a new PropertyContainer.
     * @exports PropertyContainer
     * @classdesc Represents a PropertyContainer.
     * @implements IPropertyContainer
     * @constructor
     * @param {IPropertyContainer=} [properties] Properties to set
     */
    function PropertyContainer(properties) {
        this.entries = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PropertyContainer entries.
     * @member {Array.<IProperty>} entries
     * @memberof PropertyContainer
     * @instance
     */
    PropertyContainer.prototype.entries = $util.emptyArray;

    /**
     * Creates a new PropertyContainer instance using the specified properties.
     * @function create
     * @memberof PropertyContainer
     * @static
     * @param {IPropertyContainer=} [properties] Properties to set
     * @returns {PropertyContainer} PropertyContainer instance
     */
    PropertyContainer.create = function create(properties) {
        return new PropertyContainer(properties);
    };

    /**
     * Encodes the specified PropertyContainer message. Does not implicitly {@link PropertyContainer.verify|verify} messages.
     * @function encode
     * @memberof PropertyContainer
     * @static
     * @param {IPropertyContainer} message PropertyContainer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertyContainer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.entries != null && message.entries.length)
            for (var i = 0; i < message.entries.length; ++i)
                $root.Property.encode(message.entries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PropertyContainer message, length delimited. Does not implicitly {@link PropertyContainer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PropertyContainer
     * @static
     * @param {IPropertyContainer} message PropertyContainer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertyContainer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PropertyContainer message from the specified reader or buffer.
     * @function decode
     * @memberof PropertyContainer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PropertyContainer} PropertyContainer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertyContainer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PropertyContainer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.entries && message.entries.length))
                    message.entries = [];
                message.entries.push($root.Property.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PropertyContainer message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PropertyContainer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PropertyContainer} PropertyContainer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertyContainer.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PropertyContainer message.
     * @function verify
     * @memberof PropertyContainer
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PropertyContainer.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.entries != null && message.hasOwnProperty("entries")) {
            if (!Array.isArray(message.entries))
                return "entries: array expected";
            for (var i = 0; i < message.entries.length; ++i) {
                var error = $root.Property.verify(message.entries[i]);
                if (error)
                    return "entries." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PropertyContainer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PropertyContainer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PropertyContainer} PropertyContainer
     */
    PropertyContainer.fromObject = function fromObject(object) {
        if (object instanceof $root.PropertyContainer)
            return object;
        var message = new $root.PropertyContainer();
        if (object.entries) {
            if (!Array.isArray(object.entries))
                throw TypeError(".PropertyContainer.entries: array expected");
            message.entries = [];
            for (var i = 0; i < object.entries.length; ++i) {
                if (typeof object.entries[i] !== "object")
                    throw TypeError(".PropertyContainer.entries: object expected");
                message.entries[i] = $root.Property.fromObject(object.entries[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PropertyContainer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PropertyContainer
     * @static
     * @param {PropertyContainer} message PropertyContainer
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PropertyContainer.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.entries = [];
        if (message.entries && message.entries.length) {
            object.entries = [];
            for (var j = 0; j < message.entries.length; ++j)
                object.entries[j] = $root.Property.toObject(message.entries[j], options);
        }
        return object;
    };

    /**
     * Converts this PropertyContainer to JSON.
     * @function toJSON
     * @memberof PropertyContainer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PropertyContainer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PropertyContainer;
})();

$root.PropertySchema = (function() {

    /**
     * Properties of a PropertySchema.
     * @exports IPropertySchema
     * @interface IPropertySchema
     * @property {string|null} [name] PropertySchema name
     * @property {PropertySchema.DataType|null} [dataType] PropertySchema dataType
     * @property {boolean|null} [required] PropertySchema required
     * @property {boolean|null} [fixed] PropertySchema fixed
     * @property {boolean|null} [delayed] PropertySchema delayed
     * @property {number|null} [numberExponent] PropertySchema numberExponent
     * @property {Array.<string>|null} [enumOptions] PropertySchema enumOptions
     * @property {Array.<IPropertySchema>|null} [structProperties] PropertySchema structProperties
     */

    /**
     * Constructs a new PropertySchema.
     * @exports PropertySchema
     * @classdesc Represents a PropertySchema.
     * @implements IPropertySchema
     * @constructor
     * @param {IPropertySchema=} [properties] Properties to set
     */
    function PropertySchema(properties) {
        this.enumOptions = [];
        this.structProperties = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PropertySchema name.
     * @member {string} name
     * @memberof PropertySchema
     * @instance
     */
    PropertySchema.prototype.name = "";

    /**
     * PropertySchema dataType.
     * @member {PropertySchema.DataType} dataType
     * @memberof PropertySchema
     * @instance
     */
    PropertySchema.prototype.dataType = 0;

    /**
     * PropertySchema required.
     * @member {boolean} required
     * @memberof PropertySchema
     * @instance
     */
    PropertySchema.prototype.required = false;

    /**
     * PropertySchema fixed.
     * @member {boolean} fixed
     * @memberof PropertySchema
     * @instance
     */
    PropertySchema.prototype.fixed = false;

    /**
     * PropertySchema delayed.
     * @member {boolean} delayed
     * @memberof PropertySchema
     * @instance
     */
    PropertySchema.prototype.delayed = false;

    /**
     * PropertySchema numberExponent.
     * @member {number} numberExponent
     * @memberof PropertySchema
     * @instance
     */
    PropertySchema.prototype.numberExponent = 0;

    /**
     * PropertySchema enumOptions.
     * @member {Array.<string>} enumOptions
     * @memberof PropertySchema
     * @instance
     */
    PropertySchema.prototype.enumOptions = $util.emptyArray;

    /**
     * PropertySchema structProperties.
     * @member {Array.<IPropertySchema>} structProperties
     * @memberof PropertySchema
     * @instance
     */
    PropertySchema.prototype.structProperties = $util.emptyArray;

    /**
     * Creates a new PropertySchema instance using the specified properties.
     * @function create
     * @memberof PropertySchema
     * @static
     * @param {IPropertySchema=} [properties] Properties to set
     * @returns {PropertySchema} PropertySchema instance
     */
    PropertySchema.create = function create(properties) {
        return new PropertySchema(properties);
    };

    /**
     * Encodes the specified PropertySchema message. Does not implicitly {@link PropertySchema.verify|verify} messages.
     * @function encode
     * @memberof PropertySchema
     * @static
     * @param {IPropertySchema} message PropertySchema message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertySchema.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.dataType != null && message.hasOwnProperty("dataType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.dataType);
        if (message.required != null && message.hasOwnProperty("required"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.required);
        if (message.fixed != null && message.hasOwnProperty("fixed"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.fixed);
        if (message.delayed != null && message.hasOwnProperty("delayed"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.delayed);
        if (message.numberExponent != null && message.hasOwnProperty("numberExponent"))
            writer.uint32(/* id 10, wireType 0 =*/80).sint32(message.numberExponent);
        if (message.enumOptions != null && message.enumOptions.length)
            for (var i = 0; i < message.enumOptions.length; ++i)
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.enumOptions[i]);
        if (message.structProperties != null && message.structProperties.length)
            for (var i = 0; i < message.structProperties.length; ++i)
                $root.PropertySchema.encode(message.structProperties[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PropertySchema message, length delimited. Does not implicitly {@link PropertySchema.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PropertySchema
     * @static
     * @param {IPropertySchema} message PropertySchema message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertySchema.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PropertySchema message from the specified reader or buffer.
     * @function decode
     * @memberof PropertySchema
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PropertySchema} PropertySchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertySchema.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PropertySchema();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.dataType = reader.int32();
                break;
            case 3:
                message.required = reader.bool();
                break;
            case 4:
                message.fixed = reader.bool();
                break;
            case 5:
                message.delayed = reader.bool();
                break;
            case 10:
                message.numberExponent = reader.sint32();
                break;
            case 11:
                if (!(message.enumOptions && message.enumOptions.length))
                    message.enumOptions = [];
                message.enumOptions.push(reader.string());
                break;
            case 12:
                if (!(message.structProperties && message.structProperties.length))
                    message.structProperties = [];
                message.structProperties.push($root.PropertySchema.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PropertySchema message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PropertySchema
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PropertySchema} PropertySchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertySchema.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PropertySchema message.
     * @function verify
     * @memberof PropertySchema
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PropertySchema.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.dataType != null && message.hasOwnProperty("dataType"))
            switch (message.dataType) {
            default:
                return "dataType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
        if (message.required != null && message.hasOwnProperty("required"))
            if (typeof message.required !== "boolean")
                return "required: boolean expected";
        if (message.fixed != null && message.hasOwnProperty("fixed"))
            if (typeof message.fixed !== "boolean")
                return "fixed: boolean expected";
        if (message.delayed != null && message.hasOwnProperty("delayed"))
            if (typeof message.delayed !== "boolean")
                return "delayed: boolean expected";
        if (message.numberExponent != null && message.hasOwnProperty("numberExponent"))
            if (!$util.isInteger(message.numberExponent))
                return "numberExponent: integer expected";
        if (message.enumOptions != null && message.hasOwnProperty("enumOptions")) {
            if (!Array.isArray(message.enumOptions))
                return "enumOptions: array expected";
            for (var i = 0; i < message.enumOptions.length; ++i)
                if (!$util.isString(message.enumOptions[i]))
                    return "enumOptions: string[] expected";
        }
        if (message.structProperties != null && message.hasOwnProperty("structProperties")) {
            if (!Array.isArray(message.structProperties))
                return "structProperties: array expected";
            for (var i = 0; i < message.structProperties.length; ++i) {
                var error = $root.PropertySchema.verify(message.structProperties[i]);
                if (error)
                    return "structProperties." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PropertySchema message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PropertySchema
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PropertySchema} PropertySchema
     */
    PropertySchema.fromObject = function fromObject(object) {
        if (object instanceof $root.PropertySchema)
            return object;
        var message = new $root.PropertySchema();
        if (object.name != null)
            message.name = String(object.name);
        switch (object.dataType) {
        case "TYPE_UNSET":
        case 0:
            message.dataType = 0;
            break;
        case "BYTES":
        case 1:
            message.dataType = 1;
            break;
        case "BOOLEAN":
        case 2:
            message.dataType = 2;
            break;
        case "NUMBER":
        case 3:
            message.dataType = 3;
            break;
        case "STRING":
        case 4:
            message.dataType = 4;
            break;
        case "ENUM":
        case 5:
            message.dataType = 5;
            break;
        case "STRUCT":
        case 6:
            message.dataType = 6;
            break;
        case "LOCATION":
        case 7:
            message.dataType = 7;
            break;
        }
        if (object.required != null)
            message.required = Boolean(object.required);
        if (object.fixed != null)
            message.fixed = Boolean(object.fixed);
        if (object.delayed != null)
            message.delayed = Boolean(object.delayed);
        if (object.numberExponent != null)
            message.numberExponent = object.numberExponent | 0;
        if (object.enumOptions) {
            if (!Array.isArray(object.enumOptions))
                throw TypeError(".PropertySchema.enumOptions: array expected");
            message.enumOptions = [];
            for (var i = 0; i < object.enumOptions.length; ++i)
                message.enumOptions[i] = String(object.enumOptions[i]);
        }
        if (object.structProperties) {
            if (!Array.isArray(object.structProperties))
                throw TypeError(".PropertySchema.structProperties: array expected");
            message.structProperties = [];
            for (var i = 0; i < object.structProperties.length; ++i) {
                if (typeof object.structProperties[i] !== "object")
                    throw TypeError(".PropertySchema.structProperties: object expected");
                message.structProperties[i] = $root.PropertySchema.fromObject(object.structProperties[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PropertySchema message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PropertySchema
     * @static
     * @param {PropertySchema} message PropertySchema
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PropertySchema.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.enumOptions = [];
            object.structProperties = [];
        }
        if (options.defaults) {
            object.name = "";
            object.dataType = options.enums === String ? "TYPE_UNSET" : 0;
            object.required = false;
            object.fixed = false;
            object.delayed = false;
            object.numberExponent = 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.dataType != null && message.hasOwnProperty("dataType"))
            object.dataType = options.enums === String ? $root.PropertySchema.DataType[message.dataType] : message.dataType;
        if (message.required != null && message.hasOwnProperty("required"))
            object.required = message.required;
        if (message.fixed != null && message.hasOwnProperty("fixed"))
            object.fixed = message.fixed;
        if (message.delayed != null && message.hasOwnProperty("delayed"))
            object.delayed = message.delayed;
        if (message.numberExponent != null && message.hasOwnProperty("numberExponent"))
            object.numberExponent = message.numberExponent;
        if (message.enumOptions && message.enumOptions.length) {
            object.enumOptions = [];
            for (var j = 0; j < message.enumOptions.length; ++j)
                object.enumOptions[j] = message.enumOptions[j];
        }
        if (message.structProperties && message.structProperties.length) {
            object.structProperties = [];
            for (var j = 0; j < message.structProperties.length; ++j)
                object.structProperties[j] = $root.PropertySchema.toObject(message.structProperties[j], options);
        }
        return object;
    };

    /**
     * Converts this PropertySchema to JSON.
     * @function toJSON
     * @memberof PropertySchema
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PropertySchema.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * DataType enum.
     * @name PropertySchema.DataType
     * @enum {string}
     * @property {number} TYPE_UNSET=0 TYPE_UNSET value
     * @property {number} BYTES=1 BYTES value
     * @property {number} BOOLEAN=2 BOOLEAN value
     * @property {number} NUMBER=3 NUMBER value
     * @property {number} STRING=4 STRING value
     * @property {number} ENUM=5 ENUM value
     * @property {number} STRUCT=6 STRUCT value
     * @property {number} LOCATION=7 LOCATION value
     */
    PropertySchema.DataType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TYPE_UNSET"] = 0;
        values[valuesById[1] = "BYTES"] = 1;
        values[valuesById[2] = "BOOLEAN"] = 2;
        values[valuesById[3] = "NUMBER"] = 3;
        values[valuesById[4] = "STRING"] = 4;
        values[valuesById[5] = "ENUM"] = 5;
        values[valuesById[6] = "STRUCT"] = 6;
        values[valuesById[7] = "LOCATION"] = 7;
        return values;
    })();

    return PropertySchema;
})();

$root.PropertyValue = (function() {

    /**
     * Properties of a PropertyValue.
     * @exports IPropertyValue
     * @interface IPropertyValue
     * @property {string|null} [name] PropertyValue name
     * @property {PropertySchema.DataType|null} [dataType] PropertyValue dataType
     * @property {Uint8Array|null} [bytesValue] PropertyValue bytesValue
     * @property {boolean|null} [booleanValue] PropertyValue booleanValue
     * @property {number|Long|null} [numberValue] PropertyValue numberValue
     * @property {string|null} [stringValue] PropertyValue stringValue
     * @property {string|null} [enumValue] PropertyValue enumValue
     * @property {Array.<IPropertyValue>|null} [structValues] PropertyValue structValues
     * @property {ILocation|null} [locationValue] PropertyValue locationValue
     */

    /**
     * Constructs a new PropertyValue.
     * @exports PropertyValue
     * @classdesc Represents a PropertyValue.
     * @implements IPropertyValue
     * @constructor
     * @param {IPropertyValue=} [properties] Properties to set
     */
    function PropertyValue(properties) {
        this.structValues = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PropertyValue name.
     * @member {string} name
     * @memberof PropertyValue
     * @instance
     */
    PropertyValue.prototype.name = "";

    /**
     * PropertyValue dataType.
     * @member {PropertySchema.DataType} dataType
     * @memberof PropertyValue
     * @instance
     */
    PropertyValue.prototype.dataType = 0;

    /**
     * PropertyValue bytesValue.
     * @member {Uint8Array} bytesValue
     * @memberof PropertyValue
     * @instance
     */
    PropertyValue.prototype.bytesValue = $util.newBuffer([]);

    /**
     * PropertyValue booleanValue.
     * @member {boolean} booleanValue
     * @memberof PropertyValue
     * @instance
     */
    PropertyValue.prototype.booleanValue = false;

    /**
     * PropertyValue numberValue.
     * @member {number|Long} numberValue
     * @memberof PropertyValue
     * @instance
     */
    PropertyValue.prototype.numberValue = 0;

    /**
     * PropertyValue stringValue.
     * @member {string} stringValue
     * @memberof PropertyValue
     * @instance
     */
    PropertyValue.prototype.stringValue = "";

    /**
     * PropertyValue enumValue.
     * @member {string} enumValue
     * @memberof PropertyValue
     * @instance
     */
    PropertyValue.prototype.enumValue = "";

    /**
     * PropertyValue structValues.
     * @member {Array.<IPropertyValue>} structValues
     * @memberof PropertyValue
     * @instance
     */
    PropertyValue.prototype.structValues = $util.emptyArray;

    /**
     * PropertyValue locationValue.
     * @member {ILocation|null|undefined} locationValue
     * @memberof PropertyValue
     * @instance
     */
    PropertyValue.prototype.locationValue = null;

    /**
     * Creates a new PropertyValue instance using the specified properties.
     * @function create
     * @memberof PropertyValue
     * @static
     * @param {IPropertyValue=} [properties] Properties to set
     * @returns {PropertyValue} PropertyValue instance
     */
    PropertyValue.create = function create(properties) {
        return new PropertyValue(properties);
    };

    /**
     * Encodes the specified PropertyValue message. Does not implicitly {@link PropertyValue.verify|verify} messages.
     * @function encode
     * @memberof PropertyValue
     * @static
     * @param {IPropertyValue} message PropertyValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertyValue.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.dataType != null && message.hasOwnProperty("dataType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.dataType);
        if (message.bytesValue != null && message.hasOwnProperty("bytesValue"))
            writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.bytesValue);
        if (message.booleanValue != null && message.hasOwnProperty("booleanValue"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.booleanValue);
        if (message.numberValue != null && message.hasOwnProperty("numberValue"))
            writer.uint32(/* id 13, wireType 0 =*/104).sint64(message.numberValue);
        if (message.stringValue != null && message.hasOwnProperty("stringValue"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.stringValue);
        if (message.enumValue != null && message.hasOwnProperty("enumValue"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.enumValue);
        if (message.structValues != null && message.structValues.length)
            for (var i = 0; i < message.structValues.length; ++i)
                $root.PropertyValue.encode(message.structValues[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.locationValue != null && message.hasOwnProperty("locationValue"))
            $root.Location.encode(message.locationValue, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PropertyValue message, length delimited. Does not implicitly {@link PropertyValue.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PropertyValue
     * @static
     * @param {IPropertyValue} message PropertyValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertyValue.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PropertyValue message from the specified reader or buffer.
     * @function decode
     * @memberof PropertyValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PropertyValue} PropertyValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertyValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PropertyValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.dataType = reader.int32();
                break;
            case 11:
                message.bytesValue = reader.bytes();
                break;
            case 12:
                message.booleanValue = reader.bool();
                break;
            case 13:
                message.numberValue = reader.sint64();
                break;
            case 14:
                message.stringValue = reader.string();
                break;
            case 15:
                message.enumValue = reader.string();
                break;
            case 16:
                if (!(message.structValues && message.structValues.length))
                    message.structValues = [];
                message.structValues.push($root.PropertyValue.decode(reader, reader.uint32()));
                break;
            case 17:
                message.locationValue = $root.Location.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PropertyValue message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PropertyValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PropertyValue} PropertyValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertyValue.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PropertyValue message.
     * @function verify
     * @memberof PropertyValue
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PropertyValue.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.dataType != null && message.hasOwnProperty("dataType"))
            switch (message.dataType) {
            default:
                return "dataType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
        if (message.bytesValue != null && message.hasOwnProperty("bytesValue"))
            if (!(message.bytesValue && typeof message.bytesValue.length === "number" || $util.isString(message.bytesValue)))
                return "bytesValue: buffer expected";
        if (message.booleanValue != null && message.hasOwnProperty("booleanValue"))
            if (typeof message.booleanValue !== "boolean")
                return "booleanValue: boolean expected";
        if (message.numberValue != null && message.hasOwnProperty("numberValue"))
            if (!$util.isInteger(message.numberValue) && !(message.numberValue && $util.isInteger(message.numberValue.low) && $util.isInteger(message.numberValue.high)))
                return "numberValue: integer|Long expected";
        if (message.stringValue != null && message.hasOwnProperty("stringValue"))
            if (!$util.isString(message.stringValue))
                return "stringValue: string expected";
        if (message.enumValue != null && message.hasOwnProperty("enumValue"))
            if (!$util.isString(message.enumValue))
                return "enumValue: string expected";
        if (message.structValues != null && message.hasOwnProperty("structValues")) {
            if (!Array.isArray(message.structValues))
                return "structValues: array expected";
            for (var i = 0; i < message.structValues.length; ++i) {
                var error = $root.PropertyValue.verify(message.structValues[i]);
                if (error)
                    return "structValues." + error;
            }
        }
        if (message.locationValue != null && message.hasOwnProperty("locationValue")) {
            var error = $root.Location.verify(message.locationValue);
            if (error)
                return "locationValue." + error;
        }
        return null;
    };

    /**
     * Creates a PropertyValue message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PropertyValue
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PropertyValue} PropertyValue
     */
    PropertyValue.fromObject = function fromObject(object) {
        if (object instanceof $root.PropertyValue)
            return object;
        var message = new $root.PropertyValue();
        if (object.name != null)
            message.name = String(object.name);
        switch (object.dataType) {
        case "TYPE_UNSET":
        case 0:
            message.dataType = 0;
            break;
        case "BYTES":
        case 1:
            message.dataType = 1;
            break;
        case "BOOLEAN":
        case 2:
            message.dataType = 2;
            break;
        case "NUMBER":
        case 3:
            message.dataType = 3;
            break;
        case "STRING":
        case 4:
            message.dataType = 4;
            break;
        case "ENUM":
        case 5:
            message.dataType = 5;
            break;
        case "STRUCT":
        case 6:
            message.dataType = 6;
            break;
        case "LOCATION":
        case 7:
            message.dataType = 7;
            break;
        }
        if (object.bytesValue != null)
            if (typeof object.bytesValue === "string")
                $util.base64.decode(object.bytesValue, message.bytesValue = $util.newBuffer($util.base64.length(object.bytesValue)), 0);
            else if (object.bytesValue.length)
                message.bytesValue = object.bytesValue;
        if (object.booleanValue != null)
            message.booleanValue = Boolean(object.booleanValue);
        if (object.numberValue != null)
            if ($util.Long)
                (message.numberValue = $util.Long.fromValue(object.numberValue)).unsigned = false;
            else if (typeof object.numberValue === "string")
                message.numberValue = parseInt(object.numberValue, 10);
            else if (typeof object.numberValue === "number")
                message.numberValue = object.numberValue;
            else if (typeof object.numberValue === "object")
                message.numberValue = new $util.LongBits(object.numberValue.low >>> 0, object.numberValue.high >>> 0).toNumber();
        if (object.stringValue != null)
            message.stringValue = String(object.stringValue);
        if (object.enumValue != null)
            message.enumValue = String(object.enumValue);
        if (object.structValues) {
            if (!Array.isArray(object.structValues))
                throw TypeError(".PropertyValue.structValues: array expected");
            message.structValues = [];
            for (var i = 0; i < object.structValues.length; ++i) {
                if (typeof object.structValues[i] !== "object")
                    throw TypeError(".PropertyValue.structValues: object expected");
                message.structValues[i] = $root.PropertyValue.fromObject(object.structValues[i]);
            }
        }
        if (object.locationValue != null) {
            if (typeof object.locationValue !== "object")
                throw TypeError(".PropertyValue.locationValue: object expected");
            message.locationValue = $root.Location.fromObject(object.locationValue);
        }
        return message;
    };

    /**
     * Creates a plain object from a PropertyValue message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PropertyValue
     * @static
     * @param {PropertyValue} message PropertyValue
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PropertyValue.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.structValues = [];
        if (options.defaults) {
            object.name = "";
            object.dataType = options.enums === String ? "TYPE_UNSET" : 0;
            object.bytesValue = options.bytes === String ? "" : [];
            object.booleanValue = false;
            object.numberValue = 0;
            object.stringValue = "";
            object.enumValue = "";
            object.locationValue = null;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.dataType != null && message.hasOwnProperty("dataType"))
            object.dataType = options.enums === String ? $root.PropertySchema.DataType[message.dataType] : message.dataType;
        if (message.bytesValue != null && message.hasOwnProperty("bytesValue"))
            object.bytesValue = options.bytes === String ? $util.base64.encode(message.bytesValue, 0, message.bytesValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesValue) : message.bytesValue;
        if (message.booleanValue != null && message.hasOwnProperty("booleanValue"))
            object.booleanValue = message.booleanValue;
        if (message.numberValue != null && message.hasOwnProperty("numberValue"))
            if (typeof message.numberValue === "number")
                object.numberValue = options.longs === String ? String(message.numberValue) : message.numberValue;
            else
                object.numberValue = options.longs === String ? $util.Long.prototype.toString.call(message.numberValue) : options.longs === Number ? new $util.LongBits(message.numberValue.low >>> 0, message.numberValue.high >>> 0).toNumber() : message.numberValue;
        if (message.stringValue != null && message.hasOwnProperty("stringValue"))
            object.stringValue = message.stringValue;
        if (message.enumValue != null && message.hasOwnProperty("enumValue"))
            object.enumValue = message.enumValue;
        if (message.structValues && message.structValues.length) {
            object.structValues = [];
            for (var j = 0; j < message.structValues.length; ++j)
                object.structValues[j] = $root.PropertyValue.toObject(message.structValues[j], options);
        }
        if (message.locationValue != null && message.hasOwnProperty("locationValue"))
            object.locationValue = $root.Location.toObject(message.locationValue, options);
        return object;
    };

    /**
     * Converts this PropertyValue to JSON.
     * @function toJSON
     * @memberof PropertyValue
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PropertyValue.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PropertyValue;
})();

$root.PropertyPage = (function() {

    /**
     * Properties of a PropertyPage.
     * @exports IPropertyPage
     * @interface IPropertyPage
     * @property {string|null} [name] PropertyPage name
     * @property {string|null} [recordId] PropertyPage recordId
     * @property {Array.<PropertyPage.IReportedValue>|null} [reportedValues] PropertyPage reportedValues
     */

    /**
     * Constructs a new PropertyPage.
     * @exports PropertyPage
     * @classdesc Represents a PropertyPage.
     * @implements IPropertyPage
     * @constructor
     * @param {IPropertyPage=} [properties] Properties to set
     */
    function PropertyPage(properties) {
        this.reportedValues = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PropertyPage name.
     * @member {string} name
     * @memberof PropertyPage
     * @instance
     */
    PropertyPage.prototype.name = "";

    /**
     * PropertyPage recordId.
     * @member {string} recordId
     * @memberof PropertyPage
     * @instance
     */
    PropertyPage.prototype.recordId = "";

    /**
     * PropertyPage reportedValues.
     * @member {Array.<PropertyPage.IReportedValue>} reportedValues
     * @memberof PropertyPage
     * @instance
     */
    PropertyPage.prototype.reportedValues = $util.emptyArray;

    /**
     * Creates a new PropertyPage instance using the specified properties.
     * @function create
     * @memberof PropertyPage
     * @static
     * @param {IPropertyPage=} [properties] Properties to set
     * @returns {PropertyPage} PropertyPage instance
     */
    PropertyPage.create = function create(properties) {
        return new PropertyPage(properties);
    };

    /**
     * Encodes the specified PropertyPage message. Does not implicitly {@link PropertyPage.verify|verify} messages.
     * @function encode
     * @memberof PropertyPage
     * @static
     * @param {IPropertyPage} message PropertyPage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertyPage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.recordId != null && message.hasOwnProperty("recordId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.recordId);
        if (message.reportedValues != null && message.reportedValues.length)
            for (var i = 0; i < message.reportedValues.length; ++i)
                $root.PropertyPage.ReportedValue.encode(message.reportedValues[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PropertyPage message, length delimited. Does not implicitly {@link PropertyPage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PropertyPage
     * @static
     * @param {IPropertyPage} message PropertyPage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertyPage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PropertyPage message from the specified reader or buffer.
     * @function decode
     * @memberof PropertyPage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PropertyPage} PropertyPage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertyPage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PropertyPage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.recordId = reader.string();
                break;
            case 3:
                if (!(message.reportedValues && message.reportedValues.length))
                    message.reportedValues = [];
                message.reportedValues.push($root.PropertyPage.ReportedValue.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PropertyPage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PropertyPage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PropertyPage} PropertyPage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertyPage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PropertyPage message.
     * @function verify
     * @memberof PropertyPage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PropertyPage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.recordId != null && message.hasOwnProperty("recordId"))
            if (!$util.isString(message.recordId))
                return "recordId: string expected";
        if (message.reportedValues != null && message.hasOwnProperty("reportedValues")) {
            if (!Array.isArray(message.reportedValues))
                return "reportedValues: array expected";
            for (var i = 0; i < message.reportedValues.length; ++i) {
                var error = $root.PropertyPage.ReportedValue.verify(message.reportedValues[i]);
                if (error)
                    return "reportedValues." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PropertyPage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PropertyPage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PropertyPage} PropertyPage
     */
    PropertyPage.fromObject = function fromObject(object) {
        if (object instanceof $root.PropertyPage)
            return object;
        var message = new $root.PropertyPage();
        if (object.name != null)
            message.name = String(object.name);
        if (object.recordId != null)
            message.recordId = String(object.recordId);
        if (object.reportedValues) {
            if (!Array.isArray(object.reportedValues))
                throw TypeError(".PropertyPage.reportedValues: array expected");
            message.reportedValues = [];
            for (var i = 0; i < object.reportedValues.length; ++i) {
                if (typeof object.reportedValues[i] !== "object")
                    throw TypeError(".PropertyPage.reportedValues: object expected");
                message.reportedValues[i] = $root.PropertyPage.ReportedValue.fromObject(object.reportedValues[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PropertyPage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PropertyPage
     * @static
     * @param {PropertyPage} message PropertyPage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PropertyPage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.reportedValues = [];
        if (options.defaults) {
            object.name = "";
            object.recordId = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.recordId != null && message.hasOwnProperty("recordId"))
            object.recordId = message.recordId;
        if (message.reportedValues && message.reportedValues.length) {
            object.reportedValues = [];
            for (var j = 0; j < message.reportedValues.length; ++j)
                object.reportedValues[j] = $root.PropertyPage.ReportedValue.toObject(message.reportedValues[j], options);
        }
        return object;
    };

    /**
     * Converts this PropertyPage to JSON.
     * @function toJSON
     * @memberof PropertyPage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PropertyPage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    PropertyPage.ReportedValue = (function() {

        /**
         * Properties of a ReportedValue.
         * @memberof PropertyPage
         * @interface IReportedValue
         * @property {number|null} [reporterIndex] ReportedValue reporterIndex
         * @property {number|Long|null} [timestamp] ReportedValue timestamp
         * @property {Uint8Array|null} [bytesValue] ReportedValue bytesValue
         * @property {boolean|null} [booleanValue] ReportedValue booleanValue
         * @property {number|Long|null} [numberValue] ReportedValue numberValue
         * @property {string|null} [stringValue] ReportedValue stringValue
         * @property {number|null} [enumValue] ReportedValue enumValue
         * @property {Array.<IPropertyValue>|null} [structValues] ReportedValue structValues
         * @property {ILocation|null} [locationValue] ReportedValue locationValue
         */

        /**
         * Constructs a new ReportedValue.
         * @memberof PropertyPage
         * @classdesc Represents a ReportedValue.
         * @implements IReportedValue
         * @constructor
         * @param {PropertyPage.IReportedValue=} [properties] Properties to set
         */
        function ReportedValue(properties) {
            this.structValues = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReportedValue reporterIndex.
         * @member {number} reporterIndex
         * @memberof PropertyPage.ReportedValue
         * @instance
         */
        ReportedValue.prototype.reporterIndex = 0;

        /**
         * ReportedValue timestamp.
         * @member {number|Long} timestamp
         * @memberof PropertyPage.ReportedValue
         * @instance
         */
        ReportedValue.prototype.timestamp = 0;

        /**
         * ReportedValue bytesValue.
         * @member {Uint8Array} bytesValue
         * @memberof PropertyPage.ReportedValue
         * @instance
         */
        ReportedValue.prototype.bytesValue = $util.newBuffer([]);

        /**
         * ReportedValue booleanValue.
         * @member {boolean} booleanValue
         * @memberof PropertyPage.ReportedValue
         * @instance
         */
        ReportedValue.prototype.booleanValue = false;

        /**
         * ReportedValue numberValue.
         * @member {number|Long} numberValue
         * @memberof PropertyPage.ReportedValue
         * @instance
         */
        ReportedValue.prototype.numberValue = 0;

        /**
         * ReportedValue stringValue.
         * @member {string} stringValue
         * @memberof PropertyPage.ReportedValue
         * @instance
         */
        ReportedValue.prototype.stringValue = "";

        /**
         * ReportedValue enumValue.
         * @member {number} enumValue
         * @memberof PropertyPage.ReportedValue
         * @instance
         */
        ReportedValue.prototype.enumValue = 0;

        /**
         * ReportedValue structValues.
         * @member {Array.<IPropertyValue>} structValues
         * @memberof PropertyPage.ReportedValue
         * @instance
         */
        ReportedValue.prototype.structValues = $util.emptyArray;

        /**
         * ReportedValue locationValue.
         * @member {ILocation|null|undefined} locationValue
         * @memberof PropertyPage.ReportedValue
         * @instance
         */
        ReportedValue.prototype.locationValue = null;

        /**
         * Creates a new ReportedValue instance using the specified properties.
         * @function create
         * @memberof PropertyPage.ReportedValue
         * @static
         * @param {PropertyPage.IReportedValue=} [properties] Properties to set
         * @returns {PropertyPage.ReportedValue} ReportedValue instance
         */
        ReportedValue.create = function create(properties) {
            return new ReportedValue(properties);
        };

        /**
         * Encodes the specified ReportedValue message. Does not implicitly {@link PropertyPage.ReportedValue.verify|verify} messages.
         * @function encode
         * @memberof PropertyPage.ReportedValue
         * @static
         * @param {PropertyPage.IReportedValue} message ReportedValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportedValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reporterIndex != null && message.hasOwnProperty("reporterIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.reporterIndex);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.timestamp);
            if (message.bytesValue != null && message.hasOwnProperty("bytesValue"))
                writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.bytesValue);
            if (message.booleanValue != null && message.hasOwnProperty("booleanValue"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.booleanValue);
            if (message.numberValue != null && message.hasOwnProperty("numberValue"))
                writer.uint32(/* id 13, wireType 0 =*/104).sint64(message.numberValue);
            if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.stringValue);
            if (message.enumValue != null && message.hasOwnProperty("enumValue"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.enumValue);
            if (message.structValues != null && message.structValues.length)
                for (var i = 0; i < message.structValues.length; ++i)
                    $root.PropertyValue.encode(message.structValues[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.locationValue != null && message.hasOwnProperty("locationValue"))
                $root.Location.encode(message.locationValue, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReportedValue message, length delimited. Does not implicitly {@link PropertyPage.ReportedValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PropertyPage.ReportedValue
         * @static
         * @param {PropertyPage.IReportedValue} message ReportedValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportedValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReportedValue message from the specified reader or buffer.
         * @function decode
         * @memberof PropertyPage.ReportedValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PropertyPage.ReportedValue} ReportedValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportedValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PropertyPage.ReportedValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reporterIndex = reader.uint32();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                case 11:
                    message.bytesValue = reader.bytes();
                    break;
                case 12:
                    message.booleanValue = reader.bool();
                    break;
                case 13:
                    message.numberValue = reader.sint64();
                    break;
                case 14:
                    message.stringValue = reader.string();
                    break;
                case 15:
                    message.enumValue = reader.uint32();
                    break;
                case 16:
                    if (!(message.structValues && message.structValues.length))
                        message.structValues = [];
                    message.structValues.push($root.PropertyValue.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.locationValue = $root.Location.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReportedValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PropertyPage.ReportedValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PropertyPage.ReportedValue} ReportedValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportedValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReportedValue message.
         * @function verify
         * @memberof PropertyPage.ReportedValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReportedValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reporterIndex != null && message.hasOwnProperty("reporterIndex"))
                if (!$util.isInteger(message.reporterIndex))
                    return "reporterIndex: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.bytesValue != null && message.hasOwnProperty("bytesValue"))
                if (!(message.bytesValue && typeof message.bytesValue.length === "number" || $util.isString(message.bytesValue)))
                    return "bytesValue: buffer expected";
            if (message.booleanValue != null && message.hasOwnProperty("booleanValue"))
                if (typeof message.booleanValue !== "boolean")
                    return "booleanValue: boolean expected";
            if (message.numberValue != null && message.hasOwnProperty("numberValue"))
                if (!$util.isInteger(message.numberValue) && !(message.numberValue && $util.isInteger(message.numberValue.low) && $util.isInteger(message.numberValue.high)))
                    return "numberValue: integer|Long expected";
            if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                if (!$util.isString(message.stringValue))
                    return "stringValue: string expected";
            if (message.enumValue != null && message.hasOwnProperty("enumValue"))
                if (!$util.isInteger(message.enumValue))
                    return "enumValue: integer expected";
            if (message.structValues != null && message.hasOwnProperty("structValues")) {
                if (!Array.isArray(message.structValues))
                    return "structValues: array expected";
                for (var i = 0; i < message.structValues.length; ++i) {
                    var error = $root.PropertyValue.verify(message.structValues[i]);
                    if (error)
                        return "structValues." + error;
                }
            }
            if (message.locationValue != null && message.hasOwnProperty("locationValue")) {
                var error = $root.Location.verify(message.locationValue);
                if (error)
                    return "locationValue." + error;
            }
            return null;
        };

        /**
         * Creates a ReportedValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PropertyPage.ReportedValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PropertyPage.ReportedValue} ReportedValue
         */
        ReportedValue.fromObject = function fromObject(object) {
            if (object instanceof $root.PropertyPage.ReportedValue)
                return object;
            var message = new $root.PropertyPage.ReportedValue();
            if (object.reporterIndex != null)
                message.reporterIndex = object.reporterIndex >>> 0;
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            if (object.bytesValue != null)
                if (typeof object.bytesValue === "string")
                    $util.base64.decode(object.bytesValue, message.bytesValue = $util.newBuffer($util.base64.length(object.bytesValue)), 0);
                else if (object.bytesValue.length)
                    message.bytesValue = object.bytesValue;
            if (object.booleanValue != null)
                message.booleanValue = Boolean(object.booleanValue);
            if (object.numberValue != null)
                if ($util.Long)
                    (message.numberValue = $util.Long.fromValue(object.numberValue)).unsigned = false;
                else if (typeof object.numberValue === "string")
                    message.numberValue = parseInt(object.numberValue, 10);
                else if (typeof object.numberValue === "number")
                    message.numberValue = object.numberValue;
                else if (typeof object.numberValue === "object")
                    message.numberValue = new $util.LongBits(object.numberValue.low >>> 0, object.numberValue.high >>> 0).toNumber();
            if (object.stringValue != null)
                message.stringValue = String(object.stringValue);
            if (object.enumValue != null)
                message.enumValue = object.enumValue >>> 0;
            if (object.structValues) {
                if (!Array.isArray(object.structValues))
                    throw TypeError(".PropertyPage.ReportedValue.structValues: array expected");
                message.structValues = [];
                for (var i = 0; i < object.structValues.length; ++i) {
                    if (typeof object.structValues[i] !== "object")
                        throw TypeError(".PropertyPage.ReportedValue.structValues: object expected");
                    message.structValues[i] = $root.PropertyValue.fromObject(object.structValues[i]);
                }
            }
            if (object.locationValue != null) {
                if (typeof object.locationValue !== "object")
                    throw TypeError(".PropertyPage.ReportedValue.locationValue: object expected");
                message.locationValue = $root.Location.fromObject(object.locationValue);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReportedValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PropertyPage.ReportedValue
         * @static
         * @param {PropertyPage.ReportedValue} message ReportedValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReportedValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.structValues = [];
            if (options.defaults) {
                object.reporterIndex = 0;
                object.timestamp = 0;
                object.bytesValue = options.bytes === String ? "" : [];
                object.booleanValue = false;
                object.numberValue = 0;
                object.stringValue = "";
                object.enumValue = 0;
                object.locationValue = null;
            }
            if (message.reporterIndex != null && message.hasOwnProperty("reporterIndex"))
                object.reporterIndex = message.reporterIndex;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            if (message.bytesValue != null && message.hasOwnProperty("bytesValue"))
                object.bytesValue = options.bytes === String ? $util.base64.encode(message.bytesValue, 0, message.bytesValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesValue) : message.bytesValue;
            if (message.booleanValue != null && message.hasOwnProperty("booleanValue"))
                object.booleanValue = message.booleanValue;
            if (message.numberValue != null && message.hasOwnProperty("numberValue"))
                if (typeof message.numberValue === "number")
                    object.numberValue = options.longs === String ? String(message.numberValue) : message.numberValue;
                else
                    object.numberValue = options.longs === String ? $util.Long.prototype.toString.call(message.numberValue) : options.longs === Number ? new $util.LongBits(message.numberValue.low >>> 0, message.numberValue.high >>> 0).toNumber() : message.numberValue;
            if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                object.stringValue = message.stringValue;
            if (message.enumValue != null && message.hasOwnProperty("enumValue"))
                object.enumValue = message.enumValue;
            if (message.structValues && message.structValues.length) {
                object.structValues = [];
                for (var j = 0; j < message.structValues.length; ++j)
                    object.structValues[j] = $root.PropertyValue.toObject(message.structValues[j], options);
            }
            if (message.locationValue != null && message.hasOwnProperty("locationValue"))
                object.locationValue = $root.Location.toObject(message.locationValue, options);
            return object;
        };

        /**
         * Converts this ReportedValue to JSON.
         * @function toJSON
         * @memberof PropertyPage.ReportedValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReportedValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReportedValue;
    })();

    return PropertyPage;
})();

$root.PropertyPageContainer = (function() {

    /**
     * Properties of a PropertyPageContainer.
     * @exports IPropertyPageContainer
     * @interface IPropertyPageContainer
     * @property {Array.<IPropertyPage>|null} [entries] PropertyPageContainer entries
     */

    /**
     * Constructs a new PropertyPageContainer.
     * @exports PropertyPageContainer
     * @classdesc Represents a PropertyPageContainer.
     * @implements IPropertyPageContainer
     * @constructor
     * @param {IPropertyPageContainer=} [properties] Properties to set
     */
    function PropertyPageContainer(properties) {
        this.entries = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PropertyPageContainer entries.
     * @member {Array.<IPropertyPage>} entries
     * @memberof PropertyPageContainer
     * @instance
     */
    PropertyPageContainer.prototype.entries = $util.emptyArray;

    /**
     * Creates a new PropertyPageContainer instance using the specified properties.
     * @function create
     * @memberof PropertyPageContainer
     * @static
     * @param {IPropertyPageContainer=} [properties] Properties to set
     * @returns {PropertyPageContainer} PropertyPageContainer instance
     */
    PropertyPageContainer.create = function create(properties) {
        return new PropertyPageContainer(properties);
    };

    /**
     * Encodes the specified PropertyPageContainer message. Does not implicitly {@link PropertyPageContainer.verify|verify} messages.
     * @function encode
     * @memberof PropertyPageContainer
     * @static
     * @param {IPropertyPageContainer} message PropertyPageContainer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertyPageContainer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.entries != null && message.entries.length)
            for (var i = 0; i < message.entries.length; ++i)
                $root.PropertyPage.encode(message.entries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PropertyPageContainer message, length delimited. Does not implicitly {@link PropertyPageContainer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PropertyPageContainer
     * @static
     * @param {IPropertyPageContainer} message PropertyPageContainer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PropertyPageContainer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PropertyPageContainer message from the specified reader or buffer.
     * @function decode
     * @memberof PropertyPageContainer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PropertyPageContainer} PropertyPageContainer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertyPageContainer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PropertyPageContainer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.entries && message.entries.length))
                    message.entries = [];
                message.entries.push($root.PropertyPage.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PropertyPageContainer message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PropertyPageContainer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PropertyPageContainer} PropertyPageContainer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PropertyPageContainer.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PropertyPageContainer message.
     * @function verify
     * @memberof PropertyPageContainer
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PropertyPageContainer.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.entries != null && message.hasOwnProperty("entries")) {
            if (!Array.isArray(message.entries))
                return "entries: array expected";
            for (var i = 0; i < message.entries.length; ++i) {
                var error = $root.PropertyPage.verify(message.entries[i]);
                if (error)
                    return "entries." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PropertyPageContainer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PropertyPageContainer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PropertyPageContainer} PropertyPageContainer
     */
    PropertyPageContainer.fromObject = function fromObject(object) {
        if (object instanceof $root.PropertyPageContainer)
            return object;
        var message = new $root.PropertyPageContainer();
        if (object.entries) {
            if (!Array.isArray(object.entries))
                throw TypeError(".PropertyPageContainer.entries: array expected");
            message.entries = [];
            for (var i = 0; i < object.entries.length; ++i) {
                if (typeof object.entries[i] !== "object")
                    throw TypeError(".PropertyPageContainer.entries: object expected");
                message.entries[i] = $root.PropertyPage.fromObject(object.entries[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PropertyPageContainer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PropertyPageContainer
     * @static
     * @param {PropertyPageContainer} message PropertyPageContainer
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PropertyPageContainer.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.entries = [];
        if (message.entries && message.entries.length) {
            object.entries = [];
            for (var j = 0; j < message.entries.length; ++j)
                object.entries[j] = $root.PropertyPage.toObject(message.entries[j], options);
        }
        return object;
    };

    /**
     * Converts this PropertyPageContainer to JSON.
     * @function toJSON
     * @memberof PropertyPageContainer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PropertyPageContainer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PropertyPageContainer;
})();

$root.Location = (function() {

    /**
     * Properties of a Location.
     * @exports ILocation
     * @interface ILocation
     * @property {number|Long|null} [latitude] Location latitude
     * @property {number|Long|null} [longitude] Location longitude
     */

    /**
     * Constructs a new Location.
     * @exports Location
     * @classdesc Represents a Location.
     * @implements ILocation
     * @constructor
     * @param {ILocation=} [properties] Properties to set
     */
    function Location(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Location latitude.
     * @member {number|Long} latitude
     * @memberof Location
     * @instance
     */
    Location.prototype.latitude = 0;

    /**
     * Location longitude.
     * @member {number|Long} longitude
     * @memberof Location
     * @instance
     */
    Location.prototype.longitude = 0;

    /**
     * Creates a new Location instance using the specified properties.
     * @function create
     * @memberof Location
     * @static
     * @param {ILocation=} [properties] Properties to set
     * @returns {Location} Location instance
     */
    Location.create = function create(properties) {
        return new Location(properties);
    };

    /**
     * Encodes the specified Location message. Does not implicitly {@link Location.verify|verify} messages.
     * @function encode
     * @memberof Location
     * @static
     * @param {ILocation} message Location message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Location.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.latitude != null && message.hasOwnProperty("latitude"))
            writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.latitude);
        if (message.longitude != null && message.hasOwnProperty("longitude"))
            writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.longitude);
        return writer;
    };

    /**
     * Encodes the specified Location message, length delimited. Does not implicitly {@link Location.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Location
     * @static
     * @param {ILocation} message Location message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Location.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Location message from the specified reader or buffer.
     * @function decode
     * @memberof Location
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Location} Location
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Location.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Location();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.latitude = reader.sint64();
                break;
            case 2:
                message.longitude = reader.sint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Location message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Location
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Location} Location
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Location.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Location message.
     * @function verify
     * @memberof Location
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Location.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.latitude != null && message.hasOwnProperty("latitude"))
            if (!$util.isInteger(message.latitude) && !(message.latitude && $util.isInteger(message.latitude.low) && $util.isInteger(message.latitude.high)))
                return "latitude: integer|Long expected";
        if (message.longitude != null && message.hasOwnProperty("longitude"))
            if (!$util.isInteger(message.longitude) && !(message.longitude && $util.isInteger(message.longitude.low) && $util.isInteger(message.longitude.high)))
                return "longitude: integer|Long expected";
        return null;
    };

    /**
     * Creates a Location message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Location
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Location} Location
     */
    Location.fromObject = function fromObject(object) {
        if (object instanceof $root.Location)
            return object;
        var message = new $root.Location();
        if (object.latitude != null)
            if ($util.Long)
                (message.latitude = $util.Long.fromValue(object.latitude)).unsigned = false;
            else if (typeof object.latitude === "string")
                message.latitude = parseInt(object.latitude, 10);
            else if (typeof object.latitude === "number")
                message.latitude = object.latitude;
            else if (typeof object.latitude === "object")
                message.latitude = new $util.LongBits(object.latitude.low >>> 0, object.latitude.high >>> 0).toNumber();
        if (object.longitude != null)
            if ($util.Long)
                (message.longitude = $util.Long.fromValue(object.longitude)).unsigned = false;
            else if (typeof object.longitude === "string")
                message.longitude = parseInt(object.longitude, 10);
            else if (typeof object.longitude === "number")
                message.longitude = object.longitude;
            else if (typeof object.longitude === "object")
                message.longitude = new $util.LongBits(object.longitude.low >>> 0, object.longitude.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a Location message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Location
     * @static
     * @param {Location} message Location
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Location.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.latitude = 0;
            object.longitude = 0;
        }
        if (message.latitude != null && message.hasOwnProperty("latitude"))
            if (typeof message.latitude === "number")
                object.latitude = options.longs === String ? String(message.latitude) : message.latitude;
            else
                object.latitude = options.longs === String ? $util.Long.prototype.toString.call(message.latitude) : options.longs === Number ? new $util.LongBits(message.latitude.low >>> 0, message.latitude.high >>> 0).toNumber() : message.latitude;
        if (message.longitude != null && message.hasOwnProperty("longitude"))
            if (typeof message.longitude === "number")
                object.longitude = options.longs === String ? String(message.longitude) : message.longitude;
            else
                object.longitude = options.longs === String ? $util.Long.prototype.toString.call(message.longitude) : options.longs === Number ? new $util.LongBits(message.longitude.low >>> 0, message.longitude.high >>> 0).toNumber() : message.longitude;
        return object;
    };

    /**
     * Converts this Location to JSON.
     * @function toJSON
     * @memberof Location
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Location.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Location;
})();

module.exports = $root;
