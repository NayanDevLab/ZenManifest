import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";

export const sqliteDb = openDatabaseSync("zenmanifest.db");
export const db = drizzle(sqliteDb);
