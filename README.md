This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Update Prisma Schema on Mongo Database

### Safe Way
Here are the steps you would typically follow:

Define the new field in your Prisma schema file
Run the "npx prisma migrate dev" command to generate a migration file that represents the changes you've made to the schema
Review the generated migration file to make sure it looks correct
Run "npx prisma migrate deploy" to apply the migration to your database
Run "npx prisma db push" to update the Prisma client with the latest schema changes

### Quick Way
Update schema and run "npx prisma db push" to apply the schema changes to the database.
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
