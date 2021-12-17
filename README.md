# Glowykeys

## Table of Contents

<details>
<summary>Click to expand</summary>
  
- [Introduction](#introduction)  
  
- [Stack](#stack)

- [Environment Variables](#environment-variables)

- [Run locally](#run-locally)

- [Credits](#credits)

</details>

## Introduction

Welcome to [Glowykeys](https://glowykeys.vercel.app/) where you can search for products, add products to cart, and buy products using stripe checkout. This project uses mongodb as database so if you wanna run it locally you will need to configure everything yourself: `mongodb://${your_username}:${your_password}@localhost:27017/yourdatabase`, for checkout you may wanna use [fake cards numbers](https://stripe.com/docs/checkout/quickstart?client=next) from stripe nextjs checkout guide, for image hosting I used [Cloudinary](https://cloudinary.com/). The app is deployed to vercel [Visit!](https://glowykeys.vercel.app/), it uses `getServerSideProps` and `stale-while-revalidate`
`Cache-Control` headers for majority of the pages along with some page transitions with `framer-motion`.

![](https://media.giphy.com/media/OLHd5guzNEQLLnXoBF/giphy.gif)

## Stack

- Typescript
- Nextjs
- styled-components
- stripejs/stripe
- framer-motion
- useSwr
- jest
- cypress
- react-testing-library
- msw for server mocks

## Environment variables

| Name                               | Description                    | Example                                                         |
| ---------------------------------- | ------------------------------ | --------------------------------------------------------------- |
| DB_USER                            | your db username               | `chimson`                                                       |
| DB_PWD                             | your db pwd                    | `secret`                                                        |
| NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY | your stripe publishable key    | [Stripe Dashboard](https://dashboard.stripe.com/test/dashboard) |
| STRIPE_SECRET_KEY                  | your stripe secret key         | [Stripe Dashboard](https://dashboard.stripe.com/test/dashboard) |
| STRIPE_WEBHOOK_SECRET              | your stripe webhook secret key | [Stripe Dashboard](https://dashboard.stripe.com/test/dashboard) |

## Run locally

- Clone to your computer.

  - `clone this repo`

  - `cd glowykeys`

  - `npm install`

- Create .env.local in the root directory of your project, add env variables required.

- Start a dev server

  - `npm run dev`

- Run integration tests

  - `npm run test`

- Run e2e tests

  - `npm cypress:open`

## Credits

- [vector art from iconmonstr](https://iconmonstr.com/)
