import { BigQuery } from "@google-cloud/bigquery";
import * as core from "@actions/core";

const projectId = core.getInput("bigquery-project-id");
const clientEmail = core.getInput("gcp-client-email");
const privateKey = core.getInput("gcp-private-key");

export const bigquery = new BigQuery({
  credentials: {
    client_email: clientEmail,
    private_key: privateKey,
  },
  projectId,
});
