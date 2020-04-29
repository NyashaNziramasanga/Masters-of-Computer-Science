/**
 *
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
      message: 'Enter a week by number [0-9]',
    },
    {
      type: 'text',
      name: 'weekSlug',
      message: 'Enter a this weeks topic as a slug [intro-to-it]',
    },
  ];

  (async () => {
    // Ask questions to get information for the creating files directory
    const response = await prompts(questions);
    const weekFolderName = `Week${response.weekNumber}-${response.weekSlug}`;
    const coursePath = path.join(
      __dirname,
      `${response.courseFolderName}/${weekFolderName}`
    );

    const imageFolderPath = `${coursePath}/images`;
    const notesFilePath = `${coursePath}/week${response.weekNumber}-notes.md`;
    // Create folder with the Week number and slug
    fs.mkdir(coursePath, () => {
      console.log(`✅ ${weekFolderName} has been created`);
      // Create images folder
      fs.mkdir(imageFolderPath, () => {
        console.log(`✅Image folder created.`);
      });
      // Created week.notes.md file
      fs.writeFile(notesFilePath, response.weekFolderName, () => {
        if (err) throw err;
        console.log(notesFilePath);
        console.log(`✅ week${response.weekNumber} file created.
      🔥 Set up completed 🔥`);
      });
    });
  })();
});

// Created week x notes.md
// Commit to GitHub
