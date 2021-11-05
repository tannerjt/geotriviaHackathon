import { R as RemoteServerError$1, M as buildUrl, G as parseDatasetId } from './index-b3f90185.js';
import { a as commonjsGlobal } from './_commonjsHelpers-93ec9c7a.js';

class RemoteServerError extends RemoteServerError$1 {
    constructor(message, url, status, error) {
        super(message, url, status);
        this.error = error;
    }
}
/**
 * returns Promise that resolves token to use in Discussions API requests
 *
 * @export
 * @param {IHubRequestOptions} options
 * @return {*}  {Promise<string>}
 */
function authenticateRequest(options) {
    const { token, authentication } = options;
    let tokenPromise = () => {
        return Promise.resolve(token);
    };
    if (authentication) {
        tokenPromise = authentication.getToken.bind(authentication, authentication.portal);
    }
    return tokenPromise();
}
/**
 * parses IHubRequestOptions and makes request against Discussions API
 *
 * @export
 * @template T
 * @param {string} route
 * @param {IHubRequestOptions} options
 * @param {string} [token]
 * @return {*}  {Promise<T>}
 */
function apiRequest(route, options, token) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (token) {
        headers.append("Authorization", `Bearer ${token}`);
    }
    const opts = {
        headers,
        method: options.httpMethod || "GET",
        mode: options.mode,
        cache: options.cache,
        credentials: options.credentials,
    };
    const apiBase = buildUrl({
        // TODO: we _want_ to use getHubApiUrl(),
        // but have to deal w/ the fact that this package overwrites IHubRequestOptions
        host: options.hubApiUrl || "https://hub.arcgis.com",
        path: "/api/discussions/v1",
    });
    if (options.params) {
        if (options.httpMethod === "GET") {
            const queryParams = new URLSearchParams(options.params).toString();
            route += `?${queryParams}`;
        }
        else {
            opts.body = JSON.stringify(options.params);
        }
    }
    const url = [apiBase.replace(/\/$/, ""), route.replace(/^\//, "")].join("/");
    return fetch(url, opts).then((res) => {
        if (res.ok) {
            return res.json();
        }
        else {
            const { statusText, status } = res;
            return res.json().then((err) => {
                throw new RemoteServerError(statusText, url, status, JSON.stringify(err.message));
            });
        }
    });
}

/**
 * method that authenticates and makes requests to Discussions API
 *
 * @export
 * @template T
 * @param {string} url
 * @param {IHubRequestOptions} options
 * @return {*}  {Promise<T>}
 */
// NOTE: feasibly this could be replaced with @esi/hub-common hubApiRequest,
// if that method didn't prepend `/api/v3` to the supplied path. Additionally,
// there is the difference that hubApiRequest sets Authorization header without `Bearer`
// https://github.com/Esri/hub.js/blob/f35b1a0a868916bd07e1dfd84cb084bc2c876267/packages/common/src/request.ts#L62
function request(url, options) {
    return authenticateRequest(options).then(token => {
        return apiRequest(url, options, token);
    });
}

/* tslint:disable unified-signatures */
/**
 * search posts
 *
 * @export
 * @param {ISearchPostsOptions} options
 * @return {*}  {Promise<IPagedResponse<IPost>>}
 */
function searchPosts(options) {
    const url = `/posts`;
    options.httpMethod = "GET";
    return request(url, options);
}
/**
 * create post
 *
 * @export
 * @param {ICreatePostOptions} options
 * @return {*}  {Promise<IPost>}
 */
function createPost(options) {
    const url = `/posts`;
    options.httpMethod = "POST";
    return request(url, options);
}
/**
 * create reply to post
 *
 * @export
 * @param {ICreateReplyOptions} options
 * @return {*}  {Promise<IPost>}
 */
function createReply(options) {
    const url = `/posts/${options.postId}/reply`;
    options.httpMethod = "POST";
    return request(url, options);
}
/**
 * fetch post
 *
 * @export
 * @param {IFetchPostOptions} options
 * @return {*}  {Promise<IPost>}
 */
function fetchPost(options) {
    const url = `/posts/${options.postId}`;
    options.httpMethod = "GET";
    return request(url, options);
}
/**
 * remove post
 *
 * @export
 * @param {IRemovePostOptions} options
 * @return {*}  {Promise<IRemovePostResponse>}
 */
function removePost(options) {
    const url = `/posts/${options.postId}`;
    options.httpMethod = "DELETE";
    return request(url, options);
}
/**
 * update post
 * NOTE: this method currently only update post.title and post.body
 *
 * @export
 * @param {IUpdatePostOptions} options
 * @return {*}  {Promise<IPost>}
 */
function updatePost(options) {
    const url = `/posts/${options.postId}`;
    options.httpMethod = "PATCH";
    return request(url, options);
}
/**
 * update post channel
 * NOTE: this method will change the channel a post belongs to
 *
 * @export
 * @param {IUpdatePostSharingOptions} options
 * @return {*}  {Promise<IPost>}
 */
function updatePostSharing(options) {
    const url = `/posts/${options.postId}/sharing`;
    options.httpMethod = "PATCH";
    return request(url, options);
}
/**
 * update post status
 * NOTE: this method will only update a post's status
 *
 * @export
 * @param {IUpdatePostStatusOptions} options
 * @return {*}  {Promise<IPost>}
 */
function updatePostStatus(options) {
    const url = `/posts/${options.postId}/status`;
    options.httpMethod = "PATCH";
    return request(url, options);
}

/**
 * search channels
 *
 * @export
 * @param {ISearchChannelsOptions} options
 * @return {*}  {Promise<IPagedResponse<IChannel>>}
 */
function searchChannels(options) {
    options.httpMethod = "GET";
    return request(`/channels`, options);
}
/**
 * create channel
 *
 * @export
 * @param {ICreateChannelOptions} options
 * @return {*}  {Promise<IChannel>}
 */
function createChannel(options) {
    options.httpMethod = "POST";
    return request(`/channels`, options);
}
/**
 * fetch channel
 *
 * @export
 * @param {IFetchChannelOptions} options
 * @return {*}  {Promise<IChannel>}
 */
function fetchChannel(options) {
    options.httpMethod = "GET";
    return request(`/channels/${options.channelId}`, options);
}
/**
 * update channel
 * NOTE: only updates channel settings properties (softDelete, allowedReactions, etc). A Channel's
 * access and groups cannot be updated.
 *
 * @export
 * @param {IUpdateChannelOptions} options
 * @return {*}  {Promise<IChannel>}
 */
function updateChannel(options) {
    options.httpMethod = "PATCH";
    return request(`/channels/${options.channelId}`, options);
}
/**
 * remove channel
 *
 * @export
 * @param {IRemoveChannelOptions} options
 * @return {*}
 */
function removeChannel(options) {
    options.httpMethod = "DELETE";
    return request(`/channels/${options.channelId}`, options);
}

/**
 * create reaction to post
 *
 * @export
 * @param {ICreateReactionOptions} options
 * @return {*}  {Promise<IReaction>}
 */
function createReaction(options) {
    options.httpMethod = "POST";
    return request(`/reactions`, options);
}
/**
 * remove reaction
 *
 * @export
 * @param {IRemoveReactionOptions} options
 * @return {*}  {Promise<IRemoveReactionResponse>}
 */
function removeReaction(options) {
    const { reactionId } = options;
    options.httpMethod = "DELETE";
    return request(`/reactions/${reactionId}`, options);
}

/**
 * sort orders
 *
 * @export
 * @enum {number}
 */
var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "ASC";
    SortOrder["DESC"] = "DESC";
})(SortOrder || (SortOrder = {}));
/**
 * reactions to posts
 *
 * @export
 * @enum {number}
 */
