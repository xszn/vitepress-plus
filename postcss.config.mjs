import { postcssIsolateStyles } from "vitepress";

export default {
  plugins: [
    postcssIsolateStyles({
      includeFiles: [/vp-doc\.css/, /base\.css/, /custom\.css/], // 默认为 [/vp-doc\.css/, /base\.css/]
    }),
  ],
};
