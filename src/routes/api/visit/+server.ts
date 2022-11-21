import createDbConnection from '$lib/db';

export const GET = async (req: Request, res: Response) => {
	try {
		const client = await createDbConnection;
		const db = client.db();

		await db.collection('visits').insertOne({
			source: '10.1.1.1'
		});
		const count = (await db.collection('visits').countDocuments()) + 16954;

		return new Response(JSON.stringify({
			body: {
				count
			}}), {status: 200});
	} catch (e) {
		return new Response(JSON.stringify({
			body: {
				error: `Error getting visit count\n${e}`
			}}), {status: 500})
	}
};

export const POST = async (req: Request) => {
	try {
		const client = await createDbConnection;
		const db = client.db();
		await db.collection('visits').insertOne({
			source: '10.1.1.1'
		});
		return {
			status: 201,
			body: {
				message: 'ta'
			}
		};
	} catch (e) {
		return {
			status: 500,
			body: {
				error: `Error getting visit count\n${e}`
			}
		};
	}
};
