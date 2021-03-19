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
  Metric,
  Usage,
  CollectionListUsagesOptionalParams,
  MetricDefinition
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Collection. */
export interface Collection {
  /**
   * Retrieves the metrics determined by the given filter for the given database account and collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  listMetrics(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Metric>;
  /**
   * Retrieves the usages (most recent storage data) for the given collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param options The options parameters.
   */
  listUsages(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionListUsagesOptionalParams
  ): PagedAsyncIterableIterator<Usage>;
  /**
   * Retrieves metric definitions for the given collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param options The options parameters.
   */
  listMetricDefinitions(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<MetricDefinition>;
}
