// /pages/api/books/[id].js
import prisma from '/lib/prisma/prisma';  // Adjust the import path

export async function DELETE(req, res) {
  const { id } = req.query;  // Get the book ID from the query

  try {
    // Delete the book from the database
    const deletedBook = await prisma.book.delete({
      where: { id: parseInt(id) },
    });

    // Return a success message
    res.status(200).json({ message: 'Book deleted successfully', deletedBook });
  } catch (error) {
    console.error('Failed to delete book:', error);
    res.status(500).json({ error: 'Failed to delete the book' });
  }
}
