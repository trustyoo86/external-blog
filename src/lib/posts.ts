const imports = import.meta.globEager('../posts/*.markdown');

const posts = [];
for (const path in imports) {
  const post = imports[path];

  if (post) {
    posts.push({
      ...post.metadata,
      ...post.default.render()
    });
  }
}

const filteredPosts = posts
  .filter((post) => !post.hidden)
  .sort((a, b) =>
    new Date(a.date).getTime() > new Date(b.date).getTime()
      ? -1
      : new Date(a.date).getTime() < new Date(b.date).getTime()
      ? 1
      : 0
  );

export default filteredPosts;
