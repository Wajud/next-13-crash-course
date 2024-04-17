import React from "react";

// async function fetchRepos() {
//   const response = await fetch(
//     "https://api.github.com/users/bradtraversy/repos"
//   );

//   return response.json();
// }

const ReposPage = async () => {
  const res = await fetch("https://api.github.com/users/Wajud/repos");
  const repos = await res.json();

  return <div>{repos[0].name}</div>;
};

export default ReposPage;
