import React from 'react';
import app from 'firebase/app';
import Card from '@material-ui/core/Card'
import 'firebase/firestore'
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    card: {
        padding: theme.spacing(2),
        maxWidth:  '70%',
        margin: `${theme.spacing(1)}px auto`,
        
    },
});
class Submissions extends React.Component{
    constructor(){
        super();
        this.state ={
            loading: false,
            users:[]
        };
        this.db = app.firestore()
    }
   
    componentDidMount() {
        this.setState({ loading: true });
        this.db.collection(`users/trainer/dashboard/solutions/solutions`)
        .get()
        .then(querySnapshot =>{
            const data = querySnapshot.docs.map(doc=> doc.data());
            console.log(data)
            this.setState({users:data})
        })
      } 
        
      
    render(){
        const { classes } = this.props;
        const {users } = this.state;
        return(
            <div className={classes.root}>
                {users.map(user =>(
                    <div key={user.id}>
                        
                        <Card elevation={3} className={classes.card}>
                        <h4>Submitted by : <em>{user.user}</em> </h4>
                        <hr/>
                            <h4>Html</h4>
                            {user.html}
                           
                            <hr/>
                            <h4>Css</h4>
                            {user.css}
                             <hr/>
                            <h4>JavaScript</h4>
                            {user.js}

                        </Card>

                    </div>
                ))}
    
            </div>
        );

    }
   
}
export default withStyles(useStyles)(Submissions);