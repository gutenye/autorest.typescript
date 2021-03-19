/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { JobStepExecutions } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import {
  JobExecution,
  JobStepExecutionsListByJobExecutionNextOptionalParams,
  JobStepExecutionsListByJobExecutionOptionalParams,
  JobStepExecutionsListByJobExecutionResponse,
  JobStepExecutionsGetResponse,
  JobStepExecutionsListByJobExecutionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a JobStepExecutions. */
export class JobStepExecutionsImpl implements JobStepExecutions {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class JobStepExecutions class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the step executions of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param options The options parameters.
   */
  public listByJobExecution(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobStepExecutionsListByJobExecutionOptionalParams
  ): PagedAsyncIterableIterator<JobExecution> {
    const iter = this.listByJobExecutionPagingAll(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByJobExecutionPagingPage(
          resourceGroupName,
          serverName,
          jobAgentName,
          jobName,
          jobExecutionId,
          options
        );
      }
    };
  }

  private async *listByJobExecutionPagingPage(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobStepExecutionsListByJobExecutionOptionalParams
  ): AsyncIterableIterator<JobExecution[]> {
    let result = await this._listByJobExecution(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByJobExecutionNext(
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByJobExecutionPagingAll(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobStepExecutionsListByJobExecutionOptionalParams
  ): AsyncIterableIterator<JobExecution> {
    for await (const page of this.listByJobExecutionPagingPage(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the step executions of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param options The options parameters.
   */
  private _listByJobExecution(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobStepExecutionsListByJobExecutionOptionalParams
  ): Promise<JobStepExecutionsListByJobExecutionResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByJobExecutionOperationSpec
    ) as Promise<JobStepExecutionsListByJobExecutionResponse>;
  }

  /**
   * Gets a step execution of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The unique id of the job execution
   * @param stepName The name of the step.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    options?: coreHttp.OperationOptions
  ): Promise<JobStepExecutionsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      stepName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<JobStepExecutionsGetResponse>;
  }

  /**
   * ListByJobExecutionNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param nextLink The nextLink from the previous successful call to the ListByJobExecution method.
   * @param options The options parameters.
   */
  private _listByJobExecutionNext(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    nextLink: string,
    options?: JobStepExecutionsListByJobExecutionNextOptionalParams
  ): Promise<JobStepExecutionsListByJobExecutionNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByJobExecutionNextOperationSpec
    ) as Promise<JobStepExecutionsListByJobExecutionNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listByJobExecutionOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.skip,
    Parameters.apiVersion4,
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.top
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps/{stepName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecution
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.stepName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByJobExecutionNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.skip,
    Parameters.apiVersion4,
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.top
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
