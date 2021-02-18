// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (data) {
    case "Apache":
      badge =
        "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
    case "GNU":
      badge =
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "MIT":
      badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "BSD":
      badge =
        "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
      break;
    case "Unlicense":
      badge =
        "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
      break;
    default:
      badge = "";
      break;
  }
  return badge;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
