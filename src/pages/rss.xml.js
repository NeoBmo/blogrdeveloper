import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SiteTitle, SiteDescription } from '../consts';
import { getBlogUrl, sortPostsByDateDesc } from '../utils/blog';

export async function GET(context) {
	const posts = sortPostsByDateDesc(await getCollection('blog'));
	return rss({
		title: SiteTitle,
		description: SiteDescription,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: getBlogUrl(post),
		})),
	});
}
