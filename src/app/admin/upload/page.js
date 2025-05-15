const handleImageUpload = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
  
    const res = await fetch('/cloudinary', {
      method: 'POST',
      body: formData,
    });
  
    const data = await res.json();
    console.log('Image URL:', data.imageUrl);
  };
  