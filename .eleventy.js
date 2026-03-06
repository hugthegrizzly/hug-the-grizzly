const { DateTime } = require("luxon"); // Import Luxon plugin to reformat dates
module.exports = function(eleventyConfig) { // Function to export src into public

    // Include these folders in public export
    eleventyConfig.addPassthroughCopy("src/style.css"); 
    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addFilter("postDate", (dateObj) => { // Add custom 11ty filter to reformat dates (using Luxon)
        return DateTime.fromJSDate(dateObj).toFormat('d LLL yyyy') // Take YAML date and format it
    });

    eleventyConfig.addCollection("recentPost", (collectionsApi) =>
    {
        return collectionsApi.getFilteredByTag("post").reverse().slice(0,3); // Use 11ty's collections object and its methods to filter by the "post" tag, reverse it's chronological order, and limit (aka slice) the resulting array
    });

    return {

        dir: {
            input: 'src', // Source site
            output: '_public', // Public site export
            includes: '_partials', // Partials AKA components/slices/snippets
            layouts: '_layouts', // Layouts AKA templates
        },
        cleanOutputDir: true // 
    };

};