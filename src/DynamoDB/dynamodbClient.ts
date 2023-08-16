import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import * as core from "@actions/core";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const accessKeyId = core.getInput("aws-access-key-id");
const secretAccessKey = core.getInput("aws-secret-access-key");
const region = core.getInput("aws-region");

const client = new DynamoDBClient({
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
  region,
});

export const dynamodbClient = DynamoDBDocumentClient.from(client);
