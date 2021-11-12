<script lang="ts">

    import {DateTime} from "luxon";

    export let isFrom = false
    export let timestamp: number
    export let click: (isFrom: boolean, timestamp: number) => void = () => {
    }
    export let close: (isFrom: boolean, timestamp: number) => void = () => {
    }

    $: dateString = timestamp ? (new DateTime.fromMillis(timestamp)).toLocaleString(DateTime.DATE_MED) : "undefined"
</script>
<div class="relative flex">
    <button on:click={()=>click(isFrom,timestamp)}
            class="ml-4 pl-4 pr-2 flex items-center hover:bg-gray-50 active:bg-gray-500 active:bg-opacity-30 transition-all duration-300 border border-solid border-gray-300 bg-white rounded-md">
        <span class="text-gray-500 font-bold">{isFrom ? 'From' : 'To'} {dateString} </span>
        <span class="mx-1 ml-1" style="height: 24px;width: 24px"></span>
    </button>
    <svg on:click={()=>close(isFrom,timestamp)}
         class="absolute top-1/2 -translate-y-1/2 right-0 ml-4 text-red-400 text-sm rounded-full w-8 h-8 mx-1 p-0 hover:bg-red-400 hover:bg-opacity-20 active:bg-red-500 active:bg-opacity-40 transition-all duration-300"
         height="24px" viewBox="0 0 24 24" width="24px"
         fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M19 13H5v-2h14v2z"/>
    </svg>
</div>
