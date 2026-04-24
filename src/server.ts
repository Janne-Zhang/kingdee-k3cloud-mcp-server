import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';
import { registerTools } from './tools/index.js';

const SERVER_INSTRUCTIONS = `
# Kingdee K3Cloud MCP Server

这是为金蝶云星空企业版/专业版提供数据查询、代码生成服务的工具包
`;

export class KmcpServer {

	private server: McpServer;

	constructor() {
		const server = new McpServer(
		{
			name: 'kingdee-k3cloud-dev-mcp-server',
			version: '0.0.1',
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

		this.server = server;
	}

	public async run(transport: Transport) {
		await this.server.connect(transport);

		console.error('[Kingdee K3Cloud Dev MCP Server] running on stdio');
		console.error('Press Ctrl+C to exit');
	}
}
