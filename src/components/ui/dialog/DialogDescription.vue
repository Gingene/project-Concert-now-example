<script setup>
import { DialogDescription } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false },
});
</script>

<template>
  <DialogDescription
    v-bind="props"
    :class="cn('text-slate-500 text-sm dark:text-slate-400', props.class)"
  >
    <slot />
  </DialogDescription>
</template>
