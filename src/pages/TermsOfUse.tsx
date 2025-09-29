
import Header from "@/components/Header";

const TermsOfUse = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
      <div className="space-y-4">
        <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.</p>
        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p>By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these terms.</p>
        <h2 className="text-2xl font-semibold">2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.</p>
        <h2 className="text-2xl font-semibold">3. Disclaimer</h2>
        <p>The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p>
      </div>
    </main>
  </div>
);

export default TermsOfUse;
