/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { Operation } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Operations. */
export interface Operations {
  /**
   * Lists all of the available Storage Rest API operations.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Operation>;
}
