# webpack-kill-process-on-end


If your webpack didn't kill it's process in terminal, you may need this.

This plugin can kill webpack process in terminal.

Add it into the webpack plugin list ( usually in a config file ), then it can take effect.



```javascript
const webpackKillProcess = require('webpack-kill-process');
{
    plugins: [
		// ... your plugins here
        webpackKillProcess
	]
}
```

