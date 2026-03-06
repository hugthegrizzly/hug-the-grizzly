module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addFilter("postDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat('dd LLL yyyy')
    })

    return {

        dir: {
        input: 'src',
        output: '_public',
        includes: '_partials',
        layouts: '_layouts',
        }
    };

};