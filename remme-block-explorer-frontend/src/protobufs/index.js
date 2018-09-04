/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AccountMethod = (function() {

    /**
     * Properties of an AccountMethod.
     * @exports IAccountMethod
     * @interface IAccountMethod
     */

    /**
     * Constructs a new AccountMethod.
     * @exports AccountMethod
     * @classdesc Represents an AccountMethod.
     * @implements IAccountMethod
     * @constructor
     * @param {IAccountMethod=} [properties] Properties to set
     */
    function AccountMethod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new AccountMethod instance using the specified properties.
     * @function create
     * @memberof AccountMethod
     * @static
     * @param {IAccountMethod=} [properties] Properties to set
     * @returns {AccountMethod} AccountMethod instance
     */
    AccountMethod.create = function create(properties) {
        return new AccountMethod(properties);
    };

    /**
     * Encodes the specified AccountMethod message. Does not implicitly {@link AccountMethod.verify|verify} messages.
     * @function encode
     * @memberof AccountMethod
     * @static
     * @param {IAccountMethod} message AccountMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified AccountMethod message, length delimited. Does not implicitly {@link AccountMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AccountMethod
     * @static
     * @param {IAccountMethod} message AccountMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AccountMethod message from the specified reader or buffer.
     * @function decode
     * @memberof AccountMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AccountMethod} AccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AccountMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AccountMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AccountMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AccountMethod} AccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AccountMethod message.
     * @function verify
     * @memberof AccountMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AccountMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an AccountMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AccountMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AccountMethod} AccountMethod
     */
    AccountMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.AccountMethod)
            return object;
        return new $root.AccountMethod();
    };

    /**
     * Creates a plain object from an AccountMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AccountMethod
     * @static
     * @param {AccountMethod} message AccountMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AccountMethod.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this AccountMethod to JSON.
     * @function toJSON
     * @memberof AccountMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AccountMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name AccountMethod.Method
     * @enum {string}
     * @property {number} TRANSFER=0 TRANSFER value
     * @property {number} GENESIS=1 GENESIS value
     */
    AccountMethod.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TRANSFER"] = 0;
        values[valuesById[1] = "GENESIS"] = 1;
        return values;
    })();

    return AccountMethod;
})();

$root.TransferPayload = (function() {

    /**
     * Properties of a TransferPayload.
     * @exports ITransferPayload
     * @interface ITransferPayload
     * @property {string|null} [addressTo] TransferPayload addressTo
     * @property {number|Long|null} [value] TransferPayload value
     */

    /**
     * Constructs a new TransferPayload.
     * @exports TransferPayload
     * @classdesc Represents a TransferPayload.
     * @implements ITransferPayload
     * @constructor
     * @param {ITransferPayload=} [properties] Properties to set
     */
    function TransferPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransferPayload addressTo.
     * @member {string} addressTo
     * @memberof TransferPayload
     * @instance
     */
    TransferPayload.prototype.addressTo = "";

    /**
     * TransferPayload value.
     * @member {number|Long} value
     * @memberof TransferPayload
     * @instance
     */
    TransferPayload.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new TransferPayload instance using the specified properties.
     * @function create
     * @memberof TransferPayload
     * @static
     * @param {ITransferPayload=} [properties] Properties to set
     * @returns {TransferPayload} TransferPayload instance
     */
    TransferPayload.create = function create(properties) {
        return new TransferPayload(properties);
    };

    /**
     * Encodes the specified TransferPayload message. Does not implicitly {@link TransferPayload.verify|verify} messages.
     * @function encode
     * @memberof TransferPayload
     * @static
     * @param {ITransferPayload} message TransferPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransferPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.addressTo != null && message.hasOwnProperty("addressTo"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.addressTo);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.value);
        return writer;
    };

    /**
     * Encodes the specified TransferPayload message, length delimited. Does not implicitly {@link TransferPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransferPayload
     * @static
     * @param {ITransferPayload} message TransferPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransferPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransferPayload message from the specified reader or buffer.
     * @function decode
     * @memberof TransferPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransferPayload} TransferPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransferPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransferPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.addressTo = reader.string();
                break;
            case 2:
                message.value = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransferPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransferPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransferPayload} TransferPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransferPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransferPayload message.
     * @function verify
     * @memberof TransferPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransferPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.addressTo != null && message.hasOwnProperty("addressTo"))
            if (!$util.isString(message.addressTo))
                return "addressTo: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                return "value: integer|Long expected";
        return null;
    };

    /**
     * Creates a TransferPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransferPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransferPayload} TransferPayload
     */
    TransferPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.TransferPayload)
            return object;
        var message = new $root.TransferPayload();
        if (object.addressTo != null)
            message.addressTo = String(object.addressTo);
        if (object.value != null)
            if ($util.Long)
                (message.value = $util.Long.fromValue(object.value)).unsigned = true;
            else if (typeof object.value === "string")
                message.value = parseInt(object.value, 10);
            else if (typeof object.value === "number")
                message.value = object.value;
            else if (typeof object.value === "object")
                message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a TransferPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransferPayload
     * @static
     * @param {TransferPayload} message TransferPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransferPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.addressTo = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.value = options.longs === String ? "0" : 0;
        }
        if (message.addressTo != null && message.hasOwnProperty("addressTo"))
            object.addressTo = message.addressTo;
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value === "number")
                object.value = options.longs === String ? String(message.value) : message.value;
            else
                object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
        return object;
    };

    /**
     * Converts this TransferPayload to JSON.
     * @function toJSON
     * @memberof TransferPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransferPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TransferPayload;
})();

$root.GenesisPayload = (function() {

    /**
     * Properties of a GenesisPayload.
     * @exports IGenesisPayload
     * @interface IGenesisPayload
     * @property {number|Long|null} [totalSupply] GenesisPayload totalSupply
     */

    /**
     * Constructs a new GenesisPayload.
     * @exports GenesisPayload
     * @classdesc Represents a GenesisPayload.
     * @implements IGenesisPayload
     * @constructor
     * @param {IGenesisPayload=} [properties] Properties to set
     */
    function GenesisPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GenesisPayload totalSupply.
     * @member {number|Long} totalSupply
     * @memberof GenesisPayload
     * @instance
     */
    GenesisPayload.prototype.totalSupply = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new GenesisPayload instance using the specified properties.
     * @function create
     * @memberof GenesisPayload
     * @static
     * @param {IGenesisPayload=} [properties] Properties to set
     * @returns {GenesisPayload} GenesisPayload instance
     */
    GenesisPayload.create = function create(properties) {
        return new GenesisPayload(properties);
    };

    /**
     * Encodes the specified GenesisPayload message. Does not implicitly {@link GenesisPayload.verify|verify} messages.
     * @function encode
     * @memberof GenesisPayload
     * @static
     * @param {IGenesisPayload} message GenesisPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenesisPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.totalSupply != null && message.hasOwnProperty("totalSupply"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.totalSupply);
        return writer;
    };

    /**
     * Encodes the specified GenesisPayload message, length delimited. Does not implicitly {@link GenesisPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenesisPayload
     * @static
     * @param {IGenesisPayload} message GenesisPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenesisPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GenesisPayload message from the specified reader or buffer.
     * @function decode
     * @memberof GenesisPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenesisPayload} GenesisPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenesisPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GenesisPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.totalSupply = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GenesisPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenesisPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenesisPayload} GenesisPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenesisPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenesisPayload message.
     * @function verify
     * @memberof GenesisPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenesisPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.totalSupply != null && message.hasOwnProperty("totalSupply"))
            if (!$util.isInteger(message.totalSupply) && !(message.totalSupply && $util.isInteger(message.totalSupply.low) && $util.isInteger(message.totalSupply.high)))
                return "totalSupply: integer|Long expected";
        return null;
    };

    /**
     * Creates a GenesisPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenesisPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenesisPayload} GenesisPayload
     */
    GenesisPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.GenesisPayload)
            return object;
        var message = new $root.GenesisPayload();
        if (object.totalSupply != null)
            if ($util.Long)
                (message.totalSupply = $util.Long.fromValue(object.totalSupply)).unsigned = true;
            else if (typeof object.totalSupply === "string")
                message.totalSupply = parseInt(object.totalSupply, 10);
            else if (typeof object.totalSupply === "number")
                message.totalSupply = object.totalSupply;
            else if (typeof object.totalSupply === "object")
                message.totalSupply = new $util.LongBits(object.totalSupply.low >>> 0, object.totalSupply.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a GenesisPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenesisPayload
     * @static
     * @param {GenesisPayload} message GenesisPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenesisPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.totalSupply = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalSupply = options.longs === String ? "0" : 0;
        if (message.totalSupply != null && message.hasOwnProperty("totalSupply"))
            if (typeof message.totalSupply === "number")
                object.totalSupply = options.longs === String ? String(message.totalSupply) : message.totalSupply;
            else
                object.totalSupply = options.longs === String ? $util.Long.prototype.toString.call(message.totalSupply) : options.longs === Number ? new $util.LongBits(message.totalSupply.low >>> 0, message.totalSupply.high >>> 0).toNumber(true) : message.totalSupply;
        return object;
    };

    /**
     * Converts this GenesisPayload to JSON.
     * @function toJSON
     * @memberof GenesisPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenesisPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GenesisPayload;
})();

$root.Account = (function() {

    /**
     * Properties of an Account.
     * @exports IAccount
     * @interface IAccount
     * @property {number|Long|null} [balance] Account balance
     * @property {Array.<string>|null} [pubKeys] Account pubKeys
     */

    /**
     * Constructs a new Account.
     * @exports Account
     * @classdesc Represents an Account.
     * @implements IAccount
     * @constructor
     * @param {IAccount=} [properties] Properties to set
     */
    function Account(properties) {
        this.pubKeys = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Account balance.
     * @member {number|Long} balance
     * @memberof Account
     * @instance
     */
    Account.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Account pubKeys.
     * @member {Array.<string>} pubKeys
     * @memberof Account
     * @instance
     */
    Account.prototype.pubKeys = $util.emptyArray;

    /**
     * Creates a new Account instance using the specified properties.
     * @function create
     * @memberof Account
     * @static
     * @param {IAccount=} [properties] Properties to set
     * @returns {Account} Account instance
     */
    Account.create = function create(properties) {
        return new Account(properties);
    };

    /**
     * Encodes the specified Account message. Does not implicitly {@link Account.verify|verify} messages.
     * @function encode
     * @memberof Account
     * @static
     * @param {IAccount} message Account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Account.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.balance != null && message.hasOwnProperty("balance"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.balance);
        if (message.pubKeys != null && message.pubKeys.length)
            for (var i = 0; i < message.pubKeys.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pubKeys[i]);
        return writer;
    };

    /**
     * Encodes the specified Account message, length delimited. Does not implicitly {@link Account.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Account
     * @static
     * @param {IAccount} message Account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Account.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Account message from the specified reader or buffer.
     * @function decode
     * @memberof Account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Account} Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Account.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Account();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.balance = reader.uint64();
                break;
            case 2:
                if (!(message.pubKeys && message.pubKeys.length))
                    message.pubKeys = [];
                message.pubKeys.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Account message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Account} Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Account.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Account message.
     * @function verify
     * @memberof Account
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Account.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.balance != null && message.hasOwnProperty("balance"))
            if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                return "balance: integer|Long expected";
        if (message.pubKeys != null && message.hasOwnProperty("pubKeys")) {
            if (!Array.isArray(message.pubKeys))
                return "pubKeys: array expected";
            for (var i = 0; i < message.pubKeys.length; ++i)
                if (!$util.isString(message.pubKeys[i]))
                    return "pubKeys: string[] expected";
        }
        return null;
    };

    /**
     * Creates an Account message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Account
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Account} Account
     */
    Account.fromObject = function fromObject(object) {
        if (object instanceof $root.Account)
            return object;
        var message = new $root.Account();
        if (object.balance != null)
            if ($util.Long)
                (message.balance = $util.Long.fromValue(object.balance)).unsigned = true;
            else if (typeof object.balance === "string")
                message.balance = parseInt(object.balance, 10);
            else if (typeof object.balance === "number")
                message.balance = object.balance;
            else if (typeof object.balance === "object")
                message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber(true);
        if (object.pubKeys) {
            if (!Array.isArray(object.pubKeys))
                throw TypeError(".Account.pubKeys: array expected");
            message.pubKeys = [];
            for (var i = 0; i < object.pubKeys.length; ++i)
                message.pubKeys[i] = String(object.pubKeys[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an Account message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Account
     * @static
     * @param {Account} message Account
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Account.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.pubKeys = [];
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.balance = options.longs === String ? "0" : 0;
        if (message.balance != null && message.hasOwnProperty("balance"))
            if (typeof message.balance === "number")
                object.balance = options.longs === String ? String(message.balance) : message.balance;
            else
                object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber(true) : message.balance;
        if (message.pubKeys && message.pubKeys.length) {
            object.pubKeys = [];
            for (var j = 0; j < message.pubKeys.length; ++j)
                object.pubKeys[j] = message.pubKeys[j];
        }
        return object;
    };

    /**
     * Converts this Account to JSON.
     * @function toJSON
     * @memberof Account
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Account.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Account;
})();

$root.GenesisStatus = (function() {

    /**
     * Properties of a GenesisStatus.
     * @exports IGenesisStatus
     * @interface IGenesisStatus
     * @property {boolean|null} [status] GenesisStatus status
     */

    /**
     * Constructs a new GenesisStatus.
     * @exports GenesisStatus
     * @classdesc Represents a GenesisStatus.
     * @implements IGenesisStatus
     * @constructor
     * @param {IGenesisStatus=} [properties] Properties to set
     */
    function GenesisStatus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GenesisStatus status.
     * @member {boolean} status
     * @memberof GenesisStatus
     * @instance
     */
    GenesisStatus.prototype.status = false;

    /**
     * Creates a new GenesisStatus instance using the specified properties.
     * @function create
     * @memberof GenesisStatus
     * @static
     * @param {IGenesisStatus=} [properties] Properties to set
     * @returns {GenesisStatus} GenesisStatus instance
     */
    GenesisStatus.create = function create(properties) {
        return new GenesisStatus(properties);
    };

    /**
     * Encodes the specified GenesisStatus message. Does not implicitly {@link GenesisStatus.verify|verify} messages.
     * @function encode
     * @memberof GenesisStatus
     * @static
     * @param {IGenesisStatus} message GenesisStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenesisStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && message.hasOwnProperty("status"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.status);
        return writer;
    };

    /**
     * Encodes the specified GenesisStatus message, length delimited. Does not implicitly {@link GenesisStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenesisStatus
     * @static
     * @param {IGenesisStatus} message GenesisStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenesisStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GenesisStatus message from the specified reader or buffer.
     * @function decode
     * @memberof GenesisStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenesisStatus} GenesisStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenesisStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GenesisStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.status = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GenesisStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenesisStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenesisStatus} GenesisStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenesisStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenesisStatus message.
     * @function verify
     * @memberof GenesisStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenesisStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (typeof message.status !== "boolean")
                return "status: boolean expected";
        return null;
    };

    /**
     * Creates a GenesisStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenesisStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenesisStatus} GenesisStatus
     */
    GenesisStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.GenesisStatus)
            return object;
        var message = new $root.GenesisStatus();
        if (object.status != null)
            message.status = Boolean(object.status);
        return message;
    };

    /**
     * Creates a plain object from a GenesisStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenesisStatus
     * @static
     * @param {GenesisStatus} message GenesisStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenesisStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = false;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this GenesisStatus to JSON.
     * @function toJSON
     * @memberof GenesisStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenesisStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GenesisStatus;
})();

$root.AtomicSwapMethod = (function() {

    /**
     * Properties of an AtomicSwapMethod.
     * @exports IAtomicSwapMethod
     * @interface IAtomicSwapMethod
     */

    /**
     * Constructs a new AtomicSwapMethod.
     * @exports AtomicSwapMethod
     * @classdesc Represents an AtomicSwapMethod.
     * @implements IAtomicSwapMethod
     * @constructor
     * @param {IAtomicSwapMethod=} [properties] Properties to set
     */
    function AtomicSwapMethod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new AtomicSwapMethod instance using the specified properties.
     * @function create
     * @memberof AtomicSwapMethod
     * @static
     * @param {IAtomicSwapMethod=} [properties] Properties to set
     * @returns {AtomicSwapMethod} AtomicSwapMethod instance
     */
    AtomicSwapMethod.create = function create(properties) {
        return new AtomicSwapMethod(properties);
    };

    /**
     * Encodes the specified AtomicSwapMethod message. Does not implicitly {@link AtomicSwapMethod.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapMethod
     * @static
     * @param {IAtomicSwapMethod} message AtomicSwapMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapMethod message, length delimited. Does not implicitly {@link AtomicSwapMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapMethod
     * @static
     * @param {IAtomicSwapMethod} message AtomicSwapMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapMethod message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapMethod} AtomicSwapMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapMethod} AtomicSwapMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapMethod message.
     * @function verify
     * @memberof AtomicSwapMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an AtomicSwapMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapMethod} AtomicSwapMethod
     */
    AtomicSwapMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapMethod)
            return object;
        return new $root.AtomicSwapMethod();
    };

    /**
     * Creates a plain object from an AtomicSwapMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapMethod
     * @static
     * @param {AtomicSwapMethod} message AtomicSwapMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapMethod.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this AtomicSwapMethod to JSON.
     * @function toJSON
     * @memberof AtomicSwapMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name AtomicSwapMethod.Method
     * @enum {string}
     * @property {number} INIT=0 INIT value
     * @property {number} APPROVE=1 APPROVE value
     * @property {number} EXPIRE=2 EXPIRE value
     * @property {number} SET_SECRET_LOCK=3 SET_SECRET_LOCK value
     * @property {number} CLOSE=4 CLOSE value
     */
    AtomicSwapMethod.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INIT"] = 0;
        values[valuesById[1] = "APPROVE"] = 1;
        values[valuesById[2] = "EXPIRE"] = 2;
        values[valuesById[3] = "SET_SECRET_LOCK"] = 3;
        values[valuesById[4] = "CLOSE"] = 4;
        return values;
    })();

    return AtomicSwapMethod;
})();

