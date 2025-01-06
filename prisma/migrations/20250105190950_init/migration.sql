/*
  Warnings:

  - Added the required column `userID` to the `LoginItem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LoginItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "service" TEXT NOT NULL,
    "Username" TEXT,
    "password" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,
    CONSTRAINT "LoginItem_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LoginItem" ("Username", "id", "name", "password", "service") SELECT "Username", "id", "name", "password", "service" FROM "LoginItem";
DROP TABLE "LoginItem";
ALTER TABLE "new_LoginItem" RENAME TO "LoginItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
