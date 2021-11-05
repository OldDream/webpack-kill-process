export default {
  apply: (compiler) => {
    compiler.hooks.done.tap('webpack-kill-process-plugin', () => {
      console.log('Compile is done !')
      setTimeout(() => {
        process.exit(0)
      })
    });
  }
}