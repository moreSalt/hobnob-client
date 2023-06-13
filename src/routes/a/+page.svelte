<script lang="ts">
    import Search from "$lib/components/searchartists.svelte";
    import Searchform from "$lib/components/searchform.svelte";
    import type { ArtistsResponse } from "$lib/types/artists";
    import { page } from '$app/stores'
    import { goto } from '$app/navigation';

    

    interface Data {
        body: ArtistsResponse[]
        q: string
    }
    /** @type {import('./$types').PageData} */    
    export let data: Data | null;
   let raSourceParam = $page.url.searchParams.get("s")
    let raSource =  raSourceParam == null || raSourceParam == "default" ? false : true
    $: disabled = false

    

</script>

{#if data?.q}
<div class="form-control w-full items-center">
    <label class="label cursor-pointer flex justify-start gap-2 items-center content-center w-3/5 max-w-7xl">
      <span class="label-text">resident advisor</span> 
      <input type="checkbox" class="toggle toggle-error toggle-sm" {disabled} bind:checked={raSource} on:click={() => {
        disabled = true
        let q = $page.url.searchParams.get('q') || ""
        let query = new URLSearchParams()
        query.set('q', q);
        query.set('s', raSource ? "default" : "ra");

        goto(`?${query.toString()}`)    
        disabled = false
      }}/>
    </label>
</div>
<Search items={data.body} />
{:else}
<div class="w-full h-full justify-center flex flex-col items-center gap-4">
    <h2 class="text-2xl font-bold text-white">Invalid search</h2>
    <!-- <a href="../" class="btn btn-primary btn-sm btn-outline">Home</a> -->
    <Searchform />
</div>
{/if}