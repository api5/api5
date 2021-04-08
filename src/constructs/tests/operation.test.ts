import { Operation, HttpMethod, HttpStatusCode, ObjectSchema, Request, Response, ValueType } from "../operation.ts";
import { assertEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";

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

Deno.test({
  name: "compile",
  fn(): void {
    assertEquals(1, 1)
  }
})
