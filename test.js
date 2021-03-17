import test from 'ava';
import execa from 'execa';

if (process.env.CI) { // CI doesn't have Wi-Fi
	test('ci', t => {
		t.pass();
	});
} else {
	test('main', async t => {
		await execa('./cli.js', ['off']);

		const {stdout: status} = await execa('./cli.js', ['status']);
		t.is(status, 'off');

		await execa('./cli.js', ['on']);

		const {stdout: status2} = await execa('./cli.js', ['status']);
		t.is(status2, 'on');
	});
}
