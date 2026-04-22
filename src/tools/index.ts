import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import testTool from "./testTool";

export function registerTools(server: McpServer) {
	testTool(server);
}
