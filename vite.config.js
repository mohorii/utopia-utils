import {globSync} from "glob";
import {resolve} from "path";

const input = globSync(["src/index.{js,css,scss}"]).map(
  (path) => resolve(process.cwd(), path)
);

export default ({mode}) => ({
  root: "src",
  base: mode === "development" ? "/" : "/dist/",

  resolve: {
    alias: [{find: "@", replacement: resolve(__dirname, "src")}],
  },

  build: {
    outDir: resolve(process.cwd(), "dist/"),
    emptyOutDir: true,
    rollupOptions: {input},
  }
});
