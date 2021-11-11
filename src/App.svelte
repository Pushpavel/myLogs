<!--suppress CommaExpressionJS -->
<script lang="ts">
    import EditableLog from "./components/EditableLog.svelte";
    import Log from "./components/Log.svelte";
    import { getLogs } from "./lib/api_interface";
    import { onMount } from "svelte";
    import SearchBar from "./components/SearchBar.svelte";
    import Litepicker from "litepicker";
import SkeletonLoader from "./components/SkeletonLoader.svelte";

    let refreshPromise: Promise<Log[]> = null;
    let search = "";
    let litepicker = null;
    // retrieves logs from the server and updates the logs array
    async function refreshLogs() {
        refreshPromise = getLogs({
            text: search,
        });
    }

    $: search, refreshLogs();

    // initial refresh
    onMount(() => {
        refreshLogs();
        const picker = new Litepicker({
            element: litepicker,
            setup: (picker) => {
                picker.on("button:apply", (date1, date2) => {
                    
                });
            },
        });
    });
</script>

<button bind:this={litepicker}>Calender</button>

<EditableLog on:apply={refreshLogs} />
<SearchBar bind:search />


{#await refreshPromise}
<SkeletonLoader/>
{:then logs}
    {#each logs ?? [] as log}
        <Log {log} />
    {/each}
{/await}


<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
