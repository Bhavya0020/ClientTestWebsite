import { useState } from "react";
import { Star, Truck, Heart, Minus, Plus, ShieldCheck, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const sizes = [
    "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13", "14"
  ];

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity(prev => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Product title and rating */}
      <header>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Nike Air Force 1 '07 – Discount Running Shoes
        </h1>
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground" itemProp="reviewCount">(12 Reviews)</span>
          <a href="#reviews" className="text-sm text-primary hover:underline">
            Write a Review
          </a>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <p className="text-3xl font-bold text-price" itemProp="price">
            $149.00
          </p>
          <span className="line-through text-muted-foreground">$170.00</span>
          <Badge variant="secondary" className="bg-red-500 text-white text-sm">
            12% OFF
          </Badge>
        </div>
        <p className="text-sm font-semibold text-green-600" itemProp="availability">In Stock</p>
      </header>

      {/* Promotions */}
      <div className="flex items-center space-x-2 text-sm text-primary font-medium">
        <Tag className="h-4 w-4 text-primary" />
        <span>Buy One Get One 50% Off – Limited Time Clearance Sale!</span>
      </div>

      {/* Trust Signals */}
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span>Official Nike Retailer & Authentic Guarantee</span>
      </div>

      {/* Free delivery badge */}
      <div className="flex items-center space-x-2">
        <Truck className="h-4 w-4 text-primary" />
        <span className="text-sm text-primary font-medium">Free Standard Delivery on this item</span>
      </div>

      {/* Size selection */}
      <section aria-labelledby="size-heading">
        <div className="flex items-center justify-between mb-3">
          <h3 id="size-heading" className="text-lg font-semibold">Choose US size</h3>
          <a href="#" className="text-sm text-primary hover:underline">Size Guide</a>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? "default" : "outline"}
              onClick={() => setSelectedSize(size)}
              className="h-12 text-sm font-medium"
            >
              {size}
            </Button>
          ))}
        </div>
      </section>

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">Quantity</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-lg">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleQuantityChange("decrease")}
                disabled={quantity === 1}
                className="h-10 w-10"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 py-2 font-medium" aria-live="polite">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleQuantityChange("increase")}
                className="h-10 w-10"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button 
            size="lg" 
            className="flex-1 h-12 text-base font-semibold bg-gradient-primary hover:opacity-90 transition-opacity"
            disabled={!selectedSize}
          >
            Add to basket
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="h-12 w-12"
            aria-label="Add to wishlist"
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>
      </div>

      {/* Product badges */}
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary" className="bg-badge-success text-white">
          Free Delivery
        </Badge>
        <Badge variant="outline">
          Easy Returns
        </Badge>
        <Badge variant="outline">
          Clearance Bargain
        </Badge>
      </div>

      {/* Budget-friendly section */}
      <section>
        <h3 className="text-lg font-semibold mb-2">Why Choose These Shoes?</h3>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          <li>Top-rated affordable running shoes online</li>
          <li>Great balance of comfort and durability at a discount price</li>
          <li>Part of our "Top 10 Cheapest Running Shoes" collection</li>
          <li>Ideal for budget-conscious athletes looking for bargains</li>
        </ul>
      </section>
    </div>
  );
};

export default ProductDetails;
