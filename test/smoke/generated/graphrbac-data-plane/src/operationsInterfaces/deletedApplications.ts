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
  Application,
  DeletedApplicationsListOptionalParams,
  DeletedApplicationsRestoreResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DeletedApplications. */
export interface DeletedApplications {
  /**
   * Gets a list of deleted applications in the directory.
   * @param options The options parameters.
   */
  list(
    options?: DeletedApplicationsListOptionalParams
  ): PagedAsyncIterableIterator<Application>;
  /**
   * Gets a list of deleted applications in the directory.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Application>;
  /**
   * Restores the deleted application in the directory.
   * @param objectId Application object ID.
   * @param options The options parameters.
   */
  restore(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeletedApplicationsRestoreResponse>;
  /**
   * Hard-delete an application.
   * @param applicationObjectId Application object ID.
   * @param options The options parameters.
   */
  hardDelete(
    applicationObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
}
