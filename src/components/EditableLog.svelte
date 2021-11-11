<script lang="ts">
    import {insertLog} from "../lib/api_interface";
    import {createEventDispatcher} from "svelte";
    import {NewLog} from "../../server/src/types";

    const dispatch = createEventDispatcher();

    let value = ""

    async function onApply(e) {
        if (value && e.keyCode === 13) {
            e.preventDefault()
            const log: NewLog = {text: value};
            value = ""
            await insertLog(log)
            dispatch("apply", log)
        }
    }
</script>
<div class="relative w-1/2 m-4 text-gray-700">
    <pre class="insideContainer" aria-hidden="true" style="min-height: 2.2em;">{value + '\n\n\n'}</pre>
    <textarea class="insideContainer absolute w-full h-full resize-none top-0" bind:value
              placeholder="Enter your log"></textarea>
</div>

<style>
    .insideContainer {
        font-family: inherit;
        box-sizing: border-box;
        padding: 1.2em;
        line-height: 1.2;
        overflow: hidden;
    }

    textarea {
        @apply flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent;
    }
</style>
