import React from 'react';

export default class AcceptAppointement extends React.Component{
	constructor(props){
		super(props)
		this.state = {
		}
	}
	
	//through this lifecycle method return the props to show the result 
	static getDerivedStateFromProps = (nextProps) =>{
		return{
			detail: nextProps.history.location.state.detail
		}
	}

	render(){
		debugger
	  	return (
		    <div className="container">
		      <h1>Accepted Appointement List</h1>
		      	{
		      		this.state.detail.length > 0
		      		?
	                <tabel>
	                    <tr>
	                    	<th></th>
	                        <th>Id</th>
	                        <th>Appointee Name</th>
	                        <th>From</th>
	                        <th>To</th>
	                    </tr>
	                    {
	                        this.state.detail.map((item , index) => {
	                            return(
	                                    <tr style={{textAlign: "center"}}>
	                                        <td>{index+1}</td>
	                                        <td><label>{item.item.id}</label></td>
	                                        <td><label>{item.item.appointee_name}</label></td>
	                                        <td><label>{item.item.fromTime}</label></td>
	                                        <td><label>{item.item.toTime}</label></td>
	                                    </tr>
	                                )

	                        })
	                    }
	                </tabel>
		      		:
		      		<div>
		      			No Record Found
		      		</div>
		      	}
		      	<div className="m1">
	                <button onClick={() => {this.props.history.push("/")}} >Go Back</button>
	            </div>
		    </div>
	  );
	}
}
