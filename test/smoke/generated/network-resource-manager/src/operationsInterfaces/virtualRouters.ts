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
import { LROPoller } from "../lro";
import {
  VirtualRouter,
  VirtualRoutersGetOptionalParams,
  VirtualRoutersGetResponse,
  VirtualRoutersCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualRouters. */
export interface VirtualRouters {
  /**
   * Lists all Virtual Routers in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VirtualRouter>;
  /**
   * Gets all the Virtual Routers in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VirtualRouter>;
  /**
   * Deletes the specified Virtual Router.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    virtualRouterName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>>;
  /**
   * Gets the specified Virtual Router.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualRouterName: string,
    options?: VirtualRoutersGetOptionalParams
  ): Promise<VirtualRoutersGetResponse>;
  /**
   * Creates or updates the specified Virtual Router.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param parameters Parameters supplied to the create or update Virtual Router.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    virtualRouterName: string,
    parameters: VirtualRouter,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<VirtualRoutersCreateOrUpdateResponse>>;
}
