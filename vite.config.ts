import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import { componentTagger } from "lovable-tagger"
import { viteStaticCopy } from "vite-plugin-static-copy" // ✅ เพิ่มตรงนี้

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    viteStaticCopy({                             // ✅ เพิ่มตรงนี้
      targets: [
        {
          src: "public/sitemap.xml",             // หรือใช้ sitemap.txt ก็ได้
          dest: "",                              // วางที่ root ของ build (dist/)
        },
        {
          src: "public/robots.txt",              // แถม robots.txt ไปด้วยเลย
          dest: "",
        },
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
