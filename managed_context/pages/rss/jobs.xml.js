/**
 * https://guillermodlpa.com/blog/how-to-generate-rss-feed-with-next-js
 * 
 * This is a dynamic RSS feed rendered on the server with all blog posts
 * We use SSG with a cache of a few minutes instead of statically generating the file because we want
 * new blog posts and edits to automatically show up here
 */

import { getAllJobs } from "@/lib/api";
import generateJobsRSS from "@/lib/rss/generateJobsRSS";
const PAGE_SIZE = 20;

export const getServerSideProps = async (ctx) => {
    let sort = ["date:desc"]

    const pageSize = PAGE_SIZE;
    const page = 0;
    
    let allPosts = (await getAllJobs(null, pageSize, page)) || [];

   const feed = await generateJobsRSS(allPosts)
    
  const cacheMaxAgeUntilStaleSeconds = 60 * 60; // 1 minute
  const cacheMaxAgeStaleDataReturnSeconds = 60 * 60 * 60; // 60 minutes
  ctx.res.setHeader(
    "Cache-Control",
    `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`
  );

  ctx.res.setHeader("Content-Type", "text/xml");
  ctx.res.write(feed.xml());
  ctx.res.end();

  return { props: {} };
};

// Default export to prevent next.js errors
export default function RssPage() {}