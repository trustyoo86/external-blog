<script lnag="ts" context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export const load = async ({ fetch }) => {
    console.log('test!!!');
    const posts = await fetch('/api/posts.json');
    console.log('posts ==>', posts);

    const allPosts = await posts.json();

    return {
      status: 200,
      props: {
        posts: allPosts,
      },
    };
  }
</script>

<script lnag="ts">
  export let posts;
</script>

<ul>
  {#each posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>

