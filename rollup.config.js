import terser from "@rollup/plugin-terser";
import multi from "@rollup/plugin-multi-entry";

export default [
  {
    input: {
      include: ["scripts/*.js", "scripts/*/*.js"],
      exclude: ["scripts/my-names-jeff.min.js"]
    },
    output: {
      format: "esm",
      file: "scripts/my-names-jeff.min.js",
      sourcemap: true
    },
    plugins: [terser({ keep_classnames: true, keep_fnames: true }), multi()]
  }
];
