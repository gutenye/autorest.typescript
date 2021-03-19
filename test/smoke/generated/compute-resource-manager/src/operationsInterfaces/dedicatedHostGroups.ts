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
  DedicatedHostGroup,
  DedicatedHostGroupsCreateOrUpdateResponse,
  DedicatedHostGroupUpdate,
  DedicatedHostGroupsUpdateResponse,
  DedicatedHostGroupsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DedicatedHostGroups. */
export interface DedicatedHostGroups {
  /**
   * Lists all of the dedicated host groups in the specified resource group. Use the nextLink property in
   * the response to get the next page of dedicated host groups.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DedicatedHostGroup>;
  /**
   * Lists all of the dedicated host groups in the subscription. Use the nextLink property in the
   * response to get the next page of dedicated host groups.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DedicatedHostGroup>;
  /**
   * Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups
   * please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596)
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param parameters Parameters supplied to the Create Dedicated Host Group.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    hostGroupName: string,
    parameters: DedicatedHostGroup,
    options?: coreHttp.OperationOptions
  ): Promise<DedicatedHostGroupsCreateOrUpdateResponse>;
  /**
   * Update an dedicated host group.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param parameters Parameters supplied to the Update Dedicated Host Group operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    hostGroupName: string,
    parameters: DedicatedHostGroupUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<DedicatedHostGroupsUpdateResponse>;
  /**
   * Delete a dedicated host group.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    hostGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Retrieves information about a dedicated host group.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DedicatedHostGroupsGetResponse>;
}
