/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SkipUrlEncoding } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureSpecialPropertiesClientContext } from "../azureSpecialPropertiesClientContext";
import { SkipUrlEncodingGetMethodQueryNullOptionalParams } from "../models";

/** Class representing a SkipUrlEncoding. */
export class SkipUrlEncodingImpl implements SkipUrlEncoding {
  private readonly client: AzureSpecialPropertiesClientContext;

  /**
   * Initialize a new instance of the class SkipUrlEncoding class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSpecialPropertiesClientContext) {
    this.client = client;
  }

  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   * @param unencodedPathParam Unencoded path parameter with value 'path1/path2/path3'
   * @param options The options parameters.
   */
  getMethodPathValid(
    unencodedPathParam: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      unencodedPathParam,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getMethodPathValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   * @param unencodedPathParam Unencoded path parameter with value 'path1/path2/path3'
   * @param options The options parameters.
   */
  getPathValid(
    unencodedPathParam: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      unencodedPathParam,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getPathValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   * @param options The options parameters.
   */
  getSwaggerPathValid(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getSwaggerPathValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param q1 Unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param options The options parameters.
   */
  getMethodQueryValid(
    q1: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      q1,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getMethodQueryValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get method with unencoded query parameter with value null
   * @param options The options parameters.
   */
  getMethodQueryNull(
    options?: SkipUrlEncodingGetMethodQueryNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getMethodQueryNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param q1 Unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param options The options parameters.
   */
  getPathQueryValid(
    q1: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      q1,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getPathQueryValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param options The options parameters.
   */
  getSwaggerQueryValid(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getSwaggerQueryValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getMethodPathValidOperationSpec: coreHttp.OperationSpec = {
  path: "/azurespecials/skipUrlEncoding/method/path/valid/{unencodedPathParam}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.unencodedPathParam],
  headerParameters: [Parameters.accept],
  serializer
};
const getPathValidOperationSpec: coreHttp.OperationSpec = {
  path: "/azurespecials/skipUrlEncoding/path/path/valid/{unencodedPathParam}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.unencodedPathParam],
  headerParameters: [Parameters.accept],
  serializer
};
const getSwaggerPathValidOperationSpec: coreHttp.OperationSpec = {
  path:
    "/azurespecials/skipUrlEncoding/swagger/path/valid/{unencodedPathParam}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.unencodedPathParam1],
  headerParameters: [Parameters.accept],
  serializer
};
const getMethodQueryValidOperationSpec: coreHttp.OperationSpec = {
  path: "/azurespecials/skipUrlEncoding/method/query/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.q1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getMethodQueryNullOperationSpec: coreHttp.OperationSpec = {
  path: "/azurespecials/skipUrlEncoding/method/query/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.q11],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getPathQueryValidOperationSpec: coreHttp.OperationSpec = {
  path: "/azurespecials/skipUrlEncoding/path/query/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.q1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getSwaggerQueryValidOperationSpec: coreHttp.OperationSpec = {
  path: "/azurespecials/skipUrlEncoding/swagger/query/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.q12],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
