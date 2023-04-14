# react_norman-jaya
# (26) Introduction GraphQL and Apollo Client Setup

## GraphQL 
Merupakan sebuah query language yang digunakan pada API.

Salah satu server yang digunakan GraphQL yaitu Hasura dan sebagai database servernya menggunakan Heroku.

untuk menggunakan graphQL kita perlu memiliki Client untuk GraphQLnya. beberapa client yang biasanya digunakan pada graphQL adalah 
- Apollo client
- post-man
- prisma

selain itu fitur utama yang dimiliki oleh GraphQL client yaitu:

- Query, untuk mengambil data dengan query specific yang didefinisikan
- Mutation, untuk melakukan insert, update dan delete data
- Subscription, untuk melakukan update data realtime / berdasarkan dengan events

## Hasura & Heroku
Hasura merupakan sebuah layanan yang disediakan oleh graphql dan rest api. Sedangkan Heroku merupakan platform cloud sebagai sebuah layanan yang menyupport beberapa bahasa pemrograman. selain itu heroku juga menyediakan postgres database secara gratis.

## Apollo Client
Merupakan sebuah state library management untuk javascript yang memperbolehkan kita untuk mengatur data secara lokal dan remote dengan GraphQL. Core dari apollo client ini menyediakan integrasi secara built-in dengan react. dan juga Apollo client ini mudah digunakan dengan GraphQL.

Instalasi:
- Membuat Project React
- Menginstal library GraphQl dan apollo client

Setup:
- Membuat apollo-client.js di src
- Membuat apolloClient dan export
- Menyetting apollo provider di index.js dan import ApolloProvider dan apollo-client.
