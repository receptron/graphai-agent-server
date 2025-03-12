import { AgentFunction, AgentFunctionInfo } from "graphai";

const sampleAgent: AgentFunction = async ({ params, namedInputs }) => {
  return { params, namedInputs };
};

const sampleInput = { array: [{ message: "hello" }, { message: "test" }] };
const sampleParams = { sample: "123" };
const sampleResult = { inputs: sampleInput, params: sampleParams };

const sampleAgentInfo: AgentFunctionInfo = {
  name: "sampleAgent",
  agent: sampleAgent,
  mock: sampleAgent,
  samples: [
    {
      inputs: sampleInput,
      params: sampleParams,
      result: sampleResult,
    },
  ],
  description: "Sample agent",
  author: "isamu arimoto",
  category: ["LLM"],
  repository: "https://github.com/receptron/graphai-agent-server",
  license: "MIT",
};

export default sampleAgentInfo;
