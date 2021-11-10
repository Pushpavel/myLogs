<script>
    import {insertLog} from "../lib/api_interface";

    let value = ""

    function onSubmit(e) {
        if (value && e.keyCode === 13) {
            e.preventDefault()
            insertLog({text: value})
            value = ""
        }
    }
</script>
<textarea bind:value on:keydown={onSubmit}></textarea>