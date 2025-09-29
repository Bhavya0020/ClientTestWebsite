
import Header from "@/components/Header";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <div className="space-y-4">
        <p>This privacy policy sets out how we use and protect any information that you give us when you use this website.</p>
        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, and in connection with other activities, services, features or resources we make available on our Site.</p>
        <h2 className="text-2xl font-semibold">2. How We Use Collected Information</h2>
        <p>We may collect and use Users personal information for the following purposes: to improve customer service, to personalize user experience, and to process payments.</p>
        <h2 className="text-2xl font-semibold">3. How We Protect Your Information</h2>
        <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information.</p>
      </div>
    </main>
  </div>
);

export default PrivacyPolicy;
