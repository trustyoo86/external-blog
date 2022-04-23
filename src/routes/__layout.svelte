<script context="module">
  export const load = ({ url }) => {
    const currentRoute = url.pathname;

    console.log('currentRoute', currentRoute);

    return {
      props: {
        currentRoute,
      },
    };
  };
</script>

<script>
  import { fade } from 'svelte/transition';
  import Header from '$lib/components/Header.svelte';
  import '$lib/styles/style.scss';

  export let currentRoute;
</script>

<Header />

{#key currentRoute}
<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
  <slot />
</main>
{/key}

<footer>
  Hello, I'm the footer
</footer>
