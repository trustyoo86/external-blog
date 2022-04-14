<script context="module" lang="ts">
  export async function load({ fetch }) {
    const url = '/blog.json';
    const res = await fetch(url);

    return {
      props: {
        posts: await res.json(),
      },
    };
  }
</script>