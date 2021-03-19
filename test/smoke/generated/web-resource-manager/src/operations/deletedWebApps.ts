/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DeletedWebApps } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import {
  DeletedSite,
  DeletedWebAppsListResponse,
  DeletedWebAppsListByLocationResponse,
  DeletedWebAppsGetDeletedWebAppByLocationResponse,
  DeletedWebAppsListNextResponse,
  DeletedWebAppsListByLocationNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a DeletedWebApps. */
export class DeletedWebAppsImpl implements DeletedWebApps {
  private readonly client: WebSiteManagementClientContext;

  /**
   * Initialize a new instance of the class DeletedWebApps class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClientContext) {
    this.client = client;
  }

  /**
   * Description for Get all deleted apps for a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DeletedSite> {
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
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DeletedSite[]> {
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
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DeletedSite> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for Get all deleted apps for a subscription at location
   * @param location
   * @param options The options parameters.
   */
  public listByLocation(
    location: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DeletedSite> {
    const iter = this.listByLocationPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByLocationPagingPage(location, options);
      }
    };
  }

  private async *listByLocationPagingPage(
    location: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DeletedSite[]> {
    let result = await this._listByLocation(location, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByLocationNext(
        location,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByLocationPagingAll(
    location: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DeletedSite> {
    for await (const page of this.listByLocationPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Description for Get all deleted apps for a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: coreHttp.OperationOptions
  ): Promise<DeletedWebAppsListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<DeletedWebAppsListResponse>;
  }

  /**
   * Description for Get all deleted apps for a subscription at location
   * @param location
   * @param options The options parameters.
   */
  private _listByLocation(
    location: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeletedWebAppsListByLocationResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      location,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByLocationOperationSpec
    ) as Promise<DeletedWebAppsListByLocationResponse>;
  }

  /**
   * Description for Get deleted app for a subscription at location.
   * @param location
   * @param deletedSiteId The numeric ID of the deleted app, e.g. 12345
   * @param options The options parameters.
   */
  getDeletedWebAppByLocation(
    location: string,
    deletedSiteId: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeletedWebAppsGetDeletedWebAppByLocationResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      location,
      deletedSiteId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getDeletedWebAppByLocationOperationSpec
    ) as Promise<DeletedWebAppsGetDeletedWebAppByLocationResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeletedWebAppsListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<DeletedWebAppsListNextResponse>;
  }

  /**
   * ListByLocationNext
   * @param location
   * @param nextLink The nextLink from the previous successful call to the ListByLocation method.
   * @param options The options parameters.
   */
  private _listByLocationNext(
    location: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeletedWebAppsListByLocationNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      location,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByLocationNextOperationSpec
    ) as Promise<DeletedWebAppsListByLocationNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/deletedSites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedWebAppCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByLocationOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/deletedSites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedWebAppCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeletedWebAppByLocationOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/deletedSites/{deletedSiteId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedSite
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.deletedSiteId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedWebAppCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
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
const listByLocationNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedWebAppCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
