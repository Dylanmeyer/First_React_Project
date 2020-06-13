import React from "react";
import PropTypes from "prop-types";
import Repoitem from "./Repoitem";

const Repos = ({ repos }) => {
  return repos.map((repo) => <Repoitem repo={repo.id} key={repo.id} />);
};
Repos.PropTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
