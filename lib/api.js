import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "motinnodotume",
  apiKey: "5SseM2LSx07lKJ8Y7Pk7q8GDT9j2ne9Xf5lv",
});

export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log(" ~~ getPostBySlug ~~");
    console.log(err);
  }
}

export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "title,slug,eyecatch",
        orders: "-publishDate",
        limit:limit,
      }
    })
    return post.contents
  } catch (err) {
    console.log("~~ getAllPosts ~~")
    console.log(err)
  }
}

export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: { fields: "title,slug", orders: "-publishdate", limit: limit },
    });
    return slugs.contents;
  } catch (err) {
    console.log(" ~~ getPostBySlug ~~");
    console.log(err);
  }
}
