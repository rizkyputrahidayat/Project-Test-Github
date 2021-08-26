import { useState } from "react";
import axios from 'axios';
import DetailRepo from '../src/DetailRepo';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  };

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    }).then(res => {
      setLoading(false);
      setRepos(res.data);
    });
  }

  function renderRepo(repo) {
    return (
      <div className="row" onClick={() => getDetails(repo.name)} key={repo.id}>
        <h2 className="repo-name">
          {repo.name}
        </h2>
      </div>
    );
  }

  function getDetails(repoName){
    setDetailsLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/repos/${username}/${repoName}`,
    }).then(res => {
      setDetailsLoading(false);
      setDetails(res.data);
    });
  }

  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="center-side">
          <h2 className="head"> Explore Your Github </h2>
          <form className="form">
            <input
              className="input"
              value={username}
              placeholder="Nama Github..."
              onChange={e => setUsername(e.target.value)}
            />
            <button className="button" onClick={handleSubmit}>{loading ? "Pencarian" : "Cari"}</button>
            {/* <input type="button" className="button" value="Refresh" onClick="refresh()"></input> */}
          </form>
          <div className="results-container">
            {repos.map(renderRepo)}
          </div>
        </div>
        <DetailRepo details={details} loading={detailsLoading}/>
      </div>
    </div>
  );
}

export default App;