var PostReaction;
(function (PostReaction) {
    PostReaction["THUMBS_UP"] = "thumbs_up";
    PostReaction["THUMBS_DOWN"] = "thumbs_down";
    PostReaction["THINKING"] = "thinking";
    PostReaction["HEART"] = "heart";
    PostReaction["ONE_HUNDRED"] = "one_hundred";
    PostReaction["SAD"] = "sad";
    PostReaction["LAUGH"] = "laugh";
    PostReaction["SURPRISED"] = "surprised";
})(PostReaction || (PostReaction = {}));
/**
 * platform sharing access values
 *
 * @export
 * @enum {number}
 */
var SharingAccess;
(function (SharingAccess) {
    SharingAccess["PUBLIC"] = "public";
    SharingAccess["ORG"] = "org";
    SharingAccess["PRIVATE"] = "private";
})(SharingAccess || (SharingAccess = {}));
/**
 * possible statuses of a post
 *
 * @export
 * @enum {number}
 */
var PostStatus;
(function (PostStatus) {
    PostStatus["PENDING"] = "pending";
    PostStatus["APPROVED"] = "approved";
    PostStatus["REJECTED"] = "rejected";
    PostStatus["DELETED"] = "deleted";
    PostStatus["HIDDEN"] = "hidden";
})(PostStatus || (PostStatus = {}));
/**
 * possible discussionn content types, i.e. a post can be about an item, dataset, or group
 *
 * @export
 * @enum {number}
 */
