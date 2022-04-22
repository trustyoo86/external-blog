<script context="module">
  export const load = async ({ params, fetch }) => {
    const currentCategory = params.category;
    const response = await fetch('/api/posts.json');
    const posts = await response.json();

    const matchingPosts = posts
      .filter(post => post.meta.categories.includes(currentCategory));

    console.log(params);

    return {
      status: 200,
      props: {
        posts: matchingPosts,
      },
    };
  };
</script>