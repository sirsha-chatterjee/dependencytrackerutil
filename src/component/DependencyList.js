import React, { Component } from 'react'
import axios from 'axios'
import https from 'https'
import { Form , Row, Col,Badge,Button,ButtonToolbar} from 'react-bootstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import IntuitLogo from '../component/Intuit-Logo.png'
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from "@material-ui/icons/Search"
import { makeStyles } from '@material-ui/core/styles';
class DependencyList extends Component {

	
	constructor(props) {
		super(props)

		this.state = {
	  firstLoad : true,
	  dependencies: [],
	  roots: [],
	  repos: [],
	  repoName1: '',
	  repoName :'',
	  branch :'',
	  branchName: '',
	  errorMsg: '',
	  loadingMenu: true,
	  loadingRepo: false,
	  loadingDep: false
		}
		this.handleBranchChange = this.handleBranchChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRootChange = this.handleRootChange.bind(this);
	}

	

	componentDidMount() {
		
		const agent = new https.Agent({  
			rejectUnauthorized: false
		  });

		axios
			.get('https://localhost:8443/dependencytracker', { httpsAgent: agent })
			.then(response => {
				console.log(response.data)
				
				this.setState({ roots :response.data,loadingMenu:false})
			})
			.catch(error => {
        console.log(error.response)
        this.setState({errorMsg: 'Error retrieving data',loadingMenu: false})
			})
	}


	handleChange(event) {
		this.setState({repoName: event.target.value, branchName:""});
		
	}

	handleRootChange(event) {
		this.setState({rootName: event.target.value, loadingRepo:true});
		this.state.rootName=event.target.value;
		axios
			.get('https://localhost:8443/dependencytracker/repositories?root='+this.state.rootName)
			.then(response => {
				console.log(response.data)
				
				this.setState({ repos :response.data,loadingRepo:false})
			})
			.catch(error => {
        console.log(error.response)
        this.setState({errorMsg: 'Error retrieving data',loadingMenu: false,loadingRepo:false})
			})
	}

	renderTooltip(props) {
		return <Tooltip {...props}>Simple tooltip</Tooltip>;
	  }

	handleBranchChange(event) {
		this.setState({branch: event.target.value});
		this.state.branch=event.target.value;
	  }

	handleSubmit(event) {
		this.setState({loadingMenu : false,loadingDep: true ,dependencies:[],branchName: this.state.branch, repoName1: this.state.repoName})
		axios.get('https://localhost:8443/dependencytracker/dependencies?root='+this.state.rootName+'&repo='+this.state.repoName+'&branch='+this.state.branch)
		.then(response => {
			console.log(response)
		this.setState({ dependencies: response.data , errorMsg: null,  loadingDep: false })
				  
			  })
			  .catch(error => {
		  console.log(error)
		  this.setState({errorMsg: 'Error retrieving data', dependencies: [], loadingDep: false })
			  })
		event.preventDefault();
	  }

	  longText = `
	  Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
	  Praesent non nunc mollis, fermentum neque at, semper arcu.
	  Nullam eget est sed sem iaculis gravida eget vitae justo.
	  `;

