import test from 'ava';
import templatesRouter from '../../lib/templates-router';

test('container', async (t) => {
  try {
    const code = await templatesRouter('cComponent', {
      name: 'test'
    });

    t.is(code.name, 'test.js');
    t.snapshot(code.code);
  } catch (e) {
    console.log(e);
    t.fail();
  }
});
