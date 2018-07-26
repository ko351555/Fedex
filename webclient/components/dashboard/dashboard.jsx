import React from 'react';
import { Card,Dropdown,Button,Menu} from 'semantic-ui-react';
import DisplayCard from './displaycard';
export default class Dashboard  extends React.Component {
constructor () {
super();
this.state={
success:'',
array:[]
}
}
handleItemClick = (e, { name }) => this.setState({ activeItem: name })
render () {
const { activeItem,array } = this.state

return (
<div>
	<div className="header">
		Transport Management System
		
	</div>
	
	<DisplayCard/>
	<div className="footer-bottom">
		
		
	
	</div>
</div>
);
}
}//end of class