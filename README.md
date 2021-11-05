# webpack-kill-process-on-end


If your webpack didn't kill the process in terminal, you may need this.

This plugin can kill webpack process in terminal.

Just add it into the webpack plugin list ( usually in a config file ), It can take effect.



```javascript
const webpackKillProcess = require('webpack-kill-process');
{
    plugins: [
		// ... your plugins here
        webpackKillProcess
	]
}
```

