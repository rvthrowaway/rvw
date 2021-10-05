# reviews-app

App for reviewing managing products and it's reviews.

## Packages

### Frontend v1

Vanilla JS App
No frameworks, build tools, nor libraries. just plain old html+css+js.

Basically a simple SPA in index.html with a single page app.

List of components:
- Body
- Modal

File structure
```
- ./index.html
- ./assets/js/modal.js    # Javascript for the modal component
- ./assets/js/textarea.js # Javascript that resizes review modal's textarea automatically.
- ./assets/css/   # Contains all CSS files
- ./assets/fonts/ # Using local fonts to avoid FUOC with Google Fonts
```
Deployment:

- As easy as it gets with a static deployment, I just use vercel -cli.
  `vc`

### Backend v1

API for Products and it's Reviews, built with TypeScript, NodeJS and GraphQL

#### Stack

- TypeScript
- Postgres
- [TypeORM](https://typeorm.io/)
- [Apollo Server](https://www.apollographql.com/)
- TypeGraphQL
- [GraphQL Modules](https://www.graphql-modules.com/docs)
- Express

#### Instructions to run the server:

Install dependencies:
`yarn install` or `npm install`

Run the server
`yarn dev` or `npm run dev`

Server with Apollo Studio to test the graphql API should be available at http://localhost:4000/graphql
