import * as React from "react";

export type DateViewerProps<C extends React.ElementType = "div"> = {
  as?: C;
} & Omit<React.ComponentProps<C>, "children">;

export function DateViewer<C extends React.ElementType = "div">({
  as,
  children,
  ...rest
}: DateViewerProps<C>) {
  const Component = as || "div";

  return <Component { ...rest }>{ children }</Component>;
}
