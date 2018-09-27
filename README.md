# Using Typescript in Weex

Read [*Typescript Support*](https://vuejs.org/v2/guide/typescript.html) and configure your project, then using [`weex-loader`](https://github.com/weexteam/weex-loader) instead of [`vue-loader`](https://github.com/vuejs/vue-loader) in the webpack config.

> Make sure the version of weex-loader is equal to or greater than `v0.7.12`.

## Try it out

1. Install deps:

```bash
npm install
```

2. Build

```bash
npm run build
```

Then the compiled file will be generated to the `dist/` folder.

3. Start a local server

```bash
npm run serve
```

It will start a local server which listens *12580* port, you can visit the js bundle by `http://localhost:12580/dist/index.min.js`. If you want visit this file on your phone, you should replace the `localhost` to your IP address.

> For some apps, you may have to pass special query to identify the url as a weex page, such as `http://tb.cn?_wx_tpl=http://localhost:12580/dist/index.min.js`.

**Short Cut**:

```bash
npm start
```

Indeed, it just run `npm run build` and `npm run serve`.
