/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as msRest from "ms-rest-js";
import { AutoRestParameterizedHostTestClientContext } from "./autoRestParameterizedHostTestClientContext";
import * as operations from "./operations";


class AutoRestParameterizedHostTestClient extends AutoRestParameterizedHostTestClientContext {
  // Operation groups
  paths: operations.Paths;

  /**
   * @class
   * Initializes a new instance of the AutoRestParameterizedHostTestClient class.
   * @constructor
   *
   * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.host] - A string value that is used as a global part of the parameterized host
   *
   * @param {string} [options.acceptLanguage] - The preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - The retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - Whether a unique x-ms-client-request-id should be generated. When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.AutoRestParameterizedHostTestClientOptions) {
    super(credentials, options);
    this.paths = new operations.Paths(this);
  }
}

// Operation Specifications

export { AutoRestParameterizedHostTestClient, Models as AutoRestParameterizedHostTestModels, Mappers as AutoRestParameterizedHostTestMappers };
