<script lang="ts">
    import type {Log} from "../../server/src/types";
    import SvelteMarkdown from "svelte-markdown";
    import {DateTime} from "luxon";
    import {deleteLog} from "../lib/api_interface";
    import {createEventDispatcher} from "svelte";
    import {fade} from "svelte/transition";

    export let log: Log;
    const dispatch = createEventDispatcher();

    $: t = DateTime.fromMillis(log.timestamp).toLocaleString(DateTime.DATETIME_MED);

    async function _deleteLog() {
        await deleteLog(log.id)
        dispatch("delete", log);
    }
</script>

<div transition:fade={{duration:200}} class="flex w-full items-center justify-around">
    <div
            class="relative py-2 px-4 border-gray-300 border-solid  rounded-lg flex-1 m-1 shadow-md"
            style="border-width: 1.5px;"
    >
        <SvelteMarkdown source={log.text}/>
        <svg on:click={_deleteLog}
             class="opacity-0 hover:text-red-400 hover:opacity-100 hover:bg-red-200 rounded-full hover:bg-opacity-20 active:bg-opacity-30 active:bg-red-500 p-1 absolute bottom-0 mb-1 mr-1 right-0"
             height="24px"
             viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
        </svg>
    </div>
    <div class="px-6 text-gray-400 text-xs"><i>{t}</i></div>
</div>
