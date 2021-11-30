import createDbConnection from '$lib/db';

export const get = async (req: Request, res: Response) => {
	try {
		console.log('index', 'request', req);
		console.log('index', 'response', res);
		const client = await createDbConnection;
		const db = client.db();

		await db.collection('visits').insertOne({
			source: '10.1.1.1'
		});
		const count = (await db.collection('visits').countDocuments()) + 16954;

		return {
			status: 200,
			body: {
				count
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

export const post = async (req: Request) => {
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
