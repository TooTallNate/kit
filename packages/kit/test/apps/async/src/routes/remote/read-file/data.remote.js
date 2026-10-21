import { query, read } from '$app/server';
import asset from './asset.txt?url';

export const get_text = query(async () => {
	return await read(asset).text();
});
