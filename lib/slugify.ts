export function slugify(name: string) {
  return name
    ?.replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
    .concat()
    .toLowerCase();
}
