import type { ReactNode } from "react";

export interface ToggleProps {
  value: string;
  setValue: (newValue: string) => void;
  defaultValue: string;
  toggleValue: string;
}

export interface CheckToggleProps extends ToggleProps {
  defaultIcon: ReactNode;
  toggleIcon: ReactNode;
}

export interface AttrToggleProps extends ToggleProps {
  icon: ReactNode;
}