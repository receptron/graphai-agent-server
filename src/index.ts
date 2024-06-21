import "dotenv/config";

import express from "express";
import cors from "cors";
import * as llmAgents from "@graphai/llm_agents";
import * as serviceAgents from "@graphai/service_agents";

import { agentDispatcher, agentsList, agentDoc } from "@receptron/graphai_express";

import { allowedOrigins, hostName, agentPath } from "./config";

export const app = express();

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// this option is for parse json body with text/event-stream
app.use(
  express.json({
    type(__req) {
      return true;
    },
  }),
);
app.use(cors(options));

const agents = {...llmAgents, ...serviceAgents};

app.get(agentPath, agentsList(agents, hostName, agentPath));
app.post(agentPath + "/:agentId", agentDispatcher(agents));

const port = 8085;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
