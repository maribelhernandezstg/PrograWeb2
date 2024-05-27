/*
  Warnings:

  - You are about to drop the `_publicacionestotableros` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorId` to the `Tableros` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_publicacionestotableros` DROP FOREIGN KEY `_publicacionesTotableros_A_fkey`;

-- DropForeignKey
ALTER TABLE `_publicacionestotableros` DROP FOREIGN KEY `_publicacionesTotableros_B_fkey`;

-- AlterTable
ALTER TABLE `tableros` ADD COLUMN `authorId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_publicacionestotableros`;

-- CreateTable
CREATE TABLE `tableros1` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `titulo` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_publicacionesTotableros1` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_publicacionesTotableros1_AB_unique`(`A`, `B`),
    INDEX `_publicacionesTotableros1_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tableros` ADD CONSTRAINT `Tableros_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_publicacionesTotableros1` ADD CONSTRAINT `_publicacionesTotableros1_A_fkey` FOREIGN KEY (`A`) REFERENCES `publicaciones`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_publicacionesTotableros1` ADD CONSTRAINT `_publicacionesTotableros1_B_fkey` FOREIGN KEY (`B`) REFERENCES `tableros1`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