$root.AtomicSwapInitPayload = (function() {

    /**
     * Properties of an AtomicSwapInitPayload.
     * @exports IAtomicSwapInitPayload
     * @interface IAtomicSwapInitPayload
     * @property {string|null} [receiverAddress] AtomicSwapInitPayload receiverAddress
     * @property {string|null} [senderAddressNonLocal] AtomicSwapInitPayload senderAddressNonLocal
     * @property {number|Long|null} [amount] AtomicSwapInitPayload amount
     * @property {string|null} [swapId] AtomicSwapInitPayload swapId
     * @property {string|null} [secretLockBySolicitor] AtomicSwapInitPayload secretLockBySolicitor
     * @property {string|null} [emailAddressEncryptedByInitiator] AtomicSwapInitPayload emailAddressEncryptedByInitiator
     * @property {number|null} [createdAt] AtomicSwapInitPayload createdAt
     */

    /**
     * Constructs a new AtomicSwapInitPayload.
     * @exports AtomicSwapInitPayload
     * @classdesc Represents an AtomicSwapInitPayload.
     * @implements IAtomicSwapInitPayload
     * @constructor
     * @param {IAtomicSwapInitPayload=} [properties] Properties to set
     */
    function AtomicSwapInitPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapInitPayload receiverAddress.
     * @member {string} receiverAddress
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.receiverAddress = "";

    /**
     * AtomicSwapInitPayload senderAddressNonLocal.
     * @member {string} senderAddressNonLocal
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.senderAddressNonLocal = "";

    /**
     * AtomicSwapInitPayload amount.
     * @member {number|Long} amount
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * AtomicSwapInitPayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.swapId = "";

    /**
     * AtomicSwapInitPayload secretLockBySolicitor.
     * @member {string} secretLockBySolicitor
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.secretLockBySolicitor = "";

    /**
     * AtomicSwapInitPayload emailAddressEncryptedByInitiator.
     * @member {string} emailAddressEncryptedByInitiator
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.emailAddressEncryptedByInitiator = "";

    /**
     * AtomicSwapInitPayload createdAt.
     * @member {number} createdAt
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.createdAt = 0;

    /**
     * Creates a new AtomicSwapInitPayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {IAtomicSwapInitPayload=} [properties] Properties to set
     * @returns {AtomicSwapInitPayload} AtomicSwapInitPayload instance
     */
    AtomicSwapInitPayload.create = function create(properties) {
        return new AtomicSwapInitPayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapInitPayload message. Does not implicitly {@link AtomicSwapInitPayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {IAtomicSwapInitPayload} message AtomicSwapInitPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapInitPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.receiverAddress);
        if (message.amount != null && message.hasOwnProperty("amount"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.amount);
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.swapId);
        if (message.secretLockBySolicitor != null && message.hasOwnProperty("secretLockBySolicitor"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.secretLockBySolicitor);
        if (message.emailAddressEncryptedByInitiator != null && message.hasOwnProperty("emailAddressEncryptedByInitiator"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.emailAddressEncryptedByInitiator);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.createdAt);
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.senderAddressNonLocal);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapInitPayload message, length delimited. Does not implicitly {@link AtomicSwapInitPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {IAtomicSwapInitPayload} message AtomicSwapInitPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapInitPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapInitPayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapInitPayload} AtomicSwapInitPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapInitPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapInitPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.receiverAddress = reader.string();
                break;
            case 7:
                message.senderAddressNonLocal = reader.string();
                break;
            case 2:
                message.amount = reader.uint64();
                break;
            case 3:
                message.swapId = reader.string();
                break;
            case 4:
                message.secretLockBySolicitor = reader.string();
                break;
            case 5:
                message.emailAddressEncryptedByInitiator = reader.string();
                break;
            case 6:
                message.createdAt = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapInitPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapInitPayload} AtomicSwapInitPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapInitPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapInitPayload message.
     * @function verify
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapInitPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            if (!$util.isString(message.receiverAddress))
                return "receiverAddress: string expected";
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            if (!$util.isString(message.senderAddressNonLocal))
                return "senderAddressNonLocal: string expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                return "amount: integer|Long expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        if (message.secretLockBySolicitor != null && message.hasOwnProperty("secretLockBySolicitor"))
            if (!$util.isString(message.secretLockBySolicitor))
                return "secretLockBySolicitor: string expected";
        if (message.emailAddressEncryptedByInitiator != null && message.hasOwnProperty("emailAddressEncryptedByInitiator"))
            if (!$util.isString(message.emailAddressEncryptedByInitiator))
                return "emailAddressEncryptedByInitiator: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt))
                return "createdAt: integer expected";
        return null;
    };

    /**
     * Creates an AtomicSwapInitPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapInitPayload} AtomicSwapInitPayload
     */
    AtomicSwapInitPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapInitPayload)
            return object;
        var message = new $root.AtomicSwapInitPayload();
        if (object.receiverAddress != null)
            message.receiverAddress = String(object.receiverAddress);
        if (object.senderAddressNonLocal != null)
            message.senderAddressNonLocal = String(object.senderAddressNonLocal);
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        if (object.secretLockBySolicitor != null)
            message.secretLockBySolicitor = String(object.secretLockBySolicitor);
        if (object.emailAddressEncryptedByInitiator != null)
            message.emailAddressEncryptedByInitiator = String(object.emailAddressEncryptedByInitiator);
        if (object.createdAt != null)
            message.createdAt = object.createdAt >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapInitPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {AtomicSwapInitPayload} message AtomicSwapInitPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapInitPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.receiverAddress = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
            object.swapId = "";
            object.secretLockBySolicitor = "";
            object.emailAddressEncryptedByInitiator = "";
            object.createdAt = 0;
            object.senderAddressNonLocal = "";
        }
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            object.receiverAddress = message.receiverAddress;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        if (message.secretLockBySolicitor != null && message.hasOwnProperty("secretLockBySolicitor"))
            object.secretLockBySolicitor = message.secretLockBySolicitor;
        if (message.emailAddressEncryptedByInitiator != null && message.hasOwnProperty("emailAddressEncryptedByInitiator"))
            object.emailAddressEncryptedByInitiator = message.emailAddressEncryptedByInitiator;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            object.senderAddressNonLocal = message.senderAddressNonLocal;
        return object;
    };

    /**
     * Converts this AtomicSwapInitPayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapInitPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapInitPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapInitPayload;
})();

$root.AtomicSwapApprovePayload = (function() {

    /**
     * Properties of an AtomicSwapApprovePayload.
     * @exports IAtomicSwapApprovePayload
     * @interface IAtomicSwapApprovePayload
     * @property {string|null} [swapId] AtomicSwapApprovePayload swapId
     */

    /**
     * Constructs a new AtomicSwapApprovePayload.
     * @exports AtomicSwapApprovePayload
     * @classdesc Represents an AtomicSwapApprovePayload.
     * @implements IAtomicSwapApprovePayload
     * @constructor
     * @param {IAtomicSwapApprovePayload=} [properties] Properties to set
     */
    function AtomicSwapApprovePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapApprovePayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapApprovePayload
     * @instance
     */
    AtomicSwapApprovePayload.prototype.swapId = "";

    /**
     * Creates a new AtomicSwapApprovePayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {IAtomicSwapApprovePayload=} [properties] Properties to set
     * @returns {AtomicSwapApprovePayload} AtomicSwapApprovePayload instance
     */
    AtomicSwapApprovePayload.create = function create(properties) {
        return new AtomicSwapApprovePayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapApprovePayload message. Does not implicitly {@link AtomicSwapApprovePayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {IAtomicSwapApprovePayload} message AtomicSwapApprovePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapApprovePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.swapId);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapApprovePayload message, length delimited. Does not implicitly {@link AtomicSwapApprovePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {IAtomicSwapApprovePayload} message AtomicSwapApprovePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapApprovePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapApprovePayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapApprovePayload} AtomicSwapApprovePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapApprovePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapApprovePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.swapId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapApprovePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapApprovePayload} AtomicSwapApprovePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapApprovePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapApprovePayload message.
     * @function verify
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapApprovePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        return null;
    };

    /**
     * Creates an AtomicSwapApprovePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapApprovePayload} AtomicSwapApprovePayload
     */
    AtomicSwapApprovePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapApprovePayload)
            return object;
        var message = new $root.AtomicSwapApprovePayload();
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapApprovePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {AtomicSwapApprovePayload} message AtomicSwapApprovePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapApprovePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.swapId = "";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        return object;
    };

    /**
     * Converts this AtomicSwapApprovePayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapApprovePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapApprovePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapApprovePayload;
})();

$root.AtomicSwapExpirePayload = (function() {

    /**
     * Properties of an AtomicSwapExpirePayload.
     * @exports IAtomicSwapExpirePayload
     * @interface IAtomicSwapExpirePayload
     * @property {string|null} [swapId] AtomicSwapExpirePayload swapId
     */

    /**
     * Constructs a new AtomicSwapExpirePayload.
     * @exports AtomicSwapExpirePayload
     * @classdesc Represents an AtomicSwapExpirePayload.
     * @implements IAtomicSwapExpirePayload
     * @constructor
     * @param {IAtomicSwapExpirePayload=} [properties] Properties to set
     */
    function AtomicSwapExpirePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapExpirePayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapExpirePayload
     * @instance
     */
    AtomicSwapExpirePayload.prototype.swapId = "";

    /**
     * Creates a new AtomicSwapExpirePayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {IAtomicSwapExpirePayload=} [properties] Properties to set
     * @returns {AtomicSwapExpirePayload} AtomicSwapExpirePayload instance
     */
    AtomicSwapExpirePayload.create = function create(properties) {
        return new AtomicSwapExpirePayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapExpirePayload message. Does not implicitly {@link AtomicSwapExpirePayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {IAtomicSwapExpirePayload} message AtomicSwapExpirePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapExpirePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.swapId);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapExpirePayload message, length delimited. Does not implicitly {@link AtomicSwapExpirePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {IAtomicSwapExpirePayload} message AtomicSwapExpirePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapExpirePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapExpirePayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapExpirePayload} AtomicSwapExpirePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapExpirePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapExpirePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.swapId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapExpirePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapExpirePayload} AtomicSwapExpirePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapExpirePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapExpirePayload message.
     * @function verify
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapExpirePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        return null;
    };

    /**
     * Creates an AtomicSwapExpirePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapExpirePayload} AtomicSwapExpirePayload
     */
    AtomicSwapExpirePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapExpirePayload)
            return object;
        var message = new $root.AtomicSwapExpirePayload();
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapExpirePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {AtomicSwapExpirePayload} message AtomicSwapExpirePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapExpirePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.swapId = "";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        return object;
    };

    /**
     * Converts this AtomicSwapExpirePayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapExpirePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapExpirePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapExpirePayload;
})();

$root.AtomicSwapSetSecretLockPayload = (function() {

    /**
     * Properties of an AtomicSwapSetSecretLockPayload.
     * @exports IAtomicSwapSetSecretLockPayload
     * @interface IAtomicSwapSetSecretLockPayload
     * @property {string|null} [swapId] AtomicSwapSetSecretLockPayload swapId
     * @property {string|null} [secretLock] AtomicSwapSetSecretLockPayload secretLock
     */

    /**
     * Constructs a new AtomicSwapSetSecretLockPayload.
     * @exports AtomicSwapSetSecretLockPayload
     * @classdesc Represents an AtomicSwapSetSecretLockPayload.
     * @implements IAtomicSwapSetSecretLockPayload
     * @constructor
     * @param {IAtomicSwapSetSecretLockPayload=} [properties] Properties to set
     */
    function AtomicSwapSetSecretLockPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapSetSecretLockPayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapSetSecretLockPayload
     * @instance
     */
    AtomicSwapSetSecretLockPayload.prototype.swapId = "";

    /**
     * AtomicSwapSetSecretLockPayload secretLock.
     * @member {string} secretLock
     * @memberof AtomicSwapSetSecretLockPayload
     * @instance
     */
    AtomicSwapSetSecretLockPayload.prototype.secretLock = "";

    /**
     * Creates a new AtomicSwapSetSecretLockPayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {IAtomicSwapSetSecretLockPayload=} [properties] Properties to set
     * @returns {AtomicSwapSetSecretLockPayload} AtomicSwapSetSecretLockPayload instance
     */
    AtomicSwapSetSecretLockPayload.create = function create(properties) {
        return new AtomicSwapSetSecretLockPayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapSetSecretLockPayload message. Does not implicitly {@link AtomicSwapSetSecretLockPayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {IAtomicSwapSetSecretLockPayload} message AtomicSwapSetSecretLockPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapSetSecretLockPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.swapId);
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.secretLock);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapSetSecretLockPayload message, length delimited. Does not implicitly {@link AtomicSwapSetSecretLockPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {IAtomicSwapSetSecretLockPayload} message AtomicSwapSetSecretLockPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapSetSecretLockPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapSetSecretLockPayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapSetSecretLockPayload} AtomicSwapSetSecretLockPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapSetSecretLockPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapSetSecretLockPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.swapId = reader.string();
                break;
            case 2:
                message.secretLock = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapSetSecretLockPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapSetSecretLockPayload} AtomicSwapSetSecretLockPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapSetSecretLockPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapSetSecretLockPayload message.
     * @function verify
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapSetSecretLockPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            if (!$util.isString(message.secretLock))
                return "secretLock: string expected";
        return null;
    };

    /**
     * Creates an AtomicSwapSetSecretLockPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapSetSecretLockPayload} AtomicSwapSetSecretLockPayload
     */
    AtomicSwapSetSecretLockPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapSetSecretLockPayload)
            return object;
        var message = new $root.AtomicSwapSetSecretLockPayload();
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        if (object.secretLock != null)
            message.secretLock = String(object.secretLock);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapSetSecretLockPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {AtomicSwapSetSecretLockPayload} message AtomicSwapSetSecretLockPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapSetSecretLockPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.swapId = "";
            object.secretLock = "";
        }
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            object.secretLock = message.secretLock;
        return object;
    };

    /**
     * Converts this AtomicSwapSetSecretLockPayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapSetSecretLockPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapSetSecretLockPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapSetSecretLockPayload;
})();

$root.AtomicSwapClosePayload = (function() {

    /**
     * Properties of an AtomicSwapClosePayload.
     * @exports IAtomicSwapClosePayload
     * @interface IAtomicSwapClosePayload
     * @property {string|null} [swapId] AtomicSwapClosePayload swapId
     * @property {string|null} [secretKey] AtomicSwapClosePayload secretKey
     */

    /**
     * Constructs a new AtomicSwapClosePayload.
     * @exports AtomicSwapClosePayload
     * @classdesc Represents an AtomicSwapClosePayload.
     * @implements IAtomicSwapClosePayload
     * @constructor
     * @param {IAtomicSwapClosePayload=} [properties] Properties to set
     */
    function AtomicSwapClosePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapClosePayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapClosePayload
     * @instance
     */
    AtomicSwapClosePayload.prototype.swapId = "";

    /**
     * AtomicSwapClosePayload secretKey.
     * @member {string} secretKey
     * @memberof AtomicSwapClosePayload
     * @instance
     */
    AtomicSwapClosePayload.prototype.secretKey = "";

    /**
     * Creates a new AtomicSwapClosePayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {IAtomicSwapClosePayload=} [properties] Properties to set
     * @returns {AtomicSwapClosePayload} AtomicSwapClosePayload instance
     */
    AtomicSwapClosePayload.create = function create(properties) {
        return new AtomicSwapClosePayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapClosePayload message. Does not implicitly {@link AtomicSwapClosePayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {IAtomicSwapClosePayload} message AtomicSwapClosePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapClosePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.swapId);
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.secretKey);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapClosePayload message, length delimited. Does not implicitly {@link AtomicSwapClosePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {IAtomicSwapClosePayload} message AtomicSwapClosePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapClosePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapClosePayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapClosePayload} AtomicSwapClosePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapClosePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapClosePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.swapId = reader.string();
                break;
            case 2:
                message.secretKey = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapClosePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapClosePayload} AtomicSwapClosePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapClosePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapClosePayload message.
     * @function verify
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapClosePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            if (!$util.isString(message.secretKey))
                return "secretKey: string expected";
        return null;
    };

    /**
     * Creates an AtomicSwapClosePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapClosePayload} AtomicSwapClosePayload
     */
    AtomicSwapClosePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapClosePayload)
            return object;
        var message = new $root.AtomicSwapClosePayload();
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        if (object.secretKey != null)
            message.secretKey = String(object.secretKey);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapClosePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {AtomicSwapClosePayload} message AtomicSwapClosePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapClosePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.swapId = "";
            object.secretKey = "";
        }
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            object.secretKey = message.secretKey;
        return object;
    };

    /**
     * Converts this AtomicSwapClosePayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapClosePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapClosePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapClosePayload;
})();

$root.AtomicSwapInfo = (function() {

    /**
     * Properties of an AtomicSwapInfo.
     * @exports IAtomicSwapInfo
     * @interface IAtomicSwapInfo
     * @property {boolean|null} [isClosed] AtomicSwapInfo isClosed
     * @property {boolean|null} [isApproved] AtomicSwapInfo isApproved
     * @property {string|null} [senderAddress] AtomicSwapInfo senderAddress
     * @property {string|null} [senderAddressNonLocal] AtomicSwapInfo senderAddressNonLocal
     * @property {string|null} [receiverAddress] AtomicSwapInfo receiverAddress
     * @property {number|Long|null} [amount] AtomicSwapInfo amount
     * @property {string|null} [emailAddressEncryptedOptional] AtomicSwapInfo emailAddressEncryptedOptional
     * @property {string|null} [swapId] AtomicSwapInfo swapId
     * @property {string|null} [secretLock] AtomicSwapInfo secretLock
     * @property {string|null} [secretKey] AtomicSwapInfo secretKey
     * @property {number|null} [createdAt] AtomicSwapInfo createdAt
     * @property {boolean|null} [isInitiator] AtomicSwapInfo isInitiator
     */

    /**
     * Constructs a new AtomicSwapInfo.
     * @exports AtomicSwapInfo
     * @classdesc Represents an AtomicSwapInfo.
     * @implements IAtomicSwapInfo
     * @constructor
     * @param {IAtomicSwapInfo=} [properties] Properties to set
     */
    function AtomicSwapInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapInfo isClosed.
     * @member {boolean} isClosed
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.isClosed = false;

    /**
     * AtomicSwapInfo isApproved.
     * @member {boolean} isApproved
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.isApproved = false;

    /**
     * AtomicSwapInfo senderAddress.
     * @member {string} senderAddress
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.senderAddress = "";

    /**
     * AtomicSwapInfo senderAddressNonLocal.
     * @member {string} senderAddressNonLocal
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.senderAddressNonLocal = "";

    /**
     * AtomicSwapInfo receiverAddress.
     * @member {string} receiverAddress
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.receiverAddress = "";

    /**
     * AtomicSwapInfo amount.
     * @member {number|Long} amount
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * AtomicSwapInfo emailAddressEncryptedOptional.
     * @member {string} emailAddressEncryptedOptional
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.emailAddressEncryptedOptional = "";

    /**
     * AtomicSwapInfo swapId.
     * @member {string} swapId
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.swapId = "";

    /**
     * AtomicSwapInfo secretLock.
     * @member {string} secretLock
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.secretLock = "";

    /**
     * AtomicSwapInfo secretKey.
     * @member {string} secretKey
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.secretKey = "";

    /**
     * AtomicSwapInfo createdAt.
     * @member {number} createdAt
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.createdAt = 0;

    /**
     * AtomicSwapInfo isInitiator.
     * @member {boolean} isInitiator
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.isInitiator = false;

    /**
     * Creates a new AtomicSwapInfo instance using the specified properties.
     * @function create
     * @memberof AtomicSwapInfo
     * @static
     * @param {IAtomicSwapInfo=} [properties] Properties to set
     * @returns {AtomicSwapInfo} AtomicSwapInfo instance
     */
    AtomicSwapInfo.create = function create(properties) {
        return new AtomicSwapInfo(properties);
    };

    /**
     * Encodes the specified AtomicSwapInfo message. Does not implicitly {@link AtomicSwapInfo.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapInfo
     * @static
     * @param {IAtomicSwapInfo} message AtomicSwapInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.isClosed != null && message.hasOwnProperty("isClosed"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isClosed);
        if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.senderAddress);
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.receiverAddress);
        if (message.amount != null && message.hasOwnProperty("amount"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.amount);
        if (message.emailAddressEncryptedOptional != null && message.hasOwnProperty("emailAddressEncryptedOptional"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.emailAddressEncryptedOptional);
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.swapId);
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.secretLock);
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.secretKey);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.createdAt);
        if (message.isInitiator != null && message.hasOwnProperty("isInitiator"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isInitiator);
        if (message.isApproved != null && message.hasOwnProperty("isApproved"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isApproved);
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.senderAddressNonLocal);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapInfo message, length delimited. Does not implicitly {@link AtomicSwapInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapInfo
     * @static
     * @param {IAtomicSwapInfo} message AtomicSwapInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapInfo} AtomicSwapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.isClosed = reader.bool();
                break;
            case 11:
                message.isApproved = reader.bool();
                break;
            case 2:
                message.senderAddress = reader.string();
                break;
            case 12:
                message.senderAddressNonLocal = reader.string();
                break;
            case 3:
                message.receiverAddress = reader.string();
                break;
            case 4:
                message.amount = reader.uint64();
                break;
            case 5:
                message.emailAddressEncryptedOptional = reader.string();
                break;
            case 6:
                message.swapId = reader.string();
                break;
            case 7:
                message.secretLock = reader.string();
                break;
            case 8:
                message.secretKey = reader.string();
                break;
            case 9:
                message.createdAt = reader.uint32();
                break;
            case 10:
                message.isInitiator = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapInfo} AtomicSwapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapInfo message.
     * @function verify
     * @memberof AtomicSwapInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.isClosed != null && message.hasOwnProperty("isClosed"))
            if (typeof message.isClosed !== "boolean")
                return "isClosed: boolean expected";
        if (message.isApproved != null && message.hasOwnProperty("isApproved"))
            if (typeof message.isApproved !== "boolean")
                return "isApproved: boolean expected";
        if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
            if (!$util.isString(message.senderAddress))
                return "senderAddress: string expected";
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            if (!$util.isString(message.senderAddressNonLocal))
                return "senderAddressNonLocal: string expected";
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            if (!$util.isString(message.receiverAddress))
                return "receiverAddress: string expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                return "amount: integer|Long expected";
        if (message.emailAddressEncryptedOptional != null && message.hasOwnProperty("emailAddressEncryptedOptional"))
            if (!$util.isString(message.emailAddressEncryptedOptional))
                return "emailAddressEncryptedOptional: string expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            if (!$util.isString(message.secretLock))
                return "secretLock: string expected";
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            if (!$util.isString(message.secretKey))
                return "secretKey: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt))
                return "createdAt: integer expected";
        if (message.isInitiator != null && message.hasOwnProperty("isInitiator"))
            if (typeof message.isInitiator !== "boolean")
                return "isInitiator: boolean expected";
        return null;
    };

    /**
     * Creates an AtomicSwapInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapInfo} AtomicSwapInfo
     */
    AtomicSwapInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapInfo)
            return object;
        var message = new $root.AtomicSwapInfo();
        if (object.isClosed != null)
            message.isClosed = Boolean(object.isClosed);
        if (object.isApproved != null)
            message.isApproved = Boolean(object.isApproved);
        if (object.senderAddress != null)
            message.senderAddress = String(object.senderAddress);
        if (object.senderAddressNonLocal != null)
            message.senderAddressNonLocal = String(object.senderAddressNonLocal);
        if (object.receiverAddress != null)
            message.receiverAddress = String(object.receiverAddress);
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
        if (object.emailAddressEncryptedOptional != null)
            message.emailAddressEncryptedOptional = String(object.emailAddressEncryptedOptional);
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        if (object.secretLock != null)
            message.secretLock = String(object.secretLock);
        if (object.secretKey != null)
            message.secretKey = String(object.secretKey);
        if (object.createdAt != null)
            message.createdAt = object.createdAt >>> 0;
        if (object.isInitiator != null)
            message.isInitiator = Boolean(object.isInitiator);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapInfo
     * @static
     * @param {AtomicSwapInfo} message AtomicSwapInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.isClosed = false;
            object.senderAddress = "";
            object.receiverAddress = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
            object.emailAddressEncryptedOptional = "";
            object.swapId = "";
            object.secretLock = "";
            object.secretKey = "";
            object.createdAt = 0;
            object.isInitiator = false;
            object.isApproved = false;
            object.senderAddressNonLocal = "";
        }
        if (message.isClosed != null && message.hasOwnProperty("isClosed"))
            object.isClosed = message.isClosed;
        if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
            object.senderAddress = message.senderAddress;
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            object.receiverAddress = message.receiverAddress;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
        if (message.emailAddressEncryptedOptional != null && message.hasOwnProperty("emailAddressEncryptedOptional"))
            object.emailAddressEncryptedOptional = message.emailAddressEncryptedOptional;
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            object.secretLock = message.secretLock;
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            object.secretKey = message.secretKey;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.isInitiator != null && message.hasOwnProperty("isInitiator"))
            object.isInitiator = message.isInitiator;
        if (message.isApproved != null && message.hasOwnProperty("isApproved"))
            object.isApproved = message.isApproved;
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            object.senderAddressNonLocal = message.senderAddressNonLocal;
        return object;
    };

    /**
     * Converts this AtomicSwapInfo to JSON.
     * @function toJSON
     * @memberof AtomicSwapInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapInfo;
})();

$root.PubKeyMethod = (function() {

    /**
     * Properties of a PubKeyMethod.
     * @exports IPubKeyMethod
     * @interface IPubKeyMethod
     */

    /**
     * Constructs a new PubKeyMethod.
     * @exports PubKeyMethod
     * @classdesc Represents a PubKeyMethod.
     * @implements IPubKeyMethod
     * @constructor
     * @param {IPubKeyMethod=} [properties] Properties to set
     */
    function PubKeyMethod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new PubKeyMethod instance using the specified properties.
     * @function create
     * @memberof PubKeyMethod
     * @static
     * @param {IPubKeyMethod=} [properties] Properties to set
     * @returns {PubKeyMethod} PubKeyMethod instance
     */
    PubKeyMethod.create = function create(properties) {
        return new PubKeyMethod(properties);
    };

    /**
     * Encodes the specified PubKeyMethod message. Does not implicitly {@link PubKeyMethod.verify|verify} messages.
     * @function encode
     * @memberof PubKeyMethod
     * @static
     * @param {IPubKeyMethod} message PubKeyMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PubKeyMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified PubKeyMethod message, length delimited. Does not implicitly {@link PubKeyMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PubKeyMethod
     * @static
     * @param {IPubKeyMethod} message PubKeyMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PubKeyMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PubKeyMethod message from the specified reader or buffer.
     * @function decode
     * @memberof PubKeyMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PubKeyMethod} PubKeyMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PubKeyMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PubKeyMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PubKeyMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PubKeyMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PubKeyMethod} PubKeyMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PubKeyMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PubKeyMethod message.
     * @function verify
     * @memberof PubKeyMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PubKeyMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a PubKeyMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PubKeyMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PubKeyMethod} PubKeyMethod
     */
    PubKeyMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.PubKeyMethod)
            return object;
        return new $root.PubKeyMethod();
    };

    /**
     * Creates a plain object from a PubKeyMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PubKeyMethod
     * @static
     * @param {PubKeyMethod} message PubKeyMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PubKeyMethod.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this PubKeyMethod to JSON.
     * @function toJSON
     * @memberof PubKeyMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PubKeyMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name PubKeyMethod.Method
     * @enum {string}
     * @property {number} STORE=0 STORE value
     * @property {number} REVOKE=1 REVOKE value
     */
    PubKeyMethod.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "STORE"] = 0;
        values[valuesById[1] = "REVOKE"] = 1;
        return values;
    })();

    return PubKeyMethod;
})();

