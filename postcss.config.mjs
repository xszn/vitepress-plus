import { postcssIsolateStyles } from "vitepress";

export default {
  plugins: [
    postcssIsolateStyles({
      includeFiles: [/custom\.css/], // 默认为 [/vp-doc\.css/, /base\.css/]
    }),
  ],
};
