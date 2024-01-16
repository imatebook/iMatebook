import { fileURLToPath, URL } from "node:url";

export const vite = {
  resolve: {
    alias: [
      // {
      //   find: /^.*\/VPDocAsideOutline\.vue$/,
      //   replacement: fileURLToPath(
      //     new URL("../components/NativeDocAsideOutline.vue", import.meta.url)
      //   ),
      // },
      {
        find: /^.*\/VPFooter\.vue$/,
        replacement: fileURLToPath(
          new URL("../native/components/NativeFooter.vue", import.meta.url)
        ),
      },
    ],
  },
};
