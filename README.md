This is the repository of my new personal website.

# Student Information
* Name: Adriano Marcelo Vilarga Corbelino II

## Milestone 0
I departed from my initial plan of using Dioxus and switched to a more traditional approach using TypeScript and NextJS.
Initially, I attempted to use Dioxus, but it lacks adequate support for static site generation.
This difficulty was enough for me to change the stack.
I continue with the same plan for the features and planned pages.

## Milestone 1
This initial version has four pages.
 * About: containing a picture of me and a short bio ([/](app/page.tsx));
 * CV: With a version of my CV ([/cv](app/cv/page.tsx));
 * Projects: With short descriptions of my projects ([/projects](app/projects/page.tsx));
 * CoPy: With a detailed description of this project, and a code editor to test the new features ([/projects/copy](app/projects/copy/page.tsx)).

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
