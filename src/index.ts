import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import microConfig from './mikro-orm.config';
import express from 'express'
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    
    const app = express();
    const schema = await buildSchema({
        resolvers: [PostResolver, UserResolver],
        validate: false,
    });
    const apolloServer = new ApolloServer({ schema, context: () => ({ em: orm.em }) });

    apolloServer.applyMiddleware({ app })
    
    app.get('/', (_, res) => {
        res.send(`><(((º>`)
    })

    app.listen(3000, () => {
        console.log('4000, fish')
    })
}



main().catch(err => console.log(err));