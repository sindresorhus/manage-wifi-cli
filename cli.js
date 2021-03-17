#!/usr/bin/env node
import meow from 'meow';
import manageWifi from 'manage-wifi';

const cli = meow(`
	Usage
	  $ wifi <command>

	Commands
	  on       Turn Wi-Fi on
	  off      Turn Wi-Fi off
	  toggle   Toggle Wi-Fi
	  restart  Turn Wi-Fi off & on
	  status   Wi-Fi status
	  device   Wi-Fi device name

	Examples
	  $ wifi off
	  $ wifi status
	  off
	  $ wifi device
	  en0
`);

const command = cli.input[0];

(async () => {
	switch (command) {
		case 'on':
		case 'off':
		case 'toggle':
		case 'restart':
			manageWifi[command]();
			break;
		case 'status':
			console.log(await manageWifi.isOn() ? 'on' : 'off');
			break;
		case 'device':
			console.log(await manageWifi.device());
			break;
		default:
			cli.showHelp();
	}
})();
