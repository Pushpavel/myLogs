<script>
    export let search = ""
    let timer = null

    function debounce(e) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            search = e.target.value
        }, 100)
    }
</script>
<input on:keyup={debounce}>