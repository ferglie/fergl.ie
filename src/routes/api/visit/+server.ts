import createDbConnection from '$lib/db';
import type { RequestEvent } from '@sveltejs/kit';

export const GET = async ({ getClientAddress }: RequestEvent) => {
	console.log('[GET /api/visit] Starting request');
	console.log('[GET /api/visit] Client IP:', getClientAddress());
	
	try {
		console.log('[GET /api/visit] Attempting to connect to MongoDB...');
		const client = await createDbConnection;
		console.log('[GET /api/visit] MongoDB connection established');
		
		const db = client.db();
		console.log('[GET /api/visit] Database reference obtained');

		const visitData = {
			source: getClientAddress(),
			timestamp: new Date()
		};
		console.log('[GET /api/visit] Inserting visit:', JSON.stringify(visitData));
		
		await db.collection('visits').insertOne(visitData);
		console.log('[GET /api/visit] Visit inserted successfully');
		
		const count = (await db.collection('visits').countDocuments());
		console.log('[GET /api/visit] Total visit count:', count);

		return new Response(JSON.stringify({
			body: {
				count
			}}), {status: 200});
	} catch (e) {
		console.error('[GET /api/visit] ERROR:', e);
		console.error('[GET /api/visit] Error name:', e instanceof Error ? e.name : 'Unknown');
		console.error('[GET /api/visit] Error message:', e instanceof Error ? e.message : String(e));
		console.error('[GET /api/visit] Error stack:', e instanceof Error ? e.stack : 'No stack trace');
		
		return new Response(JSON.stringify({
			body: {
				error: `Error getting visit count: ${e instanceof Error ? e.message : String(e)}`
			}}), {status: 500})
	}
};

export const POST = async ({ getClientAddress }: RequestEvent) => {
	console.log('[POST /api/visit] Starting request');
	console.log('[POST /api/visit] Client IP:', getClientAddress());
	
	try {
		console.log('[POST /api/visit] Attempting to connect to MongoDB...');
		const client = await createDbConnection;
		console.log('[POST /api/visit] MongoDB connection established');
		
		const db = client.db();
		console.log('[POST /api/visit] Database reference obtained');
		
		const visitData = {
			source: getClientAddress(),
			timestamp: new Date()
		};
		console.log('[POST /api/visit] Inserting visit:', JSON.stringify(visitData));
		
		await db.collection('visits').insertOne(visitData);
		console.log('[POST /api/visit] Visit inserted successfully');
		
		return {
			status: 201,
			body: {
				message: 'ta'
			}
		};
	} catch (e) {
		console.error('[POST /api/visit] ERROR:', e);
		console.error('[POST /api/visit] Error name:', e instanceof Error ? e.name : 'Unknown');
		console.error('[POST /api/visit] Error message:', e instanceof Error ? e.message : String(e));
		console.error('[POST /api/visit] Error stack:', e instanceof Error ? e.stack : 'No stack trace');
		
		return {
			status: 500,
			body: {
				error: `Error recording visit: ${e instanceof Error ? e.message : String(e)}`
			}
		};
	}
};
