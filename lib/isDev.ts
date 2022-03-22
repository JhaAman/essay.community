export default function isDev() {
  return process.env.NODE_ENV === "development";
}

export const url = (path: string) => {
  if (isDev()) {
    return `http://localhost:3000${path}`;
  }
  return `https://www.essays.community${path}`;
};
