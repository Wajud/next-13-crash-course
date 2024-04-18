import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

// async function fetchRepos() {
//   const response = await fetch(
//     "https://api.github.com/users/bradtraversy/repos"
//   );

//   return response.json();
// }

const ReposPage = async () => {
  const res = await fetch("https://api.github.com/users/bradtraversy/repos", {
    next: {
      revalidate: 60,
    },
  });

  // Cause a delay by 1 second so that we can see the loading page

  await new Promise((resolve) => setTimeout(resolve, 1000));

  // End of delay

  const repos = await res.json();
  // console.log(repos);

  // const repos = await fetchRepos();
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>

                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>

                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
