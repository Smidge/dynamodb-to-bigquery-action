import * as core from "@actions/core";
import { getItemsPaginated } from "./DynamoDB/getItemsPaginated";
import { writeItems } from "./BigQuery/writeItems";

async function run(): Promise<void> {
  let lastEvaluatedKey;

  try {
    do {
      const result = await getItemsPaginated(lastEvaluatedKey);
      const items = result.Items;
      lastEvaluatedKey = result.LastEvaluatedKey;

      if (!items) {
        return;
      }

      await writeItems(items);
    } while (lastEvaluatedKey);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
