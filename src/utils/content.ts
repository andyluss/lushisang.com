import { type CollectionEntry, getCollection } from "astro:content";

export type Post = CollectionEntry<"xyy">;

export async function getPosts() {
  return (await getCollection("xyy")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf(),
  );
}

export function getTags(
  posts: Post[],
  withAll: boolean = false,
): [string, number][] {
  const res = [
    ...posts.reduce(
      (map, post) =>
        post.data.tags.reduce(
          (map, tag) => map.set(tag, (map.get(tag) || 0) + 1),
          map,
        ),
      new Map<string, number>(),
    ),
  ];
  if (withAll) {
    res.unshift(["All", posts.length]);
  }
  return res;
}

export function getLevels(
  posts: Post[],
  withAll: boolean = false,
): [number, number][] {
  const res = [
    ...posts.reduce(
      (map, post) =>
        map.set(post.data.level, (map.get(post.data.level) || 0) + 1),
      new Map(),
    ),
  ].sort((a, b) => b[0] - a[0]);
  if (withAll) {
    res.unshift(["All", posts.length]);
  }
  return res;
}

export function filterPosts(posts: Post[], level: number | "All", tag: string) {
  return posts.filter(
    (post) =>
      (tag === "All" ? true : post.data.tags.includes(tag)) &&
      (level === "All" ? true : post.data.level === level),
  );
}
