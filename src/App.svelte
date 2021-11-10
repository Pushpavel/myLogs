<script lang="ts">
    import EditableLog from "./components/EditableLog.svelte";
    import Log from "./components/Log.svelte";

    let logs = []

</script>

<main>
    <EditableLog/>
    <!--    Filter-->
    {#each logs as log}
        <Log/>
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