import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Theraa s Cool Blog',
    description: 'i still dont quite know what im going to write about here but i think its good to have it set up in case i figure that out',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-uk</language>`,
  });
}
