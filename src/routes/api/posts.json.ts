export const get = async () => {
  const allPostFiles = import.meta.glob('../blog/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  console.log(iterablePostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(2, -3);

      console.log('metadata', metadata);

      return {
        meta: metadata,
        path: postPath,
      };
    })
  );

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });


  return {
    status: 200,
    body: sortedPosts,
  };
};