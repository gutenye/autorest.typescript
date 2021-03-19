/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { DateOperationsImpl } from "./operations";
import { DateOperations } from "./operationsInterfaces";
import { BodyDateClientContext } from "./bodyDateClientContext";
import { BodyDateClientOptionalParams } from "./models";

export class BodyDateClient extends BodyDateClientContext {
  /**
   * Initializes a new instance of the BodyDateClient class.
   * @param options The parameter options
   */
  constructor(options?: BodyDateClientOptionalParams) {
    super(options);
    this.date = new DateOperationsImpl(this);
  }

  date: DateOperations;
}
