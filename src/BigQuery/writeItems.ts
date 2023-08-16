import { bigquery } from "./bigqueryClient";
import * as core from "@actions/core";

const datasetId = core.getInput("bigquery-dataset-id");
const tableId = core.getInput("bigquery-table-id");

export const writeItems = async (rows: any[]) => {
  await bigquery.dataset(datasetId).table(tableId).insert(rows);
  console.log(`Inserted ${rows.length} rows`);
};
