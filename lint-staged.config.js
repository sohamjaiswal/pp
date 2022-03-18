module.exports = {
  "*.{ts,tsx,scss}": (filenames) => [
    "yarn run prettier:write",
    "yarn run prettier:check",
  ],
};
