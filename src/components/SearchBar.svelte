<script lang="ts">
    export let search = ""
    let timer = null
    let input: HTMLInputElement = null

    function debounce(e) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            search = e.target.value
        }, 100)
    }
</script>
<div class="flex relative w-1/2 m-4">
     <span on:click={()=>input.focus()}
           class="border-solid rounded-l-md inline-flex  items-center px-3 border-t border-r-0 bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor"><path
                d="M0 0h24v24H0V0z" fill="none"/><path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
    </span>
    <input on:keyup={debounce} bind:this={input} placeholder="Search"
           class="w-1/2 border-solid rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
</div>

<style>
    span {
        @apply hover:bg-gray-50;
    }
</style>