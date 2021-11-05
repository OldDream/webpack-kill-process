module.exports = {
  apply: (compiler) => {
    compiler.hooks.done.tap('webpack-kill-process-plugin', () => {
      console.log('webpack-kill-process-plugin >>>>>>>> Compile is done ! <<<<<<<')
      setTimeout(() => {
        process.exit(0)
      })
    });
  }
}