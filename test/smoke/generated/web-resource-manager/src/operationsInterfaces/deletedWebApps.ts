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
import {
  DeletedSite,
  DeletedWebAppsGetDeletedWebAppByLocationResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DeletedWebApps. */
export interface DeletedWebApps {
  /**
   * Description for Get all deleted apps for a subscription.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DeletedSite>;
  /**
   * Description for Get all deleted apps for a subscription at location
   * @param location
   * @param options The options parameters.
   */
  listByLocation(
    location: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DeletedSite>;
  /**
   * Description for Get deleted app for a subscription at location.
   * @param location
   * @param deletedSiteId The numeric ID of the deleted app, e.g. 12345
   * @param options The options parameters.
   */
  getDeletedWebAppByLocation(
    location: string,
    deletedSiteId: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeletedWebAppsGetDeletedWebAppByLocationResponse>;
}
