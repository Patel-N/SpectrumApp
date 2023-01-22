import React from 'react';
import MUIDataTable from "mui-datatables";
import {Container, Grow, Grid} from '@material-ui/core';
const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'checkbox',
};


const Profiles = () => {

    return (
        <Grow in>
        <Container> 
        <Grid 
            container 
            spacing={0}
            direction="column"
            alignItems="center"
            justify='center'
            style={{minHeight: '100vh'}}
            fontColor='red'>
            
                <MUIDataTable
                title={"Employee List"}
                data={data}
                columns={columns}
                options={options}
                />
                
        </Grid>
        </Container>
        </Grow>
    )

}

export default Profiles