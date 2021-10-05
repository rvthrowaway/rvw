# reviews-app

App for reviewing managing products and it's reviews.

## Packages

### Frontend v1

Vanilla JS App
No frameworks, build tools, no libraries.

Basically a simple SPA in index.html with a single page app.

List of components:
- Body
- Modal

File structure

- index.html (main/ entry file) It's just an html, double click to preview in your browser =)
- assets/ # Contains all assets like images, js, css, etc.
- assets/js/ # Contains all JS files
- assets/css/ # Contains all CSS files
- assets/fonts/ # Contains all fonts (Roboto, and icon-star made w/ icomoon for star icon)

Deployment:

- As easy as it gets with a static deployment, I just use vercel -cli.
  `vc`

### Backend v1

API for Products and it's Reviews, built with TypeScript, NodeJS and GraphQL

#### Stack

- TypeScript
- Postgres
- [TypeORM](https://typeorm.io/)
- TypeGraphQL
- [GraphQL Modules](https://www.graphql-modules.com/docs)
- Express
- Apollo Server

#### Instructions to run the server:

Install dependencies:
`yarn install` or `npm install`

Run the server
`yarn dev` or `npm run dev`

Server with Apollo Studio to test the graphql API should be available at http://localhost:4000/graphql
