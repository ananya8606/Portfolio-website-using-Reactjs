import React from 'react'; 
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// This is a functional component 
function Header() 
{ 
        return (
<Container>
			<Grid item xs={12}>
        <div><h3 className="h3-text">Hello! I'm Ananya</h3> 
        <h4 className="h4-text">A final year engineering student who loves to learn and do creative things.</h4></div>
</Grid>
		</Container>);
} 

export default Header;