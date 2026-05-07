module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/brand");
  eleventyConfig.addPassthroughCopy("src/vendor");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/papers/*.pdf");
  eleventyConfig.addPassthroughCopy("src/papers/*.png");
  eleventyConfig.addPassthroughCopy("src/papers/*.jpg");
  eleventyConfig.addPassthroughCopy("src/papers/*.svg");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
  };
};
