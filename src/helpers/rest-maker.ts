import {BizLogic} from './biz-logics';
import {Response} from 'express';

export interface RestProtocol {
    httpCode: number,
    httpMessage?: string,
    httpDescription: string,
    bizLogicCode?: string,
    bizLogicMessage?: string,
    errorCode?: string,
    errorMessage?: string,
    errorStack?: string
}


export const continueProcessing = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 100,
    httpMessage: 'Continue',
    httpDescription: 'indicates that the initial part of a request has been received and has not yet been rejected by the server.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.en
});
export const switchingProtocols = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 101,
    httpMessage: 'Switching Protocols',
    httpDescription: 'indicates that the server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const processing = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 102,
    httpMessage: 'Processing',
    httpDescription: 'is an interim response used to inform the client that the server has accepted the complete request, but has not yet completed it.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const ok = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 200,
    httpMessage: 'OK',
    httpDescription: 'indicates that the request has succeeded.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const created = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 201,
    httpMessage: 'Created',
    httpDescription: 'indicates that the request has been fulfilled and has resulted in one or more new resources being created.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const accepted = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 202,
    httpMessage: 'Accepted',
    httpDescription: 'indicates that the request has been accepted for processing, but the processing has not been completed.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const nonAuthoritativeInformation = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 203,
    httpMessage: 'Non-Authoritative Information',
    httpDescription: 'indicates that the request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const noContent = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 204,
    httpMessage: 'No Content',
    httpDescription: 'indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const resetContent = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 205,
    httpMessage: 'Reset Content',
    httpDescription: 'indicates that the server has fulfilled the request and desires that the user agent reset the document view, which caused the request to be sent, to its original state as received from the origin server.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const partialContent = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 206,
    httpMessage: 'Partial Content',
    httpDescription: 'indicates that the server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const multiStatus = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 207,
    httpMessage: 'Multi-Status',
    httpDescription: 'provides status for multiple independent operations.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const imUsed = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 226,
    httpMessage: 'IM Used',
    httpDescription: 'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const multipleChoices = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 300,
    httpMessage: 'Multiple Choices',
    httpDescription: 'indicates that the target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const movedPermanently = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 301,
    httpMessage: 'Moved Permanently',
    httpDescription: 'indicates that the target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const found = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 302,
    httpMessage: 'Found',
    httpDescription: 'indicates that the target resource resides temporarily under a different URI.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const seeOther = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 303,
    httpMessage: 'See Other',
    httpDescription: 'indicates that the server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const notModified = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 304,
    httpMessage: 'Not Modified',
    httpDescription: 'indicates that a conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const useProxy = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 305,
    httpMessage: 'Use Proxy',
    httpDescription: '*deprecated*',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const temporaryRedirect = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 307,
    httpMessage: 'Temporary Redirect',
    httpDescription: 'indicates that the target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const permanentRedirect = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 308,
    httpMessage: 'Permanent Redirect',
    httpDescription: 'The target resource has been assigned a new permanent URI and any future references to this resource outght to use one of the enclosed URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const badRequest = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 400,
    httpMessage: 'Bad Request',
    httpDescription: 'indicates that the server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const unauthorized = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 401,
    httpMessage: 'Unauthorized',
    httpDescription: 'indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const paymentRequired = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 402,
    httpMessage: 'Payment Required',
    httpDescription: '*reserved*',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const forbidden = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 403,
    httpMessage: 'Forbidden',
    httpDescription: 'indicates that the server understood the request but refuses to authorize it.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const notFound = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 404,
    httpMessage: 'Not Found',
    httpDescription: 'indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const methodNotAllowed = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 405,
    httpMessage: 'Method Not Allowed',
    httpDescription: 'indicates that the method specified in the request-line is known by the origin server but not supported by the target resource.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const notAcceptable = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 406,
    httpMessage: 'Not Acceptable',
    httpDescription: 'indicates that the target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const proxyAuthenticationRequired = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 407,
    httpMessage: 'Proxy Authentication Required',
    httpDescription: 'is similar to 401 (Unauthorized), but indicates that the client needs to authenticate itself in order to use a proxy.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const requestTimeout = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 408,
    httpMessage: 'Request Timeout',
    httpDescription: 'indicates that the server did not receive a complete request message within the time that it was prepared to wait.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const conflict = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 409,
    httpMessage: 'Conflict',
    httpDescription: 'indicates that the request could not be completed due to a conflict with the current state of the resource.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const gone = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 410,
    httpMessage: 'Gone',
    httpDescription: 'indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const lengthRequired = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 411,
    httpMessage: 'Length Required',
    httpDescription: 'indicates that the server refuses to accept the request without a defined Content-Length.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const preconditionFailed = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 412,
    httpMessage: 'Precondition Failed',
    httpDescription: 'indicates that one or more preconditions given in the request header fields evaluated to false when tested on the server.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const payloadTooLarge = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 413,
    httpMessage: 'Payload Too Large',
    httpDescription: 'indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const uriTooLong = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 414,
    httpMessage: 'URI Too Long',
    httpDescription: 'indicates that the server is refusing to service the request because the request-target is longer than the server is willing to interpret.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const unsupportedMediaType = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 415,
    httpMessage: 'Unsupported Media Type',
    httpDescription: 'indicates that the origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const rangeNotSatisfiable = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 416,
    httpMessage: 'Range Not Satisfiable',
    httpDescription: 'indicates that none of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const expectationFailed = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 417,
    httpMessage: 'Expectation Failed',
    httpDescription: 'indicates that the expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const imATeapot = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 418,
    httpMessage: 'I\'m a teapot',
    httpDescription: 'Any attempt to brew coffee with a teapot should result in the error code 418 I\'m a teapot.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const unprocessableEntity = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 422,
    httpMessage: 'Unprocessable Entity',
    httpDescription: 'means the server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const locked = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 423,
    httpMessage: 'Locked',
    httpDescription: 'means the source or destination resource of a method is locked.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const failedDependency = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 424,
    httpMessage: 'Failed Dependency',
    httpDescription: 'means that the method could not be performed on the resource because the requested action depended on another action and that action failed.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const upgradeRequired = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 426,
    httpMessage: 'Upgrade Required',
    httpDescription: 'indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const preconditionRequired = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 428,
    httpMessage: 'Precondition Required',
    httpDescription: 'indicates that the origin server requires the request to be conditional.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const tooManyRequests = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 429,
    httpMessage: 'Too Many Requests',
    httpDescription: 'indicates that the user has sent too many requests in a given amount of time (rate limiting).',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const requestHeaderFieldsTooLarge = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 431,
    httpMessage: 'Request Header Fields Too Large',
    httpDescription: 'indicates that the server is unwilling to process the request because its header fields are too large.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const unavailableForLegalReasons = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 451,
    httpMessage: 'Unavailable For Legal Reasons',
    httpDescription: 'This status code indicates that the server is denying access to the resource in response to a legal demand.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const internalServerError = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 500,
    httpMessage: 'Internal Server Error',
    httpDescription: 'indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const notImplemented = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 501,
    httpMessage: 'Not Implemented',
    httpDescription: 'indicates that the server does not support the functionality required to fulfill the request.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const badGateway = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 502,
    httpMessage: 'Bad Gateway',
    httpDescription: 'indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const serviceUnavailable = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 503,
    httpMessage: 'Service Unavailable',
    httpDescription: 'indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const gatewayTimeOut = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 504,
    httpMessage: 'Gateway Time-out',
    httpDescription: 'indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const httpVersionNotSupported = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 505,
    httpMessage: 'HTTP Version Not Supported',
    httpDescription: 'indicates that the server does not support, or refuses to support, the protocol version that was used in the request message.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const variantAlsoNegotiates = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 506,
    httpMessage: 'Variant Also Negotiates',
    httpDescription: 'indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const insufficientStorage = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 507,
    httpMessage: 'Insufficient Storage',
    httpDescription: 'means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
