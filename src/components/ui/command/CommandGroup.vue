<script setup>
import { ComboboxGroup, ComboboxLabel } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  heading: { type: String, required: false },
});
</script>

<template>
  <ComboboxGroup
    v-bind="props"
    :class="
      cn(
        'overflow-hidden p-1 text-slate-950 dark:text-slate-50',
        $attrs.class ?? ''
      )
    "
  >
    <ComboboxLabel
      v-if="heading"
      class="px-2 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400"
    >
      {{ heading }}
    </ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
