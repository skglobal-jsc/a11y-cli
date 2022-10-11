#!/usr/bin/env node
import inquirer from 'inquirer';

import { writeFileSync } from 'fs';
import { A11yConverter } from 'a11y-converter';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter the URL of the page you want to convert:',
      default: 'https://skg-development-dev.s3.ap-southeast-1.amazonaws.com/public/original.html',
    },
    {
      type: 'input',
      name: 'output',
      message: 'Enter the output file name:',
      default: 'output.html',
    },
  ])
  .then(async (answers) => {
    const { url, output } = answers;
    const converter = new A11yConverter();
    const { html } = await converter.convert({ url, method: 'GET' });

    writeFileSync(output, html);
  });
