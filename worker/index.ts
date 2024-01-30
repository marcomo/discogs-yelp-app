import { getAssetFromKV, serveSinglePageApp } from "@cloudflare/kv-asset-handler";

declare global {
	const VITE_YELP_API_ENDPOINT: string
	const VITE_YELP_API_KEY: string
}

addEventListener("fetch", (event: FetchEvent) => {
	event.respondWith(handleEvent(event));
});

async function handleEvent(event: FetchEvent) {
	const pathname = new URL(event.request.url).pathname;
	try {
		if (pathname === "/graphql") {
			const { body } = event.request
			return await fetch(VITE_YELP_API_ENDPOINT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept-Language': 'en_US',
					'Authorization': `Bearer ${VITE_YELP_API_KEY}`,
				},
				body
			}).catch(error => {
				return new Response('GraphQL API error', {
					status: error.status,
					statusText: error.message
				})
			})
		}
		return await getAssetFromKV(event, { mapRequestToAsset: serveSinglePageApp });
	} catch (e) {
		return new Response(`"${pathname}" not found`, {
			status: 404,
			statusText: "not found",
		});
	}
}
