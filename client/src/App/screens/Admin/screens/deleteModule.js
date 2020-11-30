import React from 'react';
import MaterialTable from 'material-table';
import { Paper } from '@material-ui/core';
import app from 'firebase/app';
import { withFirebase } from "../../../../App/firebase";
import 'firebase/firestore';
import { compose } from 'recompose';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

 // define a FirestoreDataConverter function for your class to use custom object.
 class moduleObj {
    constructor(module, description, content) {
        this.module = module;
        this.description = description;
        this.content = content
    }
    toString() {
        return this.module + ' ' + this.description + ' ' + this.content
    }
} 

// Firestore data converter
let ModuleConverter = {
    toFirestore: function(mod) {
        return {
            module: mod.module,
            description: mod.description,
            content: mod.content
            }
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new moduleObj(data.module, data.description, data.content)
    }
}

  
class DeleteUsers extends React.Component {
    constructor(props) {
        super(props);
        this.db = app.firestore();
        this.state = {
            columns: [
                {
                    title: 'Full Name', field: 'name',
                    editComponent: props => (
                        <input
                            type="text"
                            value={props.value}
                            onChange={
                                e => props.onChange(e.target.value)
                            }
                        />
                    )
                },
        
                { 
                    title: 'Email',
                    field: 'email', 
                    type: 'string' 
                },
    
            ],

            data: [],
            users: [],
            error: null,
            open: false,
        }
    }

    // handle click a way 
    handleClick = () => {
        this.setState({open: true});
    };
    
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({open: false});
    };

    deleteUserDetails(userId){
        this.db.collection("users/admin/dashboard/module/modules")
            .get()
            .then(querySnapshot => {
            try {
                let user = querySnapshot.docs;
                user.map(doc => doc.ref.delete().where("uid", "==", userId).limit(1))
                this.setState({
                    users: user
                });
            } catch(error) {
                this.setState({error});
            }
        });

        this.handleClick()
    }

    componentDidMount() {
        this.db.collection("users/admin/dashboard/module/modules")
            .onSnapshot(ModuleConverter => {
            const user = ModuleConverter.docs.map(doc => doc.data().to);
            this.setState({ users: user });
        }); 
    }


    render () {
        let { users } = this.state;
        users.map(user => (
            <div key={user.uid}>
                <Typography variant="body1" paragraph>
                    {user.module}
                </Typography>
                <Typography variant="body1" paragraph>
                    {user.content}
                </Typography>
            </div>
          ))


        return (
        <div style={{
            width: '80%',
            margin: '70px auto',
        }}>
            <MaterialTable
                title="Delete Trainer's Accounts"
                columns={this.state.columns}
                style={{
                    backgroundColor: 'transparent',
                    borderStyle: 'none',
                }}

                // overriding the container
                components={{
                    Container: props => <Paper {...props} elevation={0}/>
                }}

                data={this.state.users}

                editable={{
                     // Delete rows
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...this.state.data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            this.setState([...dataDelete]);
                            this.deleteUserDetails(oldData);
                            resolve();
                        }, 1000)
                    }),
                }}

                options={{
                    exportButton: true,
                    actionsColumnIndex: -1,
                    rowStyle: {
                        backgroundColor: '#EEE',
                    },
                    exportCsv: (columns, data) => {
                      alert('Data exported successfully !' + data.length + ' rows');
                    }
                }}
            />

            {
                this.state.users &&  <Snackbar 
                    open={this.state.open} 
                    autoHideDuration={6000} 
                    onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                        You have deleted the module successfully!
                    </Alert>
                </Snackbar>
            }
        </div>
        )
    }
}

export default compose(
    withFirebase,
)(DeleteUsers)
  