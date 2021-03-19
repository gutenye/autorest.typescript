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
  GalleryImage,
  GalleryImagesCreateOrUpdateResponse,
  GalleryImageUpdate,
  GalleryImagesUpdateResponse,
  GalleryImagesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GalleryImages. */
export interface GalleryImages {
  /**
   * List gallery Image Definitions in a gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery from which Image Definitions are to be
   *                    listed.
   * @param options The options parameters.
   */
  listByGallery(
    resourceGroupName: string,
    galleryName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<GalleryImage>;
  /**
   * Create or update a gallery Image Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
   *                    created.
   * @param galleryImageName The name of the gallery Image Definition to be created or updated. The
   *                         allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle.
   *                         The maximum length is 80 characters.
   * @param galleryImage Parameters supplied to the create or update gallery image operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImage: GalleryImage,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<GalleryImagesCreateOrUpdateResponse>>;
  /**
   * Update a gallery Image Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
   *                    updated.
   * @param galleryImageName The name of the gallery Image Definition to be updated. The allowed
   *                         characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The
   *                         maximum length is 80 characters.
   * @param galleryImage Parameters supplied to the update gallery image operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImage: GalleryImageUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<GalleryImagesUpdateResponse>>;
  /**
   * Retrieves information about a gallery Image Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery from which the Image Definitions are to be
   *                    retrieved.
   * @param galleryImageName The name of the gallery Image Definition to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    options?: coreHttp.OperationOptions
  ): Promise<GalleryImagesGetResponse>;
  /**
   * Delete a gallery image.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
   *                    deleted.
   * @param galleryImageName The name of the gallery Image Definition to be deleted.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>>;
}
