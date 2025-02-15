import Image from "next/image";
import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Card, CardContent } from "@/components/ui/card";

import { CaseType } from "../constant";

interface Props {
  items: CaseType[];
}

export const CaseCards = ({ items }: Props) => {
  const leftColumnItems = items.filter((_, index) => index % 2 === 0);
  const rightColumnItems = items.filter((_, index) => index % 2 !== 0);
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
      <div className="flex flex-col gap-12 md:gap-24">
        {leftColumnItems.map((item) => (
          <Link key={item.id} className="group" href={item.href}>
            <Card className="group w-full overflow-hidden">
              <CardContent className="relative p-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-auto w-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </CardContent>
            </Card>
            <div className="flex items-center justify-between pt-4">
              <div>
                <p className="text-xs">{item.category}</p>
                <h3 className="text-lg">{item.title}</h3>
              </div>
              <div className="hover:bg-background/800 flex shrink-0 items-center justify-center gap-1.5 rounded-lg border bg-background/50 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur-lg transition-all duration-500 ease-out">
                View Case <IconArrowUpRight />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-12 md:mt-24 md:gap-24">
        {rightColumnItems.map((item) => (
          <Link key={item.id} className="group" href={item.href}>
            <Card className="group w-full overflow-hidden">
              <CardContent className="relative p-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-auto w-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </CardContent>
            </Card>
            <div className="flex items-center justify-between pt-4">
              <div>
                <p className="text-xs">{item.category}</p>
                <h3 className="text-lg">{item.title}</h3>
              </div>
              <div className="hover:bg-background/800 flex shrink-0 items-center justify-center gap-1.5 rounded-lg border bg-background/50 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur-lg transition-all duration-500 ease-out">
                View Case <IconArrowUpRight />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
