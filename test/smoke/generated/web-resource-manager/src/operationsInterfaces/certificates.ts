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
  Certificate,
  CertificatesGetResponse,
  CertificatesCreateOrUpdateResponse,
  CertificatePatchResource,
  CertificatesUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Certificates. */
export interface Certificates {
  /**
   * Description for Get all certificates for a subscription.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Certificate>;
  /**
   * Description for Get all certificates in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Certificate>;
  /**
   * Description for Get a certificate.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesGetResponse>;
  /**
   * Description for Create or update a certificate.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate.
   * @param certificateEnvelope Details of certificate, if it exists already.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    name: string,
    certificateEnvelope: Certificate,
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesCreateOrUpdateResponse>;
  /**
   * Description for Delete a certificate.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Description for Create or update a certificate.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate.
   * @param certificateEnvelope Details of certificate, if it exists already.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    name: string,
    certificateEnvelope: CertificatePatchResource,
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesUpdateResponse>;
}
