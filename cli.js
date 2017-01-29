#!/usr/bin/env node
'use strict';
const meow = require('meow');
const manageWifi = require('manage-wifi');

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

switch (command) {
	case 'on':
	case 'off':
	case 'toggle':
	case 'restart':
		manageWifi[command]();
		break;
	case 'status':
		manageWifi.isOn().then(isOn => {
			console.log(isOn ? 'on' : 'off');
		});
		break;
	case 'device':
		manageWifi.device().then(console.log);
		break;
	default:
		cli.showHelp();
}
