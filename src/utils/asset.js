export function asset(path) {
  const cleanPath = String(path).replace(/^\//, "");
  const publicUrl = process.env.PUBLIC_URL || "";
  return `${publicUrl}/${cleanPath}`;
}
