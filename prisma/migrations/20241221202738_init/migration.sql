-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LoginItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "service" TEXT NOT NULL,
    "Username" TEXT,
    "password" TEXT NOT NULL
);
INSERT INTO "new_LoginItem" ("Username", "id", "name", "password", "service") SELECT "Username", "id", "name", "password", "service" FROM "LoginItem";
DROP TABLE "LoginItem";
ALTER TABLE "new_LoginItem" RENAME TO "LoginItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
