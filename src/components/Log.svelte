<script lang="ts">
    import type {Log} from "../../server/src/types";
    import SvelteMarkdown from 'svelte-markdown'

    export let log: Log;
</script>
<div>
    <SvelteMarkdown source={log.text}/>
</div>