export const networkAuthenticationRequired = (res: Response, params?: BizLogic): RestProtocol => ({
    httpCode: 511,
    httpMessage: 'Network Authentication Required',
    httpDescription: 'indicates that the client needs to authenticate to gain network access.',
    bizLogicCode: params?.code,
    bizLogicMessage: params?.key ? res.__(params.key) : '',
});
const RESTFul = {
    continueProcessing,
    switchingProtocols,
    processing,
    ok,
    created,
    accepted,
    nonAuthoritativeInformation,
    noContent,
    resetContent,
    partialContent,
    multiStatus,
    imUsed,
    multipleChoices,
    movedPermanently,
    found,
    seeOther,
    notModified,
    useProxy,
    temporaryRedirect,
    permanentRedirect,
    badRequest,
    unauthorized,
    paymentRequired,
    forbidden,
    notFound,
    methodNotAllowed,
    notAcceptable,
    proxyAuthenticationRequired,
    requestTimeout,
    conflict,
    gone,
    lengthRequired,
    preconditionFailed,
    payloadTooLarge,
    uriTooLong,
    unsupportedMediaType,
    rangeNotSatisfiable,
    expectationFailed,
    imATeapot,
    unprocessableEntity,
    locked,
    failedDependency,
    upgradeRequired,
    preconditionRequired,
    tooManyRequests,
    requestHeaderFieldsTooLarge,
    unavailableForLegalReasons,
    internalServerError,
    notImplemented,
    badGateway,
    serviceUnavailable,
    gatewayTimeOut,
    httpVersionNotSupported,
    variantAlsoNegotiates,
    insufficientStorage,
    networkAuthenticationRequired,
};
export default RESTFul;


