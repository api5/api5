import { Api, Api5SpecsVersion } from "../api";
import { createBook } from "./testOperation";


const bookStoreApi = new Api("Book Store API", Api5SpecsVersion.ALPHA, [createBook])

test('compile', () => {
  expect(1).toBe(1)
})
