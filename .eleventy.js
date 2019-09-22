module.exports = function(config) {
  
  config.addPassthroughCopy('src/css');

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
}
