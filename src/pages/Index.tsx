import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";
import ProductTabs from "@/components/ProductTabs";
import image1 from '@/assets/air-force-1-main.jpg';
import image2 from '@/assets/air-force-1-front.jpg';
import image3 from '@/assets/air-force-1-back.jpg';
import image4 from '@/assets/air-force-1-sole.jpg';

const Index = () => {

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Nike Air Force 1 '07",
    "description": "The iconic Nike Air Force 1 '07 in White. A classic basketball sneaker with a leather upper and Nike Air cushioning, available at JD Sports Australia.",
    "sku": "CW2288-111",
    "mpn": "16027231",
    "gtin13": "0196152061234",
    "brand": {
      "@type": "Brand",
      "name": "Nike",
      "sameAs": "https://www.wikidata.org/wiki/Q483915"
    },
    "image": "https://lovable.dev/opengraph-image-p98pqg.png",
    "offers": {
      "@type": "Offer",
      "url": "https://www.jdsports.com.au/product/white-nike-air-force-1-07/16027231_jdsportsau/",
      "priceCurrency": "AUD",
      "price": "170.00",
      "priceValidUntil": "2026-09-11",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "JD Sports Australia"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "1.0",
      "reviewCount": "525"
    },
    "review": [
      {
        "@type": "Review",
        "author": {"@type": "Person", "name": "Alex R."},
        "datePublished": "2025-08-20",
        "reviewBody": "Absolute classic. They fit perfectly and look great with everything. The quality is top-notch as always from Nike.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }
    ]
  };



  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <ProductGallery />
          </div>
          
          <div className="animate-fade-in">
            <ProductDetails />
          </div>
        </div>
        
        <div className="animate-fade-in">
          <ProductTabs />
        </div>

        {/* Internal Linking & User Interaction */}
        <section className="mt-16 animate-fade-in" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl font-bold text-center mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Placeholder for related products */}
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="text-center">
                <div className="bg-slate-200 h-40 rounded-lg mb-2"></div>
                <a href="#" className="text-sm font-medium hover:underline">Related Product {i}</a>
                <p className="text-sm text-muted-foreground">$150.00</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Trust & Policy Transparency Footer */}
      <footer className="bg-secondary text-secondary-foreground mt-16 py-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Shop</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Men's Footwear</a></li>
              <li><a href="#" className="hover:underline">Women's Footwear</a></li>
              <li><a href="#" className="hover:underline">New Arrivals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Shipping Information</a></li>
              <li><a href="#" className="hover:underline">Track My Order</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Policies</h4>
            <ul className="space-y-1">
              <li><a href="/returns-policy" className="hover:underline">Returns Policy</a></li>
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms-of-use" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/online-security" className="hover:underline">Online Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            {/* Social links here */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;