import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export default function (server: McpServer) {
	server.registerTool(
		'test',
		{
			title: '查询金蝶单据标识',
			description: '根据金蝶单据名称查询单据标识',
			inputSchema: {
				form_name: z.string().describe('单据名称'),
			},
			outputSchema: {
				form_name: z.string().describe('单据名称'),
				form_id: z.string().describe('单据标识'),
			},
		},
		async ({ form_name }) => {
			const result = {
				form_name,
				form_id: '123',
			};

			return {
				content: [{ type: 'text' as const, text: JSON.stringify(result, null, 2) }],
				structuredContent: result,
			};
		}
	);
}
