<script lang="ts">
    import type { CityResponse } from "../types/city";
    import img from "$lib/assets/city.png"
    import Events from "./events.svelte";
    import { page } from '$app/stores'
    import { goto, invalidateAll } from '$app/navigation';
    $: p = $page.url.searchParams.get('page') || "0"
    export let res: CityResponse;
    $: popular = p == "0"

    function changePage(change: number) {
        p = `${change == 0 ? 0 : parseInt(p) + change}`
        let query = new URLSearchParams()
        query.set('page', p);
        goto(`?${query.toString()}`)    
    }
</script>

<div class=" items-center justify-center flex flex-col gap-8 p-4">
    <div class="flex flex-col gap-8 w-full lg:w-3/5">
        <div class="flex gap-4 items-center">
            <div class="avatar">
                <div class="w-24 rounded-full">
                    <img
                        src={img}
                        alt="{res.city} profile photo"
                    />
                </div>
            </div>
            <div class="flex flex-col">
                <h1 class="text-4xl font-bold text-white">{res.city}</h1>
                <p class="text-sm">City</p>
            </div>
        </div>


        {#if (res.events.length > 0 && res.events[0].source != 'ra')}
        <div class="flex flex-row justify-between">
            <label class="label cursor-pointer flex gap-2 self-start">
                <span class="label-text">Show Popular</span>
                <input type="checkbox" class="toggle toggle-sm" bind:checked={popular} on:click={() => {
                    p =  popular ? "1" : "0"
                    let query = new URLSearchParams()
                    query.set('page', p);
                    goto(`?${query.toString()}`)        
                }}/>
            </label>

            {#if !popular}
            <div class="btn-group">
                <button class="btn btn-sm" disabled={popular || $page.url.search.includes("page=1")} on:click={() => changePage(-1)}>«</button>
                <button class="btn btn-sm">{p}</button>
                <button class="btn btn-sm" on:click={() => {
                    p = `${parseInt(p) + 1}`
                    let query = new URLSearchParams()
                    query.set('page', p);
                    goto(`?${query.toString()}`);

                }}>»</button>
              </div>
            {/if}
        </div>
        {/if}
    </div>

    <Events res={res.events} />
    {#if !popular}
    <div class="btn-group">
        <button class="btn btn-sm" disabled={popular || $page.url.search.includes("page=1")} on:click={() => changePage(-1)}>«</button>
        <button class="btn btn-sm">{p}</button>
        <button class="btn btn-sm" on:click={() => changePage(1)}>»</button>
      </div>
    {/if}
</div>
