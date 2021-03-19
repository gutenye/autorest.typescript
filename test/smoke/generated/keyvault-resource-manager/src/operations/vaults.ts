/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Vaults } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { KeyVaultManagementClientContext } from "../keyVaultManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  Vault,
  VaultsListByResourceGroupNextOptionalParams,
  VaultsListByResourceGroupOptionalParams,
  VaultsListBySubscriptionNextOptionalParams,
  VaultsListBySubscriptionOptionalParams,
  DeletedVault,
  Resource,
  VaultsListNextOptionalParams,
  VaultsListOptionalParams,
  VaultCreateOrUpdateParameters,
  VaultsCreateOrUpdateResponse,
  VaultPatchParameters,
  VaultsUpdateResponse,
  VaultsGetResponse,
  VaultAccessPolicyParameters,
  AccessPolicyUpdateKind,
  VaultsUpdateAccessPolicyResponse,
  VaultsListByResourceGroupResponse,
  VaultsListBySubscriptionResponse,
  VaultsListDeletedResponse,
  VaultsGetDeletedResponse,
  VaultsListResponse,
  VaultCheckNameAvailabilityParameters,
  VaultsCheckNameAvailabilityResponse,
  VaultsListByResourceGroupNextResponse,
  VaultsListBySubscriptionNextResponse,
  VaultsListDeletedNextResponse,
  VaultsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a Vaults. */
export class VaultsImpl implements Vaults {
  private readonly client: KeyVaultManagementClientContext;

  /**
   * Initialize a new instance of the class Vaults class.
   * @param client Reference to the service client
   */
  constructor(client: KeyVaultManagementClientContext) {
    this.client = client;
  }

