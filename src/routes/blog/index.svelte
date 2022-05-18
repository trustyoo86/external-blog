<script lnag="ts" context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export const load = async ({ fetch }) => {
    console.log('test!!!');
    const posts = await fetch('/api/posts.json');
    const allPosts = await posts.json();

    console.log('appPosts', allPosts);

    return {
      status: 200,
      props: {
        posts: allPosts,
      },
    };
  }
</script>

<script lnag="ts">
  import Aboutme from '$lib/components/Aboutme.svelte';
  export let posts;
</script>

<!-- phase1 -->
<!-- <ul>
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
</ul> -->

<style>
  /* phase2 */
  .leftcolumn {
    float: left;
    width: 75%;
  }

  .card {
    background-color: white;
    padding: 20px;
    margin-top: 20px;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }
</style>

<!-- phase2 -->
<div class="row">
  <div class="leftcolumn">
    {#each posts as post}
      <div class="card">
        <h2>{post.meta.title}</h2>
        <h5>{post.meta.date}</h5>
      </div>
    {/each}
  </div>
  <Aboutme />
</div>

