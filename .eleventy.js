module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("styles/main.css");
    eleventyConfig.addPassthroughCopy("styles/flexbox.css");
    eleventyConfig.addPassthroughCopy("styles/grid.css");
<<<<<<< HEAD
    eleventyConfig.addPassthroughCopy("styles/tailwind.css");
 };
=======
};
>>>>>>> 6e0104cbe9bc8a2d37b4094f2cd6f88e0cb52d92
