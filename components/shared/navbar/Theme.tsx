"use client";

import { useTheme } from "@/context/ThemeProvider";
import React from "react";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { themes } from "@/constants";

export function MenubarDemo() {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger>
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="sun"
              width={20}
              height={20}
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="moon"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300 ">
          {themes.map((items) => (
            <MenubarItem
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              key={items.value}
              onClick={() => {
                setMode(items.value);
                if (items.value !== "system") {
                  localStorage.theme = items.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}>
              <Image
                src={items.icon}
                alt={items.value}
                width={16}
                height={16}
              />
              <p
                className={`body-semibold text-light-500 ${
                  mode === items.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}>
                {items.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default MenubarDemo;
