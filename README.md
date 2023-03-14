# FLIGHT APP

### Design:

- [E Commerce Web](https://www.figma.com/file/f7x9S9ZRdVTog1rhA1V3qr/E-Commerce-Website-Interface-Kit-%2B-Design-System-%5BCompletely-Free%5D-(Community)?node-id=109%3A479&t=4LeoAaeEswNT9lOw-0)

## TIMELINE

- 9 days
  - Start day: 20 February 2022
  - End day: 2 March 2022)
  - [Docs Estimation](https://docs.google.com/document/d/1Mp_sma-ggET_Tvdt3wAIjCL-0BwoeDb5lukWhlkXCRI/edit)

## TECH STACK

- [React](https://reactjs.org/docs/hooks-reference.html) (v18.2.0)
  - A JavaScript library for building user interfaces
- [Typescript](https://www.typescriptlang.org/docs/) (v4.7.4)
  - TypeScript is an open-source language which builds on JavaScript, one of the world's most used tools, by adding static type definitions.
- Api server:

  - [Mockapi](https://mockapi.io/)
    - mockapi.io is a simple tool that lets you easily mock up APIs, generate custom data, and perform operations on it using RESTful interface. It is meant to be used as a prototyping/testing/learning tool.

- Develope tools:
  - [Vite](https://vitejs.dev/guide/)(v4.0.0)
    - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.
  - [Eslint](https://eslint.org/docs/latest/user-guide/getting-started)(v8.0.1)
    - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
  - [Prettier](https://prettier.io/docs/en/index.html)(v2.8.1)
    - Prettier is an opinionated code formatter
  - [Husky](https://github.com/typicode/husky)(v8.0.2)
    - Husky improves your commits and more! You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks
  - [Storybook](https://storybook.js.org/docs/react/get-started/introduction)(v6.5.14)
    - Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.
- Unit test (coverage >= 80%)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)(v13.4.0)
    - React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.
  - [Jest](https://jestjs.io/docs/getting-started)(v29.2.4)
    - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

## ENVIRONMENT

- MacOS
- Visual Studio Code
- GitLab
- Node v18.7.0

## FEATURES

- View all products by category
- Sort, search product
- View detail product
- Add product to card
- View list cards product

## HOW TO RUN

#### Prerequisites:

To run the app, you need to install packages with correct version below:

- [Node v18.7.0](https://nodejs.org/en/)
- [pnpm 7.9.1](https://pnpm.io/)

- Clone project:

```
git clone https://gitlab.asoft-python.com/khai.mai/nextjs-training/
```

```
cd /e-commerce
```

#### Build and Run app

Run command below to build or run app

| Command          | Action                                                                         |
| :--------------- | :----------------------------------------------------------------------------- |
| `pnpm install`   | Installs dependencies                                                          |
| `pnpm build`     | Build the app                                                                  |
| `pnpm dev`       | Open [http://localhost:3000](http://localhost:3000) to view it in the browser. |
| `pnpm test`      | Run the Unit Tests                                                             |
| `pnpm storybook` | View story book on web: [localhost:6006](http://localhost:6006/)               |
