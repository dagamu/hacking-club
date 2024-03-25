module.exports = {
  semi: true,
  trailingComma: "all",
  useTabs: true,
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: [".*", "*.json", "*.md", "*.toml", "*.yml"],
      options: {
        useTabs: false,
      },
    },
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
