# project-concert-now-example

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 練習用專案請盡量使用

### 如何新增自己的網頁:

1. 請在./src/components資料夾下先新增一個資料夾(預計和頁面名稱一樣)，然後建立.vue檔案(名稱隨意,數量由你決定)
2. 到./src/views資料夾新增一個XXXVView.vue檔案(名稱隨意)，並將剛剛創的資料夾內的component import進來使用
3. 到./src/router的index.js中的routes屬性下依照home或about物件新增相同格式的物件(注意要先import 你剛剛建立的component)
4. 在App.vue中<nav>標籤下新增一個<RouterLink to="/路徑">自定義路徑名稱</RouterLink>
5. 到首頁點擊連結是否可以運作就OK了

### 註冊component時出現警告該怎麼辦?

詳細請看這個網站  
[eslint.vuejs.org - Multi-Word Component Names](https://eslint.vuejs.org/rules/multi-word-component-names.html)  
主要注意式雙駝峰式命名ex: ExampleComponent 或是 example-component  
可以的話增加name屬性

### tailwind

請先安裝 vscode插件 Tailwind CSS IntelliSense  
可以節省很多查詢語法的時間  
注意: 要寫全域css的話請到 ./assets/scss/style.scss  
打開style.scss有報錯的話請打開settings搜尋css點擊左邊SCSS(Sass)選項，然後找到  
SCSS › Lint: Unknown At Rules  
請設為ignore

[客製化class官方文件教學]https://tailwindcss.com/docs/adding-custom-styles

### windows 注意事項

由於winodows和Linux和Mac的預設換行符號不同會導致eslint報錯而且無法處理  
所以請先在終端機設定

```
<!--統一換行符號為 LF-->
git config --global core.eol lf
```

其他設定可以看這個  
https://blog.cwlove.idv.tw/multi-platform-lf-crlf/  
詳細原因請看  
https://blog.opasschang.com/confusing-git-autocrlf/

### axios與api

請在選項式API啟用 (寫法可以看./src/components/TestComponent.vue)

```js
inject: ["http", "path"];
```

在選項上新增上面的語法後面就可以透過this.path取得物件了

### 為何要使用封裝的axios

因為可以直接做基本設定減少重複的程式碼  
這個專案封裝的名字是http，使用http基本路徑為http://localhost:3000 (開發環境在.env.development中設定)  
並且對requset和response做攔截  
有登入的情況下，設定帶token，如後面都不需要進行此設定  
有錯誤的情況下會自動跳sweetalert的錯誤通知

#### 使用方法

http.方法(路徑名)  
想要獲得單一物件請加上/id， 其他路徑參照[json-server官方文檔](https://github.com/typicode/json-server)  
請注意路徑不需要加http://localhost:3000  
若你的API並不來自json-server請直接使用原本的axios方法

範例

```js
// async methods
async getConcerts() {
    try {
        const res = await this.http.get(this.path.concerts);
        this.concerts = res.data;
      } catch (err) {
        // console.log(err);
      }
},
// or
getConcerts() {
    this.http
        .get(this.path.concerts)
        .then((res) => {
          this.concerts = res.data;
        })
        .catch((err) => {
          // console.log(err);
        });
    },
```

### 如何新增自己的路徑

請直接到./src/api/index.js的path物件下新增你客製的路徑  
也可以直接新增變數但要記得export

### 套件

#### vue

- vue-rounter 路由
- pinia 狀態管理

#### 其他

- aos
- axios
- sweetalert2
- gh-pages
