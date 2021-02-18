// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown(data){
  let license = data.license;
  console.log(license);
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
function renderLicenseLink(license) {
  switch (data) {
  case "Apache":
    link = "https://opensource.org/licenses/Apache-2.0";
    break;
  case "GNU":
    link = "https://www.gnu.org/licenses/gpl-3.0";
    break;
  case "MIT":
    link = "https://opensource.org/licenses/MIT";
    break;
  case "BSD":
    link = "https://opensource.org/licenses/BSD-3-Clause";
    break;
  case "Unlicense":
    link = "http://unlicense.org/";
    break;
  default:
    link = "";
    break;
}
return link;}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
};
module.exports = generateMarkdown;
