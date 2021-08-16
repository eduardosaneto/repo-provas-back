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
    await getManager().query('TRUNCATE disciplines RESTART IDENTITY CASCADE');
    await getManager().query('TRUNCATE semesters RESTART IDENTITY CASCADE');
    await getManager().query('TRUNCATE professors RESTART IDENTITY CASCADE');
}
