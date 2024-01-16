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

### 如何使用:

1. 請在./src/components資料夾下先新增一個.vue檔案(名稱隨意)
2. 到./src/views資料夾新增一個XXXVView.vue檔案(名稱隨意)，並將剛剛創的component import進來使用
3. 到./src/router的index.js中的routes屬性下依照home或about物件新增相同格式的物件(注意要先import)
4. 在App.vue中<nav>標籤下新增一個<RouterLink to="/路徑">自定義路徑名稱</RouterLink>
5. 到首頁點擊連結是否可以運作就OK了

### 註冊component時出現警告該怎麼辦?

請詳細看這個網站
[eslint.vuejs.org - Multi-Word Component Names](https://eslint.vuejs.org/rules/multi-word-component-names.html)  
主要注意式雙駝峰式命名ex: ExampleComponent 或是 example-component

### tailwind

請先安裝 vscode插件 Tailwind CSS IntelliSense  
可以節省很多查詢語法的時間  
注意: 要寫全域css的話請到 ./assets/scss/style.scss  
打開style.scss有報錯的話請打開settings搜尋css點擊左邊SCSS(Sass)選項，然後找到  
SCSS › Lint: Unknown At Rules  
請設為ignore
