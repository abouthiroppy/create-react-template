import test from 'ava';
import templatesRouter from '../../lib/templates-router';

test('store', async (t) => {
  try {
    const codes = await templatesRouter('store', {});

    codes.forEach((item) => {
      t.snapshot(item.code);
    });
  } catch (e) {
    console.log(e);
    t.fail();
  }
});
