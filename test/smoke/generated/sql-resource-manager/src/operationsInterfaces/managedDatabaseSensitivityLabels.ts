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
  SensitivityLabel,
  ManagedDatabaseSensitivityLabelsListCurrentByDatabaseNextOptionalParams,
  ManagedDatabaseSensitivityLabelsListCurrentByDatabaseOptionalParams,
  ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseNextOptionalParams,
  ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseOptionalParams,
  SensitivityLabelSource,
  ManagedDatabaseSensitivityLabelsGetResponse,
  ManagedDatabaseSensitivityLabelsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedDatabaseSensitivityLabels. */
export interface ManagedDatabaseSensitivityLabels {
  /**
   * Gets the sensitivity labels of a given database
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listCurrentByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseSensitivityLabelsListCurrentByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<SensitivityLabel>;
  /**
   * Gets the sensitivity labels of a given database
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listRecommendedByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<SensitivityLabel>;
  /**
   * Gets the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param sensitivityLabelSource The source of the sensitivity label.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    sensitivityLabelSource: SensitivityLabelSource,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabaseSensitivityLabelsGetResponse>;
  /**
   * Creates or updates the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param parameters The column sensitivity label resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    parameters: SensitivityLabel,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabaseSensitivityLabelsCreateOrUpdateResponse>;
  /**
   * Deletes the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Disables sensitivity recommendations on a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The options parameters.
   */
  disableRecommendation(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Enables sensitivity recommendations on a given column (recommendations are enabled by default on all
   * columns)
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The options parameters.
   */
  enableRecommendation(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
}
