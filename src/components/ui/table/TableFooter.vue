<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: String, required: false },
});
</script>

<template>
  <tfoot
    :class="
      cn(
        'bg-slate-900 font-medium text-slate-50 dark:bg-slate-50 dark:text-slate-900',
        props.class
      )
    "
  >
    <slot />
  </tfoot>
</template>
