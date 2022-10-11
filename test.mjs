import { A11yConverter } from 'a11y-converter';

import { writeFileSync } from 'fs';

(async () => {
  console.log('Hello World!');
  const converter = new A11yConverter();
  const { html } = await converter.convert({
    url: 'https://univoice-test.s3.ap-northeast-1.amazonaws.com/sample_original.html',
  });

  writeFileSync('test.html', html);
})();
