"use client";

import { type FC, type HTMLAttributes, useEffect } from "react";
import { Switch } from "@/src/shared/ui/Switch";
import Moon from "@/src/shared/ui/icons/Moon";
import Sun from "@/src/shared/ui/icons/Sun";
import classNames from "classnames";
import { useColorScheme } from "@/src/features/theme/hooks";
import { colorSchemeInitialize } from "@/src/features/theme/utils";

interface Props extends HTMLAttributes<HTMLLabelElement> {}

const ThemeSwitcher: FC<Props> = ({ className, ...props }) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    colorSchemeInitialize();
  }, []);

  return (
    <label
      className={classNames("flex items-center gap-4", className)}
      {...props}
    >
      <p className="font-semibold">Цветовая тема</p>
      <Switch
        onClick={() =>
          setColorScheme(colorScheme === "dark" ? "light" : "dark")
        }
        isActive={colorScheme === "dark"}
      >
        {colorScheme === "dark" ? <Moon /> : <Sun />}
      </Switch>
    </label>
  );
};

export default ThemeSwitcher;
