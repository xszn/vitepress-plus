// https://vitepress.dev/zh/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import Ads from "./components/Ads.vue";
import "./style.css";
import "./custom.css";

// 利用 Vite 的 glob 导入功能来自动注册一个组件目录
const modules = import.meta.glob("./components/*.vue", {
  eager: true,
  import: "default",
});

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/zh/guide/extending-default-theme#layout-slots
      "aside-ads-after": () => h(Ads),
    });
  },
  enhanceApp({ app }) {
    for (const path in modules) {
      const name = path.split("/").pop().replace(".vue", "");

      app.component(name, modules[path]);
    }
  },
};
