
import formidable from 'formidable';
import cloudinary from '@/app/lib/cloudinary.js';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ message: 'Form parse error' });

    const file = files.image[0];

    try {
      const result = await cloudinary.uploader.upload(file.filepath, {
        folder: 'book_images',
      });

      return res.status(200).json({ imageUrl: result.secure_url });
    } catch (error) {
      return res.status(500).json({ message: 'Cloudinary upload failed', error });
    }
  });
}
