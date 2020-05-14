/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as operations from "./operations";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { BodyTimeClientContext } from "./bodyTimeClientContext";
import { BodyTimeClientOptionalParams } from "./models";

class BodyTimeClient extends BodyTimeClientContext {
  /**
   * Initializes a new instance of the BodyTimeClient class.
   * @param options The parameter options
   */
  constructor(options?: BodyTimeClientOptionalParams) {
    super(options);
    this.time = new operations.Time(this);
  }

  time: operations.Time;
}

// Operation Specifications

export {
  BodyTimeClient,
  BodyTimeClientContext,
  Models as BodyTimeModels,
  Mappers as BodyTimeMappers
};
export * from "./operations";
