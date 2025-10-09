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

# Milestone 2
Progress on CoPy page.

# Milestone 3
Finished the CoPy page, improved layout, and improved accessibility.

# Production version
This website was deployed at Vercel in following URL: [https://comp-5130-p1.vercel.app](https://comp-5130-p1.vercel.app/projects/copy)

##  How to run?
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

In addition to Next.js I am using Tailwind and components from DaisyUI.


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

The pages are under the app directory.