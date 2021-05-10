# Magiql

An example of GraphQL, React, communicating via Apollo Client, and using GraphQL Code Generator for type safe react apollo data fetching. We have divided the components into two folders, `Cards` and `Modules`. Cards are simple UI representations of a specific model (i.e. Character, or Episode). A Module is a horizontal scrolling list, consisting of multiple cards. Each module is responsible for their own data fetching, error handling, and loading state.


## Cards
1. Define a GraphQL Fragment
2. Run `yarn generate`, the named fragment above can be used to type the props of your new component.
3. Define your React component with the types generated above.

## Modules
1. Define a GraphQL Query or Mutation
2. Run `yarn generate` - this will result in a hook that will be used to fetch (or mutate) the data
3. Define your React component with the hook to perform the request.

## Getting Started 
1. install dependencies `yarn`
2. generate code: `yarn generate`
3. start server: `yarn start`