	render() {
		const { repos, dependencies,errorMsg, roots } = this.state
		const classes = makeStyles(theme => ({
			button: {
			  margin: theme.spacing(1),
			},
			customWidth: {
			  maxWidth: 10,
			},
			noMaxWidth: {
			  maxWidth: 'none',
			},
		  }));
		return (
			
			<div>
			<div >
			<img src={IntuitLogo}  alt="" width="200"/>
			
			<h5 padding ='35px 70px' >Dependency Tracker</h5>
			</div>
			{this.state.loadingMenu ?
				<div>Loading Repositories...<LinearProgress/></div>
				:
				<div>
				<div >
				<Form onSubmit={this.handleSubmit}>
  					<Row>
						  <Col xs={1}></Col>
    					<Col xs={3} >
						
						<Form.Label>
          					1.-Please select your Github Root Repository:
          					<select class="browser-default custom-select" value={this.state.rootName} name="root" onChange={this.handleRootChange} >
							  <option>---Select Base Repository---</option>
		  					{roots.length
											? roots.map((dependency,i) => <option key={dependency.name} value={dependency.name}>{dependency.name}</option>)
          					: null}
          					</select>
							</Form.Label>
						</Col>
						<Col xs={3} >
						<Form.Label>
          					1.-Please select your Github Repository:
							{this.state.loadingRepo ? <LinearProgress/>:
          					<select class="browser-default custom-select" value={this.state.repoName} name="repo" onChange={this.handleChange} >
							  <option>---Select Repository---</option>
		  					{repos.length
											? repos.map((dependency,i) => <option key={dependency.name} value={dependency.name}>{dependency.name}</option>)
          					: null}
          					</select>}
							</Form.Label>
						</Col>
						
						<Col xs={3}>
						
						<Form.Label>
						3.-Please select Repository's branch:
						{this.state.loadingRepo ? <div><LinearProgress/></div>:
          					<select class="browser-default custom-select" value={this.state.branch} name = "branch" onChange={this.handleBranchChange} >
		  					<option>---Select Repository---</option>
							  
							{repos.length
					? repos.map((dependency) => dependency.name===this.state.repoName ? dependency.branchList.map((sub)=> <option key={sub.branchName} value={sub.branchName}>{sub.branchName}</option>):null)
          : null}
          </select>}
						</Form.Label>
						</Col>
						
						<Col>
						<Form.Label></Form.Label>
						<ButtonToolbar>
							<Button type="submit" disabled={this.state.loadingRepo}><SearchIcon/>Start Analysis</Button>
						</ButtonToolbar>
						</Col>
  					</Row>
				</Form>
				
	  </div>
		  
	  { this.state.loadingDep ?
	  			<Row>
				  
				  <Col><div><LinearProgress/>
				  <span className="sr-only">Loading dependencies...</span>
				  Loading dependencies...</div></Col>
				  
				</Row>
				  
				:
				
				<div>
					
					
				<table class="table table-hover" responsive="sm">
				
				
				
  				<thead class="thead-dark">
				  <tr ><th colspan='6' >({dependencies.length}) dependencies found for {this.state.repoName1} / {this.state.branchName}</th></tr></thead>
				<thead class="thead-light">
				<tr>
						<th>
						
						<div>Artifact ID</div>
						</th>
						<th>
						<div>Group ID</div>
						</th>
						<th>
						<div>Current Version</div>
						</th>
						<th>
						<div>Latest Release Version</div>
						</th>
						<th>
						<div>Comments</div>
						</th>
						<th>
						<div>All present Versions</div>
						</th>
				</tr>
				</thead>
				
  				<tbody>
				{dependencies.length
					? 
					
					dependencies.map(dependency =>
					
					<tr>
						<td>	
							<div key={dependency.artifactId}>{dependency.artifactId}</div>
						</td>
						<td>
							<div key={dependency.artifactId}>{dependency.groupId}</div>
						</td>
						<td>
							<div key={dependency.artifactId}><Badge variant="primary">{dependency.currentVersion}</Badge></div>
						</td>
						<td>
							<div key={dependency.artifactId}><Badge variant="success">{dependency.newVersion}</Badge><span></span></div>
						</td>
						<td>
							{/*<div key={dependency.artifactId}>{dependency.newVersion===dependency.currentVersion?<div>OK</div>:<div>NOT OK</div>}</div>*/}
							<div key={dependency.artifactId}>{dependency.comment==="OK"?<div><Badge variant="success">{dependency.comment}</Badge></div>:dependency.comment==="NOT OK"?<Badge variant="danger">{dependency.comment}</Badge>:<Badge variant="warning">{dependency.comment}</Badge>}</div>
						</td>
						<td>
							<div></div>
					<div key={dependency.artifactId}>{dependency.otherVersions.map((sub)=><Tooltip title={sub.projectList.map((project)=>{return <li>{project}</li>;})}><Badge variant="warning">{sub.version}</Badge></Tooltip>)}</div>
							
						</td>
					</tr>)
          : null}
		  </tbody>
		  </table>
        {errorMsg ? <div>{errorMsg}</div> : null}
		</div>}
		</div>
		  }
			</div>
		)
		
	}
}
export default DependencyList