$root.NewPubKeyPayload = (function() {

    /**
     * Properties of a NewPubKeyPayload.
     * @exports INewPubKeyPayload
     * @interface INewPubKeyPayload
     * @property {string|null} [publicKey] NewPubKeyPayload publicKey
     * @property {NewPubKeyPayload.PubKeyType|null} [publicKeyType] NewPubKeyPayload publicKeyType
     * @property {NewPubKeyPayload.EntityType|null} [entityType] NewPubKeyPayload entityType
     * @property {string|null} [entityHash] NewPubKeyPayload entityHash
     * @property {string|null} [entityHashSignature] NewPubKeyPayload entityHashSignature
     * @property {number|null} [validFrom] NewPubKeyPayload validFrom
     * @property {number|null} [validTo] NewPubKeyPayload validTo
     */

    /**
     * Constructs a new NewPubKeyPayload.
     * @exports NewPubKeyPayload
     * @classdesc Represents a NewPubKeyPayload.
     * @implements INewPubKeyPayload
     * @constructor
     * @param {INewPubKeyPayload=} [properties] Properties to set
     */
    function NewPubKeyPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NewPubKeyPayload publicKey.
     * @member {string} publicKey
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.publicKey = "";

    /**
     * NewPubKeyPayload publicKeyType.
     * @member {NewPubKeyPayload.PubKeyType} publicKeyType
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.publicKeyType = 0;

    /**
     * NewPubKeyPayload entityType.
     * @member {NewPubKeyPayload.EntityType} entityType
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.entityType = 0;

    /**
     * NewPubKeyPayload entityHash.
     * @member {string} entityHash
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.entityHash = "";

    /**
     * NewPubKeyPayload entityHashSignature.
     * @member {string} entityHashSignature
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.entityHashSignature = "";

    /**
     * NewPubKeyPayload validFrom.
     * @member {number} validFrom
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.validFrom = 0;

    /**
     * NewPubKeyPayload validTo.
     * @member {number} validTo
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.validTo = 0;

    /**
     * Creates a new NewPubKeyPayload instance using the specified properties.
     * @function create
     * @memberof NewPubKeyPayload
     * @static
     * @param {INewPubKeyPayload=} [properties] Properties to set
     * @returns {NewPubKeyPayload} NewPubKeyPayload instance
     */
    NewPubKeyPayload.create = function create(properties) {
        return new NewPubKeyPayload(properties);
    };

    /**
     * Encodes the specified NewPubKeyPayload message. Does not implicitly {@link NewPubKeyPayload.verify|verify} messages.
     * @function encode
     * @memberof NewPubKeyPayload
     * @static
     * @param {INewPubKeyPayload} message NewPubKeyPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewPubKeyPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.publicKey);
        if (message.publicKeyType != null && message.hasOwnProperty("publicKeyType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.publicKeyType);
        if (message.entityType != null && message.hasOwnProperty("entityType"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.entityType);
        if (message.entityHash != null && message.hasOwnProperty("entityHash"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.entityHash);
        if (message.entityHashSignature != null && message.hasOwnProperty("entityHashSignature"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.entityHashSignature);
        if (message.validFrom != null && message.hasOwnProperty("validFrom"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.validFrom);
        if (message.validTo != null && message.hasOwnProperty("validTo"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.validTo);
        return writer;
    };

    /**
     * Encodes the specified NewPubKeyPayload message, length delimited. Does not implicitly {@link NewPubKeyPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NewPubKeyPayload
     * @static
     * @param {INewPubKeyPayload} message NewPubKeyPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewPubKeyPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NewPubKeyPayload message from the specified reader or buffer.
     * @function decode
     * @memberof NewPubKeyPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NewPubKeyPayload} NewPubKeyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewPubKeyPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NewPubKeyPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.publicKey = reader.string();
                break;
            case 2:
                message.publicKeyType = reader.int32();
                break;
            case 3:
                message.entityType = reader.int32();
                break;
            case 4:
                message.entityHash = reader.string();
                break;
            case 5:
                message.entityHashSignature = reader.string();
                break;
            case 6:
                message.validFrom = reader.uint32();
                break;
            case 7:
                message.validTo = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NewPubKeyPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NewPubKeyPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NewPubKeyPayload} NewPubKeyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewPubKeyPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NewPubKeyPayload message.
     * @function verify
     * @memberof NewPubKeyPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NewPubKeyPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            if (!$util.isString(message.publicKey))
                return "publicKey: string expected";
        if (message.publicKeyType != null && message.hasOwnProperty("publicKeyType"))
            switch (message.publicKeyType) {
            default:
                return "publicKeyType: enum value expected";
            case 0:
                break;
            }
        if (message.entityType != null && message.hasOwnProperty("entityType"))
            switch (message.entityType) {
            default:
                return "entityType: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.entityHash != null && message.hasOwnProperty("entityHash"))
            if (!$util.isString(message.entityHash))
                return "entityHash: string expected";
        if (message.entityHashSignature != null && message.hasOwnProperty("entityHashSignature"))
            if (!$util.isString(message.entityHashSignature))
                return "entityHashSignature: string expected";
        if (message.validFrom != null && message.hasOwnProperty("validFrom"))
            if (!$util.isInteger(message.validFrom))
                return "validFrom: integer expected";
        if (message.validTo != null && message.hasOwnProperty("validTo"))
            if (!$util.isInteger(message.validTo))
                return "validTo: integer expected";
        return null;
    };

    /**
     * Creates a NewPubKeyPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NewPubKeyPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NewPubKeyPayload} NewPubKeyPayload
     */
    NewPubKeyPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.NewPubKeyPayload)
            return object;
        var message = new $root.NewPubKeyPayload();
        if (object.publicKey != null)
            message.publicKey = String(object.publicKey);
        switch (object.publicKeyType) {
        case "RSA":
        case 0:
            message.publicKeyType = 0;
            break;
        }
        switch (object.entityType) {
        case "PERSONAL":
        case 0:
            message.entityType = 0;
            break;
        case "SERVER":
        case 1:
            message.entityType = 1;
            break;
        }
        if (object.entityHash != null)
            message.entityHash = String(object.entityHash);
        if (object.entityHashSignature != null)
            message.entityHashSignature = String(object.entityHashSignature);
        if (object.validFrom != null)
            message.validFrom = object.validFrom >>> 0;
        if (object.validTo != null)
            message.validTo = object.validTo >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a NewPubKeyPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NewPubKeyPayload
     * @static
     * @param {NewPubKeyPayload} message NewPubKeyPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NewPubKeyPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.publicKey = "";
            object.publicKeyType = options.enums === String ? "RSA" : 0;
            object.entityType = options.enums === String ? "PERSONAL" : 0;
            object.entityHash = "";
            object.entityHashSignature = "";
            object.validFrom = 0;
            object.validTo = 0;
        }
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            object.publicKey = message.publicKey;
        if (message.publicKeyType != null && message.hasOwnProperty("publicKeyType"))
            object.publicKeyType = options.enums === String ? $root.NewPubKeyPayload.PubKeyType[message.publicKeyType] : message.publicKeyType;
        if (message.entityType != null && message.hasOwnProperty("entityType"))
            object.entityType = options.enums === String ? $root.NewPubKeyPayload.EntityType[message.entityType] : message.entityType;
        if (message.entityHash != null && message.hasOwnProperty("entityHash"))
            object.entityHash = message.entityHash;
        if (message.entityHashSignature != null && message.hasOwnProperty("entityHashSignature"))
            object.entityHashSignature = message.entityHashSignature;
        if (message.validFrom != null && message.hasOwnProperty("validFrom"))
            object.validFrom = message.validFrom;
        if (message.validTo != null && message.hasOwnProperty("validTo"))
            object.validTo = message.validTo;
        return object;
    };

    /**
     * Converts this NewPubKeyPayload to JSON.
     * @function toJSON
     * @memberof NewPubKeyPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NewPubKeyPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * EntityType enum.
     * @name NewPubKeyPayload.EntityType
     * @enum {string}
     * @property {number} PERSONAL=0 PERSONAL value
     * @property {number} SERVER=1 SERVER value
     */
    NewPubKeyPayload.EntityType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PERSONAL"] = 0;
        values[valuesById[1] = "SERVER"] = 1;
        return values;
    })();

    /**
     * PubKeyType enum.
     * @name NewPubKeyPayload.PubKeyType
     * @enum {string}
     * @property {number} RSA=0 RSA value
     */
    NewPubKeyPayload.PubKeyType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RSA"] = 0;
        return values;
    })();

    return NewPubKeyPayload;
})();

