const URL =
  "https://3001-4geeksacade-reactflaskh-mq0lyq4lrub.ws-us59.gitpod.io/";

const LoginUser = (user) => {
  return fetch('https://3001-4geeksacade-reactflaskh-mq0lyq4lrub.ws-us59.gitpod.io/api/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(user),
  });
};

const RegisterUser = (user) => {
  return fetch('https://3001-4geeksacade-reactflaskh-mq0lyq4lrub.ws-us59.gitpod.io/api/signup', {
    method: "POST",
    headers: {
      "Content-Type": "application / json",
    },
    body: JSON.stringify(user),
  });
};

export {LoginUser, RegisterUser};