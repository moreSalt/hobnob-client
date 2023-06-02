<script lang="ts">
    import SearchCities from "$lib/components/searchcities.svelte";
    import type { CitiesReturn } from "$lib/types/cities";
    import { page } from '$app/stores'
    import { goto } from '$app/navigation';

    /** @type {import('./$types').PageData} */    
    export let data: CitiesReturn;
    let raSourceParam = $page.url.searchParams.get("source")
    let raSource =  raSourceParam == null || raSourceParam == "default" ? false : true
    

</script>
{#if data}
<div class="form-control w-full lg:w-3/5 self-center">
    <label class="label cursor-pointer flex justify-start gap-2 items-center content-center">
      <span class="label-text">residential advisor</span> 
      <input type="checkbox" class="toggle toggle-error toggle-sm"  bind:checked={raSource} on:click={() => {
        let q = $page.url.searchParams.get('query') || ""
        let query = new URLSearchParams()
        query.set('source', raSource ? "default" : "ra");
        query.set('query', q);
        goto(`?${query.toString()}`)    
      }}/>
    </label>
</div>
<SearchCities items={data.cities} q={data.q}/>

{:else}
    <div class="w-full flex flex-col items-center gap-4">
        <h2 class="text-2xl font-bold text-white">Invalid search</h2>
        <a href="../" class="btn btn-primary btn-sm btn-outline">Home</a>
    </div>
{/if}