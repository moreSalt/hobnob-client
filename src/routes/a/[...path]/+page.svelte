<script lang="ts">
    import Artist from "$lib/components/artist.svelte";
    import type { ArtistResponse } from "$lib/types/artist";
    export let data: ArtistResponse
</script>



{#if data}
    <Artist res={data}/>
{:else}
    <div class="w-full flex flex-col items-center gap-4">
        <h2 class="text-2xl font-bold text-white">Invalid artist ID</h2>
        <a href="../" class="btn btn-primary btn-sm btn-outline">Home</a>
    </div>
{/if}