#!/usr/bin/env node

import fs from "fs";
import path from "path";

const keyPath = path.resolve(process.cwd(), "service_account.json");
if (!fs.existsSync(keyPath)) {
  console.error("❌ service_account.json not found in root.");
  process.exit(1);
}

const content = fs.readFileSync(keyPath, "utf-8");
const b64 = Buffer.from(content).toString("base64");

console.log("\n=======================================================");
console.log("🔑 GOOGLE_INDEXING_KEY ДЛЯ GITHUB ACTIONS SECRETS");
console.log("=======================================================\n");
console.log("Скопируйте строку ниже и вставьте в:");
console.log("GitHub -> Ваш репозиторий -> Settings -> Secrets and variables -> Actions -> New repository secret");
console.log("Имя секрета: GOOGLE_INDEXING_KEY\n");
console.log("Значение секрета:");
console.log(b64);
console.log("\n=======================================================\n");
