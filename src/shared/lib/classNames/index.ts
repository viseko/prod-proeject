type Mods = Record<string, boolean | string>;
type Additional = string[];

type ClassnamesType = string | Additional | Mods;

export default function classNames(...args: ClassnamesType[]): string {
  const list:string[] = [];

  args.forEach(arg => {
    if (typeof arg === "string") {
      list.push(arg);
    }
    else if (Array.isArray(arg)) {
      list.push(...arg.filter(Boolean));
    }
    else {
      const values = Object.entries(arg)
        .filter(([cls, value]) => Boolean(value))
        .map(([cls]) => cls);
      
      list.push(...values);
    }
  });

  return list.join(" ");
}
