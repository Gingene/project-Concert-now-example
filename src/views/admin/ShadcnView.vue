<script setup>
// sidebar
import { Button } from "@/components/ui/button";
// Checkbos
import { Checkbox } from "@/components/ui/checkbox";
// pagination
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";
// table
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// Command
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
// Select
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// export
</script>

<script>
import AdminSideBar from "@/components/admin/AdminSideBar.vue";
export default {
  components: { AdminSideBar },
};
</script>

<template>
  <!-- Sidebar -->
  <div class="grid grid-cols-5 gap-0 min-h-screen">
    <AdminSideBar />

    <div class="col-span-4 p-12 bg-primary">
      <!-- Logout -->
      <div class="space-x-4 text-end">
        <Button class="mb-8 ml-auto text-purple-secondary">
          <span class="material-symbols-outlined"> logout </span>登出
        </Button>
        <Button
          class="mb-8 ml-auto bg-purple-light text-purple-secondary"
          src="https://bit.ly/48MdjLA">
          <span class="material-symbols-outlined"> format_paint </span>參考版型
        </Button>
      </div>
      <!-- Search/Command -->
      <div class="grid grid-cols-5 gap-4 mb-8">
        <Select class="col-span-1">
          <SelectTrigger>
            <SelectValue placeholder="地點選擇" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel class="tracking-wide">地點選擇</SelectLabel>
              <SelectItem value="台北市"> 台北市 </SelectItem>
              <SelectItem value="台中市"> 台中市 </SelectItem>
              <SelectItem value="高雄市"> 高雄市 </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select class="col-span-1">
          <SelectTrigger>
            <SelectValue placeholder="場地選擇" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>場地選擇</SelectLabel>
              <SelectItem value="台北國際會議中心"> 台北國際會議中心 </SelectItem>
              <SelectItem value="台中 Legacy"> 台中 Legacy </SelectItem>
              <SelectItem value="高雄流行音樂中心"> 高雄流行音樂中心 </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <!-- Table -->
      <Table class="bg-white rounded-lg text-md mb-10">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow class="hover:bg-white" style="color: black !important">
            <TableHead></TableHead>
            <TableHead>表演者名稱</TableHead>
            <TableHead>演唱會標題</TableHead>
            <TableHead>演唱會日期</TableHead>
            <TableHead>演唱會地點</TableHead>
            <TableHead>收藏數</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody class="text-gray-600">
          <TableRow class="py-8">
            <TableCell class="text-purple-primary">
              <Checkbox id="terms" />
              <label
                for="terms"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              </label>
            </TableCell>
            <TableCell class="text-purple-primary">Tom Jones</TableCell>
            <TableCell>Tom Jones湯姆瓊斯演唱會2024台北站</TableCell>
            <TableCell>2024-03-12 (二) 19:30</TableCell>
            <TableCell>台北國際會議中心TICC</TableCell>
            <TableCell class="text-secondary">168,168,168</TableCell>
            <TableCell class="space-x-4">
              <span class="material-symbols-outlined">edit</span>
              <span class="material-symbols-outlined">delete</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="text-purple-primary">
              <Checkbox id="terms" />
              <label
                for="terms"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              </label>
            </TableCell>
            <TableCell class="text-purple-primary">Apink</TableCell>
            <TableCell>2023 Apink FANCONCERT in Taipei [Pink drive]</TableCell>
            <TableCell>2023-04-01 (六) 18:00</TableCell>
            <TableCell>新北工商展覽中心</TableCell>
            <TableCell class="text-secondary">34,567,890</TableCell>
            <TableCell class="space-x-4">
              <span class="material-symbols-outlined">edit</span>
              <span class="material-symbols-outlined">delete</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="text-purple-primary">
              <Checkbox id="terms" />
              <label
                for="terms"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              </label>
            </TableCell>
            <TableCell class="text-purple-primary">FTIsland</TableCell>
            <TableCell>FTISLAND演唱會2024台北站</TableCell>
            <TableCell>2024-02-18 (六) 17:00</TableCell>
            <TableCell>台北流行音樂中心</TableCell>
            <TableCell class="text-secondary">2,846,213,037</TableCell>
            <TableCell class="space-x-4">
              <span class="material-symbols-outlined">edit</span>
              <span class="material-symbols-outlined">delete</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <!-- Pagination -->
      <div class="flex justify-center">
        <Pagination v-slot="{ page }" :total="100" :sibling-count="1" show-edges :default-page="2">
          <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationFirst />
            <PaginationPrev />

            <template v-for="(item, index) in items">
              <PaginationListItem
                v-if="item.type === 'page'"
                :key="index"
                :value="item.value"
                as-child>
                <Button
                  class="w-10 h-10 p-0"
                  :variant="item.value === page ? 'default' : 'outline'">
                  {{ item.value }}
                </Button>
              </PaginationListItem>
              <PaginationEllipsis v-else :key="item.type" :index="index" />
            </template>

            <PaginationNext />
            <PaginationLast />
          </PaginationList>
        </Pagination>
      </div>
    </div>
  </div>
</template>
