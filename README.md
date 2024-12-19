# 🚀 Web Project Demo - Final Project

![GitHub repo size](https://img.shields.io/github/repo-size/XiaoHoSheng/Web_Project_Demo)
![GitHub last commit](https://img.shields.io/github/last-commit/XiaoHoSheng/Web_Project_Demo)
![GitHub stars](https://img.shields.io/github/stars/XiaoHoSheng/Web_Project_Demo?style=social)
![GitHub issues](https://img.shields.io/github/issues/XiaoHoSheng/Web_Project_Demo)
![GitHub forks](https://img.shields.io/github/forks/XiaoHoSheng/Web_Project_Demo?style=social)
![GitHub license](https://img.shields.io/github/license/XiaoHoSheng/Web_Project_Demo)

---

## 📚 Table of Contents

- [📖 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [🌐 Live Demo](#-live-demo)
- [🎥 Demo Video](#-demo-video)
- [📷 Screenshots](#-screenshots)
- [🚧 Challenges and Solutions](#-challenges-and-solutions)
- [🛠 Installation](#-installation)
  - [Local Setup](#local-setup)
  - [Using Node.js](#using-nodejs)
- [📂 Project Structure](#-project-structure)
- [📝 File Descriptions](#-file-descriptions)
- [🔧 Recommended Tools](#-recommended-tools)
- [🎓 What I Learned](#-what-i-learned)
- [🚀 Future Improvements](#-future-improvements)
- [🤝 Contributing](#-contributing)
- [👥 Contributors](#-contributors)
- [📜 License](#-license)
- [⚠️ Disclaimer](#-disclaimer)

---

## 📖 Project Overview

Welcome to the **Web Project Demo**! This project showcases a multi-page static website built with **HTML5**, **CSS3**, and **JavaScript**. It features structured navigation, interactive content, and a clean, responsive design. Whether you're browsing chapters, taking a quiz, or exploring the layout, this project highlights modern web development practices.

---

## ✨ Features

- **Structured Content**: Multiple pages, including Cover Page, Table of Contents, and Chapters.
- **Interactive Quiz**: JavaScript-powered quiz functionality with real-time feedback.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Clean Layout**: Organized design using modular CSS.
- **Easy Navigation**: Table of Contents for intuitive exploration.
- **Maintainable Code**: Organized directories for scripts, styles, and images.

---

## 🛠️ Tech Stack

This project was built using the following technologies:

- **HTML5**: Semantic structure and accessibility.
- **CSS3**: Responsive design and modular styling.
- **JavaScript**: DOM manipulation and interactive functionalities.
- **Node.js**: Local server for development and testing.
- **Tools**: Visual Studio Code, Live Server, and npm.

---

## 🌐 Live Demo

Experience the live project here: [**Live Demo**](#)

---

## 🎥 Demo Video

Watch the project walkthrough: [**Demo Video**](#)

---

## 📷 Screenshots

Here are a few key highlights of the project:

![Cover Page](img/logo.jpg)
*Elegant and clean cover page design.*

![Interactive Quiz](img/quiz-page.jpg)
*JavaScript-powered quiz for user interaction.*

![Responsive Layout](img/responsive-design.jpg)
*Fully responsive layout for desktop and mobile.*

More screenshots can be found in the `img/` folder.

---

## 🚧 Challenges and Solutions

- **Challenge**: Creating an interactive quiz with instant feedback for users.
  - **Solution**: Utilized JavaScript event listeners to dynamically validate answers and update the UI.

- **Challenge**: Ensuring responsiveness across multiple devices.
  - **Solution**: Implemented CSS media queries and a flexible grid layout to adapt to different screen sizes.

- **Challenge**: Maintaining clean and modular code for scalability.
  - **Solution**: Separated concerns by organizing CSS, JavaScript, and HTML files into respective folders.

---

## 🛠 Installation

### Local Setup

<details>
<summary>Click to expand</summary>

1. **Clone the repository**:
   ```bash
   git clone https://github.com/XiaoHoSheng/Web_Project_Demo.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd Web_Project_Demo
   ```

3. **Open in browser**:
   - Locate the `index.html` file and open it in a browser.

4. **Optional**: Use Live Server for better testing:
   - Install the **Live Server** extension in Visual Studio Code.
   - Right-click `index.html` -> **Open with Live Server**.

</details>

### Using Node.js

<details>
<summary>Click to expand</summary>

1. **Ensure Node.js and npm are installed**:
   ```bash
   node -v
   npm -v
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local server**:
   ```bash
   npm start
   ```

4. **Access the project**:
   Visit `http://localhost:3000` in your browser.

</details>

---

## 📂 Project Structure

Here is the organized folder structure:

```
Web_Project_Demo/
├── JavaScript/
│   └── Quiz.js              # JavaScript functionality for the quiz
├── Process Journal Jason Yang/
│   └── Process Journal.pdf  # Project documentation
├── StyleSheet/
│   ├── About Page.css
│   ├── Chapter One.css
│   ├── Chapter Two.css
│   ├── Cover Page.css
│   ├── Quiz.css
│   └── Table Of Contents.css
├── img/                     # Images and assets
│   ├── logo.jpg
│   ├── download.png
│   └── ...
├── About Page.html
├── Chapter One.html
├── Chapter Two.html
├── Cover Page.html
├── Quiz.html
├── Table Of Contents.html
└── README.md
```

---

## 📝 File Descriptions

| File/Folder                  | Description                               |
|------------------------------|-------------------------------------------|
| **JavaScript/Quiz.js**       | Contains JavaScript functionalities, such as quiz logic. |
| **Process Journal Jason Yang.pdf** | Documentation of the project's development process.   |
| **StyleSheet/*.css**         | CSS files corresponding to individual HTML pages.        |
| **.html Files**              | Define the content and structure of the web pages.       |
| **img/**                     | Directory for storing images used in the project.        |

---

## 🔧 Recommended Tools

To work efficiently with this project, it is recommended to use **Visual Studio Code (VSCode)** as your code editor. VSCode offers features like syntax highlighting, extensions, and live server plugins that enhance the development experience.

- Download Visual Studio Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Recommended Extension: **Live Server** for real-time preview of HTML changes.

---

## 🎓 What I Learned

Through this project, I gained experience in:

- Creating modular and maintainable front-end code.
- Implementing responsive design for multi-device support.
- Using JavaScript to add interactivity to web pages.
- Setting up local development servers using Node.js and Live Server.
- Optimizing project structure for scalability.

---

## 🚀 Future Improvements

Planned enhancements for this project include:

- Adding a timer and score summary to the quiz.
- Improving accessibility with ARIA roles and keyboard navigation.
- Integrating a backend for quiz result storage.
- Deploying the project to a platform like Netlify or Vercel.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
3. **Make your changes and commit**:
   ```bash
   git add .
   git commit -m "Add new feature"
   ```
4. **Push your changes**:
   ```bash
   git push origin feature-branch
   ```
5. **Open a pull request**:
   - Go to the repository on GitHub.
   - Click on **Pull Requests**.
   - Submit your changes for review.

---

## 👥 Contributors

Thank you to the following contributors for their support:

- [XiaoHoSheng](https://github.com/XiaoHoSheng) - Project creator and maintainer

Feel free to contribute and add your name here!

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and share.

---

## ⚠️ Disclaimer

This project is created for educational and demonstration purposes only. It is not intended for production use.

---

Thank you for checking out the **Web Project Demo**! If you have questions or feedback, feel free to open an issue or contribute. 🚀
