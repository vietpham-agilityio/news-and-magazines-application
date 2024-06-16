# NEXT.JS - PRACTICE ONE

## OVERVIEW

* Revision of Next.js training plan focuses on the latest version of Next.js (14.0.2). The trainees can discover further details in the course Next.js. As a result, the trainees can follow this instruction to learn Next.js fundamentals step by step and hands-on practices.

* Furthermore, can invest more time in the official document Next.js to have an understanding of the depth of Next.js key features.

* Design - [News & Magazine-Website](https://www.figma.com/design/i51XhBagBtzwCEWzJalaGD/Free-News-%26-Magazine-Figma-Template?node-id=17-11&t=dnCTJm2Er03CN1Lm-0)

## TIMELINE

* May 20th, 2024 - June 10th, 2024 (14 days working)

## TEAM SIZE

* 1 dev - @viet.pham

## TARGET

* Get familiar with the outstanding features of Next.js especially routing, caching, streaming and data fetching.
* Know how a Next.js application works and accomplish a full-stack web application.
* Distinguish between server, client directives and use it correspondingly for each case.
* Handle errors and be aware of which errors should be shown for each situation.
* Bear in mind that improving accessibility will be always involved.
* Get to know metadata which is crucial for SEO and shareability.

## BROWSER SUPPORT

* Chrome Version 124.0.6367.119 (Official Build) (x86_64)

## DEVICE SUPPORT

* Mobile (min-width: 358px - max-width: 603px)
* Laptop (min-width: 604px - max-width: 1023px)
* Desktop (min-width: 1024px)

## TECHNICAL STACKS

* **[Next.Js](https://nextjs.org/)**: enables you to create high-quality web applications with the power of React components.
* **[TypeScript](https://www.typescriptlang.org/)**: is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
* **[Jest](https://jestjs.io/)**: is a delightful JavaScript Testing Framework with a focus on simplicity.
* **[Storybook](https://storybook.js.org/)**: captures the rendered state of a UI component. Developers write multiple stories per component that describe all the “interesting” states a component can support.
* **[ESLint](https://eslint.org/)**: is a tool for identifying and reporting patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
* **[Prettier](https://prettier.io/)**: is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
* **[Tailwind](https://tailwindcss.com/)**: is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.
* **[Strapi](https://strapi.io/)**: is the next-gen headless CMS, open-source, javascript, enabling content-rich experiences to be created, managed and exposed to any digital device.

## DEPLOY

* **[Vercel](https://vercel.com/)** is a frontend cloud that gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web.

## EDITOR

* **[Visual Studio Code](https://code.visualstudio.com/)**

## ANALYZE DESIGN

You can see details in this link:

* **[Analyze design](https://docs.google.com/document/d/133SVWVYsO7s5ZkYaeg1DNMupW6qveHi0X9yJuwoLBwg)**

## DIRECTORY STRUCTURE

```
practice-one/
├── public/
├── src/
│   ├── app/
│   │   ├── articles/
│   │   │   └── [id]/
│   │   ├── categories/
│   │   │   └── [topic]/
│   │   ├── global-error.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── constants/
│   ├── mocks/
│   ├── services/
│   ├── types/
│   └── ui/
│       ├── components/
│       │   ├── common/
│       │   └── [other files]
│       ├── features/
│       └── layouts/
├── .gitignore
├── package.json
├── README.md
└── next.config.js
```

## HOW TO RUN PROJECT

> $ git clone git@gitlab.asoft-python.com:viet.pham/next-training.git

> $ git checkout feature/practice-one

> cd ./practice-one/


### Run Strapi local

**Using Node version 20**

- nvm install v20.12.2
- nvm use v20.12.2

**Your preferred Node.js package manager:**
 * npm (v6 and above)
 * yarn

**Step 1: Run the installation script:**

```
npx create-strapi-app@latest my-project --quickstart

or

yarn create strapi-app my-project --quickstart

```

**Step 2: Register the first local administrator user**

> If the server is not already running, in your terminal, cd into the `my-project` folder and run `npm run develop` (or `yarn develop`) to launch it.

This is register admin local screen:

![image](/uploads/90bb3dabcc20f37cbf7ca9c1b780d6f5/image.png)


You now have access to the admin panel:

![image](/uploads/3282460e5b670e85045e90a3a1b45eb5/image.png)


**Step 3: Build your data structure with the Content-type Builder**

  > 1. Go to **Content-type Builder** in the main navigation.
  > 2. Click on **Create new collection type**.
 
You can reference this [Entity-Relationship](https://drive.google.com/drive/u/0/folders/1DY2xQsgBDzQEnLDjrORcXXhZMauw6WQf) diagram to create Content type or create collection type with template:

* `Post`:

![image](/uploads/48fdbe16063d7e9b6d4a03c00a1247f6/image.png)

* `Author`:
![image](/uploads/b2dace1d02564453b26b9cf06568afd1/image.png)


**Step 4: Add content to your Strapi project with the Content Manager**

* `Post`
![image](/uploads/7cca9451134f7c5ae0662dd32fc9e3a4/image.png)

* `Author`
![image](/uploads/0a1ab65b5d6615934ab96362216d3893/image.png)


**Step 5: Set Roles & Permissions**

  1. Click on **Settings** at the bottom of the main navigation.
  2. Under **Users & Permissions Plugin**, choose **Roles**.
  3. Click the **Public** role.
  4. Scroll down under **Permissions**.
  5. In the **Permissions** tab, find `Post` and click on it.
  6. Click the checkboxes next to **find** and **findOne**.
  7. Repeat with Author: click the checkboxes next to **find** and **findOne**.
  8. Finally, click **Save**.

**Step 6: Publish the content**

![image](/uploads/85971fc76d91b0b4e64a855cab19109b/image.png)


**Step 7: Use the API**

You can use API with template: `http://localhost:1337/api/end-point`

### Install Package

**Run to install the package**

> pnpm install

**Create file variable environment**

```
├── node_modules
├── src
└──.env
```

**With template**

```
SERVER_BASE_URL = 'Url your server' || 'http://localhost:1337'
```

**My Strapi deploy on Render**

> https://news-and-magazine-strapi-server.onrender.com

**You can access my pages**

> [News & Magazine-Website](https://news-and-magazines-application.vercel.app/)


### Run Project

> pnpm dev

* Follow at: http://localhost:3000/

### Run Storybook

> pnpm storybook

* Follow at: http://localhost:6006/

### Run Test

> pnpm test

### Run build in production environment

> pnpm build

## Author

[vietpham-agilityio](https://gitlab.asoft-python.com/viet.pham)