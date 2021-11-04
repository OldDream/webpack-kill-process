export default {
  apply: (compiler) => {
    compiler.hooks.done.tap('DonePlugin', () => {
      console.log('Compile is done !')
      setTimeout(() => {
        process.exit(0)
      })
    });
  }
}