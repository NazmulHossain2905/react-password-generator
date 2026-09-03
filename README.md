# React Password Generator 🔐

A simple and interactive **Random Password Generator** built with **React.js and Vite**.

The application generates random passwords based on user-selected options such as password length, uppercase letters, lowercase letters, numbers, and symbols. It also keeps a history of recently generated passwords for quick reference.

## 🚀 Live Demo

👉 **[Try the Password Generator](https://a-password-generator.vercel.app/)**

## 📸 Screenshot

<img src="https://awesomescreenshot.s3.amazonaws.com/image/4975440/63252847-f93497b3381abf7d23a07890a9baaa89.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20260903%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260903T070333Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=654d0c88d677d83217f7c7a1a21219e28c0fe6014cb71bab430ebb484ea9f9de" alt="React Password Generator" width="100%">

## ✨ Features

* 🔐 Generate random passwords
* 📏 Customize password length
* 🔠 Include uppercase letters
* 🔡 Include lowercase letters
* 🔢 Include numbers
* 🔣 Include symbols
* ⚡ Automatically generate a new password when controller settings change
* 📋 Display generated password
* 🕘 Maintain password generation history
* 📚 Store up to 5 recently generated passwords in the current session
* 🧩 Component-based React architecture
* 📱 Clean and responsive user interface
* ⚡ Fast development and build process with Vite
* 🧹 ESLint configuration for code quality

The default generator configuration uses a password length of **12** and enables uppercase letters, lowercase letters, numbers, and symbols. The application maintains up to five generated passwords in its password-history state.

## 🛠️ Tech Stack

### Frontend

* **React 18** — UI library
* **JavaScript (ES6+)** — Application logic
* **Vite** — Development server and build tool
* **CSS Modules** — Component-scoped styling

### Development Tools

* **ESLint** — JavaScript/React linting
* **@vitejs/plugin-react-swc** — React Fast Refresh and SWC integration

The project's `package.json` confirms React 18.2.0, React DOM 18.2.0, Vite 5.2.0, and the React SWC Vite plugin.

## 📦 Dependencies

### Production Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

### Development Dependencies

```json
{
  "@types/react": "^18.2.66",
  "@types/react-dom": "^18.2.22",
  "@vitejs/plugin-react-swc": "^3.5.0",
  "eslint": "^8.57.0",
  "eslint-plugin-react": "^7.34.1",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.6",
  "vite": "^5.2.0"
}
```

These are the packages currently declared by the project.

## 📋 Prerequisites

Before running the project locally, make sure you have:

* **Node.js** — LTS version recommended
* **npm** — Included with Node.js
* **Git**
* A modern web browser

You can verify your installations with:

```bash
node --version
npm --version
git --version
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/NazmulHossain2905/react-password-generator.git
```

### 2. Navigate to the project

```bash
cd react-password-generator
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will start the development server and provide a local URL, normally:

```text
http://localhost:5173/
```

Open the URL in your browser to use the application.

## 🏗️ Production Build

Create an optimized production build with:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the development server |
| `npm run build`   | Create a production build    |
| `npm run lint`    | Run ESLint                   |
| `npm run preview` | Preview the production build |

These scripts are defined in the project's `package.json`.

## 🔐 Environment Variables

No environment variables are required.

The application does not currently use:

* External APIs
* Databases
* Authentication services
* API keys
* Backend services

Therefore, you **do not need a `.env` file** to run the project.

If environment variables are introduced in the future, Vite variables can be configured using a `.env` file:

```env
VITE_API_URL=your_api_url
```

> Never commit private API keys, passwords, tokens, or other sensitive credentials to GitHub.

## 🔑 How Password Generation Works

The password generator accepts five configuration values:

```text
length
uppercase
lowercase
number
symbol
```

The generator builds a character pool based on the selected options and fills the requested password length with randomly selected characters. It also attempts to include at least one character from each enabled character category at the beginning of the generated password.

The supported character sets include:

### Uppercase

```text
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

### Lowercase

```text
abcdefghijklmnopqrstuvwxyz
```

### Numbers

```text
0123456789
```

### Symbols

```text
~!@#$%^&*_+-=[{()}]"|\:;'/ 
```

The exact character sets are defined in `src/utils/generatePassword.js`.

> **Security note:** The current implementation uses JavaScript's `Math.random()` for password generation. For passwords intended for real security-sensitive accounts, consider replacing it with the browser's cryptographically secure `crypto.getRandomValues()` API.

## 🧩 Component Architecture

The application uses a component-based structure.

The main password generator component combines:

* `PasswordForm`
* `PasswordController`
* `PasswordHistory`

The main application component imports the `RandomPasswordGenerator` component and renders it as the application's primary interface.

## 📁 Project Structure

```text
react-password-generator/
│
├── public/
│   └── favicon.png
│
├── src/
│   ├── assets/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── password-controller/
│   │   │   ├── index.jsx
│   │   │   └── password-controller.module.css
│   │   │
│   │   ├── password-form/
│   │   │   ├── index.jsx
│   │   │   └── password-form.module.css
│   │   │
│   │   ├── password-generator/
│   │   │   ├── index.jsx
│   │   │   └── password-generator.module.css
│   │   │
│   │   └── password-history/
│   │       ├── index.jsx
│   │       └── password-history.module.css
│   │
│   ├── utils/
│   │   ├── checkPasswordStrength.js
│   │   └── generatePassword.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

The current source tree includes dedicated component folders for the generator, controller, form, and password history, along with utility functions for password generation and password-strength checking.

## 📜 Password History

Generated passwords are added to a history list.

The application limits this history to **five passwords**, with the newest password placed at the beginning of the list.

## 🎯 Learning Objectives

This project demonstrates several fundamental React concepts:

* Creating reusable React components
* Using `useState`
* Using `useEffect`
* Passing props between components
* Handling form controls
* Generating dynamic content
* Managing application state
* Creating utility functions
* Using CSS Modules
* Structuring a React application
* Working with Vite
* Configuring ESLint

## 🔗 Useful Links

* 🌐 **[Live Demo](https://a-password-generator.vercel.app/)**
* 💻 **[GitHub Repository](https://github.com/NazmulHossain2905/react-password-generator)**
* ⚛️ **[React Documentation](https://react.dev/)**
* ⚡ **[Vite Documentation](https://vite.dev/)**
* 🧹 **[ESLint Documentation](https://eslint.org/docs/latest/)**
* 🔐 **[MDN Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)**

## 🚀 Future Improvements

Potential improvements for future versions include:

* 🔒 Use `crypto.getRandomValues()` for cryptographically secure password generation
* 📊 Add a visual password-strength meter
* 📋 Improve one-click copy-to-clipboard functionality
* 👁️ Add show/hide password controls
* 💾 Persist password history using `localStorage`
* 🗑️ Add the ability to delete individual history entries
* 📏 Add minimum and maximum password-length validation
* 🎨 Add dark/light theme support
* 📱 Further improve mobile responsiveness
* ♻️ Add regenerate functionality
* 📥 Add password export options
* 🧪 Add automated tests

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

### 1. Fork the repository

Create your own fork of the project on GitHub.

### 2. Clone your fork

```bash
git clone https://github.com/YOUR_USERNAME/react-password-generator.git
```

### 3. Create a feature branch

```bash
cd react-password-generator
git checkout -b feature/your-feature
```

### 4. Install dependencies

```bash
npm install
```

### 5. Start the development server

```bash
npm run dev
```

### 6. Check your changes

Run the linter:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

### 7. Commit your changes

```bash
git add .
git commit -m "Add your feature"
```

### 8. Push your branch

```bash
git push origin feature/your-feature
```

Then open a Pull Request.

## 👨‍💻 Author

**Nazmul Hossain**

* GitHub: [@NazmulHossain2905](https://github.com/NazmulHossain2905)
* Repository: [react-password-generator](https://github.com/NazmulHossain2905/react-password-generator)

## ⭐ Support

If you find this project useful for learning React and frontend development, consider giving the repository a ⭐ on GitHub.

---

**Built with ❤️ using React & Vite.**
