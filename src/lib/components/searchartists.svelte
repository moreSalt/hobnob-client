<script lang="ts">
    import type { ArtistsResponse } from "../types/artists";
    export let items: ArtistsResponse[] = [];
    // export let q: string = "";
</script>

    <div class=" items-center justify-center flex flex-col">
        <!-- <p>Found {items.length} artists matching "{q}"</p> -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-4 mt-4 w-3/5 max-w-7xl">
            {#each items as item}
                <a
                    href="/a/{item.id}?s={item.source}"
                    class="
                    card
                    card-compact
                    rounded-lg
                    min-w-48 max-w-3xl
                    shadow-2xl
                    bg-base-300/75
                    hover:cursor-pointer
                    hover:bg-base-300
                    group

                "
                >
                    <div class="card-body flex flex-col items-center gap-8">
                        <div class="avatar">
                            <div
                                class="w-42 rounded-full shadow shadow-2xl shadow-base-300"
                            >
                                <img
                                    src={item.image}
                                    alt="{item.name} profile picture"
                                />
                            </div>
                        </div>

                        <div class="w-full">
                            <h3
                                class="font-bold text-white whitespace-nowrap text-ellipsis overflow-hidden"
                            >
                                {item.name}
                            </h3>
                            <p class="">
                                {item.genre === "Unknown" || item.genre === "unknown" ? " " : item.genre }
                            </p>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
