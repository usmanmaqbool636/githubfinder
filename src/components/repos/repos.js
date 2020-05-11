import React,{Component} from 'react';
import RepoItem from './repoItem';
import axios from 'axios';
import propTypes from 'prop-types';
import Spinner from '../layout/spinner';

class Repos extends Component {
    state = {
        repos: [],
        loading:true
    }
    componentDidMount = async () => {
        await this.getRepos(this.props.username)
    }
    getRepos = async (username) => {
        this.setState({ loading: true });
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
          &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        this.setState({ repos: res.data, loading: false })
    }
    render() {
        const { repos,loading } = this.state;
        if(loading){
            return <Spinner />
        }
        if (repos.length > 0) {
            return (
                <span style={{color:"white"}}>
                <h1 style={{textAlign:"center" ,color:"#e8e8ed"}} > Repos </h1>
                {repos.map(repo => <RepoItem key={repo.id} repo={repo} />)}
                </span>
            )
        }
        return (
            <h3>
                No Repo Found
            </h3>
        );
    }
}

Repos.propTypes={
    username:propTypes.string.isRequired
}
export default Repos;