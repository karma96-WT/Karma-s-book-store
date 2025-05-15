import prisma from '../../lib/prisma/prisma';  // Adjust the import path based on your project structure

export async function GET(req, res) {
    try {
      const books = await prisma.book.findMany();
      res.status(200).json(books); 
    } catch (error) {
      console.error('Failed to fetch books:', error);
      res.status(500).json({ error: 'Failed to fetch books' });
    }
  }
