export function trimSlashFromStringEnd(pathString: string) {
  let newString = pathString;
  while (newString[newString.length - 1] === "/") {
    newString = newString.slice(0, -1);
  }
  return newString;
}

export function trimSlashFromStringStart(pathString: string) {
  let newString = pathString;
  while (newString[0] === "/") {
    newString = newString.slice(1);
  }
  return newString;
}

export function trimSlashFromStringEdges(pathString: string) {
  return trimSlashFromStringStart(trimSlashFromStringEnd(pathString));
}

export function makeAbsolutePath(path: string) {
  return `/${trimSlashFromStringStart(path)}`;
}

export function combinePaths(...paths: string[]) {
  paths.forEach((path) => {
    if (typeof path !== "string") {
      throw new Error("combinePaths error: one of the path is not a string");
    }
  });
  return paths
    .map((path) => trimSlashFromStringEdges(path))
    .map((path) => path.split("/"))
    .reduce((path, nextPath) => path.concat(nextPath), [])
    .filter(Boolean)
    .join("/");
}

export function combineURLPaths(urlString: string, ...paths: string[]) {
  const url = new URL(urlString);
  const { origin } = url;
  const pathname = combinePaths(url.pathname, ...paths);
  return new URL(pathname, origin).toString();
}
