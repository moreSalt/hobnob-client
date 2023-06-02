<script lang="ts">
    import type { CitiesResponse } from "$lib/types/cities";
    export let items: CitiesResponse[] = [];
    export let q: string = "";
</script>

    <div class=" items-center justify-center flex flex-col">
        <!-- <p>Found {items.length} cities matching "{q}"</p> -->
        <div class="mt-4 w-3/5 flex flex-col gap-4">
            {#each items as item}
                <a
                    href="/c/{item.code}?source={item.source}"
                    class="
                    card
                    card-compact
                    rounded-lg
                    min-w-96
                    shadow-2xl
                    bg-base-300/75
                    hover:cursor-pointer
                    hover:bg-base-300
                    group

                "
                >
                    <div class="card-body flex flex-col items-center gap-8">

                        <div class="w-full">
                            <h3
                                class="font-bold text-white whitespace-nowrap text-ellipsis overflow-hidden {item.source == "ra" ? "text-error" : ""}"
                            >
                                {item.name}
                            </h3>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
