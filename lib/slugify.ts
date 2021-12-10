export function slugify(name: string) {
  return name?.replace(/ /g, '-').concat().toLowerCase();
}
