import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import DvrIcon from '@material-ui/icons/Dvr';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import SchoolIcon from '@material-ui/icons/School';
import { Typography } from '@material-ui/core';
import *as ROUTES   from '../../../../config/routes';
import {Link} from 'react-router-dom'
import  FirebaseContext  from 'firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#EDEDED',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    }
  },

  grid: {
    width: '90%', 
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    }
  }
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();
  const [count , setCount] = useState([])
  const [active, setActive] = useState([])
  const [live , setLive] = useState([])
  const [trainers , setTrainers] = useState([])
  const [modules , setModules] = useState([])
  const [sessions , setSessions] = useState([])
  const [announcements , setAnnouncements] = useState([])
  const [hired , setHired] = useState([])

  useEffect(()=>{
    FirebaseContext.firestore().collection("orders/8XAMQYBG1zOq6iCe7e2W9jajvSs2/items")
    .get()
    .then(querySnapshot => {
      setCount(querySnapshot.size)
    }); 
    FirebaseContext.firestore().collection("users/trainee/users")
    .get()
    .then(snap =>{
      setActive(snap.size)
    })
    FirebaseContext.firestore().collection("users/trainer/dashboard/live_class/schedule")
    .get()
    .then(snap =>{
      setLive(snap.size)
    })
    FirebaseContext.firestore().collection("users/trainer/sys_trainers")
    .get()
    .then(snap =>{
      setTrainers(snap.size)
    })
    FirebaseContext.firestore().collection("modules")
    .get()
    .then(snap =>{
      setModules(snap.size)
    })
    FirebaseContext.firestore().collection("users/trainer/dashboard/session/session")
    .get()
    .then(snap =>{
      setSessions(snap.size)
    })
    FirebaseContext.firestore().collection("users/admin/dashboard/anouncement/anouncement")
    .get()
    .then(snap =>{
      setAnnouncements(snap.size)
    })
    FirebaseContext.firestore().collection("users/admin/dashboard/hired_trainees/hired")
    .get()
    .then(snap =>{
      setHired(snap.size)
    })
  })
  
  return (
    <div className={classes.root}>
      <Grid container spacing={6} className={classes.grid}>
        <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
                <PersonIcon style={{
                  color: '#00BEF2', 
                  fontSize: '40px', 
                  marginBottom: '-25px',
                  marginRight: '20px'
                }} 
                />
              Hired Trainees  
              <h3>{hired}</h3> 
              <br />
            </div>
        </Grid>

        <Grid item xs={12} sm={6}>
        <a href ={ROUTES.ENROLLED}>
        <div className={classes.paper}>
                <PersonIcon style={{
                  color: '#82B366', 
                  fontSize: '40px', 
                  marginBottom: '-25px',
                  marginRight: '20px'
                }} 
                />    
                Enrolled trainees {" "}
                <h3>{count}</h3>
              <br />
            </div>
        
        </a>
            
        </Grid>

        <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
                <GroupAddIcon style={{
                  color: '#DF8C42', 
                  fontSize: '40px', 
                  marginBottom: '-25px',
                  marginRight: '20px'}} 
                />    
                   active users
              <br />
              <h3>{active}</h3>
            </div>
        </Grid>

        <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
                <img src="https://cdn4.iconfinder.com/data/icons/digital-marketing-gradient-rave-and-glow/512/Promotion-128.png" 
                    alt=""
                    style={{
                        color: '#DF8C42', 
                        width: '12%', 
                        marginBottom: '-25px',
                        marginRight: '20px'
                    }} 
                />    
                Announcements 
              <br />
                  <h3>{announcements}</h3>
            </div>
        </Grid>

        <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
                <DvrIcon style={{
                    color: '#B20000', 
                    fontSize: '40px', 
                    marginBottom: '-25px',
                    marginRight: '20px'}} 
                    />    
                   sessions
                <br />
                <h3>{sessions}</h3>
            </div>
        </Grid>

        <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
                <DvrIcon style={{
                    color: '#FA6800', 
                    fontSize: '40px', 
                    marginBottom: '-25px',
                    marginRight: '20px'}} 
                    />    
                    Live Classes
                <br />
                <h3>{live}</h3>
            </div>
        </Grid>

        <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
                <QueuePlayNextIcon style={{
                    color: '#33A64C', 
                    fontSize: '40px', 
                    marginBottom: '-25px',
                    marginRight: '20px'}} 
                    />    
                    Trainers
                <br />
                <h3>{trainers}</h3>
            </div>
        </Grid>

        <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
                <SchoolIcon style={{
                    color: '#FF0080', 
                    fontSize: '40px', 
                    marginBottom: '-25px',
                    marginRight: '20px'}} 
                    />    
                    Trainer's Modules
                <br />
                <h3>{modules}</h3>
            </div>
        </Grid>

        <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
                <Typography>
                    Top 4 Modules
                </Typography>
                <Typography>
                    130 enrollements in 4 top modules
                </Typography>
                {props.rank}
            </div>
        </Grid>

        <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
                <Typography>
                    Module completions
                </Typography>
                {props.completion}
            </div>
        </Grid>
      </Grid>
    </div>
  );
}
