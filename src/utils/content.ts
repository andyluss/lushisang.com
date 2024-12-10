import {
  type CollectionEntry,
  type DataEntryMap,
  getCollection,
} from "astro:content";

export type Collection = keyof DataEntryMap;
export type Post = CollectionEntry<Collection>;
export type Tag = string;
export type TagItem = [Tag, number];
export type Level = number | "all";
export type LevelItem = [Level, number];

export async function getPosts(collection: Collection) {
  return (await getCollection(collection)).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf(),
  );
}

export function getTags(posts: Post[], all = false) {
  const res = [
    ...posts.reduce(
      (map, post) =>
        post.data.tags.reduce(
          (map, tag) => map.set(tag, (map.get(tag) || 0) + 1),
          map,
        ),
      new Map<Tag, number>(),
    ),
  ];
  if (all) {
    res.unshift(["all", posts.length]);
  }
  return res;
}

export function getLevels(posts: Post[], all = false) {
  const res = [
    ...posts.reduce(
      (map, post) =>
        map.set(post.data.level, (map.get(post.data.level) || 0) + 1),
      new Map<number, number>(),
    ),
  ].sort((a, b) => b[0] - a[0]) as LevelItem[];
  if (all) {
    res.unshift(["all", posts.length]);
  }
  return res;
}

export function filterPosts(posts: Post[], tag: Tag, level: Level) {
  return posts.filter(
    (post) =>
      (tag === "all" ? true : post.data.tags.includes(tag)) &&
      (level === "all" ? true : post.data.level === level),
  );
}

export async function getAll(
  collection: Collection,
  tag: Tag = "all",
  level: Level = "all",
) {
  const allPosts = await getPosts(collection);
  const posts = filterPosts(allPosts, tag, level);
  const tags = getTags(allPosts, true);
  const levels = getLevels(allPosts, true);
  return { posts, tags, levels };
}
