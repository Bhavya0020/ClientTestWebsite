import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Men", href: "/men" },
    { label: "Mens Footwear", href: "/men/footwear" },
    { label: "Trainers", href: "/men/footwear/trainers" },
    { label: "Nike Air Force 1 '07", href: "#", active: true },
  ];

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      {breadcrumbs.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
          {item.active ? (
            <span className="text-foreground font-medium">{item.label}</span>
          ) : (
            <a 
              href={item.href} 
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;