module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/assets");

    return {

        dir: {
        input: 'src',
        output: '_public',
        includes: '_partials',
        layouts: '_layouts',
        }
    };

};