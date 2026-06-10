export enum BadgeVariant {
    Light = "light",
    Dark = "dark",
}

export interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
}