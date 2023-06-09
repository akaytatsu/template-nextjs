export const getRepos = (username: string) =>
  fetch("https://api.github.com/users/akaytatsu/repos");

export const getPatrimony = (id: number) =>
  fetch(
    `https://api.pre-release.ops.vert-tech.dev/api/public/v1/emission/${id}/patrimony`
  );
