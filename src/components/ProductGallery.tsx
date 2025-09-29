import { useState } from "react";
import { ZoomIn } from "lucide-react";
import mainImage from "@/assets/air-force-1-main.jpg";
import frontImage from "@/assets/air-force-1-front.jpg";
import backImage from "@/assets/air-force-1-back.jpg";
import soleImage from "@/assets/air-force-1-sole.jpg";

const ProductGallery = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    { src: mainImage, alt: "Nike Air Force 1 '07 in white, side view on a light background.", schema: "image" },
    { src: frontImage, alt: "Nike Air Force 1 '07 shoe, front-facing view showing the toe box and laces.", schema: "image" },
    { src: backImage, alt: "Nike Air Force 1 '07 shoe, back view showing the heel tab with Nike Air logo.", schema: "image" },
    { src: soleImage, alt: "The sole of the Nike Air Force 1 '07 shoe, showing the pivot point tread pattern.", schema: "image" },
  ];

  return (
    <div className="space-y-4" role="region" aria-label="Product Image Gallery">
      {/* Main image */}
      <div className="relative group bg-product-background rounded-lg overflow-hidden shadow-product">
        <img
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
          data-schema={images[activeImage].schema}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        <button className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-label="Zoom in on product image">
          <ZoomIn className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnail images */}
      <div className="grid grid-cols-4 gap-2" role="group" aria-label="Product image thumbnails">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`relative rounded-lg overflow-hidden transition-all duration-200 ${
              activeImage === index 
                ? "ring-2 ring-primary shadow-lg" 
                : "hover:shadow-md hover:scale-105"
            }`}
            aria-label={`View image ${index + 1}`}
            aria-current={activeImage === index}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-20 object-cover bg-product-background"
              data-schema="thumbnailUrl"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
