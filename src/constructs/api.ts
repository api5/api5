import { Operation } from "./operation.ts";


export enum Api5SpecsVersion {
  ALPHA = "ALPHA"
}


/**
 * An Api object represents a RESTful api
 */
export class Api {
  private readonly name: string;
  private readonly api5SpecsVersion: Api5SpecsVersion;
  private readonly operations: Operation[];

  /**
   * :name: name of this api
   * :api5SpecsVersion: version of Api5 specs. NOT this api version number
   * :operations: list of operations of this api*/
  constructor(name: string, api5SpecsVersion: Api5SpecsVersion, operations: Operation[]) {
    this.name = name;
    this.api5SpecsVersion = api5SpecsVersion;
    this.operations = operations
  }
}
