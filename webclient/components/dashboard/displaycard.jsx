import React from 'react';
import {Container,Menu,Icon,Dropdown, Card,Table} from 'semantic-ui-react';
import JobCards from './jobcards'
export default class DisplayCard extends React.Component {
constructor () {
super();
this.state={
currentPage : 1,
rowsPerPage : 4,
column: null,
direction: null,
data : []
}
}
componentWillMount(){
this.getjobDetails();
}
getjobDetails(){
$.ajax({
url:'http://localhost:8283/api/v1/rnei/employee/〈org_id〉',
data:'GET',
success:function(result){

this.setState({data:result.message});
}.bind(this),
error:function(error){
this.setState({success:error});
}.bind(this)
});
}
handleClick = (event) => {
this.setState({
currentPage: Number(event.target.id)
});
}
handlePrevClick = (index) => (e) => {
e.preventDefault()
if(this.state.currentPage>(index)){
this.setState({
currentPage : this.state.currentPage -1
})
}
}
handleNextClick = (index) => (e) => {
e.preventDefault()
if(this.state.currentPage<(index)){
this.setState ({
currentPage : this.state.currentPage +1
})
}
}
handleSort = clickedColumn => () => {
const { column, data, direction } = this.state
if (column !== clickedColumn) {
this.setState({
column: clickedColumn,
data: _.sortBy(data, [clickedColumn]),
direction: 'ascending',
})
return
}
this.setState({
data: data.reverse(),
direction: direction === 'ascending' ? 'descending' : 'ascending',
})
}
render () {
const { currentPage, rowsPerPage ,column,data,direction} = this.state;
const indexOfLastTodo = currentPage * rowsPerPage;
const indexOfFirstTodo = indexOfLastTodo - rowsPerPage;
const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);

const length=data.length;
const MovieList=currentTodos.map((job,index)=>{
return <JobCards  job={job} length={length}  />
})
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(data.length / rowsPerPage); i++) {
pageNumbers.push(i);
}
const renderPageNumbers = pageNumbers.map(number => {
return (
<Menu.Item as='a'
key={number}
id={number}
onClick={this.handleClick}
>{number}
</Menu.Item>
);
});
return (
<div>
	<div >
		<Table  sortable celled fixed>
			<Table.Header className='table'>
				
				<Table.Row>
				<Table.HeaderCell sorted={column === 'Initilas' ? direction : null} onClick={this.handleSort('Initilas')}> Initilas</Table.HeaderCell>
			<Table.HeaderCell sorted={column === 'tripNbr' ? direction : null} onClick={this.handleSort('tripNbr')}> Trip Number</Table.HeaderCell>		<Table.HeaderCell sorted={column === 'origin' ? direction : null} onClick={this.handleSort('origin')}>Origin</Table.HeaderCell>
		<Table.HeaderCell sorted={column === 'destination' ? direction : null} onClick={this.handleSort('destination')}>Destination</Table.HeaderCell>
	<Table.HeaderCell sorted={column === 'status' ? direction : null} onClick={this.handleSort('status')}>Status</Table.HeaderCell>
<Table.HeaderCell sorted={column === 'dspchTs' ? direction : null} onClick={this.handleSort('dspchTs')}>DspchTs</Table.HeaderCell>
<Table.HeaderCell sorted={column === 'arrvdTs' ? direction : null} onClick={this.handleSort('arrvdTs')}>ArrvdTs</Table.HeaderCell>
<Table.HeaderCell sorted={column === 'pwerNbr' ? direction : null} onClick={this.handleSort('pwerNbr')}>PwerNbr/status</Table.HeaderCell>
<Table.HeaderCell sorted={column === 'driver1' ? direction : null} onClick={this.handleSort('driver1')}>Driver1/status</Table.HeaderCell>
<Table.HeaderCell sorted={column === 'trailer1' ? direction : null} onClick={this.handleSort('trailer1')}>Trailer1/status</Table.HeaderCell>
<Table.HeaderCell sorted={column === 'dolly1' ? direction : null} onClick={this.handleSort('dolly1')}>Dolly1/status</Table.HeaderCell>
</Table.Row>
</Table.Header>
<Table.Body>
{MovieList}
</Table.Body>
</Table>
</div>
<div>
<Menu floated='right' pagination>
<Menu.Item as='a' icon onClick={this.handlePrevClick(1)}>
<Icon name='left chevron' />
</Menu.Item>
{renderPageNumbers}
<Menu.Item as='a' icon onClick={this.handleNextClick(pageNumbers.length)}>
<Icon name='right chevron' />
</Menu.Item>
</Menu>
</div>
</div>
);
}
}//end of class