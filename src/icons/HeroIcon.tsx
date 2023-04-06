import * as HeroIcons from "@heroicons/react/24/outline";
import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof HeroIcons;
}
const HeroIcon = ({ name }: IconProps) => {
  const Icon = HeroIcons[name];

  if (!Icon) {
    return null;
  }

  return <Icon className="h-5 w-5" />;
};

export default HeroIcon;
