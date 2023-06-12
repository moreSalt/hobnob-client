<script lang="ts">
    import SearchCities from "$lib/components/searchcities.svelte";
    import Searchform from "$lib/components/searchform.svelte";
    import type { CitiesReturn } from "$lib/types/cities";
    import { page } from '$app/stores'
    import { goto } from '$app/navigation';

    /** @type {import('./$types').PageData} */    
    export let data: CitiesReturn;
    let raSourceParam = $page.url.searchParams.get("s") || "default"
    let raSource =  raSourceParam == null || raSourceParam == "default" ? false : true
    

</script>
{#if data.q}
<div class="form-control w-full  items-center">
    <label class="label cursor-pointer flex justify-start gap-2 items-center content-center w-3/5 max-w-7xl">
      <span class="label-text">residential advisor</span> 
      <input type="checkbox" class="toggle toggle-error toggle-sm"  bind:checked={raSource} on:click={() => {
        let q = $page.url.searchParams.get('q') || ""
        let query = new URLSearchParams()
        query.set('q', q);
        query.set('s', raSource ? "default" : "ra");
        goto(`?${query.toString()}`)    
      }}/>
    </label>
</div>
<SearchCities items={data.cities}/>

{:else}
    <div class="w-full h-full justify-center flex flex-col items-center gap-4">
        <h2 class="text-2xl font-bold text-white">Invalid search</h2>
        <!-- <a href="../" class="btn btn-primary btn-sm btn-outline">Home</a> -->
        <Searchform artistSelected={false}/>
    </div>
{/if}