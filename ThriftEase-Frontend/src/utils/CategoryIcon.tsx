import * as LucideIcons from "lucide-react";

const CategoryIcon = ({ iconKey }: { iconKey: string }) => {
  const IconComponent = (LucideIcons[iconKey as keyof typeof LucideIcons] ||
    LucideIcons.ShoppingBag) as React.FC<React.SVGProps<SVGSVGElement>>;

  return <IconComponent />;
};

export default CategoryIcon;
