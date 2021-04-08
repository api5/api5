import { Api, Api5SpecsVersion } from "../api.ts";
import { createBook } from "./operation.test.ts";
import { assertEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";


const bookStoreApi = new Api("Book Store API", Api5SpecsVersion.ALPHA, [createBook])

Deno.test({
  name: "compile",
  fn(): void {
    assertEquals(1, 1)
  }
})
