type Mods = Record<string, boolean | string>;

export function cn(cls: string | string[], mods?: Mods) {
  return [].concat(
    cls,
    ...Object.keys(mods)
      .filter((key) => Boolean(mods[key])),
  ).join(" ");
}