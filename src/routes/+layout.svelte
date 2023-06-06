<script>
    import "../app.css";
    import Nav from "$lib/components/nav.svelte";
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="pt-4 h-screen flex flex-col justify-between">
  <div class="flex flex-col justify-between">
    <Nav />
    <slot />
  </div>
    <!-- FOOTER -->
    <footer class="footer footer-center p-4 bg-base-200 text-base-content mt-8">
        <div>
            <a
                href="https://github.com/moreSalt/hobnob-client"
                target="_blank"
                class="link">Github</a
            >
        </div>
    </footer>
</div>
