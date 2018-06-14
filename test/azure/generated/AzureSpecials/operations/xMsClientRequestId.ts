/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Mappers from "../models/xMsClientRequestIdMappers";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

const WebResource = msRest.WebResource;

/** Class representing a XMsClientRequestId. */
export class XMsClientRequestId {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;
  private readonly serializer = new msRest.Serializer(Mappers);
  /**
   * Create a XMsClientRequestId.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * Get method that overwrites x-ms-client-request header with value
   * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          "this.client.acceptLanguage": this.client.acceptLanguage
        },
        options);
      operationRes = await client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "azurespecials/overwrite/x-ms-client-request-id/method/",
          headerParameters: [
            {
              parameterPath: "this.client.acceptLanguage",
              mapper: {
                serializedName: "accept-language",
                defaultValue: 'en-US',
                type: {
                  name: "String"
                }
              }
            }
          ],
          serializer: this.serializer
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
            if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
            if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            const resultMapper = Mappers.CloudError;
            error.body = this.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get method that overwrites x-ms-client-request header with value
   * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * @param {string} xMsClientRequestId This should appear as a method parameter,
   * use value '9C4D50EE-2D56-4CD3-8152-34347DC9F2B0'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async paramGetWithHttpOperationResponse(xMsClientRequestId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          xMsClientRequestId,
          "this.client.acceptLanguage": this.client.acceptLanguage
        },
        options);
      operationRes = await client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "azurespecials/overwrite/x-ms-client-request-id/via-param/method/",
          headerParameters: [
            {
              parameterPath: "xMsClientRequestId",
              mapper: {
                required: true,
                serializedName: "x-ms-client-request-id",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "this.client.acceptLanguage",
              mapper: {
                serializedName: "accept-language",
                defaultValue: 'en-US',
                type: {
                  name: "String"
                }
              }
            }
          ],
          serializer: this.serializer
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            const resultMapper = Mappers.ErrorModel;
            error.body = this.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get method that overwrites x-ms-client-request header with value
   * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  get(): Promise<void>;
  get(options: msRest.RequestOptionsBase): Promise<void>;
  get(callback: msRest.ServiceCallback<void>): void;
  get(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  get(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.getWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Get method that overwrites x-ms-client-request header with value
   * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   *
   * @param {string} xMsClientRequestId This should appear as a method parameter,
   * use value '9C4D50EE-2D56-4CD3-8152-34347DC9F2B0'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  paramGet(xMsClientRequestId: string): Promise<void>;
  paramGet(xMsClientRequestId: string, options: msRest.RequestOptionsBase): Promise<void>;
  paramGet(xMsClientRequestId: string, callback: msRest.ServiceCallback<void>): void;
  paramGet(xMsClientRequestId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  paramGet(xMsClientRequestId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.paramGetWithHttpOperationResponse(xMsClientRequestId, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.paramGetWithHttpOperationResponse(xMsClientRequestId, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

}
