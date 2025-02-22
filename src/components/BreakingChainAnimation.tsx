
import { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '../utils/imageProcessing';

export const BreakingChainAnimation = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      try {
        // Create a blob from the image URL
        const response = await fetch('/lovable-uploads/8f40772d-736b-4ab1-b43c-0ea103a55cf6.png');
        const blob = await response.blob();
        
        // Load the image
        const img = await loadImage(blob);
        
        // Remove the background
        const processedBlob = await removeBackground(img);
        
        // Create URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error('Error processing image:', error);
      }
    };

    processImage();

    // Cleanup
    return () => {
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, []);

  return (
    <div className="relative w-[300px] h-[200px] mx-auto">
      <div className="absolute inset-0">
        <img 
          src={processedImageUrl || '/lovable-uploads/8f40772d-736b-4ab1-b43c-0ea103a55cf6.png'}
          alt="Interconnected rings"
          className="w-full h-full object-contain mix-blend-screen opacity-40"
          style={{ 
            filter: 'brightness(1.7) saturate(1.4) drop-shadow(0 0 10px rgba(0, 255, 65, 0.3))'
          }}
        />
      </div>
    </div>
  );
};
