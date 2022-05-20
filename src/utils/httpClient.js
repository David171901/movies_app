const API = "https://api.themoviedb.org/3";

function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
      "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWM5YmIxNGUyNzJjODM2ZWY3MjhiOTFlZGQwYzQwNyIsInN1YiI6IjYyODcxY2IyMDg1OWI0MTQ5ZDJjMmM2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkNPoktPCwafiQKQoWBURCYPf98Ubkc2JSRbg34AWlw",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}

export {get}