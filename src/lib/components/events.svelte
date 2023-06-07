<script lang="ts">
    import type { ResponseEvents } from "../types/event";
    import { page } from '$app/stores'

    export let res: ResponseEvents[]

    // Takes time stamp and returns formatted value
    function parseDate(param: string) {
        const paramSplit = param.split("T")
        const dateSplit = paramSplit[0].split("-")
        let mon = "???"
        switch(dateSplit[1]) {
            case "01":
                mon = "Jan"
                break;
            case "02":
                mon = "Feb"
                break;
            case "03":
                mon = "Mar"
                break
            case "04":
                mon = "Apr"
                break
            case "05":
                mon = "May"
                break
            case "06":
                mon = "Jun"
                break
            case "07":
                mon = "Jul"
                break
            case "08":
                mon = "Aug"
                break
            case "09":
                mon = "Sep"
                break
            case "10":
                mon = "Oct"
                break
            case "11":
                mon = "Nov"
                break
            case "12":
                mon = "Dec"
                break;
        }
        const returnVal = {
            month: mon,
            day: dateSplit[2],
            year: dateSplit[0],
            time: paramSplit[1].split(":")[0] + ":" + paramSplit[1].split(":")[1]
        }
        return returnVal

    }

    
</script>

<!-- EVENTS -->
<div class="flex flex-col gap-4 w-full lg:w-3/5">
    {#each res as item, i}
        {#if i != 0 && parseDate(res[i-1].date).day != parseDate(item.date).day && !$page.url.pathname.includes("/a/")}
            <div class="divider"></div> 
        {/if}
        <a class="
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
            href={item.url}
            target="_blank"
        >
            <div class="card-body flex flex-row justify-between">
                <div class="flex flex-col content-between gap-4 whitespace-nowrap text-ellipsis overflow-hidden">
                    <h3 class="font-bold text-white whitespace-nowrap text-ellipsis overflow-hidden" class:text-[#ff4848]={item.source === "ra"}>
                        {item.name}
                    </h3>
                    
                    <p>{item.venue}, {item.city}</p>
                </div>

                <div class="aspect-square w-fit p-2 bg-neutral flex flex-col items-center rounded">
                    <p class="font-semibold">{parseDate(item.date).month}</p>
                    <p class="text-xl font-semibold">{parseDate(item.date).day}</p>
                </div>
            </div>
            
        </a>
    {/each}
</div>