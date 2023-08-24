type Mods = Record<string, boolean | string>;

export function cn(cls: string | string[], mods?: Mods) {
  const additionalClasses = mods ? [
    ...Object.keys(mods)
      .filter((key) => Boolean(mods[key])),
  ] : [];

  const classes = Array.isArray(cls) ? cls : [ cls ];

  return [
    ...classes.filter(Boolean),
    additionalClasses,
  ].join(" ") || undefined;
}