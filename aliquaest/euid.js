function createImageRegistrar() {
  const registeredImages = new Set();

  return function registerImage(imageSrc) {
    if (registeredImages.has(imageSrc)) {
      console.log(`Image ${imageSrc} is already registered.`);
      return;
    }

    // Register the image
    console.log(`Registering image: ${imageSrc}`);
    registeredImages.add(imageSrc);

    // Add your image registration logic here
  };
}

const registerImage = createImageRegistrar();

// Usage
registerImage('image1.jpg'); // Registering image: image1.jpg
registerImage('image2.jpg'); // Registering image: image2.jpg
registerImage('image1.jpg'); // Image image1.jpg is already registered.