$root.RevokePubKeyPayload = (function() {

    /**
     * Properties of a RevokePubKeyPayload.
     * @exports IRevokePubKeyPayload
     * @interface IRevokePubKeyPayload
     * @property {string|null} [address] RevokePubKeyPayload address
     */

    /**
     * Constructs a new RevokePubKeyPayload.
     * @exports RevokePubKeyPayload
     * @classdesc Represents a RevokePubKeyPayload.
     * @implements IRevokePubKeyPayload
     * @constructor
     * @param {IRevokePubKeyPayload=} [properties] Properties to set
     */
    function RevokePubKeyPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RevokePubKeyPayload address.
     * @member {string} address
     * @memberof RevokePubKeyPayload
     * @instance
     */
    RevokePubKeyPayload.prototype.address = "";

    /**
     * Creates a new RevokePubKeyPayload instance using the specified properties.
     * @function create
     * @memberof RevokePubKeyPayload
     * @static
     * @param {IRevokePubKeyPayload=} [properties] Properties to set
     * @returns {RevokePubKeyPayload} RevokePubKeyPayload instance
     */
    RevokePubKeyPayload.create = function create(properties) {
        return new RevokePubKeyPayload(properties);
    };

    /**
     * Encodes the specified RevokePubKeyPayload message. Does not implicitly {@link RevokePubKeyPayload.verify|verify} messages.
     * @function encode
     * @memberof RevokePubKeyPayload
     * @static
     * @param {IRevokePubKeyPayload} message RevokePubKeyPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RevokePubKeyPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.address != null && message.hasOwnProperty("address"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
        return writer;
    };

    /**
     * Encodes the specified RevokePubKeyPayload message, length delimited. Does not implicitly {@link RevokePubKeyPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RevokePubKeyPayload
     * @static
     * @param {IRevokePubKeyPayload} message RevokePubKeyPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RevokePubKeyPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RevokePubKeyPayload message from the specified reader or buffer.
     * @function decode
     * @memberof RevokePubKeyPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RevokePubKeyPayload} RevokePubKeyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RevokePubKeyPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RevokePubKeyPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RevokePubKeyPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RevokePubKeyPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RevokePubKeyPayload} RevokePubKeyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RevokePubKeyPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RevokePubKeyPayload message.
     * @function verify
     * @memberof RevokePubKeyPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RevokePubKeyPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.address != null && message.hasOwnProperty("address"))
            if (!$util.isString(message.address))
                return "address: string expected";
        return null;
    };

    /**
     * Creates a RevokePubKeyPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RevokePubKeyPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RevokePubKeyPayload} RevokePubKeyPayload
     */
    RevokePubKeyPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.RevokePubKeyPayload)
            return object;
        var message = new $root.RevokePubKeyPayload();
        if (object.address != null)
            message.address = String(object.address);
        return message;
    };

    /**
     * Creates a plain object from a RevokePubKeyPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RevokePubKeyPayload
     * @static
     * @param {RevokePubKeyPayload} message RevokePubKeyPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RevokePubKeyPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.address = "";
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = message.address;
        return object;
    };

    /**
     * Converts this RevokePubKeyPayload to JSON.
     * @function toJSON
     * @memberof RevokePubKeyPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RevokePubKeyPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RevokePubKeyPayload;
})();

$root.PubKeyStorage = (function() {

    /**
     * Properties of a PubKeyStorage.
     * @exports IPubKeyStorage
     * @interface IPubKeyStorage
     * @property {string|null} [owner] PubKeyStorage owner
     * @property {INewPubKeyPayload|null} [payload] PubKeyStorage payload
     * @property {boolean|null} [revoked] PubKeyStorage revoked
     */

    /**
     * Constructs a new PubKeyStorage.
     * @exports PubKeyStorage
     * @classdesc Represents a PubKeyStorage.
     * @implements IPubKeyStorage
     * @constructor
     * @param {IPubKeyStorage=} [properties] Properties to set
     */
    function PubKeyStorage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PubKeyStorage owner.
     * @member {string} owner
     * @memberof PubKeyStorage
     * @instance
     */
    PubKeyStorage.prototype.owner = "";

    /**
     * PubKeyStorage payload.
     * @member {INewPubKeyPayload|null|undefined} payload
     * @memberof PubKeyStorage
     * @instance
     */
    PubKeyStorage.prototype.payload = null;

    /**
     * PubKeyStorage revoked.
     * @member {boolean} revoked
     * @memberof PubKeyStorage
     * @instance
     */
    PubKeyStorage.prototype.revoked = false;

    /**
     * Creates a new PubKeyStorage instance using the specified properties.
     * @function create
     * @memberof PubKeyStorage
     * @static
     * @param {IPubKeyStorage=} [properties] Properties to set
     * @returns {PubKeyStorage} PubKeyStorage instance
     */
    PubKeyStorage.create = function create(properties) {
        return new PubKeyStorage(properties);
    };

    /**
     * Encodes the specified PubKeyStorage message. Does not implicitly {@link PubKeyStorage.verify|verify} messages.
     * @function encode
     * @memberof PubKeyStorage
     * @static
     * @param {IPubKeyStorage} message PubKeyStorage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PubKeyStorage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.owner != null && message.hasOwnProperty("owner"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.owner);
        if (message.payload != null && message.hasOwnProperty("payload"))
            $root.NewPubKeyPayload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.revoked != null && message.hasOwnProperty("revoked"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.revoked);
        return writer;
    };

    /**
     * Encodes the specified PubKeyStorage message, length delimited. Does not implicitly {@link PubKeyStorage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PubKeyStorage
     * @static
     * @param {IPubKeyStorage} message PubKeyStorage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PubKeyStorage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PubKeyStorage message from the specified reader or buffer.
     * @function decode
     * @memberof PubKeyStorage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PubKeyStorage} PubKeyStorage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PubKeyStorage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PubKeyStorage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.owner = reader.string();
                break;
            case 2:
                message.payload = $root.NewPubKeyPayload.decode(reader, reader.uint32());
                break;
            case 3:
                message.revoked = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PubKeyStorage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PubKeyStorage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PubKeyStorage} PubKeyStorage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PubKeyStorage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PubKeyStorage message.
     * @function verify
     * @memberof PubKeyStorage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PubKeyStorage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.owner != null && message.hasOwnProperty("owner"))
            if (!$util.isString(message.owner))
                return "owner: string expected";
        if (message.payload != null && message.hasOwnProperty("payload")) {
            var error = $root.NewPubKeyPayload.verify(message.payload);
            if (error)
                return "payload." + error;
        }
        if (message.revoked != null && message.hasOwnProperty("revoked"))
            if (typeof message.revoked !== "boolean")
                return "revoked: boolean expected";
        return null;
    };

    /**
     * Creates a PubKeyStorage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PubKeyStorage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PubKeyStorage} PubKeyStorage
     */
    PubKeyStorage.fromObject = function fromObject(object) {
        if (object instanceof $root.PubKeyStorage)
            return object;
        var message = new $root.PubKeyStorage();
        if (object.owner != null)
            message.owner = String(object.owner);
        if (object.payload != null) {
            if (typeof object.payload !== "object")
                throw TypeError(".PubKeyStorage.payload: object expected");
            message.payload = $root.NewPubKeyPayload.fromObject(object.payload);
        }
        if (object.revoked != null)
            message.revoked = Boolean(object.revoked);
        return message;
    };

    /**
     * Creates a plain object from a PubKeyStorage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PubKeyStorage
     * @static
     * @param {PubKeyStorage} message PubKeyStorage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PubKeyStorage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.owner = "";
            object.payload = null;
            object.revoked = false;
        }
        if (message.owner != null && message.hasOwnProperty("owner"))
            object.owner = message.owner;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = $root.NewPubKeyPayload.toObject(message.payload, options);
        if (message.revoked != null && message.hasOwnProperty("revoked"))
            object.revoked = message.revoked;
        return object;
    };

    /**
     * Converts this PubKeyStorage to JSON.
     * @function toJSON
     * @memberof PubKeyStorage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PubKeyStorage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PubKeyStorage;
})();

$root.Setting = (function() {

    /**
     * Properties of a Setting.
     * @exports ISetting
     * @interface ISetting
     * @property {Array.<Setting.IEntry>|null} [entries] Setting entries
     */

    /**
     * Constructs a new Setting.
     * @exports Setting
     * @classdesc Represents a Setting.
     * @implements ISetting
     * @constructor
     * @param {ISetting=} [properties] Properties to set
     */
    function Setting(properties) {
        this.entries = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Setting entries.
     * @member {Array.<Setting.IEntry>} entries
     * @memberof Setting
     * @instance
     */
    Setting.prototype.entries = $util.emptyArray;

    /**
     * Creates a new Setting instance using the specified properties.
     * @function create
     * @memberof Setting
     * @static
     * @param {ISetting=} [properties] Properties to set
     * @returns {Setting} Setting instance
     */
    Setting.create = function create(properties) {
        return new Setting(properties);
    };

    /**
     * Encodes the specified Setting message. Does not implicitly {@link Setting.verify|verify} messages.
     * @function encode
     * @memberof Setting
     * @static
     * @param {ISetting} message Setting message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Setting.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.entries != null && message.entries.length)
            for (var i = 0; i < message.entries.length; ++i)
                $root.Setting.Entry.encode(message.entries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Setting message, length delimited. Does not implicitly {@link Setting.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Setting
     * @static
     * @param {ISetting} message Setting message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Setting.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Setting message from the specified reader or buffer.
     * @function decode
     * @memberof Setting
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Setting} Setting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Setting.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Setting();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.entries && message.entries.length))
                    message.entries = [];
                message.entries.push($root.Setting.Entry.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Setting message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Setting
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Setting} Setting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Setting.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Setting message.
     * @function verify
     * @memberof Setting
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Setting.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.entries != null && message.hasOwnProperty("entries")) {
            if (!Array.isArray(message.entries))
                return "entries: array expected";
            for (var i = 0; i < message.entries.length; ++i) {
                var error = $root.Setting.Entry.verify(message.entries[i]);
                if (error)
                    return "entries." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Setting message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Setting
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Setting} Setting
     */
    Setting.fromObject = function fromObject(object) {
        if (object instanceof $root.Setting)
            return object;
        var message = new $root.Setting();
        if (object.entries) {
            if (!Array.isArray(object.entries))
                throw TypeError(".Setting.entries: array expected");
            message.entries = [];
            for (var i = 0; i < object.entries.length; ++i) {
                if (typeof object.entries[i] !== "object")
                    throw TypeError(".Setting.entries: object expected");
                message.entries[i] = $root.Setting.Entry.fromObject(object.entries[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Setting message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Setting
     * @static
     * @param {Setting} message Setting
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Setting.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.entries = [];
        if (message.entries && message.entries.length) {
            object.entries = [];
            for (var j = 0; j < message.entries.length; ++j)
                object.entries[j] = $root.Setting.Entry.toObject(message.entries[j], options);
        }
        return object;
    };

    /**
     * Converts this Setting to JSON.
     * @function toJSON
     * @memberof Setting
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Setting.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    Setting.Entry = (function() {

        /**
         * Properties of an Entry.
         * @memberof Setting
         * @interface IEntry
         * @property {string|null} [key] Entry key
         * @property {string|null} [value] Entry value
         */

        /**
         * Constructs a new Entry.
         * @memberof Setting
         * @classdesc Represents an Entry.
         * @implements IEntry
         * @constructor
         * @param {Setting.IEntry=} [properties] Properties to set
         */
        function Entry(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Entry key.
         * @member {string} key
         * @memberof Setting.Entry
         * @instance
         */
        Entry.prototype.key = "";

        /**
         * Entry value.
         * @member {string} value
         * @memberof Setting.Entry
         * @instance
         */
        Entry.prototype.value = "";

        /**
         * Creates a new Entry instance using the specified properties.
         * @function create
         * @memberof Setting.Entry
         * @static
         * @param {Setting.IEntry=} [properties] Properties to set
         * @returns {Setting.Entry} Entry instance
         */
        Entry.create = function create(properties) {
            return new Entry(properties);
        };

        /**
         * Encodes the specified Entry message. Does not implicitly {@link Setting.Entry.verify|verify} messages.
         * @function encode
         * @memberof Setting.Entry
         * @static
         * @param {Setting.IEntry} message Entry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Entry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified Entry message, length delimited. Does not implicitly {@link Setting.Entry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Setting.Entry
         * @static
         * @param {Setting.IEntry} message Entry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Entry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Entry message from the specified reader or buffer.
         * @function decode
         * @memberof Setting.Entry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Setting.Entry} Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Entry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Setting.Entry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Entry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Setting.Entry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Setting.Entry} Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Entry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Entry message.
         * @function verify
         * @memberof Setting.Entry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Entry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Setting.Entry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Setting.Entry} Entry
         */
        Entry.fromObject = function fromObject(object) {
            if (object instanceof $root.Setting.Entry)
                return object;
            var message = new $root.Setting.Entry();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from an Entry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Setting.Entry
         * @static
         * @param {Setting.Entry} message Entry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Entry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Entry to JSON.
         * @function toJSON
         * @memberof Setting.Entry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Entry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Entry;
    })();

    return Setting;
})();

$root.TransactionPayload = (function() {

    /**
     * Properties of a TransactionPayload.
     * @exports ITransactionPayload
     * @interface ITransactionPayload
     * @property {number|null} [method] TransactionPayload method
     * @property {Uint8Array|null} [data] TransactionPayload data
     */

    /**
     * Constructs a new TransactionPayload.
     * @exports TransactionPayload
     * @classdesc Represents a TransactionPayload.
     * @implements ITransactionPayload
     * @constructor
     * @param {ITransactionPayload=} [properties] Properties to set
     */
    function TransactionPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransactionPayload method.
     * @member {number} method
     * @memberof TransactionPayload
     * @instance
     */
    TransactionPayload.prototype.method = 0;

    /**
     * TransactionPayload data.
     * @member {Uint8Array} data
     * @memberof TransactionPayload
     * @instance
     */
    TransactionPayload.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new TransactionPayload instance using the specified properties.
     * @function create
     * @memberof TransactionPayload
     * @static
     * @param {ITransactionPayload=} [properties] Properties to set
     * @returns {TransactionPayload} TransactionPayload instance
     */
    TransactionPayload.create = function create(properties) {
        return new TransactionPayload(properties);
    };

    /**
     * Encodes the specified TransactionPayload message. Does not implicitly {@link TransactionPayload.verify|verify} messages.
     * @function encode
     * @memberof TransactionPayload
     * @static
     * @param {ITransactionPayload} message TransactionPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.method != null && message.hasOwnProperty("method"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.method);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified TransactionPayload message, length delimited. Does not implicitly {@link TransactionPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransactionPayload
     * @static
     * @param {ITransactionPayload} message TransactionPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransactionPayload message from the specified reader or buffer.
     * @function decode
     * @memberof TransactionPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransactionPayload} TransactionPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransactionPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.method = reader.uint32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransactionPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransactionPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransactionPayload} TransactionPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransactionPayload message.
     * @function verify
     * @memberof TransactionPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransactionPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.method != null && message.hasOwnProperty("method"))
            if (!$util.isInteger(message.method))
                return "method: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a TransactionPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransactionPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransactionPayload} TransactionPayload
     */
    TransactionPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.TransactionPayload)
            return object;
        var message = new $root.TransactionPayload();
        if (object.method != null)
            message.method = object.method >>> 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a TransactionPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransactionPayload
     * @static
     * @param {TransactionPayload} message TransactionPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransactionPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.method = 0;
            object.data = options.bytes === String ? "" : [];
        }
        if (message.method != null && message.hasOwnProperty("method"))
            object.method = message.method;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this TransactionPayload to JSON.
     * @function toJSON
     * @memberof TransactionPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransactionPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TransactionPayload;
})();

$root.MessageList = (function() {

    /**
     * Properties of a MessageList.
     * @exports IMessageList
     * @interface IMessageList
     * @property {Array.<IMessage>|null} [messages] MessageList messages
     */

    /**
     * Constructs a new MessageList.
     * @exports MessageList
     * @classdesc Represents a MessageList.
     * @implements IMessageList
     * @constructor
     * @param {IMessageList=} [properties] Properties to set
     */
    function MessageList(properties) {
        this.messages = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MessageList messages.
     * @member {Array.<IMessage>} messages
     * @memberof MessageList
     * @instance
     */
    MessageList.prototype.messages = $util.emptyArray;

    /**
     * Creates a new MessageList instance using the specified properties.
     * @function create
     * @memberof MessageList
     * @static
     * @param {IMessageList=} [properties] Properties to set
     * @returns {MessageList} MessageList instance
     */
    MessageList.create = function create(properties) {
        return new MessageList(properties);
    };

    /**
     * Encodes the specified MessageList message. Does not implicitly {@link MessageList.verify|verify} messages.
     * @function encode
     * @memberof MessageList
     * @static
     * @param {IMessageList} message MessageList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messages != null && message.messages.length)
            for (var i = 0; i < message.messages.length; ++i)
                $root.Message.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MessageList message, length delimited. Does not implicitly {@link MessageList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageList
     * @static
     * @param {IMessageList} message MessageList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageList message from the specified reader or buffer.
     * @function decode
     * @memberof MessageList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageList} MessageList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.messages && message.messages.length))
                    message.messages = [];
                message.messages.push($root.Message.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MessageList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageList} MessageList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageList message.
     * @function verify
     * @memberof MessageList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messages != null && message.hasOwnProperty("messages")) {
            if (!Array.isArray(message.messages))
                return "messages: array expected";
            for (var i = 0; i < message.messages.length; ++i) {
                var error = $root.Message.verify(message.messages[i]);
                if (error)
                    return "messages." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MessageList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageList} MessageList
     */
    MessageList.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageList)
            return object;
        var message = new $root.MessageList();
        if (object.messages) {
            if (!Array.isArray(object.messages))
                throw TypeError(".MessageList.messages: array expected");
            message.messages = [];
            for (var i = 0; i < object.messages.length; ++i) {
                if (typeof object.messages[i] !== "object")
                    throw TypeError(".MessageList.messages: object expected");
                message.messages[i] = $root.Message.fromObject(object.messages[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a MessageList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageList
     * @static
     * @param {MessageList} message MessageList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.messages = [];
        if (message.messages && message.messages.length) {
            object.messages = [];
            for (var j = 0; j < message.messages.length; ++j)
                object.messages[j] = $root.Message.toObject(message.messages[j], options);
        }
        return object;
    };

    /**
     * Converts this MessageList to JSON.
     * @function toJSON
     * @memberof MessageList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MessageList;
})();

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {Message.MessageType|null} [messageType] Message messageType
     * @property {string|null} [correlationId] Message correlationId
     * @property {Uint8Array|null} [content] Message content
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message messageType.
     * @member {Message.MessageType} messageType
     * @memberof Message
     * @instance
     */
    Message.prototype.messageType = 0;

    /**
     * Message correlationId.
     * @member {string} correlationId
     * @memberof Message
     * @instance
     */
    Message.prototype.correlationId = "";

    /**
     * Message content.
     * @member {Uint8Array} content
     * @memberof Message
     * @instance
     */
    Message.prototype.content = $util.newBuffer([]);

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messageType != null && message.hasOwnProperty("messageType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
        if (message.correlationId != null && message.hasOwnProperty("correlationId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.correlationId);
        if (message.content != null && message.hasOwnProperty("content"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.content);
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.messageType = reader.int32();
                break;
            case 2:
                message.correlationId = reader.string();
                break;
            case 3:
                message.content = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messageType != null && message.hasOwnProperty("messageType"))
            switch (message.messageType) {
            default:
                return "messageType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
            case 123:
            case 124:
            case 125:
            case 126:
            case 127:
            case 128:
            case 129:
            case 130:
            case 500:
            case 501:
            case 502:
            case 503:
            case 504:
            case 505:
            case 506:
            case 200:
            case 201:
            case 202:
            case 205:
            case 206:
            case 207:
            case 208:
            case 209:
            case 210:
            case 211:
            case 212:
            case 300:
            case 301:
            case 302:
            case 600:
            case 601:
            case 602:
            case 603:
            case 604:
            case 605:
            case 606:
            case 607:
            case 700:
            case 701:
            case 800:
            case 801:
            case 802:
            case 803:
            case 804:
            case 805:
            case 806:
            case 807:
            case 808:
            case 809:
            case 828:
            case 829:
            case 810:
            case 811:
            case 812:
            case 813:
            case 814:
            case 815:
            case 816:
            case 817:
            case 818:
            case 819:
            case 820:
            case 821:
            case 822:
            case 823:
            case 824:
            case 825:
            case 826:
            case 827:
            case 900:
            case 901:
            case 902:
            case 903:
            case 904:
            case 905:
            case 906:
            case 999:
                break;
            }
        if (message.correlationId != null && message.hasOwnProperty("correlationId"))
            if (!$util.isString(message.correlationId))
                return "correlationId: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                return "content: buffer expected";
        return null;
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        var message = new $root.Message();
        switch (object.messageType) {
        case "DEFAULT":
        case 0:
            message.messageType = 0;
            break;
        case "TP_REGISTER_REQUEST":
        case 1:
            message.messageType = 1;
            break;
        case "TP_REGISTER_RESPONSE":
        case 2:
            message.messageType = 2;
            break;
        case "TP_UNREGISTER_REQUEST":
        case 3:
            message.messageType = 3;
            break;
        case "TP_UNREGISTER_RESPONSE":
        case 4:
            message.messageType = 4;
            break;
        case "TP_PROCESS_REQUEST":
        case 5:
            message.messageType = 5;
            break;
        case "TP_PROCESS_RESPONSE":
        case 6:
            message.messageType = 6;
            break;
        case "TP_STATE_GET_REQUEST":
        case 7:
            message.messageType = 7;
            break;
        case "TP_STATE_GET_RESPONSE":
        case 8:
            message.messageType = 8;
            break;
        case "TP_STATE_SET_REQUEST":
        case 9:
            message.messageType = 9;
            break;
        case "TP_STATE_SET_RESPONSE":
        case 10:
            message.messageType = 10;
            break;
        case "TP_STATE_DELETE_REQUEST":
        case 11:
            message.messageType = 11;
            break;
        case "TP_STATE_DELETE_RESPONSE":
        case 12:
            message.messageType = 12;
            break;
        case "TP_RECEIPT_ADD_DATA_REQUEST":
        case 13:
            message.messageType = 13;
            break;
        case "TP_RECEIPT_ADD_DATA_RESPONSE":
        case 14:
            message.messageType = 14;
            break;
        case "TP_EVENT_ADD_REQUEST":
        case 15:
            message.messageType = 15;
            break;
        case "TP_EVENT_ADD_RESPONSE":
        case 16:
            message.messageType = 16;
            break;
        case "CLIENT_BATCH_SUBMIT_REQUEST":
        case 100:
            message.messageType = 100;
            break;
        case "CLIENT_BATCH_SUBMIT_RESPONSE":
        case 101:
            message.messageType = 101;
            break;
        case "CLIENT_BLOCK_LIST_REQUEST":
        case 102:
            message.messageType = 102;
            break;
        case "CLIENT_BLOCK_LIST_RESPONSE":
        case 103:
            message.messageType = 103;
            break;
        case "CLIENT_BLOCK_GET_BY_ID_REQUEST":
        case 104:
            message.messageType = 104;
            break;
        case "CLIENT_BLOCK_GET_RESPONSE":
        case 105:
            message.messageType = 105;
            break;
        case "CLIENT_BATCH_LIST_REQUEST":
        case 106:
            message.messageType = 106;
            break;
        case "CLIENT_BATCH_LIST_RESPONSE":
        case 107:
            message.messageType = 107;
            break;
        case "CLIENT_BATCH_GET_REQUEST":
        case 108:
            message.messageType = 108;
            break;
        case "CLIENT_BATCH_GET_RESPONSE":
        case 109:
            message.messageType = 109;
            break;
        case "CLIENT_TRANSACTION_LIST_REQUEST":
        case 110:
            message.messageType = 110;
            break;
        case "CLIENT_TRANSACTION_LIST_RESPONSE":
        case 111:
            message.messageType = 111;
            break;
        case "CLIENT_TRANSACTION_GET_REQUEST":
        case 112:
            message.messageType = 112;
            break;
        case "CLIENT_TRANSACTION_GET_RESPONSE":
        case 113:
            message.messageType = 113;
            break;
        case "CLIENT_STATE_CURRENT_REQUEST":
        case 114:
            message.messageType = 114;
            break;
        case "CLIENT_STATE_CURRENT_RESPONSE":
        case 115:
            message.messageType = 115;
            break;
        case "CLIENT_STATE_LIST_REQUEST":
        case 116:
            message.messageType = 116;
            break;
        case "CLIENT_STATE_LIST_RESPONSE":
        case 117:
            message.messageType = 117;
            break;
        case "CLIENT_STATE_GET_REQUEST":
        case 118:
            message.messageType = 118;
            break;
        case "CLIENT_STATE_GET_RESPONSE":
        case 119:
            message.messageType = 119;
            break;
        case "CLIENT_BATCH_STATUS_REQUEST":
        case 120:
            message.messageType = 120;
            break;
        case "CLIENT_BATCH_STATUS_RESPONSE":
        case 121:
            message.messageType = 121;
            break;
        case "CLIENT_RECEIPT_GET_REQUEST":
        case 122:
            message.messageType = 122;
            break;
        case "CLIENT_RECEIPT_GET_RESPONSE":
        case 123:
            message.messageType = 123;
            break;
        case "CLIENT_BLOCK_GET_BY_NUM_REQUEST":
        case 124:
            message.messageType = 124;
            break;
        case "CLIENT_PEERS_GET_REQUEST":
        case 125:
            message.messageType = 125;
            break;
        case "CLIENT_PEERS_GET_RESPONSE":
        case 126:
            message.messageType = 126;
            break;
        case "CLIENT_BLOCK_GET_BY_TRANSACTION_ID_REQUEST":
        case 127:
            message.messageType = 127;
            break;
        case "CLIENT_BLOCK_GET_BY_BATCH_ID_REQUEST":
        case 128:
            message.messageType = 128;
            break;
        case "CLIENT_STATUS_GET_REQUEST":
        case 129:
            message.messageType = 129;
            break;
        case "CLIENT_STATUS_GET_RESPONSE":
        case 130:
            message.messageType = 130;
            break;
        case "CLIENT_EVENTS_SUBSCRIBE_REQUEST":
        case 500:
            message.messageType = 500;
            break;
        case "CLIENT_EVENTS_SUBSCRIBE_RESPONSE":
        case 501:
            message.messageType = 501;
            break;
        case "CLIENT_EVENTS_UNSUBSCRIBE_REQUEST":
        case 502:
            message.messageType = 502;
            break;
        case "CLIENT_EVENTS_UNSUBSCRIBE_RESPONSE":
        case 503:
            message.messageType = 503;
            break;
        case "CLIENT_EVENTS":
        case 504:
            message.messageType = 504;
            break;
        case "CLIENT_EVENTS_GET_REQUEST":
        case 505:
            message.messageType = 505;
            break;
        case "CLIENT_EVENTS_GET_RESPONSE":
        case 506:
            message.messageType = 506;
            break;
        case "GOSSIP_MESSAGE":
        case 200:
            message.messageType = 200;
            break;
        case "GOSSIP_REGISTER":
        case 201:
            message.messageType = 201;
            break;
        case "GOSSIP_UNREGISTER":
        case 202:
            message.messageType = 202;
            break;
        case "GOSSIP_BLOCK_REQUEST":
        case 205:
            message.messageType = 205;
            break;
        case "GOSSIP_BLOCK_RESPONSE":
        case 206:
            message.messageType = 206;
            break;
        case "GOSSIP_BATCH_BY_BATCH_ID_REQUEST":
        case 207:
            message.messageType = 207;
            break;
        case "GOSSIP_BATCH_BY_TRANSACTION_ID_REQUEST":
        case 208:
            message.messageType = 208;
            break;
        case "GOSSIP_BATCH_RESPONSE":
        case 209:
            message.messageType = 209;
            break;
        case "GOSSIP_GET_PEERS_REQUEST":
        case 210:
            message.messageType = 210;
            break;
        case "GOSSIP_GET_PEERS_RESPONSE":
        case 211:
            message.messageType = 211;
            break;
        case "GOSSIP_CONSENSUS_MESSAGE":
        case 212:
            message.messageType = 212;
            break;
        case "NETWORK_ACK":
        case 300:
            message.messageType = 300;
            break;
        case "NETWORK_CONNECT":
        case 301:
            message.messageType = 301;
            break;
        case "NETWORK_DISCONNECT":
        case 302:
            message.messageType = 302;
            break;
        case "AUTHORIZATION_CONNECTION_RESPONSE":
        case 600:
            message.messageType = 600;
            break;
        case "AUTHORIZATION_VIOLATION":
        case 601:
            message.messageType = 601;
            break;
        case "AUTHORIZATION_TRUST_REQUEST":
        case 602:
            message.messageType = 602;
            break;
        case "AUTHORIZATION_TRUST_RESPONSE":
        case 603:
            message.messageType = 603;
            break;
        case "AUTHORIZATION_CHALLENGE_REQUEST":
        case 604:
            message.messageType = 604;
            break;
        case "AUTHORIZATION_CHALLENGE_RESPONSE":
        case 605:
            message.messageType = 605;
            break;
        case "AUTHORIZATION_CHALLENGE_SUBMIT":
        case 606:
            message.messageType = 606;
            break;
        case "AUTHORIZATION_CHALLENGE_RESULT":
        case 607:
            message.messageType = 607;
            break;
        case "PING_REQUEST":
        case 700:
            message.messageType = 700;
            break;
        case "PING_RESPONSE":
        case 701:
            message.messageType = 701;
            break;
        case "CONSENSUS_REGISTER_REQUEST":
        case 800:
            message.messageType = 800;
            break;
        case "CONSENSUS_REGISTER_RESPONSE":
        case 801:
            message.messageType = 801;
            break;
        case "CONSENSUS_SEND_TO_REQUEST":
        case 802:
            message.messageType = 802;
            break;
        case "CONSENSUS_SEND_TO_RESPONSE":
        case 803:
            message.messageType = 803;
            break;
        case "CONSENSUS_BROADCAST_REQUEST":
        case 804:
            message.messageType = 804;
            break;
        case "CONSENSUS_BROADCAST_RESPONSE":
        case 805:
            message.messageType = 805;
            break;
        case "CONSENSUS_INITIALIZE_BLOCK_REQUEST":
        case 806:
            message.messageType = 806;
            break;
        case "CONSENSUS_INITIALIZE_BLOCK_RESPONSE":
        case 807:
            message.messageType = 807;
            break;
        case "CONSENSUS_FINALIZE_BLOCK_REQUEST":
        case 808:
            message.messageType = 808;
            break;
        case "CONSENSUS_FINALIZE_BLOCK_RESPONSE":
        case 809:
            message.messageType = 809;
            break;
        case "CONSENSUS_SUMMARIZE_BLOCK_REQUEST":
        case 828:
            message.messageType = 828;
            break;
        case "CONSENSUS_SUMMARIZE_BLOCK_RESPONSE":
        case 829:
            message.messageType = 829;
            break;
        case "CONSENSUS_CANCEL_BLOCK_REQUEST":
        case 810:
            message.messageType = 810;
            break;
        case "CONSENSUS_CANCEL_BLOCK_RESPONSE":
        case 811:
            message.messageType = 811;
            break;
        case "CONSENSUS_CHECK_BLOCKS_REQUEST":
        case 812:
            message.messageType = 812;
            break;
        case "CONSENSUS_CHECK_BLOCKS_RESPONSE":
        case 813:
            message.messageType = 813;
            break;
        case "CONSENSUS_COMMIT_BLOCK_REQUEST":
        case 814:
            message.messageType = 814;
            break;
        case "CONSENSUS_COMMIT_BLOCK_RESPONSE":
        case 815:
            message.messageType = 815;
            break;
        case "CONSENSUS_IGNORE_BLOCK_REQUEST":
        case 816:
            message.messageType = 816;
            break;
        case "CONSENSUS_IGNORE_BLOCK_RESPONSE":
        case 817:
            message.messageType = 817;
            break;
        case "CONSENSUS_FAIL_BLOCK_REQUEST":
        case 818:
            message.messageType = 818;
            break;
        case "CONSENSUS_FAIL_BLOCK_RESPONSE":
        case 819:
            message.messageType = 819;
            break;
        case "CONSENSUS_SETTINGS_GET_REQUEST":
        case 820:
            message.messageType = 820;
            break;
        case "CONSENSUS_SETTINGS_GET_RESPONSE":
        case 821:
            message.messageType = 821;
            break;
        case "CONSENSUS_STATE_GET_REQUEST":
        case 822:
            message.messageType = 822;
            break;
        case "CONSENSUS_STATE_GET_RESPONSE":
        case 823:
            message.messageType = 823;
            break;
        case "CONSENSUS_BLOCKS_GET_REQUEST":
        case 824:
            message.messageType = 824;
            break;
        case "CONSENSUS_BLOCKS_GET_RESPONSE":
        case 825:
            message.messageType = 825;
            break;
        case "CONSENSUS_CHAIN_HEAD_GET_REQUEST":
        case 826:
            message.messageType = 826;
            break;
        case "CONSENSUS_CHAIN_HEAD_GET_RESPONSE":
        case 827:
            message.messageType = 827;
            break;
        case "CONSENSUS_NOTIFY_PEER_CONNECTED":
        case 900:
            message.messageType = 900;
            break;
        case "CONSENSUS_NOTIFY_PEER_DISCONNECTED":
        case 901:
            message.messageType = 901;
            break;
        case "CONSENSUS_NOTIFY_PEER_MESSAGE":
        case 902:
            message.messageType = 902;
            break;
        case "CONSENSUS_NOTIFY_BLOCK_NEW":
        case 903:
            message.messageType = 903;
            break;
        case "CONSENSUS_NOTIFY_BLOCK_VALID":
        case 904:
            message.messageType = 904;
            break;
        case "CONSENSUS_NOTIFY_BLOCK_INVALID":
        case 905:
            message.messageType = 905;
            break;
        case "CONSENSUS_NOTIFY_BLOCK_COMMIT":
        case 906:
            message.messageType = 906;
            break;
        case "CONSENSUS_NOTIFY_ACK":
        case 999:
            message.messageType = 999;
            break;
        }
        if (object.correlationId != null)
            message.correlationId = String(object.correlationId);
        if (object.content != null)
            if (typeof object.content === "string")
                $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
            else if (object.content.length)
                message.content = object.content;
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.messageType = options.enums === String ? "DEFAULT" : 0;
            object.correlationId = "";
            object.content = options.bytes === String ? "" : [];
        }
        if (message.messageType != null && message.hasOwnProperty("messageType"))
            object.messageType = options.enums === String ? $root.Message.MessageType[message.messageType] : message.messageType;
        if (message.correlationId != null && message.hasOwnProperty("correlationId"))
            object.correlationId = message.correlationId;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * MessageType enum.
     * @name Message.MessageType
     * @enum {string}
     * @property {number} DEFAULT=0 DEFAULT value
     * @property {number} TP_REGISTER_REQUEST=1 TP_REGISTER_REQUEST value
     * @property {number} TP_REGISTER_RESPONSE=2 TP_REGISTER_RESPONSE value
     * @property {number} TP_UNREGISTER_REQUEST=3 TP_UNREGISTER_REQUEST value
     * @property {number} TP_UNREGISTER_RESPONSE=4 TP_UNREGISTER_RESPONSE value
     * @property {number} TP_PROCESS_REQUEST=5 TP_PROCESS_REQUEST value
     * @property {number} TP_PROCESS_RESPONSE=6 TP_PROCESS_RESPONSE value
     * @property {number} TP_STATE_GET_REQUEST=7 TP_STATE_GET_REQUEST value
     * @property {number} TP_STATE_GET_RESPONSE=8 TP_STATE_GET_RESPONSE value
     * @property {number} TP_STATE_SET_REQUEST=9 TP_STATE_SET_REQUEST value
     * @property {number} TP_STATE_SET_RESPONSE=10 TP_STATE_SET_RESPONSE value
     * @property {number} TP_STATE_DELETE_REQUEST=11 TP_STATE_DELETE_REQUEST value
     * @property {number} TP_STATE_DELETE_RESPONSE=12 TP_STATE_DELETE_RESPONSE value
     * @property {number} TP_RECEIPT_ADD_DATA_REQUEST=13 TP_RECEIPT_ADD_DATA_REQUEST value
     * @property {number} TP_RECEIPT_ADD_DATA_RESPONSE=14 TP_RECEIPT_ADD_DATA_RESPONSE value
     * @property {number} TP_EVENT_ADD_REQUEST=15 TP_EVENT_ADD_REQUEST value
     * @property {number} TP_EVENT_ADD_RESPONSE=16 TP_EVENT_ADD_RESPONSE value
     * @property {number} CLIENT_BATCH_SUBMIT_REQUEST=100 CLIENT_BATCH_SUBMIT_REQUEST value
     * @property {number} CLIENT_BATCH_SUBMIT_RESPONSE=101 CLIENT_BATCH_SUBMIT_RESPONSE value
     * @property {number} CLIENT_BLOCK_LIST_REQUEST=102 CLIENT_BLOCK_LIST_REQUEST value
     * @property {number} CLIENT_BLOCK_LIST_RESPONSE=103 CLIENT_BLOCK_LIST_RESPONSE value
     * @property {number} CLIENT_BLOCK_GET_BY_ID_REQUEST=104 CLIENT_BLOCK_GET_BY_ID_REQUEST value
     * @property {number} CLIENT_BLOCK_GET_RESPONSE=105 CLIENT_BLOCK_GET_RESPONSE value
     * @property {number} CLIENT_BATCH_LIST_REQUEST=106 CLIENT_BATCH_LIST_REQUEST value
     * @property {number} CLIENT_BATCH_LIST_RESPONSE=107 CLIENT_BATCH_LIST_RESPONSE value
     * @property {number} CLIENT_BATCH_GET_REQUEST=108 CLIENT_BATCH_GET_REQUEST value
     * @property {number} CLIENT_BATCH_GET_RESPONSE=109 CLIENT_BATCH_GET_RESPONSE value
     * @property {number} CLIENT_TRANSACTION_LIST_REQUEST=110 CLIENT_TRANSACTION_LIST_REQUEST value
     * @property {number} CLIENT_TRANSACTION_LIST_RESPONSE=111 CLIENT_TRANSACTION_LIST_RESPONSE value
     * @property {number} CLIENT_TRANSACTION_GET_REQUEST=112 CLIENT_TRANSACTION_GET_REQUEST value
     * @property {number} CLIENT_TRANSACTION_GET_RESPONSE=113 CLIENT_TRANSACTION_GET_RESPONSE value
     * @property {number} CLIENT_STATE_CURRENT_REQUEST=114 CLIENT_STATE_CURRENT_REQUEST value
     * @property {number} CLIENT_STATE_CURRENT_RESPONSE=115 CLIENT_STATE_CURRENT_RESPONSE value
     * @property {number} CLIENT_STATE_LIST_REQUEST=116 CLIENT_STATE_LIST_REQUEST value
     * @property {number} CLIENT_STATE_LIST_RESPONSE=117 CLIENT_STATE_LIST_RESPONSE value
     * @property {number} CLIENT_STATE_GET_REQUEST=118 CLIENT_STATE_GET_REQUEST value
     * @property {number} CLIENT_STATE_GET_RESPONSE=119 CLIENT_STATE_GET_RESPONSE value
     * @property {number} CLIENT_BATCH_STATUS_REQUEST=120 CLIENT_BATCH_STATUS_REQUEST value
     * @property {number} CLIENT_BATCH_STATUS_RESPONSE=121 CLIENT_BATCH_STATUS_RESPONSE value
     * @property {number} CLIENT_RECEIPT_GET_REQUEST=122 CLIENT_RECEIPT_GET_REQUEST value
     * @property {number} CLIENT_RECEIPT_GET_RESPONSE=123 CLIENT_RECEIPT_GET_RESPONSE value
     * @property {number} CLIENT_BLOCK_GET_BY_NUM_REQUEST=124 CLIENT_BLOCK_GET_BY_NUM_REQUEST value
     * @property {number} CLIENT_PEERS_GET_REQUEST=125 CLIENT_PEERS_GET_REQUEST value
     * @property {number} CLIENT_PEERS_GET_RESPONSE=126 CLIENT_PEERS_GET_RESPONSE value
     * @property {number} CLIENT_BLOCK_GET_BY_TRANSACTION_ID_REQUEST=127 CLIENT_BLOCK_GET_BY_TRANSACTION_ID_REQUEST value
     * @property {number} CLIENT_BLOCK_GET_BY_BATCH_ID_REQUEST=128 CLIENT_BLOCK_GET_BY_BATCH_ID_REQUEST value
     * @property {number} CLIENT_STATUS_GET_REQUEST=129 CLIENT_STATUS_GET_REQUEST value
     * @property {number} CLIENT_STATUS_GET_RESPONSE=130 CLIENT_STATUS_GET_RESPONSE value
     * @property {number} CLIENT_EVENTS_SUBSCRIBE_REQUEST=500 CLIENT_EVENTS_SUBSCRIBE_REQUEST value
     * @property {number} CLIENT_EVENTS_SUBSCRIBE_RESPONSE=501 CLIENT_EVENTS_SUBSCRIBE_RESPONSE value
     * @property {number} CLIENT_EVENTS_UNSUBSCRIBE_REQUEST=502 CLIENT_EVENTS_UNSUBSCRIBE_REQUEST value
     * @property {number} CLIENT_EVENTS_UNSUBSCRIBE_RESPONSE=503 CLIENT_EVENTS_UNSUBSCRIBE_RESPONSE value
     * @property {number} CLIENT_EVENTS=504 CLIENT_EVENTS value
     * @property {number} CLIENT_EVENTS_GET_REQUEST=505 CLIENT_EVENTS_GET_REQUEST value
     * @property {number} CLIENT_EVENTS_GET_RESPONSE=506 CLIENT_EVENTS_GET_RESPONSE value
     * @property {number} GOSSIP_MESSAGE=200 GOSSIP_MESSAGE value
     * @property {number} GOSSIP_REGISTER=201 GOSSIP_REGISTER value
     * @property {number} GOSSIP_UNREGISTER=202 GOSSIP_UNREGISTER value
     * @property {number} GOSSIP_BLOCK_REQUEST=205 GOSSIP_BLOCK_REQUEST value
     * @property {number} GOSSIP_BLOCK_RESPONSE=206 GOSSIP_BLOCK_RESPONSE value
     * @property {number} GOSSIP_BATCH_BY_BATCH_ID_REQUEST=207 GOSSIP_BATCH_BY_BATCH_ID_REQUEST value
     * @property {number} GOSSIP_BATCH_BY_TRANSACTION_ID_REQUEST=208 GOSSIP_BATCH_BY_TRANSACTION_ID_REQUEST value
     * @property {number} GOSSIP_BATCH_RESPONSE=209 GOSSIP_BATCH_RESPONSE value
     * @property {number} GOSSIP_GET_PEERS_REQUEST=210 GOSSIP_GET_PEERS_REQUEST value
     * @property {number} GOSSIP_GET_PEERS_RESPONSE=211 GOSSIP_GET_PEERS_RESPONSE value
     * @property {number} GOSSIP_CONSENSUS_MESSAGE=212 GOSSIP_CONSENSUS_MESSAGE value
     * @property {number} NETWORK_ACK=300 NETWORK_ACK value
     * @property {number} NETWORK_CONNECT=301 NETWORK_CONNECT value
     * @property {number} NETWORK_DISCONNECT=302 NETWORK_DISCONNECT value
     * @property {number} AUTHORIZATION_CONNECTION_RESPONSE=600 AUTHORIZATION_CONNECTION_RESPONSE value
     * @property {number} AUTHORIZATION_VIOLATION=601 AUTHORIZATION_VIOLATION value
     * @property {number} AUTHORIZATION_TRUST_REQUEST=602 AUTHORIZATION_TRUST_REQUEST value
     * @property {number} AUTHORIZATION_TRUST_RESPONSE=603 AUTHORIZATION_TRUST_RESPONSE value
     * @property {number} AUTHORIZATION_CHALLENGE_REQUEST=604 AUTHORIZATION_CHALLENGE_REQUEST value
     * @property {number} AUTHORIZATION_CHALLENGE_RESPONSE=605 AUTHORIZATION_CHALLENGE_RESPONSE value
     * @property {number} AUTHORIZATION_CHALLENGE_SUBMIT=606 AUTHORIZATION_CHALLENGE_SUBMIT value
     * @property {number} AUTHORIZATION_CHALLENGE_RESULT=607 AUTHORIZATION_CHALLENGE_RESULT value
     * @property {number} PING_REQUEST=700 PING_REQUEST value
     * @property {number} PING_RESPONSE=701 PING_RESPONSE value
     * @property {number} CONSENSUS_REGISTER_REQUEST=800 CONSENSUS_REGISTER_REQUEST value
     * @property {number} CONSENSUS_REGISTER_RESPONSE=801 CONSENSUS_REGISTER_RESPONSE value
     * @property {number} CONSENSUS_SEND_TO_REQUEST=802 CONSENSUS_SEND_TO_REQUEST value
     * @property {number} CONSENSUS_SEND_TO_RESPONSE=803 CONSENSUS_SEND_TO_RESPONSE value
     * @property {number} CONSENSUS_BROADCAST_REQUEST=804 CONSENSUS_BROADCAST_REQUEST value
     * @property {number} CONSENSUS_BROADCAST_RESPONSE=805 CONSENSUS_BROADCAST_RESPONSE value
     * @property {number} CONSENSUS_INITIALIZE_BLOCK_REQUEST=806 CONSENSUS_INITIALIZE_BLOCK_REQUEST value
     * @property {number} CONSENSUS_INITIALIZE_BLOCK_RESPONSE=807 CONSENSUS_INITIALIZE_BLOCK_RESPONSE value
     * @property {number} CONSENSUS_FINALIZE_BLOCK_REQUEST=808 CONSENSUS_FINALIZE_BLOCK_REQUEST value
     * @property {number} CONSENSUS_FINALIZE_BLOCK_RESPONSE=809 CONSENSUS_FINALIZE_BLOCK_RESPONSE value
     * @property {number} CONSENSUS_SUMMARIZE_BLOCK_REQUEST=828 CONSENSUS_SUMMARIZE_BLOCK_REQUEST value
     * @property {number} CONSENSUS_SUMMARIZE_BLOCK_RESPONSE=829 CONSENSUS_SUMMARIZE_BLOCK_RESPONSE value
     * @property {number} CONSENSUS_CANCEL_BLOCK_REQUEST=810 CONSENSUS_CANCEL_BLOCK_REQUEST value
     * @property {number} CONSENSUS_CANCEL_BLOCK_RESPONSE=811 CONSENSUS_CANCEL_BLOCK_RESPONSE value
     * @property {number} CONSENSUS_CHECK_BLOCKS_REQUEST=812 CONSENSUS_CHECK_BLOCKS_REQUEST value
     * @property {number} CONSENSUS_CHECK_BLOCKS_RESPONSE=813 CONSENSUS_CHECK_BLOCKS_RESPONSE value
     * @property {number} CONSENSUS_COMMIT_BLOCK_REQUEST=814 CONSENSUS_COMMIT_BLOCK_REQUEST value
     * @property {number} CONSENSUS_COMMIT_BLOCK_RESPONSE=815 CONSENSUS_COMMIT_BLOCK_RESPONSE value
     * @property {number} CONSENSUS_IGNORE_BLOCK_REQUEST=816 CONSENSUS_IGNORE_BLOCK_REQUEST value
     * @property {number} CONSENSUS_IGNORE_BLOCK_RESPONSE=817 CONSENSUS_IGNORE_BLOCK_RESPONSE value
     * @property {number} CONSENSUS_FAIL_BLOCK_REQUEST=818 CONSENSUS_FAIL_BLOCK_REQUEST value
     * @property {number} CONSENSUS_FAIL_BLOCK_RESPONSE=819 CONSENSUS_FAIL_BLOCK_RESPONSE value
     * @property {number} CONSENSUS_SETTINGS_GET_REQUEST=820 CONSENSUS_SETTINGS_GET_REQUEST value
     * @property {number} CONSENSUS_SETTINGS_GET_RESPONSE=821 CONSENSUS_SETTINGS_GET_RESPONSE value
     * @property {number} CONSENSUS_STATE_GET_REQUEST=822 CONSENSUS_STATE_GET_REQUEST value
     * @property {number} CONSENSUS_STATE_GET_RESPONSE=823 CONSENSUS_STATE_GET_RESPONSE value
     * @property {number} CONSENSUS_BLOCKS_GET_REQUEST=824 CONSENSUS_BLOCKS_GET_REQUEST value
     * @property {number} CONSENSUS_BLOCKS_GET_RESPONSE=825 CONSENSUS_BLOCKS_GET_RESPONSE value
     * @property {number} CONSENSUS_CHAIN_HEAD_GET_REQUEST=826 CONSENSUS_CHAIN_HEAD_GET_REQUEST value
     * @property {number} CONSENSUS_CHAIN_HEAD_GET_RESPONSE=827 CONSENSUS_CHAIN_HEAD_GET_RESPONSE value
     * @property {number} CONSENSUS_NOTIFY_PEER_CONNECTED=900 CONSENSUS_NOTIFY_PEER_CONNECTED value
     * @property {number} CONSENSUS_NOTIFY_PEER_DISCONNECTED=901 CONSENSUS_NOTIFY_PEER_DISCONNECTED value
     * @property {number} CONSENSUS_NOTIFY_PEER_MESSAGE=902 CONSENSUS_NOTIFY_PEER_MESSAGE value
     * @property {number} CONSENSUS_NOTIFY_BLOCK_NEW=903 CONSENSUS_NOTIFY_BLOCK_NEW value
     * @property {number} CONSENSUS_NOTIFY_BLOCK_VALID=904 CONSENSUS_NOTIFY_BLOCK_VALID value
     * @property {number} CONSENSUS_NOTIFY_BLOCK_INVALID=905 CONSENSUS_NOTIFY_BLOCK_INVALID value
     * @property {number} CONSENSUS_NOTIFY_BLOCK_COMMIT=906 CONSENSUS_NOTIFY_BLOCK_COMMIT value
     * @property {number} CONSENSUS_NOTIFY_ACK=999 CONSENSUS_NOTIFY_ACK value
     */
    Message.MessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DEFAULT"] = 0;
        values[valuesById[1] = "TP_REGISTER_REQUEST"] = 1;
        values[valuesById[2] = "TP_REGISTER_RESPONSE"] = 2;
        values[valuesById[3] = "TP_UNREGISTER_REQUEST"] = 3;
        values[valuesById[4] = "TP_UNREGISTER_RESPONSE"] = 4;
        values[valuesById[5] = "TP_PROCESS_REQUEST"] = 5;
        values[valuesById[6] = "TP_PROCESS_RESPONSE"] = 6;
        values[valuesById[7] = "TP_STATE_GET_REQUEST"] = 7;
        values[valuesById[8] = "TP_STATE_GET_RESPONSE"] = 8;
        values[valuesById[9] = "TP_STATE_SET_REQUEST"] = 9;
        values[valuesById[10] = "TP_STATE_SET_RESPONSE"] = 10;
        values[valuesById[11] = "TP_STATE_DELETE_REQUEST"] = 11;
        values[valuesById[12] = "TP_STATE_DELETE_RESPONSE"] = 12;
        values[valuesById[13] = "TP_RECEIPT_ADD_DATA_REQUEST"] = 13;
        values[valuesById[14] = "TP_RECEIPT_ADD_DATA_RESPONSE"] = 14;
        values[valuesById[15] = "TP_EVENT_ADD_REQUEST"] = 15;
        values[valuesById[16] = "TP_EVENT_ADD_RESPONSE"] = 16;
        values[valuesById[100] = "CLIENT_BATCH_SUBMIT_REQUEST"] = 100;
        values[valuesById[101] = "CLIENT_BATCH_SUBMIT_RESPONSE"] = 101;
        values[valuesById[102] = "CLIENT_BLOCK_LIST_REQUEST"] = 102;
        values[valuesById[103] = "CLIENT_BLOCK_LIST_RESPONSE"] = 103;
        values[valuesById[104] = "CLIENT_BLOCK_GET_BY_ID_REQUEST"] = 104;
        values[valuesById[105] = "CLIENT_BLOCK_GET_RESPONSE"] = 105;
        values[valuesById[106] = "CLIENT_BATCH_LIST_REQUEST"] = 106;
        values[valuesById[107] = "CLIENT_BATCH_LIST_RESPONSE"] = 107;
        values[valuesById[108] = "CLIENT_BATCH_GET_REQUEST"] = 108;
        values[valuesById[109] = "CLIENT_BATCH_GET_RESPONSE"] = 109;
        values[valuesById[110] = "CLIENT_TRANSACTION_LIST_REQUEST"] = 110;
        values[valuesById[111] = "CLIENT_TRANSACTION_LIST_RESPONSE"] = 111;
        values[valuesById[112] = "CLIENT_TRANSACTION_GET_REQUEST"] = 112;
        values[valuesById[113] = "CLIENT_TRANSACTION_GET_RESPONSE"] = 113;
        values[valuesById[114] = "CLIENT_STATE_CURRENT_REQUEST"] = 114;
        values[valuesById[115] = "CLIENT_STATE_CURRENT_RESPONSE"] = 115;
        values[valuesById[116] = "CLIENT_STATE_LIST_REQUEST"] = 116;
        values[valuesById[117] = "CLIENT_STATE_LIST_RESPONSE"] = 117;
        values[valuesById[118] = "CLIENT_STATE_GET_REQUEST"] = 118;
        values[valuesById[119] = "CLIENT_STATE_GET_RESPONSE"] = 119;
        values[valuesById[120] = "CLIENT_BATCH_STATUS_REQUEST"] = 120;
        values[valuesById[121] = "CLIENT_BATCH_STATUS_RESPONSE"] = 121;
        values[valuesById[122] = "CLIENT_RECEIPT_GET_REQUEST"] = 122;
        values[valuesById[123] = "CLIENT_RECEIPT_GET_RESPONSE"] = 123;
        values[valuesById[124] = "CLIENT_BLOCK_GET_BY_NUM_REQUEST"] = 124;
        values[valuesById[125] = "CLIENT_PEERS_GET_REQUEST"] = 125;
        values[valuesById[126] = "CLIENT_PEERS_GET_RESPONSE"] = 126;
        values[valuesById[127] = "CLIENT_BLOCK_GET_BY_TRANSACTION_ID_REQUEST"] = 127;
        values[valuesById[128] = "CLIENT_BLOCK_GET_BY_BATCH_ID_REQUEST"] = 128;
        values[valuesById[129] = "CLIENT_STATUS_GET_REQUEST"] = 129;
        values[valuesById[130] = "CLIENT_STATUS_GET_RESPONSE"] = 130;
        values[valuesById[500] = "CLIENT_EVENTS_SUBSCRIBE_REQUEST"] = 500;
        values[valuesById[501] = "CLIENT_EVENTS_SUBSCRIBE_RESPONSE"] = 501;
        values[valuesById[502] = "CLIENT_EVENTS_UNSUBSCRIBE_REQUEST"] = 502;
        values[valuesById[503] = "CLIENT_EVENTS_UNSUBSCRIBE_RESPONSE"] = 503;
        values[valuesById[504] = "CLIENT_EVENTS"] = 504;
        values[valuesById[505] = "CLIENT_EVENTS_GET_REQUEST"] = 505;
        values[valuesById[506] = "CLIENT_EVENTS_GET_RESPONSE"] = 506;
        values[valuesById[200] = "GOSSIP_MESSAGE"] = 200;
        values[valuesById[201] = "GOSSIP_REGISTER"] = 201;
        values[valuesById[202] = "GOSSIP_UNREGISTER"] = 202;
        values[valuesById[205] = "GOSSIP_BLOCK_REQUEST"] = 205;
        values[valuesById[206] = "GOSSIP_BLOCK_RESPONSE"] = 206;
        values[valuesById[207] = "GOSSIP_BATCH_BY_BATCH_ID_REQUEST"] = 207;
        values[valuesById[208] = "GOSSIP_BATCH_BY_TRANSACTION_ID_REQUEST"] = 208;
        values[valuesById[209] = "GOSSIP_BATCH_RESPONSE"] = 209;
        values[valuesById[210] = "GOSSIP_GET_PEERS_REQUEST"] = 210;
        values[valuesById[211] = "GOSSIP_GET_PEERS_RESPONSE"] = 211;
        values[valuesById[212] = "GOSSIP_CONSENSUS_MESSAGE"] = 212;
        values[valuesById[300] = "NETWORK_ACK"] = 300;
        values[valuesById[301] = "NETWORK_CONNECT"] = 301;
        values[valuesById[302] = "NETWORK_DISCONNECT"] = 302;
        values[valuesById[600] = "AUTHORIZATION_CONNECTION_RESPONSE"] = 600;
        values[valuesById[601] = "AUTHORIZATION_VIOLATION"] = 601;
        values[valuesById[602] = "AUTHORIZATION_TRUST_REQUEST"] = 602;
        values[valuesById[603] = "AUTHORIZATION_TRUST_RESPONSE"] = 603;
        values[valuesById[604] = "AUTHORIZATION_CHALLENGE_REQUEST"] = 604;
        values[valuesById[605] = "AUTHORIZATION_CHALLENGE_RESPONSE"] = 605;
        values[valuesById[606] = "AUTHORIZATION_CHALLENGE_SUBMIT"] = 606;
        values[valuesById[607] = "AUTHORIZATION_CHALLENGE_RESULT"] = 607;
        values[valuesById[700] = "PING_REQUEST"] = 700;
        values[valuesById[701] = "PING_RESPONSE"] = 701;
        values[valuesById[800] = "CONSENSUS_REGISTER_REQUEST"] = 800;
        values[valuesById[801] = "CONSENSUS_REGISTER_RESPONSE"] = 801;
        values[valuesById[802] = "CONSENSUS_SEND_TO_REQUEST"] = 802;
        values[valuesById[803] = "CONSENSUS_SEND_TO_RESPONSE"] = 803;
        values[valuesById[804] = "CONSENSUS_BROADCAST_REQUEST"] = 804;
        values[valuesById[805] = "CONSENSUS_BROADCAST_RESPONSE"] = 805;
        values[valuesById[806] = "CONSENSUS_INITIALIZE_BLOCK_REQUEST"] = 806;
        values[valuesById[807] = "CONSENSUS_INITIALIZE_BLOCK_RESPONSE"] = 807;
        values[valuesById[808] = "CONSENSUS_FINALIZE_BLOCK_REQUEST"] = 808;
        values[valuesById[809] = "CONSENSUS_FINALIZE_BLOCK_RESPONSE"] = 809;
        values[valuesById[828] = "CONSENSUS_SUMMARIZE_BLOCK_REQUEST"] = 828;
        values[valuesById[829] = "CONSENSUS_SUMMARIZE_BLOCK_RESPONSE"] = 829;
        values[valuesById[810] = "CONSENSUS_CANCEL_BLOCK_REQUEST"] = 810;
        values[valuesById[811] = "CONSENSUS_CANCEL_BLOCK_RESPONSE"] = 811;
        values[valuesById[812] = "CONSENSUS_CHECK_BLOCKS_REQUEST"] = 812;
        values[valuesById[813] = "CONSENSUS_CHECK_BLOCKS_RESPONSE"] = 813;
        values[valuesById[814] = "CONSENSUS_COMMIT_BLOCK_REQUEST"] = 814;
        values[valuesById[815] = "CONSENSUS_COMMIT_BLOCK_RESPONSE"] = 815;
        values[valuesById[816] = "CONSENSUS_IGNORE_BLOCK_REQUEST"] = 816;
        values[valuesById[817] = "CONSENSUS_IGNORE_BLOCK_RESPONSE"] = 817;
        values[valuesById[818] = "CONSENSUS_FAIL_BLOCK_REQUEST"] = 818;
        values[valuesById[819] = "CONSENSUS_FAIL_BLOCK_RESPONSE"] = 819;
        values[valuesById[820] = "CONSENSUS_SETTINGS_GET_REQUEST"] = 820;
        values[valuesById[821] = "CONSENSUS_SETTINGS_GET_RESPONSE"] = 821;
        values[valuesById[822] = "CONSENSUS_STATE_GET_REQUEST"] = 822;
        values[valuesById[823] = "CONSENSUS_STATE_GET_RESPONSE"] = 823;
        values[valuesById[824] = "CONSENSUS_BLOCKS_GET_REQUEST"] = 824;
        values[valuesById[825] = "CONSENSUS_BLOCKS_GET_RESPONSE"] = 825;
        values[valuesById[826] = "CONSENSUS_CHAIN_HEAD_GET_REQUEST"] = 826;
        values[valuesById[827] = "CONSENSUS_CHAIN_HEAD_GET_RESPONSE"] = 827;
        values[valuesById[900] = "CONSENSUS_NOTIFY_PEER_CONNECTED"] = 900;
        values[valuesById[901] = "CONSENSUS_NOTIFY_PEER_DISCONNECTED"] = 901;
        values[valuesById[902] = "CONSENSUS_NOTIFY_PEER_MESSAGE"] = 902;
        values[valuesById[903] = "CONSENSUS_NOTIFY_BLOCK_NEW"] = 903;
        values[valuesById[904] = "CONSENSUS_NOTIFY_BLOCK_VALID"] = 904;
        values[valuesById[905] = "CONSENSUS_NOTIFY_BLOCK_INVALID"] = 905;
        values[valuesById[906] = "CONSENSUS_NOTIFY_BLOCK_COMMIT"] = 906;
        values[valuesById[999] = "CONSENSUS_NOTIFY_ACK"] = 999;
        return values;
    })();

    return Message;
})();

module.exports = $root;
