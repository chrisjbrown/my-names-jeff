
import setup from './hooks/setup';
import renderTokenHUD from './hooks/renderTokenHUD'

Hooks.once('setup', setup);
Hooks.on("renderTokenHUD", renderTokenHUD)