import test from 'ava';
import execa from 'execa';

if (process.env.CI) { // Travis doesn't have Wi-Fi
	test('travis', t => {
		t.pass();
	});
} else {
	test('main', async t => {
		await execa('./cli.js', ['off']);
		t.is(await execa.stdout('./cli.js', ['status']), 'off');
		await execa('./cli.js', ['on']);
		t.is(await execa.stdout('./cli.js', ['status']), 'on');
	});
}
