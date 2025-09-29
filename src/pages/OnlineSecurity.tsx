
import Header from "@/components/Header";

const OnlineSecurity = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Online Security</h1>
      <div className="space-y-4">
        <p>We are committed to ensuring that your information is secure. To prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</p>
        <h2 className="text-2xl font-semibold">1. Secure Transactions</h2>
        <p>All payment transactions are processed through a secure gateway provider and are not stored or processed on our servers. We use Secure Socket Layer (SSL) technology to ensure that your personal information is encrypted and safe.</p>
        <h2 className="text-2xl font-semibold">2. Data Protection</h2>
        <p>We are committed to protecting your privacy. We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so.</p>
        <h2 className="text-2xl font-semibold">3. Your Responsibility</h2>
        <p>Keep your account password confidential. If you believe your password has been compromised, please change it immediately and contact us for assistance.</p>
      </div>
    </main>
  </div>
);

export default OnlineSecurity;
