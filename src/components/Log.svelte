<script lang="ts">
    import type {Log} from "../../server/src/types";
    import SvelteMarkdown from 'svelte-markdown'

    export let log: Log;
</script>
<div class=" py-2 px-4 border-gray-300 border-solid  rounded-lg w-1/2 m-1 shadow-md" style="border-width: 1.5px;">
    <SvelteMarkdown source={log.text}/>
</div>