var DiscussionType;
(function (DiscussionType) {
    DiscussionType["DATASET"] = "dataset";
    DiscussionType["ITEM"] = "item";
    DiscussionType["GROUP"] = "group";
})(DiscussionType || (DiscussionType = {}));
/**
 * source of a post, i.e. app context
 *
 * @export
 * @enum {number}
 */
var DiscussionSource;
(function (DiscussionSource) {
    DiscussionSource["HUB"] = "hub";
    DiscussionSource["AGO"] = "ago";
    DiscussionSource["URBAN"] = "urban";
})(DiscussionSource || (DiscussionSource = {}));
/**
 * relations of post entity
 *
 * @export
 * @enum {number}
 */
var PostRelation;
(function (PostRelation) {
    PostRelation["REPLIES"] = "replies";
    PostRelation["REACTIONS"] = "reactions";
    PostRelation["PARENT"] = "parent";
    PostRelation["CHANNEL"] = "channel";
})(PostRelation || (PostRelation = {}));
/**
 * relations of channel entity
 *
 * @export
 * @enum {number}
 */
var ChannelRelation;
(function (ChannelRelation) {
    ChannelRelation["SETTINGS"] = "settings";
})(ChannelRelation || (ChannelRelation = {}));
/**
 * relations of reaction entity
 *
 * @export
 * @enum {number}
 */
var ReactionRelation;
(function (ReactionRelation) {
    ReactionRelation["POST"] = "post";
})(ReactionRelation || (ReactionRelation = {}));

'use strict';

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
var requiresPort = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};

'use strict';

var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
var stringify = querystringify;
var parse = querystring;

var querystringify_1 = {
	stringify: stringify,
	parse: parse
};

'use strict';

var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i
  , windowsDriveLetter = /^[a-zA-Z]:/
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address, url) {     // Sanitize what is left of the address
    return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof commonjsGlobal !== 'undefined') globalVar = commonjsGlobal;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * Check whether a protocol scheme is special.
 *
 * @param {String} The protocol scheme of the URL
 * @return {Boolean} `true` if the protocol scheme is special, else `false`
 * @private
 */
function isSpecial(scheme) {
  return (
    scheme === 'file:' ||
    scheme === 'ftp:' ||
    scheme === 'http:' ||
    scheme === 'https:' ||
    scheme === 'ws:' ||
    scheme === 'wss:'
  );
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @param {Object} location
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address, location) {
  address = trimLeft(address);
  location = location || {};

  var match = protocolre.exec(address);
  var protocol = match[1] ? match[1].toLowerCase() : '';
  var forwardSlashes = !!match[2];
  var otherSlashes = !!match[3];
  var slashesCount = 0;
  var rest;

  if (forwardSlashes) {
    if (otherSlashes) {
      rest = match[2] + match[3] + match[4];
      slashesCount = match[2].length + match[3].length;
    } else {
      rest = match[2] + match[4];
      slashesCount = match[2].length;
    }
  } else {
    if (otherSlashes) {
      rest = match[3] + match[4];
      slashesCount = match[3].length;
    } else {
      rest = match[4];
    }
  }

  if (protocol === 'file:') {
    if (slashesCount >= 2) {
      rest = rest.slice(2);
    }
  } else if (isSpecial(protocol)) {
    rest = match[4];
  } else if (protocol) {
    if (forwardSlashes) {
      rest = rest.slice(2);
    }
  } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
    rest = match[4];
  }

  return {
    protocol: protocol,
    slashes: forwardSlashes || isSpecial(protocol),
    slashesCount: slashesCount,
    rest: rest
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = querystringify_1.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '', location);
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (
    extracted.protocol === 'file:' && (
      extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) ||
    (!extracted.slashes &&
      (extracted.protocol ||
        extracted.slashesCount < 2 ||
        !isSpecial(url.protocol)))
  ) {
    instructions[3] = [/(.*)/, 'pathname'];
  }

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address, url);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // Default to a / for pathname if none exists. This normalizes the URL
  // to always have a /
  //
  if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) {
    url.pathname = '/' + url.pathname;
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!requiresPort(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || querystringify_1.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!requiresPort(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = querystringify_1.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes || isSpecial(url.protocol) ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = querystringify_1;

var urlParse = Url;

const UrlParse = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), urlParse, {
    'default': urlParse
}));

