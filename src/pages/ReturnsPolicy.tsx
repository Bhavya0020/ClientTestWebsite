
import Header from "@/components/Header";

const ReturnsPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Returns Policy</h1>
      <div className="space-y-4">
        <p>We want you to be completely satisfied with your purchase. If you are not, we will gladly accept returns for a refund or exchange, provided that the following conditions are met.</p>
        <h2 className="text-2xl font-semibold">1. Conditions for Return</h2>
        <p>Items must be returned within 30 days of the purchase date. Products must be in their original condition: unworn, unwashed, and with all tags attached.</p>
        <h2 className="text-2xl font-semibold">2. How to Return</h2>
        <p>To initiate a return, please contact our customer service team. You will be provided with a return authorization and shipping instructions.</p>
        <h2 className="text-2xl font-semibold">3. Refunds</h2>
        <p>Once we receive and inspect your returned item, we will process your refund. The refund will be credited to your original method of payment within 7-10 business days.</p>
      </div>
    </main>
  </div>
);

export default ReturnsPolicy;
