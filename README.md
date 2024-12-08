# UI Design to Code Conversion

This project is focused on converting UI designs from [UI Design Daily](https://uidesigndaily.com) into fully functional code. Each design is carefully recreated using modern front-end technologies, following best practices for responsive and accessible design.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [License](#license)

## About
UI Design to Code Conversion is an initiative to bring beautiful UI designs to life. This repository contains code implementations of various UI components and layouts inspired by the designs shared on UI Design Daily. Each design is transformed into code with a focus on maintaining the original aesthetics while ensuring responsiveness and accessibility.

## Features
- Code implementations of popular UI designs from UI Design Daily
- Responsive layouts that adapt to different screen sizes
- Accessible design considerations to ensure usability for all users
- Regular updates with new designs converted to code

## Getting Started 

### Getting Started with SCSS, SASS, and LESS

If you are new to SCSS, SASS, or LESS and do not have them installed locally, follow these steps to install and use them:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your system. You can download and install it from the official website.

### Installing SCSS/SASS
SASS is a CSS preprocessor that helps in writing maintainable and modular styles. To use it, you need to install it via npm:

1. Open your terminal.
2. Run the following command to install SASS globally:
   ```bash
   npm install -g sass
   ```

To verify the installation, run:
```bash
sass --version
```

#### How to Use SASS
- Compile a single SCSS file to CSS:
  ```bash
  sass input.scss output.css
  ```
- Automatically watch for changes and recompile:
  ```bash
  sass --watch input.scss:output.css
  ```

### Installing LESS
LESS is another CSS preprocessor, similar to SASS. To install LESS globally, use npm:

1. Open your terminal.
2. Run the following command:
   ```bash
   npm install -g less
   ```

To verify the installation, run:
```bash
lessc --version
```

#### How to Use LESS
- Compile a single LESS file to CSS:
  ```bash
  lessc input.less output.css
  ```

### Integrating SASS or LESS with the Project
If you'd like to integrate SASS or LESS into your project workflow:
1. Create `.scss` or `.less` files in your project.
2. Use the commands provided above to compile your styles into `.css` files.
3. Link the compiled `.css` files in your HTML using a `<link>` tag, e.g.:
   ```html
   <link rel="stylesheet" href="output.css">
   ```

### Notes
- If you prefer not to install globally, you can also install SASS or LESS as a dev dependency in your project using:
  ```bash
  npm install sass --save-dev
  ```
  or
  ```bash
  npm install less --save-dev
  ```

You can then run these tools using a script in your `package.json`.

For detailed documentation, refer to the official sites:
- [SASS Documentation](https://sass-lang.com/)
- [LESS Documentation](https://lesscss.org/)

## Technologies
The following technologies are used in this project:

- **HTML5** - For the structure of the components and layouts.
- **CSS3** - For styling and responsive design.
- **JavaScript** - For adding interactivity to the components.
- **SASS/SCSS** - A CSS preprocessor that adds features like variables, nesting, and mixins to streamline and modularize CSS development.
- **LESS** - Another CSS preprocessor that provides dynamic styling capabilities such as variables, mixins, and functions for easier CSS management.

## Roadmap

Currently, I am working on HTML, CSS, SASS/SCSS, Less and Javascript but in future I will be working on various technology.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
