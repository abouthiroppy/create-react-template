import test from 'ava';
import templatesRouter from '../../lib/templates-router';

test('isStateless: true, hasStyle: true', async (t) => {
  try {
    const codes = await templatesRouter('pComponent', {
      name       : 'test',
      isStateless: true,
      hasStyle   : true
    });

    codes.forEach((item) => {
      t.snapshot(item.code);
    });
  } catch (e) {
    console.log(e);
    t.fail();
  }
});

test('isStateless: false, hasStyle: false', async (t) => {
  try {
    const codes = await templatesRouter('pComponent', {
      name       : 'test',
      isStateless: false,
      hasStyle   : false
    });

    codes.forEach((item) => {
      t.snapshot(item.code);
    });
  } catch (e) {
    console.log(e);
    t.fail();
  }
});
