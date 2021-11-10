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
<textarea bind:value on:keydown={onApply}></textarea>