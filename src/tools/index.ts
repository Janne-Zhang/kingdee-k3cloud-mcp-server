import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import testTool from './testTool.js';

export function registerTools(server: McpServer) {
	testTool(server);
}
