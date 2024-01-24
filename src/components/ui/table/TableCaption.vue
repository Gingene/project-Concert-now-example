<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: String, required: false },
});
</script>

<template>
  <caption
    :class="cn('mt-4 text-sm text-gray-900 dark:text-slate-400', props.class)"
    class="mt-4 text-sm text-gray-900 dark:text-slate-400"
  >
    <slot />
  </caption>
</template>
