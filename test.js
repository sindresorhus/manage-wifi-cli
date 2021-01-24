import test from 'ava';
import execa from 'execa';

if (process.env.CI) { // CI doesn't have Wi-Fi
	test('ci', t => {
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
