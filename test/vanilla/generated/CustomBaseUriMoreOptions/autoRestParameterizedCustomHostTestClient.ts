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
import * as operations from "./operations";
import { AutoRestParameterizedCustomHostTestClientContext } from "./autoRestParameterizedCustomHostTestClientContext";

class AutoRestParameterizedCustomHostTestClient extends AutoRestParameterizedCustomHostTestClientContext {
  // Operation groups
  paths: operations.Paths;

  /**
   * @class
   * Initializes a new instance of the AutoRestParameterizedCustomHostTestClient class.
   * @constructor
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
   * @param {string} [options.dnsSuffix] - A string value that is used as a global part of the parameterized host. Default value 'host'.
   *
   */
  constructor(subscriptionId: string, options?: Models.AutoRestParameterizedCustomHostTestClientOptions) {
    super(subscriptionId, options);
    this.paths = new operations.Paths(this);
  }
}

// Operation Specifications

export { AutoRestParameterizedCustomHostTestClient, Models as AutoRestParameterizedCustomHostTestModels, Mappers as AutoRestParameterizedCustomHostTestMappers };
