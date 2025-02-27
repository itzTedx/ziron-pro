"use client";

import React, { useEffect, useMemo, useState } from "react";

import { Icons } from "@/assets/icons";
import { AnimatedList as List } from "@/components/animations/animated-list";
import { cn } from "@/lib/utils";

interface Item {
  name: string;
  description: string;
  icon: React.ReactNode;
  time: string;
  index: number;
}

export function AnimatedList({ className }: { className?: string }) {
  // Memoize baseNotifications
  const baseNotifications = useMemo(
    () => [
      {
        name: "New Message",
        description: "Can i get more info on this",
        time: "10s ago",
        icon: <Icons.instagram />,
      },
      {
        name: "info@zironmeida.com",
        description: "Enquiry for Digital Marketing",
        time: "30s ago",
        icon: <Icons.gmail />,
      },
      {
        name: "Message from olivia",
        description: "It arrived in excellent condition, just as described",
        time: "30s ago",
        icon: <Icons.messenger />,
      },
      {
        name: "Linkedin",
        description: "You appeared in 9782 searches this week",
        time: "1m ago",
        icon: <Icons.linkedin />,
      },
      {
        name: "New Message",
        description: "Can i get more info on this",
        time: "10s ago",
        icon: <Icons.instagram />,
      },
      {
        name: "info@zironmeida.com",
        description: "Enquiry for Digital Marketing",
        time: "30s ago",
        icon: <Icons.gmail />,
      },
      {
        name: "Message from olivia",
        description: "It arrived in excellent condition, just as described",
        time: "30s ago",
        icon: <Icons.messenger />,
      },
      {
        name: "Linkedin",
        description: "You appeared in 9782 searches this week",
        time: "1m ago",
        icon: <Icons.linkedin />,
      },
    ],
    []
  );

  const calculateTimeAgo = (index: number) => {
    if (index === 0) return "just now";
    const secondsAgo = 10 + (index - 1) * 20; // First notification is "just now", next ones increment by 20s
    return secondsAgo < 60
      ? `${secondsAgo}s ago`
      : `${Math.floor(secondsAgo / 60)}m ago`;
  };

  // Memoize Notification component
  const Notification = React.memo(
    ({ name, description, icon, index }: Item) => {
      const [timeAgo, setTimeAgo] = useState("");

      useEffect(() => {
        const time = calculateTimeAgo(index);
        setTimeAgo(time);
      }, [index]);

      return (
        <figure
          className={cn(
            "relative mx-auto min-h-fit w-full max-w-[300px] cursor-pointer overflow-hidden rounded-2xl px-3 py-2",
            "transition-all duration-200 ease-in-out hover:scale-[103%]",
            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-xl lg:size-10">
              <div className="relative size-5 lg:size-6">{icon}</div>
            </div>
            <div className="flex flex-col overflow-hidden">
              <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
                <span className="text-xs lg:text-sm">{name}</span>
                <span className="mx-1">·</span>
                <span className="text-[0.5rem] text-gray-500 lg:text-xs">
                  {timeAgo}
                </span>
              </figcaption>
              <p className="truncate text-xs font-normal">{description}</p>
            </div>
          </div>
        </figure>
      );
    }
  );

  Notification.displayName = "Notification"; // Added display name

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg border p-6 md:shadow-xl",
        className
      )}
    >
      <List>
        {baseNotifications.map((item, idx) => (
          <Notification {...item} key={idx} index={idx} />
        ))}
      </List>
    </div>
  );
}
