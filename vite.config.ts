import solid from "solid-start/vite";
import { defineConfig } from "vite";
import netlify from "solid-start-netlify";

// export default defineConfig({
//   // ssr: { external: ["../../.prisma/client"] },
//   plugins: [
//     solid({
//       adapter: netlify({ edge: true }),
//     }),
//   ],
// });

export default defineConfig({
  plugins: [
    solid({
      ssr: true,
      adapter: netlify({ edge: true }),
    }),
  ],
});
