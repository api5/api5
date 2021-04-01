import { Operation, HttpMethod, HttpStatusCode, ObjectSchema, Request, Response, ValueType } from "../operation";

const bookSchema: ObjectSchema = {
  name: ValueType.STRING,
  author: ValueType.STRING
};

const reqType: Request = {
  path: "/books",
  httpMethod: HttpMethod.POST,
  bodySchema: bookSchema
};

const resType: Response = {
  httpStatusCode: HttpStatusCode._201_CREATED,
}

export const createBook = new Operation(reqType, resType)


test('compile', () => {
  expect(1).toBe(1)
})
