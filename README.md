# api5
Define your API by Typescript

Api5 generates REST server and client implementations from API specs. You write the specs using Typescript.

## Installation
TODO

## Guide
Let's say you have a Book Store API where clients can create, update, delete, and list books.
You can see source code of this guide in [examples/bookstore](./examples/bookstore)

### Define API specs

``` typescript
import { Api, Path, Parameter } from "api5";

const id = new Parameter("id", {
    in: Parameter.In.PATH,
    description: "numeric id",
    type: int
})

const path = new Path("getBookById", {
    
})

const bookStoreApi = new Api("book store api", "0.1", {
    paths
})
class BookApi extends Api {
    constructor() {
        this.api5Version = "1.0.0"  // api5 specs version
        this.version = "2.1"  // this Book API version
        this.description = "My book Api"
    }
}
```

## Relationship with OpenAPI
api5 is heavily inspired by OpenAPI. But instead of using YAML for defining API specs, api5 uses Typescript.
