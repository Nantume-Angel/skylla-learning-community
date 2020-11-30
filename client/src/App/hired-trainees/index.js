import React from 'react';
import MaterialTable from 'material-table';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Menu from '../screens/Admin/components/menu';
import Permissions from '../screens/Admin/components/permissions';
import Mobile from '../screens/Admin/mob';
import Views from '../screens/Admin/components/views/views';
import {SignUpPage} from '../screens/Admin/screens/addUsers';
import DeleteUsers from '../screens/Admin/screens/deleteUsers';
import Footer from '../components/Footer/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Define routes in the admin dashboard
const routes = [
  {
    path: "/admin",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <div>
       {/* Views */}
       <Views />
    </div>
  },

  {
    path: "/profile",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <div>
      Profile page
    </div>
  },

  {
    path: "/assessment",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <div>
      Final Assessments page
    </div>
  },

  {
    path: "/interviews",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <div>
      Interviews page
    </div>
  },

  {
    path: "/hire",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <div>
      Hire page
    </div>
  },

  {
    path: "/add_users",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <SignUpPage />
  },

  {
    path: "/delete_users",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <DeleteUsers />
  },

  {
    path: "/add_module",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <div>Add modules</div>
  },

  {
    path: "/delete_module",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <div>Delete modules</div>
  },

  {
    path: "/assessment",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <div>Final Assessments</div>
  },
];


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  appBar: {
    backgroundColor: '#0000FF',
    boxShadow: 'none',
    borderLeft: '1px solid white',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#0000FF',
    color: 'white',
  },
  paper: {
    margin: 'auto',
    width: '80%'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


const HiredTrainees = () => {
        const { useState } = React;
        const classes = useStyles();
        const theme = useTheme();
        const [open, setOpen] = React.useState(true);
      
        const handleDrawerOpen = () => {
          setOpen(true);
        };
      
        const handleDrawerClose = () => {
          setOpen(false);
        };
      
        const [columns, setColumns] = useState([
          { title: 'Fullname', field: 'fullname' },
          { title: 'ID Number', field: 'idnumber', initialEditValue: 'initial edit value' },
          { title: 'Gender', field: 'gender', type: 'text' },
          {
            title: 'Phone Contact',
            field: 'number',
            type:'number'
          },
          {
            title: 'Email',
            field: 'email',
            type:'email'
          },
          {
            title: 'Place of Residence',
            field: 'POR',
            type:'text'
          },
          {
            title: 'Date of birth',
            field: 'birthdate',
            type:'text'
          },
          {
            title: 'Date of Appointment',
            field: 'dop',
            type:'text'
          },
        ]);
      
        const [data, setData] = useState([
          { fullname: 'Wandera Rogers', idnumber: 20, gender: 'male', number: 63 , email:'rogerrisha@gmail.com' ,POR :'Ndejje' , birthdate:'20/30/2000' ,dop :'10/10/2000' },
          { fullname: 'Nantume Angel', idnumber: 22, gender: 'female', number: 63 , email:'rogerrisha@gmail.com' ,POR :'Ndejje' , birthdate:'20/30/2000' ,dop :'10/10/2000' },
          { fullname: 'Bukenya Ronnie', idnumber: 23, gender: 'male', number: 63 , email:'rogerrisha@gmail.com' ,POR :'Ndejje' , birthdate:'20/30/2000' ,dop :'10/10/2000' },
          { fullname: 'Jude Mark', idnumber: 40, gender: 'male', number: 63 , email:'rogerrisha@gmail.com' ,POR :'Ndejje' , birthdate:'20/30/2000' ,dop :'10/10/2000' },
          { fullname: 'Nsubuga Henry', idnumber: 70, gender: 'male', number: 63 , email:'rogerrisha@gmail.com' ,POR :'Ndejje' , birthdate:'20/30/2000' ,dop :'10/10/2000' },
          { fullname: 'Namwanza Ronnie', idnumber: 80, gender: 'male', number: 63 , email:'rogerrisha@gmail.com' ,POR :'Ndejje' , birthdate:'20/30/2000' ,dop :'10/10/2000' },
        ]);
      
        return (
          <div>
            <Router>
      <div>
        <div className={classes.root}>
          <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <div style={{margin: 'auto'}}>
                  <Typography noWrap>
                      SKYLLA LEARNING COMMUNITY
                  </Typography>
                </div>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader} open={open}>
                <IconButton onClick={handleDrawerClose} style={{color: 'white'}}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              
              <div className={classes.paper}>
                <Menu />
              </div>

              <Divider 
                style={{
                  backgroundColor: 'white',
                  width: '90%',
                  margin: 'auto',
              }}
            />

            <div className={classes.paper}> 
              <Permissions />
            </div>

            <Switch>
                {routes.map((route, index) => (
                  // You can render a <Route> in as many places
                  // as you want in your app. It will render along
                  // with any other <Route>s that also match the URL.
                  // So, a sidebar or breadcrumbs or anything else
                  // that requires you to render multiple things
                  // in multiple places at the same URL is nothing
                  // more than multiple <Route>s.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.sidebar />}
                  />
                ))}
              </Switch>
            </Drawer>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} style={{marginTop: -50}} />
             
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
          </Switch>
            </main>
        </div>

        {/* mobile */}
        <Mobile />
      </div>
    </Router>
             <MaterialTable
            title="Editable Preview"
            columns={columns}
            data={data}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setData([...data, newData]);
                    
                    resolve();
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
      
                    resolve();
                  }, 1000)
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);
                    
                    resolve()
                  }, 1000)
                }),
            }}
            options={{
              exportButton: true
            }}
          />
          <div style={{marginTop: 40}}>
                <Footer />
              </div>
          </div>
        )
      }
export default HiredTrainees