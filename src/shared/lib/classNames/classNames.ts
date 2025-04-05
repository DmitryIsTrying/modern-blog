export type Mods = Record<string, boolean | undefined>

export function classNames(cls: string, mods: Mods = {}, additional: (string | undefined)[] = []): string {
  const filteredMods = Object.entries(mods).reduce((acc: string[], [key, value]) => {
    if (value) acc.push(key)
    return acc
  }, [])

  return [cls, ...additional.filter(Boolean), ...filteredMods].join(' ')
}
