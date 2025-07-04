Connecting to Database

1. Create Neon Database
Go to https://neon.tech
Sign in and create a new project
Choose a name, region, and click “Create Project”
Once it's ready, go to the Connection Details tab
Copy the PostgreSQL connection string
(Looks like: postgresql://username:password@ep-xxxxxx.neon.tech/dbname?sslmode=require)

2. Setup .env File in Next.js
In your Next.js project root, create a file named .env
Add the following line DATABASE_URL="(paste your own connection string)"

3. Install Prisma & Initialize
Run these commands in your terminal:
npm install prisma --save-dev
npx prisma init
This creates: prisma/schema.prisma

4. Define Your Prisma Schema
    Open prisma/schema.prisma

    Example schema:
    model Product {
    id          String   @id @default(cuid())
    name        String
    description String
    price       Float
    image       String
    category    String
    createdAt   DateTime @default(now())
    }

5. Push Schema to Neon DB
    Run: npx prisma db push
    (This syncs your schema with the actual database)

6. Generate Prisma Client
Run:npx prisma generate
Now Prisma is ready to use in your app

7. Use Prisma in Your App
    Example: create a lib/prisma.js file

    js:import { PrismaClient } from '@prisma/client';
        const prisma = new PrismaClient();
        export default prisma;
        Then use it in API routes or server actions:

    js:import prisma from '@/lib/prisma';
        const products = await prisma.product.findMany();


Prisma usage

1. How Prisma is Used
    Define your data model
    You describe your database structure using the schema.prisma file. This file includes models (like Product, User, etc.) and connection details.

    Generate the Prisma client
    After defining the schema, Prisma generates a client – a powerful, type-safe API that you use in your code to talk to the database.

    Interact with the database
    You use the Prisma client in your server-side code (like API routes or server actions) to perform operations like:

    create() – to add data
    findMany() – to fetch data
    update() – to modify existing records
    delete() – to remove records

    Keep schema and DB in sync
    Whenever your model changes, you push it to the database using npx prisma db push, and regenerate the client using npx prisma generate.

2. Benefits of Using Prisma
    Type safety: You get autocompletion and error checking in your code.

    Database migrations: Prisma helps evolve your schema over time.

    Easy queries: Instead of raw SQL, you write readable JavaScript/TypeScript code.

    Supports relational logic: Prisma can query across relationships (like products → categories).  

Gemini API Setup 

1. Get Gemini API Key
    Go to https://makersuite.google.com/app and sign in with your Google account.
    Click on your profile → API Key → Create API Key.
    Copy the key. Keep it safe.
    Create .env file in your project root (if not present)
    Add the following:
    GEMINI_API_KEY=your_actual_api_key_here

2. Install required packages (if not installed)
    If you’re using Gemini’s official SDK:
    npm install @google/generative-ai

3. Create a helper file for Gemini (e.g., lib/gemini.js)
    import { GoogleGenerativeAI } from '@google/generative-ai';
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    export async function generateDescription(prompt) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}
Use Gemini in your API route or server action
For example, in your product creation logic:

4. import { generateDescription } from '@/lib/gemini';
    const description = await generateDescription(`Write a short description for a product named ${productName}`);

Page Structure

1.  /app
        /about
            /page.jsx
        /add
            /page.jsx
        /add-product
            /page.jsx
        /admin  
            /page.jsx
        /api
            /contact/route.jsx
            /gemini/route.jsx
            /generate-description/route.jsx
            /products/route.jsx 
            /upload/route.jsx
        /cart
            /page.jsx
        /categories 
                /[name]
                    /page.jsx   
            /page.jsx 
        /contact
            /page.jsx
        /upload
            /page.jsx
        page.js  

2.  /components
        /ui
            /button.jsx
        /footer.jsx
        /header.jsx
        /productcard.jsx

3.  /lib
        /cart.js
        /db.js
        /gemini.js
        /prisma.js
        /utils.js

4.  .env  
#   A s s i g n m e n t s  
 