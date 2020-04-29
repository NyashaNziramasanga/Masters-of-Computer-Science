/**
 * What it does
 * */
const path = require('path');
const fs = require('fs');
const prompts = require('prompts');

const directoryPath = path.join(__dirname);

const isDirectory = (fileName) => {
  return fs.lstatSync(fileName).isDirectory();
};

fs.readdir(directoryPath, (err, files) => {
  const folders = files.filter(isDirectory);

  const listOfFolders = [];
  //listing all Folders
  folders.forEach((folder) => {
    listOfFolders.push({ title: folder });
  });

  (async () => {
    const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'Pick a folder',
      choices: listOfFolders,
    });

    console.log(response);
  })();

  if (err) throw `Unable to scan directory: ${err}`;
});

// Choose COMP directory
// Create folder Week x and add week number and name
// Enter week folder
// Create images folder
// Created week x notes.md
// Commit to GitHub
