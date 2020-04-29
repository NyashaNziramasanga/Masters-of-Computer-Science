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

  const listOfCourses = [];
  //listing all Folders
  folders.forEach((folder) => {
    listOfCourses.push({ title: folder, value: folder });
  });

  if (err) throw `Unable to scan directory: ${err}`;

  const questions = [
    {
      type: 'select',
      name: 'courseFolderName',
      message: 'Pick a course',
      choices: listOfCourses,
    },
    {
      type: 'number',
      name: 'weekNumber',
      message: 'Enter a week by number [0-1]',
    },
    {
      type: 'text',
      name: 'weekSlug',
      message: 'Enter a this weeks topic as a slug [intro-to-it]',
    },
  ];
  // Ask questions to get information for the creating files directory
  (async () => {
    const response = await prompts(questions);
    console.log(response);
  })();

  // Create folder Week x and add week number and name

  // try {
  //   if (!fs.existsSync(dir)) {
  //     fs.mkdirSync(dir);
  //   }
  // } catch (err) {
  //   console.error(err);
  // }
});

// Create images folder
// Created week x notes.md
// Commit to GitHub