  /**
   * The List operation gets information about the vaults associated with the subscription and within the
   * specified resource group.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: VaultsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Vault> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: VaultsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Vault[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: VaultsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Vault> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The List operation gets information about the vaults associated with the subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: VaultsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Vault> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: VaultsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Vault[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: VaultsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Vault> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets information about the deleted vaults in a subscription.
   * @param options The options parameters.
   */
  public listDeleted(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DeletedVault> {
    const iter = this.listDeletedPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDeletedPagingPage(options);
      }
    };
  }

  private async *listDeletedPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DeletedVault[]> {
    let result = await this._listDeleted(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDeletedNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDeletedPagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DeletedVault> {
    for await (const page of this.listDeletedPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The List operation gets information about the vaults associated with the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: VaultsListOptionalParams
  ): PagedAsyncIterableIterator<Resource> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: VaultsListOptionalParams
  ): AsyncIterableIterator<Resource[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: VaultsListOptionalParams
  ): AsyncIterableIterator<Resource> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Create or update a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the server belongs.
   * @param vaultName Name of the vault
   * @param parameters Parameters to create or update the vault
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    vaultName: string,
    parameters: VaultCreateOrUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<VaultsCreateOrUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      vaultName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        VaultsCreateOrUpdateResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      createOrUpdateOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Update a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the server belongs.
   * @param vaultName Name of the vault
   * @param parameters Parameters to patch the vault
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    vaultName: string,
    parameters: VaultPatchParameters,
    options?: coreHttp.OperationOptions
  ): Promise<VaultsUpdateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      vaultName,
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateOperationSpec
    ) as Promise<VaultsUpdateResponse>;
  }

  /**
   * Deletes the specified Azure key vault.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault to delete
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    vaultName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      vaultName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets the specified Azure key vault.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VaultsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      vaultName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<VaultsGetResponse>;
  }

  /**
   * Update access policies in a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param operationKind Name of the operation
   * @param parameters Access policy to merge into the vault
   * @param options The options parameters.
   */
  updateAccessPolicy(
    resourceGroupName: string,
    vaultName: string,
    operationKind: AccessPolicyUpdateKind,
    parameters: VaultAccessPolicyParameters,
    options?: coreHttp.OperationOptions
  ): Promise<VaultsUpdateAccessPolicyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      vaultName,
      operationKind,
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateAccessPolicyOperationSpec
    ) as Promise<VaultsUpdateAccessPolicyResponse>;
  }

  /**
   * The List operation gets information about the vaults associated with the subscription and within the
   * specified resource group.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: VaultsListByResourceGroupOptionalParams
  ): Promise<VaultsListByResourceGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupOperationSpec
    ) as Promise<VaultsListByResourceGroupResponse>;
  }

  /**
   * The List operation gets information about the vaults associated with the subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: VaultsListBySubscriptionOptionalParams
  ): Promise<VaultsListBySubscriptionResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBySubscriptionOperationSpec
    ) as Promise<VaultsListBySubscriptionResponse>;
  }

  /**
   * Gets information about the deleted vaults in a subscription.
   * @param options The options parameters.
   */
  private _listDeleted(
    options?: coreHttp.OperationOptions
  ): Promise<VaultsListDeletedResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listDeletedOperationSpec
    ) as Promise<VaultsListDeletedResponse>;
  }

  /**
   * Gets the deleted Azure key vault.
   * @param vaultName The name of the vault.
   * @param location The location of the deleted vault.
   * @param options The options parameters.
   */
  getDeleted(
    vaultName: string,
    location: string,
    options?: coreHttp.OperationOptions
  ): Promise<VaultsGetDeletedResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultName,
      location,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getDeletedOperationSpec
    ) as Promise<VaultsGetDeletedResponse>;
  }

  /**
   * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
   * @param vaultName The name of the soft-deleted vault.
   * @param location The location of the soft-deleted vault.
   * @param options The options parameters.
   */
  async purgeDeleted(
    vaultName: string,
    location: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultName,
      location,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      purgeDeletedOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: purgeDeletedOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * The List operation gets information about the vaults associated with the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: VaultsListOptionalParams
  ): Promise<VaultsListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<VaultsListResponse>;
  }

  /**
   * Checks that the vault name is valid and is not already in use.
   * @param vaultName The name of the vault.
   * @param options The options parameters.
   */
  checkNameAvailability(
    vaultName: VaultCheckNameAvailabilityParameters,
    options?: coreHttp.OperationOptions
  ): Promise<VaultsCheckNameAvailabilityResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      checkNameAvailabilityOperationSpec
    ) as Promise<VaultsCheckNameAvailabilityResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: VaultsListByResourceGroupNextOptionalParams
  ): Promise<VaultsListByResourceGroupNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupNextOperationSpec
    ) as Promise<VaultsListByResourceGroupNextResponse>;
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: VaultsListBySubscriptionNextOptionalParams
  ): Promise<VaultsListBySubscriptionNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBySubscriptionNextOperationSpec
    ) as Promise<VaultsListBySubscriptionNextResponse>;
  }

  /**
   * ListDeletedNext
   * @param nextLink The nextLink from the previous successful call to the ListDeleted method.
   * @param options The options parameters.
   */
  private _listDeletedNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<VaultsListDeletedNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listDeletedNextOperationSpec
    ) as Promise<VaultsListDeletedNextResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: VaultsListNextOptionalParams
  ): Promise<VaultsListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<VaultsListNextResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Vault
    },
    201: {
      bodyMapper: Mappers.Vault
    },
    202: {
      bodyMapper: Mappers.Vault
    },
    204: {
      bodyMapper: Mappers.Vault
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Vault
    },
    201: {
      bodyMapper: Mappers.Vault
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vaultName1
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Vault
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vaultName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateAccessPolicyOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/accessPolicies/{operationKind}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VaultAccessPolicyParameters
    },
    201: {
      bodyMapper: Mappers.VaultAccessPolicyParameters
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.subscriptionId,
    Parameters.operationKind
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/vaults",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeletedOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/deletedVaults",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedVaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeletedOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedVault
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.vaultName1,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const purgeDeletedOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}/purge",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.vaultName1,
    Parameters.location
  ],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const checkNameAvailabilityOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult
    }
  },
  requestBody: Parameters.vaultName2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeletedNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedVaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
