import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProductTabs = () => {
  return (
    <div className="mt-16">
      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="info">Product Info</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="delivery">Delivery</TabsTrigger>
          <TabsTrigger value="returns">Returns</TabsTrigger>
        </TabsList>
        
        <TabsContent value="info" className="mt-6 space-y-8">
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-3">Product Information</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              {/* Originality: Add unique text placeholder */}
              <p>
                Stand tall in the style stakes with these men's Nike Air Force 1 '07 trainers! An instant icon since its 1982 debut, the AF1 was Nike's first basketball shoe with a full-length Air Sole unit in the midsole. Hugely popular on the hip-hop scene, these Air Force 1 trainers are built with a crisp white leather upper for hard-wearing comfort and sat atop the legendary Air Sole unit for optimum impact protection step after step, with pivot points in the outsole to deliver smooth movements from the courts to the streets. The legendary Swoosh finishes things off with authority.
              </p>
              <div>
                <h4 className="font-medium text-foreground mb-2">Style Code:</h4>
                <p>CW2288-111</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Colour:</h4>
                <p>White</p>
                <p>Product Code: 19620410_jdsportsau</p>
              </div>
            </div>
          </div>

          {/* FAQ / Conversational Content */}
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-3">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does the Air Force 1 fit?</AccordionTrigger>
                <AccordionContent>The Nike Air Force 1 '07 generally fits true to size. However, if you have a narrower foot, you might consider going down half a size for a snugger fit.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Are these shoes good for playing basketball?</AccordionTrigger>
                <AccordionContent>While originally designed for basketball, the Air Force 1 is now primarily a lifestyle sneaker. For modern performance, we recommend checking out Nike's current basketball shoe lineup.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I clean my white Air Force 1s?</AccordionTrigger>
                <AccordionContent>For best results, use a sneaker cleaner or a mild soap solution with a soft brush. For the leather upper, a magic eraser can be effective on scuffs. Always allow them to air dry.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="mt-6" id="reviews">
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">No Reviews Yet</h3>
            <p className="text-muted-foreground mb-4">
              Be the first to review this product and help other customers make their decision.
            </p>
            <a href="#" className="text-primary hover:underline font-medium">
              Write the First Review
            </a>
          </div>
        </TabsContent>
        
        <TabsContent value="delivery" className="mt-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">FREE DELIVERY ON ALL ORDERS OVER $150</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Standard Delivery</span>
                <span className="text-primary font-semibold">Select 'AU Standard Delivery' at the checkout to get your order delivered within 3-7 business days for $7.95.</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Express Delivery</span>
                <span>Need it quick? Order now &amp; choose “AU Express Delivery” to get your order delivered within 3 business days from dispatch for $11.95.</span>
              </div>
              <div className="text-muted-foreground">
                <p>We may ship from multiple locations, and we will send dispatch notification when all parcels have been sent. Parcels may come from any of our warehouses within Australia, New Zealand or the UK.</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="returns" className="mt-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Returns Policy</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                If  you change your mind, you’re welcome to return your purchase within 30 days of receiving your order. Please note there are some exceptions to this, for details please visit our returns policy.
              </p>
              <div>
                <h4 className="font-medium text-foreground mb-2">Please note:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>The following items are non-refundable and cannot be exchanged, unless faulty:</li>
                  <li>Sports bras</li>
                  <li>Socks</li>
                  <li>Swimwear</li>
                </ul>
              </div>
              <p>
                For more information about returns, please visit the Returns FAQ section on our website.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
