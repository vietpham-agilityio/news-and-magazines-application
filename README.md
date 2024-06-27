# NEXT.JS - PRACTICE ONE

## OVERVIEW

* Revision of Next.js training plan focuses on the latest version of Next.js (14.0.2). The trainees can discover further details in the course Next.js. As a result, the trainees can follow this instruction to learn Next.js fundamentals step by step and hands-on practices.

* Furthermore, can invest more time in the official document Next.js to have an understanding of the depth of Next.js key features.

* Design - [News & Magazine-Website](https://www.figma.com/design/i51XhBagBtzwCEWzJalaGD/Free-News-%26-Magazine-Figma-Template?node-id=17-11&t=dnCTJm2Er03CN1Lm-0)

## TIMELINE

* May 20th, 2024 - June 24th, 2024 (23 days working) (2 days off)

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

* **[Render](https://render.com/)** build, deploy, and scale your apps with unparalleled ease – from your first user to your billionth.

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
│   │   │   └── [id]/
│   │   ├── global-error.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── constants/
│   ├── hocs/
│   ├── mocks/
│   ├── services/
│   ├── types/
│   ├── ui/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   └── [other shared component]
│   │   ├── features/
│   │   └── layouts/
│   │
│   └── utils/
├── .gitignore
├── package.json
├── README.md
└── next.config.js
```
## DATA ENTITY RELATIONSHIP

> ![image](/uploads/beb9abb80f8573af45f985fc1e64033f/image.png) 

## HOW TO RUN PROJECT

> $ git clone git@gitlab.asoft-python.com:viet.pham/next-training.git

> $ git checkout feature/practice-one

> cd ./practice-one/


### Install Package

**Run to install the package**

> pnpm install

**Create file variable environment**

```
├── node_modules
├── src
└──.env
```

**My Strapi deploy on Render**

> https://news-and-magazine-strapi-server.onrender.com


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

**You can access my pages**

> [News & Magazine-Website](https://news-and-magazines-application.vercel.app/)

## Author

[vietpham-agilityio](https://gitlab.asoft-python.com/viet.pham)