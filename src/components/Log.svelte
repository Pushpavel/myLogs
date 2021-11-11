<script lang="ts">
    import type { Log } from "../../server/src/types";
    import SvelteMarkdown from "svelte-markdown";
    import { DateTime } from "luxon";
    export let log: Log;
    $: t = DateTime.fromMillis(log.timestamp).toLocaleString(DateTime.DATETIME_MED);
</script>

<div class="flex w-full items-center justify-around">
    <div
        class=" py-2 px-4 border-gray-300 border-solid  rounded-lg flex-1 m-1 shadow-md"
        style="border-width: 1.5px;"
    >
        <SvelteMarkdown source={log.text} />
    </div>
    <div class="px-6 text-gray-400 text-xs"><i>{t}</i></div>
</div>
