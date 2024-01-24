<script setup>
import { ComboboxSeparator } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
</script>

<template>
  <ComboboxSeparator
    v-bind="props"
    :class="cn('-mx-1 h-px bg-slate-200 dark:bg-slate-800', $attrs.class ?? '')"
  >
    <slot />
  </ComboboxSeparator>
</template>
