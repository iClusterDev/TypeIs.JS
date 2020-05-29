import path from "path";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

export default [
  {
    // esm → typeis.js
    input: "./src/index.js",
    plugins: [resolve(), babel({ babelHelpers: "bundled", exclude: "node_modules/**" })],
    output: {
      file: "typeis.js",
      format: "es",
    },
  },
  {
    // common js → typeis.cjs.js
    input: "./src/index.js",
    plugins: [resolve(), babel({ babelHelpers: "bundled", exclude: "node_modules/**" })],
    output: {
      file: "typeis.cjs.js",
      format: "cjs",
    },
  },
  {
    // umd → dist/typeis.js (minified)
    input: "./src/index.js",
    plugins: [resolve(), commonjs(), babel({ babelHelpers: "bundled", exclude: "node_modules/**" }), uglify()],
    output: {
      name: "typeis",
      file: path.join("dist", `typeis.min.js`),
      format: "umd",
    },
  },
];
