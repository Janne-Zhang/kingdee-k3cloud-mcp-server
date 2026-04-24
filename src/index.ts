#!/usr/bin/env node
import { KmcpServer } from './server.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import dotenv from 'dotenv';

async function main() {
	dotenv.config();

	const port = parseInt(process.env.PORT || '8080', 10);

	const server = new KmcpServer();
	server.run(new StdioServerTransport());
}

main().catch((error) => {
	console.error('Fatal error:', error);
	process.exit(1);
});
