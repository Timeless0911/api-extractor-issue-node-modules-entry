const fs = require("fs-extra");

const sourceDir = "./dist";
const targetDir = "./node_modules/.temp";

// Function to copy files recursively
async function copyFilesRecursive(source, target) {
  try {
    await fs.copy(source, target);
    console.log(`Copied ${source} to ${target} recursively.`);
  } catch (err) {
    console.error("Error copying files recursively:", err);
  }
}

// Ensure target directory exists and copy files
fs.mkdir(targetDir, { recursive: true }, (err) => {
  if (err) {
    console.error("Error creating target directory:", err);
  } else {
    copyFilesRecursive(sourceDir, targetDir);
  }
});
