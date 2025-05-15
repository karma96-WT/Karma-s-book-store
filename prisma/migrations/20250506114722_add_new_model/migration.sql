-- CreateTable
CREATE TABLE "cart" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "useremail" TEXT NOT NULL,
    "bookid" INTEGER NOT NULL,
    "booktitle" TEXT NOT NULL,
    "bookauthor" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "bookgenre" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);