/**
 * Utility that parses a discussion URI string into its component parts
 *
 * @export
 * @param {string} discussion
 * @return {*}  {IDiscussionParams}
 */
function parseDiscussionURI(discussion) {
    // pass it through browser/node URL to invalidate plain strings
    const uri = new URL(discussion) && new UrlParse(discussion);
    const source = uri.protocol.slice(0, -1); // removes ":"
    const type = uri.hostname;
    const [, identifier] = uri.pathname.split("/");
    let id, layer;
    if (identifier) {
        const { itemId, layerId } = parseDatasetId(identifier);
        [id, layer] = [itemId, layerId];
    }
    const searchParams = new URLSearchParams(uri.query);
    const features = (searchParams.has("id") && searchParams.get("id").split(",")) || null;
    const attribute = (searchParams.has("attribute") && searchParams.get("attribute")) || null;
    return {
        source,
        type,
        id: id || null,
        layer: layer || null,
        features,
        attribute
    };
}
/**
 * NOT IMPLEMENTED: this will inspect a group's properties to determine if it is "discussable"
 *
 * @export
 * @param {IGroup} group
 * @return {*}  {boolean}
 */
function isGroupDiscussable(group) {
    return true;
}
/**
 * NOT IMPLEMENTED: this will inspect an item's properties to determine if it is "discussable"
 *
 * @export
 * @param {IItem} item
 * @return {*}  {boolean}
 */
function isItemDiscussable(item) {
    return true;
}

/**
 * Utility that returns reducer function that filters a user's groups
 * by membership type and produces an array of group id's
 *
 *
 * @export
 * @param {GroupMembership[]} membershipTypes
 * @return {*}  {((memo: string[], group: IGroup) => string[])}
 */
function reduceByGroupMembership(membershipTypes) {
    return function (memo, group) {
        if (membershipTypes.indexOf(group.userMembership.memberType) > -1) {
            memo.push(group.id);
        }
        return memo;
    };
}
/**
 * Utility that checks if a user is a portal org admin (default role)
 *
 * @export
 * @param {IUser} user
 * @return {*}  {boolean}
 */
// NOTE: this is not the same as @esri/arcgis-rest-portal isOrgAdmin,
// which first resolves `user` from `IUserRequestOptions` to make this determination
// https://github.com/Esri/arcgis-rest-js/blob/7ab072184f89dcb35367518101ee4abeb5a9d112/packages/arcgis-rest-portal/src/sharing/helpers.ts#L45
function isOrgAdmin(user) {
    return user.role === "org_admin" && !user.roleId;
}

function intersectGroups(membershipTypes, strict) {
    return (user, channel) => {
        const { groups: sharedGroups } = channel;
        const { groups: userGroups } = user;
        const eligibleUserGroups = userGroups.reduce(reduceByGroupMembership(membershipTypes), []);
        const method = strict ? "every" : "some";
        return sharedGroups[method](group => eligibleUserGroups.indexOf(group) > -1);
    };
}
function isChannelOrgMember(channel, user) {
    // orgs.length = 1 until collaboration/discussion between many orgs is ideated
    return channel.orgs.length === 1 && channel.orgs.indexOf(user.orgId) > -1;
}
function isChannelOrgAdmin(channel, user) {
    return isOrgAdmin(user) && channel.orgs.indexOf(user.orgId) > -1;
}
/**
 * Utility to determine whether User can view posts belonging to Channel
 *
 * @export
 * @param {IChannel} channel
 * @param {IUser} user
 * @return {*}  {boolean}
 */
