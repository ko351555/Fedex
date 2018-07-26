import React from 'react';
import { Table, Image, Button, TextArea} from 'semantic-ui-react';
import _ from 'lodash'
export default class JobCards extends React.Component {
constructor () {
super();
}
render () {
console.log(this.props.job.Initilas.toString())
const job = this.props.job
console.log(this.props.length);
return (
<Table.Row className='tablerow'>
  
<Table.Cell>{job.Initilas.toString()}</Table.Cell>
<Table.Cell>{job.tripNbr.toString()}</Table.Cell>
<Table.Cell>{job.origin.toString()}</Table.Cell>
<Table.Cell>{job.destination.toString()}</Table.Cell>
<Table.Cell>{job.status.toString()}</Table.Cell>
<Table.Cell>{job.dspchTs.toString()}</Table.Cell>
<Table.Cell>{job.arrvdTs.toString()}</Table.Cell>
<Table.Cell>{job.pwerNbr.toString()}</Table.Cell>
<Table.Cell>{job.driver1.toString()}</Table.Cell>
<Table.Cell>{job.trailer1.toString()}</Table.Cell>
<Table.Cell>{job.dolly1.toString()}</Table.Cell>
</Table.Row>
);
}
}//end of class