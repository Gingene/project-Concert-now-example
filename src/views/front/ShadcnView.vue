<script lang="">
// sidebar
import { Button } from '@/components/ui/button';
// table
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
export default {
  components: { 
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Button},
  data(){
    return{
      sidebarNavItems: [
      {
        title: '分析報表',
        href: '',
      },
      {
        title: '會員管理',
        href: '',
      },
      {
        title: '評論管理',
        href: '',
      },
      {
        title: '歌單管理',
        href: '',
      },
      {
        title: '設定',
        href: '',
      },
    ]
    }
  }
};
</script>

<template>
  <!-- sidebar -->
  <div class="grid grid-cols-5 gap-0 min-h-screen">
    <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
      <Button class="text-lg p-8 text-gray-800 w-full text-left justify-start rounded-none bg-white border-e-4 border-indigo-500/100 hover:text-gray-800 hover:bg-white hover:border-e-4 hover:border-indigo-500/100">
        <span class="material-symbols-outlined pe-6">
        location_on
        </span>
        演唱會資訊管理
      </Button>
      <Button v-for="item in sidebarNavItems" 
      :class="'bg-white text-lg p-8 text-gray-400 w-full text-left justify-start rounded-none hover:text-gray-800 hover:bg-white hover:border-e-4 hover:border-indigo-500/100'">
      <span class="material-symbols-outlined pe-6">
      location_on
      </span>
      {{ item.title }}
      </Button>
    </nav>

    <!-- table -->
    <div class="col-span-4 p-12 bg-primary">
    <div class="space-x-4">
      <Button class="mb-8 ml-auto text-purple-secondary">
        <span class="material-symbols-outlined">
          logout
        </span>登出
      </Button>
      <Button class="mb-8 ml-auto bg-purple-light text-purple-secondary"
      src="https://bit.ly/48MdjLA">
        <span class="material-symbols-outlined">
          format_paint
        </span>參考版型
      </Button>
    </div>
    <Table class="bg-white rounded text-md">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
      <TableRow class=" hover:bg-white" style="color:black !important">
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
  </div>
</div>
</template>