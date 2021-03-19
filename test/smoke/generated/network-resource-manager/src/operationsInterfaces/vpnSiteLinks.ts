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
import { VpnSiteLink, VpnSiteLinksGetResponse } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VpnSiteLinks. */
export interface VpnSiteLinks {
  /**
   * Lists all the vpnSiteLinks in a resource group for a vpn site.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite.
   * @param options The options parameters.
   */
  listByVpnSite(
    resourceGroupName: string,
    vpnSiteName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VpnSiteLink>;
  /**
   * Retrieves the details of a VPN site link.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite.
   * @param vpnSiteLinkName The name of the VpnSiteLink being retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vpnSiteName: string,
    vpnSiteLinkName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnSiteLinksGetResponse>;
}
