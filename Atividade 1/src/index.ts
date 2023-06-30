import axios from "axios";

async function getUserFromGithub(id: number) {
  try {
    const resposta = await axios.get(`https://api.github.com/users`);

    const user = resposta.data
      .map((user: any) => {
        return {
          id: user.id,
          nome: user.login,
          url: user.url,
        };
      })
      .filter((user: any) => user.id === id);

    return user;
  } catch (error) {
    console.log("Deu ruim.");
  }
}
async function executarFuncao(idUser: number) {
  const dados = await getUserFromGithub(idUser);

  console.log(dados);
}
executarFuncao(1);

async function getRepositories(repo: string) {
  try {
    const resposta = await axios.get(`https://api.github.com/users`);

    const userRepo = resposta.data
      .map((user: any) => {
        return {
          login: user.login,
          url: user.repos_url,
        };
      })
      .filter((user: any) => user.login === repo);

    return userRepo;
  } catch (error) {
    console.log("Deu ruim.");
  }
}

async function executarGetRepo(repo: string) {
  const dados = await getRepositories(repo);
  console.log(dados);
}

executarGetRepo("mojombo");
