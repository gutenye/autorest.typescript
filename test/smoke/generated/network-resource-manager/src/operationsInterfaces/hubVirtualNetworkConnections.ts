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
  HubVirtualNetworkConnection,
  HubVirtualNetworkConnectionsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a HubVirtualNetworkConnections. */
export interface HubVirtualNetworkConnections {
  /**
   * Retrieves the details of all HubVirtualNetworkConnections.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    virtualHubName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<HubVirtualNetworkConnection>;
  /**
   * Retrieves the details of a HubVirtualNetworkConnection.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the vpn connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualHubName: string,
    connectionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<HubVirtualNetworkConnectionsGetResponse>;
}
