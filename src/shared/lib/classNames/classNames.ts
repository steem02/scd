type Mods = Record<string, boolean | string>;

export function cn(cls: string | Array<string | undefined>, mods: Mods = {}) {
  const additionalClasses = Object.keys(mods).filter((key) => Boolean(mods[key]));

  const classes = Array.isArray(cls) ? cls : [cls];

  return [...classes.filter(Boolean), ...additionalClasses].join(' ');
}
