<script lang="ts">
    import  City from "../../../lib/components/city.svelte";
    import type { CityResponse } from "../../../lib/types/city";
    export let data:  CityResponse | null
</script>

{#if data != null}
    <City res={data} />
{:else}
<div class="w-full flex flex-col items-center gap-4">
    <h2 class="text-2xl font-bold text-white">Invalid artist ID</h2>
    <a href="/" class="btn btn-primary btn-sm btn-outline">Home</a>
</div>
{/if}