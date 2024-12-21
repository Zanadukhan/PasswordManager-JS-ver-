/*
  Warnings:

  - You are about to drop the column `email` on the `LoginItem` table. All the data in the column will be lost.
  - Added the required column `Username` to the `LoginItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LoginItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "service" TEXT NOT NULL,
    "Username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_LoginItem" ("id", "name", "password", "service") SELECT "id", "name", "password", "service" FROM "LoginItem";
DROP TABLE "LoginItem";
ALTER TABLE "new_LoginItem" RENAME TO "LoginItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
