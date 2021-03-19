/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { IntImpl } from "./operations";
import { Int } from "./operationsInterfaces";
import { BodyIntegerClientContext } from "./bodyIntegerClientContext";
import { BodyIntegerClientOptionalParams } from "./models";

export class BodyIntegerClient extends BodyIntegerClientContext {
  /**
   * Initializes a new instance of the BodyIntegerClient class.
   * @param options The parameter options
   */
  constructor(options?: BodyIntegerClientOptionalParams) {
    super(options);
    this.int = new IntImpl(this);
  }

  int: Int;
}
