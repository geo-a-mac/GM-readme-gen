// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  [Description](https://github.com/geo-a-mac/GM-readme-gen/blob/main/README.md#Description)
  [Installation](https://github.com/geo-a-mac/GM-readme-gen/blob/main/README.md#Installation)
  [Usage](https://github.com/geo-a-mac/GM-readme-gen/blob/main/README.md#Usage)
  [License](https://github.com/geo-a-mac/GM-readme-gen/blob/main/README.md#License)
  [Contributing](https://github.com/geo-a-mac/GM-readme-gen/blob/main/README.md#Contributing)
  [Tests](https://github.com/geo-a-mac/GM-readme-gen/blob/main/README.md#Tests)
  [Questions](https://github.com/geo-a-mac/GM-readme-gen/blob/main/README.md#Questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
