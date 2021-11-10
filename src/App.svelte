<script lang="ts">
    import EditableLog from "./components/EditableLog.svelte";
    import Log from "./components/Log.svelte";
    import {getLogs} from "./lib/api_interface";
    import {onMount} from "svelte";

    let logs = []
    let refreshPromise = null

    async function refreshLogs() {
        const p = getLogs()
        refreshPromise = p
        const l = await p
        if (p == refreshPromise) {
            logs = l
            refreshPromise = null
        }
    }

    onMount(refreshLogs)
</script>

<main>
    <EditableLog on:apply={refreshLogs}/>
    <!--    Filter-->
    {#each logs as log}
        <Log log={log}/>
    {/each}
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