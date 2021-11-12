<!--suppress CommaExpressionJS -->
<script lang="ts">
    import EditableLog from "./components/EditableLog.svelte";
    import Log from "./components/Log.svelte";
    import {getLogs} from "./lib/api_interface";
    import {onMount} from "svelte";
    import FilterSection from "./components/FilterSection.svelte";
    import SkeletonLoader from "./components/SkeletonLoader.svelte";

    let refreshPromise: Promise<Log[]> = null;
    let search = "";
    let startDate = null
    let endDate = null

    // retrieves logs from the server and updates the logs array
    async function refreshLogs() {
        refreshPromise = getLogs({
            text: search.trim(),
            startTime: startDate,
            endTime: endDate,
            descending: true,
        });
    }

    $: search, startDate, endDate, refreshLogs();

    // initial refresh
    onMount(refreshLogs);
</script>

<EditableLog on:apply={refreshLogs}/>
<FilterSection bind:search bind:startDate bind:endDate/>


{#await refreshPromise}
    <SkeletonLoader/>
{:then logs}
    {#each logs ?? [] as log}
        <Log {log}/>
    {/each}
{/await}


<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
