<script>
    import {insertLog} from "../lib/insertLog";

    let value = ""

    function onSubmit(e) {
        if (value && e.keyCode === 13) {
            e.preventDefault()
            insertLog({text: value, timestamp: Date.now()})
            value = ""
        }
    }
</script>
<textarea bind:value on:keydown={onSubmit}></textarea>