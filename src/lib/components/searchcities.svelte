<script lang="ts">
    import type { CitiesResponse } from "$lib/types/cities";
    export let items: CitiesResponse[] = [];
</script>

    <div class=" items-center justify-center flex flex-col">
        <!-- <p>Found {items.length} cities matching "{q}"</p> -->
        <div class="mt-4 w-3/5 max-w-7xl flex flex-col gap-4">
            {#each items as item}
                <a
                    href="/c/{item.code}?s={item.source}"
                    class="
                    card
                    card-compact
                    rounded-lg
                    min-w-96
                    shadow-2xl
                    bg-base-300
                    hover:cursor-pointer
                    hover:bg-base-300
                    group

                "
                >
                <div class="card-body flex flex-row justify-between items-center gap-8">

                    <h3
                        class="font-bold text-error whitespace-nowrap text-ellipsis overflow-hidden" class:text-white={item.source !== "ra"}
                    >
                        {item.name}
                    </h3>
                    <div class="bg-error h-4 w-4 rounded-full" class:bg-white={item.source !== "ra"}></div>
                </div>
                </a>
            {/each}
        </div>
    </div>
