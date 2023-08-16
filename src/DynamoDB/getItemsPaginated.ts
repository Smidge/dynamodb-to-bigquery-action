import { ScanCommand, ScanCommandInput } from "@aws-sdk/lib-dynamodb";
import * as core from "@actions/core";
import { dynamodbClient } from "./dynamodbClient";

const tableName = core.getInput("dynamodb-table-name");

export const getItemsPaginated = async (
  lastEvaluatedKey: ScanCommandInput["ExclusiveStartKey"]
) => {
  const command = new ScanCommand({
    ExclusiveStartKey: lastEvaluatedKey,
    TableName: tableName,
  });

  return await dynamodbClient.send(command);
};
