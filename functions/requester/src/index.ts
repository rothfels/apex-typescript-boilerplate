export default async function (e: { urls: string[] }, ctx: ApexCtx): Promise<void> {
	console.log('fetching %d urls', e.urls.length);

	try {
		const res = await Promise.all(e.urls.map(async (url) => {
			console.log('fetching %s', url);
			return {
				status: (await fetch(url)).status,
				url,
			};
		}));

		ctx.succeed(res);
	} catch (err) {
		ctx.fail(err);
	}
};
