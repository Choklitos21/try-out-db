import {User} from "./entities/user.entity";
import {DataSource} from "typeorm";

const process = require('process')

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.railway,
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})