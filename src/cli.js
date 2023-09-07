import fetch from "node-fetch";
import { Octokit } from "octokit";

const octokit = new Octokit({
  request: {
    fetch: fetch,
  },
  auth: process.argv[3],
});

const run = async () => {
  const response = await octokit.request(
    "GET /repos/horpehyehmii/workTest/issues/2"
  );

  console.log(response.data.body);
};
run();
