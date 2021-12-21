import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";
import alias from "rollup-plugin-alias";
import dotenv from "dotenv";
import replace from "@rollup/plugin-replace";

dotenv.config();

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    replace({
      SVELTE_APP_API_KEY: JSON.stringify(process.env.SVELTE_APP_API_KEY),
      SVELTE_APP_AUTH_DOMAIN: JSON.stringify(
        process.env.SVELTE_APP_AUTH_DOMAIN
      ),
      SVELTE_APP_PROJECT_ID: JSON.stringify(process.env.SVELTE_APP_PROJECT_ID),
      SVELTE_APP_STORAGE_BUCKET: JSON.stringify(
        process.env.SVELTE_APP_STORAGE_BUCKET
      ),
    }),
    svelte(require("./svelte.config")),

    css({ output: "bundle.css" }),

    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    !production && serve(),

    !production && livereload("public"),

    production && terser(),

    alias({
      resolve: [".svelte", ".js"], //optional, by default this will just look for .js files or folders
      entries: [{ find: "@", replacement: "src/" }],
    }),
  ],
  watch: {
    clearScreen: false,
  },
};
