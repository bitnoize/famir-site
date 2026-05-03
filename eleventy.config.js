import tailwindcss from 'eleventy-plugin-tailwindcss-4'
//import eleventyNavigationPlugin from '@11ty/eleventy-navigation'

export default (eleventyConfig) => {
  //eleventyConfig.addPlugin(eleventyNavigationPlugin)

  eleventyConfig.addPlugin(tailwindcss, {
    input: 'styles/main.css',
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
