#!/usr/bin/env node
import inquirer from 'inquirer';

import { writeFileSync } from 'fs';
import { fromUrl } from 'htmltiny';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter the URL of the page you want to convert:',
      default:
        'https://skg-development-dev.s3.ap-southeast-1.amazonaws.com/public/original.html',
    },
    {
      type: 'input',
      name: 'contentSelector',
      message: 'Enter the selector of the content you want to scrap:',
      default: 'main',
    },
    {
      type: 'input',
      name: 'output',
      message: 'Enter the output file name:',
      default: 'output.html',
    },
  ])
  .then(async (answers) => {
    const { url, output, contentSelector } = answers;
    console.log('Converting...', contentSelector);
    const html = await fromUrl({
      url,
      opt: {
        contentSelectors: [contentSelector],
        url,
      },
    });

    writeFileSync(output, html);
  });
