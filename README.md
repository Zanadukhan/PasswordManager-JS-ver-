
<p align="center"><h1 align="center">PASSWORDMANAGER-JS-VER-</h1></p>
<p align="center">

</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Zanadukhan/PasswordManager-JS-ver-?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Zanadukhan/PasswordManager-JS-ver-?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Zanadukhan/PasswordManager-JS-ver-?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Zanadukhan/PasswordManager-JS-ver-?style=default&color=0080ff" alt="repo-language-count">

	
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

A personal password manager that uses a browser based UI in order to store username and password for your own personal use using SQLite (via prisma)(for now)

---

##  Features

- Sort and filter through entries
- Randomly generate passwords (with options for: 1. password length 2. special characters 3. numbers)
- Store passwords so that each website can have its own unique password
---

##  Project Structure

```sh
└── PasswordManager-JS-ver-/
    ├── app.js
    ├── config.js
    ├── controller
    │   ├── pass_controller.js
    │   └── userInterface_controller.js
    ├── middleware
    │   └── encryption_middleware.js
    ├── package-lock.json
    ├── package.json
    ├── prisma
    │   ├── dev.db
    │   ├── migrations
    │   └── schema.prisma
    ├── public
    │   ├── css
    │   └── js
    ├── utils
    │   ├── encryption.js
    │   └── password-generator.js
    └── views
        ├── create.ejs
        ├── edit.ejs
        ├── entry.ejs
        ├── index.ejs
        ├── layout.ejs
        ├── logins.ejs
        └── partials
```


###  Project Index
<details open>
	<summary><b><code>PASSWORDMANAGER-JS-VER-/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/app.js'>app.js</a></b></td>
				<td>Main script that launches the web app</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/package-lock.json'>package-lock.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/package.json'>package.json</a></b></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- views Submodule -->
		<summary><b>views</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/views/create.ejs'>create.ejs</a></b></td>
				<td>Page for creating new entries, with fields for name, username, and password</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/views/entry.ejs'>entry.ejs</a></b></td>
				<td>page for viewing an individual entry that allows users to edit and view entries</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/views/layout.ejs'>layout.ejs</a></b></td>
				<td>layout for ejs templating</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/views/logins.ejs'>logins.ejs</a></b></td>
				<td>tbd</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/views/index.ejs'>index.ejs</a></b></td>
				<td>main page that lists out all entries and allows users to filter and click on an individual entry to open it up</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/views/edit.ejs'>edit.ejs</a></b></td>
				<td>page to edit the name, username, and/or password</td>
			</tr>
			</table>
			<details>
				<summary><b>partials</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/views/partials/navbar.ejs'>navbar.ejs</a></b></td>
						<td>navigation bar as a part of the template</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/views/partials/footer.ejs'>footer.ejs</a></b></td>
						<td>footer as a part of the template</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- utils Submodule -->
		<summary><b>utils</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/utils/password-generator.js'>password-generator.js</a></b></td>
				<td>This script contains the code that generates the passwords</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/utils/encryption.js'>encryption.js</a></b></td>
				<td>This contains the code that encrypts the password</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- public Submodule -->
		<summary><b>public</b></summary>
		<blockquote>
			<details>
				<summary><b>css</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/public/css/style.css'>style.css</a></b></td>
						<td>contains the css stylings for all the pages</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>js</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/public/js/script.js'>script.js</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- middleware Submodule -->
		<summary><b>middleware</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/middleware/encryption_middleware.js'>encryption_middleware.js</a></b></td>
				<td>encrypts "req.body.password" whenever req is posted or retrieved from the database</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- controller Submodule -->
		<summary><b>controller</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/controller/userInterface_controller.js'>userInterface_controller.js</a></b></td>
				<td>controller for listing the entries on index.ejs and rendering the creation page</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/master/controller/pass_controller.js'>pass_controller.js</a></b></td>
				<td>controller for CRUD operation for this web app</td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with PasswordManager-JS-ver-, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm


###  Installation

Install PasswordManager-JS-ver- using one of the following methods:

**Build from source:**

1. Clone the PasswordManager-JS-ver- repository:
```sh
❯ git clone https://github.com/Zanadukhan/PasswordManager-JS-ver-
```

2. Navigate to the project directory:
```sh
❯ cd PasswordManager-JS-ver-
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run PasswordManager-JS-ver- using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
##  Project Roadmap

- [X] **`Task 1`**: Implement login and multi user support
- [ ] **`Task 2`**: Implement tags
- [ ] **`Task 3`**: Implement feature three.

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/Zanadukhan/PasswordManager-JS-ver-/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/Zanadukhan/PasswordManager-JS-ver-/issues)**: Submit bugs found or log feature requests for the `PasswordManager-JS-ver-` project.
- **💡 [Submit Pull Requests](https://github.com/Zanadukhan/PasswordManager-JS-ver-/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Zanadukhan/PasswordManager-JS-ver-
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Zanadukhan/PasswordManager-JS-ver-/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Zanadukhan/PasswordManager-JS-ver-">
   </a>
</p>
</details>

---

##  License

This project is protected under the [MIT] License. For more details, refer to the [LICENSE]file.

---

##  Acknowledgments

- ExpressEJS
- Bootstrap
- Prisma

---
