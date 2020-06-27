import Home from "../components/Home";
import AcceptAppointement from "../components/AcceptAppointement";
import RejectedAppointement from "../components/RejectedAppointement";

//import all the components and save in the array with path name
const routers = [
	{
		path: "/",
		component: Home
	},
	{
		path: "/accept_appointement",
		component: AcceptAppointement
	},
	{
		path: "/rejected_appointement",
		component: RejectedAppointement
	}
]

export default routers;