function canReadFromChannel(channel, user) {
    if (channel.access === "private") {
        // ensure user is member of at least one group
        return intersectGroups(["member", "owner", "admin"])(user, channel);
    }
    else if (channel.access === "org") {
        return isChannelOrgMember(channel, user);
    }
    return true;
}
/**
 * Utility to determine whether User can modify channel settings and posts belonging to Channel
 *
 * @export
 * @param {IChannel} channel
 * @param {IUser} user
 * @return {*}  {boolean}
 */
function canModifyChannel(channel, user) {
    if (channel.access === "private") {
        // ensure user is owner/admin of at least one group
        return intersectGroups(["owner", "admin"])(user, channel);
    }
    // if org or public channel, must be org admin
    return isChannelOrgAdmin(channel, user);
}
/**
 * Utility to determine whether User can create Channel of provided IChannel properties
 *
 * @export
 * @param {IChannel} channel
 * @param {IUser} user
 * @return {*}  {boolean}
 */
function canCreateChannel(channel, user) {
    if (channel.access === "private") {
        // ensure user is member of all groups included
        return intersectGroups(["owner", "admin", "member"], true)(user, channel);
    }
    // if org or public channel, must be org admin
    return isChannelOrgAdmin(channel, user);
}
/**
 * Utility to determine whether User can create posts to Channel
 *
 * @export
 * @param {IChannel} channel
 * @param {IUser} user
 * @return {*}  {boolean}
 */
function canPostToChannel(channel, user) {
    if (channel.access === "private") {
        // ensure user is member of at least one
        return intersectGroups(["owner", "admin", "member"])(user, channel);
    }
    else if (channel.access === "org") {
        return isChannelOrgMember(channel, user);
    }
    else if (user.username === "anonymous") {
        return channel.allowAnonymous;
    }
    return true;
}
/**
 * Utility to determine whether a Channel definition (inner) is encapsulated by another Channel's definition (outer)
 *
 * @export
 * @param {IChannel} outer -- access and groups that should contain inner access and groups
 * @param {(IChannel | IPlatformSharing)} inner -- access and groups that should be contained by outer access and groups
 * @return {*}  {boolean}
 */
function isChannelInclusive(outer, inner) {
    let valid;
    let err;
    if (outer.access === "private" && outer.groups.length === 1) {
        valid = inner.access === "private" && inner.groups[0] === outer.groups[0];
        if (!valid) {
            err = "replies to private post must be shared to same team";
        }
    }
    else if (outer.access === "private") {
        valid =
            inner.access === "private" &&
                inner.groups.every((group) => outer.groups.indexOf(group) > -1);
        if (!valid) {
            err = "replies to shared post must be shared to subset of same teams";
        }
    }
    else if (outer.access === "org" && inner.access === "org") {
        valid = inner.orgs.every((org) => outer.orgs.indexOf(org) > -1);
        if (!valid) {
            err = "replies to org post must be shared to subset of same orgs";
        }
    }
    else if (outer.access === "org") {
        valid = inner.access !== "public";
        if (!valid) {
            err = "replies to org post cannot be shared to public";
        }
    }
    if (err) {
        throw new Error(err);
    }
    return valid;
}

/**
 * Utility that determines whether a Channel allows a given PostReaction
 *
 * @export
 * @param {IChannel} channel
 * @param {PostReaction} value
 * @return {*}  {boolean}
 */
function canCreateReaction(channel, value) {
    const { allowReaction, allowedReactions } = channel;
    if (allowReaction) {
        if (allowedReactions) {
            return allowedReactions.indexOf(value) > -1;
        }
        return true;
    }
    return false;
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

export { DiscussionType as D, SortOrder as S, fetchChannel as a, isItemDiscussable as b, createReply as c, updatePost as d, createPost as e, fetchPost as f, SharingAccess as g, isGroupDiscussable as i, removePost as r, searchPosts as s, urlParse as u };
