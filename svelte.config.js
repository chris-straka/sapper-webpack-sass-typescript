const sveltePreprocess = require("svelte-preprocess");

module.exports.preprocess = sveltePreprocess({
  postcss: {
    plugins: [require("autoprefixer")]
  },
  scss: true,
  typescript: true
});

// I have this in a separate file because it stops Vscode IDE errors.
// See https://github.com/kaisermann/svelte-preprocess#my-vs-code-is-displaying-a-lot-of-errors-on-my-templates-when-i-try-to-use-x
