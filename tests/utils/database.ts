import { getConnection, getManager } from "typeorm";
import { init } from "../../src/app";

export async function startConnection(){
    await init();
}
export async function endConnection(){
    await getConnection().close();
}

export async function clearDatabase(){
    await getManager().query('TRUNCATE categories RESTART IDENTITY CASCADE');
}
