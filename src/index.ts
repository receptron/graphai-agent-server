import "dotenv/config";

import express from "express";
import cors from "cors";
import * as llmAgents from "@graphai/llm_agents";
import * as serviceAgents from "@graphai/service_agents";
import * as vanillaAgents from "@graphai/vanilla";
import * as sampleAgent from "./sample_agent";

import { agentDispatcher, agentsList } from "@receptron/graphai_express";

import { port, allowedOrigins, hostName, agentPath } from "./config";

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

const logger = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(req.params.agentId);
  next();
};

const agents = { ...llmAgents, ...serviceAgents, ...sampleAgent, ...vanillaAgents };

Object.values(agents).map((agent) => {
  if (agent.environmentVariables) {
    agent.environmentVariables.map((envVal) => {
      const hit = !!process.env[envVal];
      console.log(`${envVal} ` + (hit ? "ok" : "DOES NOT EXIST!! Set this environment variable!!"));
    });
  }
});
app.get(agentPath, agentsList(agents, hostName, agentPath));
app.post(agentPath + "/:agentId", logger, agentDispatcher(agents));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
