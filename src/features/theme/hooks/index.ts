import { type Dispatch, useEffect, useState } from "react";

import { type ColorSchemeSwitcherType } from "../types";
import { applyScheme, getSavedScheme, getSystemScheme } from "../utils";

export const useColorScheme = (): {
  colorScheme: ColorSchemeSwitcherType;
  setColorScheme: Dispatch<ColorSchemeSwitcherType>;
} => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeSwitcherType>(
    getSavedScheme() || getSystemScheme(),
  );

  useEffect(() => {
    applyScheme(colorScheme, true);
  }, [colorScheme]);

  return { colorScheme, setColorScheme };
};
