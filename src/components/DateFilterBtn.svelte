<script lang="ts">
    import Litepicker from "litepicker";
    import {onMount} from "svelte";
    import {DateTime} from "litepicker/dist/types/datetime";
    import Chip from "./Chip.svelte";

    export let startDate: number;
    export let endDate: number;

    let buttonRef: HTMLElement = null
    let picker: Litepicker = null

    onMount(() => {
        picker = new Litepicker({
            element: buttonRef,
            singleMode: false,
            setup: (p) => {
                p.on("selected", (date1: DateTime, date2: DateTime) => {
                    startDate = date1?.toJSDate()?.getTime()
                    endDate = date2?.toJSDate()?.getTime()
                });
            },
        })
    })

    function clearPickerDate(start: boolean) {
        if (start) {
            picker.setStartDate(null)
            startDate = null
        } else {
            picker.setEndDate(null)
            endDate = null
        }
    }
</script>
{#if startDate != null}
    <Chip isFrom timestamp={startDate} click={()=>picker.show()}
          close={()=>clearPickerDate(true)}/>
{/if}
{#if endDate != null}
    <Chip timestamp={endDate} click={()=>picker.show()}
          close={()=>clearPickerDate(false)}/>
{/if}
<button on:click={()=>picker.show()}
        class="mx-2 px-3 hover:bg-gray-50 border-solid rounded-md inline-flex  items-center border bg-white border-gray-300 shadow-sm text-sm"
        bind:this={buttonRef}>
    <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
         fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"/>
    </svg>
</button>