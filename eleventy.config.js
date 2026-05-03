import tailwindcss from 'eleventy-plugin-tailwindcss-4'
//import eleventyNavigationPlugin from '@11ty/eleventy-navigation'

export default (eleventyConfig) => {
  //eleventyConfig.addPlugin(eleventyNavigationPlugin)

  eleventyConfig.addPlugin(tailwindcss, {
    input: 'styles/main.css',
  })

  eleventyConfig.addPassthroughCopy("src/favicon.ico")
  eleventyConfig.addPassthroughCopy("src/robots.txt")

  eleventyConfig.addFilter("dateToRfc3339", (date) => {
    return date ? new Date(date).toISOString() : new Date().toISOString()
  })
}

export const config = {
  htmlTemplateEngine: 'njk',
  dir: {
    input: 'src',
    output: 'dist',
    includes: '_includes',
    layouts: '_layouts',
    data: '_data',
  },
}
