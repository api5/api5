/**
 * HTTP methods
 */
export enum HttpMethod {
  POST,
  GET,
  PUT,
  DELETE,
  PATCH,
  HEAD,
  OPTIONS
}


/**
 * HTTP status codes
 */
export enum HttpStatusCode {
  _200_OK = 200,
  _201_CREATED = 201
}


/**
 * object property value types
 */
export enum ValueType {
  STRING,
  NUMBER,
  EMAIL,
  PASSWORD
}


/**
 * Schema for a request or response body object
 */
export interface ObjectSchema {
  [propName: string]: string | number | ObjectSchema | ObjectSchema[]
}

/**
 * A Request object represents an HTTP request
 * :path: The request's path
 * :httpMethod: The request's http method
 * Optional :bodySchema: The request object schema
 */
export interface Request {
  path: string,
  httpMethod: HttpMethod,
  bodySchema?: ObjectSchema
}


/**
 * A Response object represents an HTTP response
 * :httpStatusCode: The response's http status when succeed
 * Optional :bodySchema: The response object schema
 */
export interface Response {
  httpStatusCode: HttpStatusCode,
  bodySchema?: ObjectSchema
}


/**
 * An Operation object represents an HTTP operation, such as POST, GET, PUT, DELETE, and PATCH
 *
 * ### Example
 * ```typescript
 * import { Operation, HttpMethod, HttpStatusCode, ObjectSchema, Request, Response, ValueType } from "../operation";
 *
 * const bookSchema: ObjectSchema = {
 *   name: ValueType.STRING,
 *   author: ValueType.STRING
 * };
 *
 * const reqType: Request = {
 *   path: "/books",
 *   httpMethod: HttpMethod.POST,
 *   bodySchema: bookSchema
 * };
 *
 * const resType: Response = {
 *   httpStatusCode: HttpStatusCode._201_CREATED,
 * }
 *
 * const createBook = new Operation(reqType, resType)
 * ```
 */
export class Operation {
  private readonly request: Request;
  private readonly response: Response;

  /**
   * :request: Operation's request
   * :response: Operation's response
   */
  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }
}
