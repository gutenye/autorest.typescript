/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Queries } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { UrlMultiClientContext } from "../urlMultiClientContext";
import {
  QueriesArrayStringMultiNullOptionalParams,
  QueriesArrayStringMultiEmptyOptionalParams,
  QueriesArrayStringMultiValidOptionalParams
} from "../models";

/** Class representing a Queries. */
export class QueriesImpl implements Queries {
  private readonly client: UrlMultiClientContext;

  /**
   * Initialize a new instance of the class Queries class.
   * @param client Reference to the service client
   */
  constructor(client: UrlMultiClientContext) {
    this.client = client;
  }

  /**
   * Get a null array of string using the multi-array format
   * @param options The options parameters.
   */
  arrayStringMultiNull(
    options?: QueriesArrayStringMultiNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      arrayStringMultiNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get an empty array [] of string using the multi-array format
   * @param options The options parameters.
   */
  arrayStringMultiEmpty(
    options?: QueriesArrayStringMultiEmptyOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      arrayStringMultiEmptyOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * mult-array format
   * @param options The options parameters.
   */
  arrayStringMultiValid(
    options?: QueriesArrayStringMultiValidOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      arrayStringMultiValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const arrayStringMultiNullOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/array/multi/string/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.arrayQuery],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const arrayStringMultiEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/array/multi/string/empty",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.arrayQuery],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const arrayStringMultiValidOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/array/multi/string/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.arrayQuery1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
