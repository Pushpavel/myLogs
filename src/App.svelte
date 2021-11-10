<!--suppress CommaExpressionJS -->
<script lang="ts">
    import EditableLog from "./components/EditableLog.svelte";
    import Log from "./components/Log.svelte";
    import {getLogs} from "./lib/api_interface";
    import {onMount} from "svelte";
    import SearchBar from "./components/SearchBar.svelte";

    let refreshPromise: Promise<Log[]> = null
    let search = ""

    // retrieves logs from the server and updates the logs array
    async function refreshLogs() {
        refreshPromise = getLogs({
            text: search
        })
    }

    $:search, refreshLogs()

    // initial refresh
    onMount(refreshLogs)
</script>

<main>
    <EditableLog on:apply={refreshLogs}/>
    <SearchBar bind:search/>
    {#await refreshPromise}
        Loading...
    {:then logs}
        {#each logs ?? [] as log}
            <Log log={log}/>
        {/each}
    {/await}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>