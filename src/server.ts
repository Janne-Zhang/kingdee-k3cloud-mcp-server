import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio';
import { registerTools } from "./tools/index"

const SERVER_INSTRUCTIONS = `
# Kingdee K3Cloud MCP Server

这是为金蝶云星空企业版/专业版提供数据查询、代码生成服务的工具包
`;

export async function runServer() {
    const server = new McpServer({
        name: "kingdee-k3cloud-mcp-server",
        version: "0.0.1"
    },
    {
      capabilities: {
        tools: { listChanged: true },
        resources: {
          subscribe: false,
        },
        prompts: {},
        experimental: {},
      },
      instructions: SERVER_INSTRUCTIONS,
    });

    registerTools(server);

    const transport = new StdioServerTransport();
    await server.connect(transport);
}