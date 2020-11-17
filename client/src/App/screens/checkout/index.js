/** @jsx jsx */
import {jsx} from '@emotion/core';

import React, { useState } from 'react';
import { NavLink as Link } from "react-router-dom";
import * as colors from "../../styles/colors";
import Footer from "../../components/Footer/footer";
import TextFieldMui from "../components/textField";
import VisaLogo from "./static/Icon_Visa.png";

// MUI stuff
import  makeStyles  from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneIphoneOutlined from '@material-ui/icons/PhoneIphoneOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import { FormGroup} from '../../components';
import Button from '@material-ui/core/Button';
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import {FormControl, withStyles, CardHeader, InputLabel, 
    MenuItem, Select, Table, TableBody, TableCell, TextField, TableRow, 
    TableFooter, RadioGroup, Paper, Radio, Accordion, CardActions, IconButton, Collapse, AccordionDetails, AccordionSummary } from '@material-ui/core';


const StyledToggleButton = withStyles({
    root: {
      fontFamily: 'Arial',
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.25px',
      color: colors.gray80,
      padding: '15px 15px',
      textTransform: 'none',
      width: '100%',
      '&$selected': {
        backgroundColor: 'rgba(33, 137, 214, 0.14)',
        color: 'rgb(26, 88, 159)',
        '&:hover': {
          backgroundColor: 'rgba(33, 137, 214, 0.14)',
          color: 'rgb(26, 88, 159)',
        },
      },
    },
    selected: {
    },
  })(ToggleButton);
  
  const StyledGroupButton = withStyles({
    root: {
      padding: '15px 15px',
      width: '100%',
    },
  })(ToggleButtonGroup);
  const SavedCard = ({...props}) => (
    <Accordion style={{backgroundColor: colors.bluegray}}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <span style={{fontSize: "15px"}}>
            <IconButton style={{padding: "0px"}}>
                <Radio name={props.card.name} value={props.card.value} 
                style={{padding: "0px 0px 0px 10px", color: "#FFC107"}}/>
            </IconButton>
            <img style={{paddingRight: "20px"}}  src={VisaLogo} alt="visa"/>  
            {props.card.type} 
        </span> 
    </AccordionSummary>
    <AccordionDetails>
    <Card style={{
    backgroundColor: "#FFF",
    padding: "30px 25px"}}>
    <FormGroup style={{backgroundColor: "#fff"}}>
    <TextFieldMui 
        type ="text" 
        value="David Kayongo"
      //   variant="outlined"
        label = "Name on Card"
        inputProps ={{style: {fontSize: '13.5px'}}}
        />
    </FormGroup>
    <FormGroup style={{backgroundColor: "#fff", marginTop: "10px" }}>
    <TextFieldMui 
        type ="text"
        value="1234-4567-345"
      //   variant="outlined"
        label = "Card Number"
        inputProps ={{ style: {fontSize: '13.5px'}}}
    />
    </FormGroup>
<div style={{display: "flex", justifyContent: "space-between", marginTop: "10px"}} >
    <div style={{ display: "flex"}}>
        <FormGroup style={{width: "100px" ,backgroundColor: colors.base}}>
            <TextFieldMui 
                type ="text"
                value="JUN"
              //   variant="outlined"
                label = "MM"
                inputProps ={{ style: {fontSize: '13px'}}}
                />
        </FormGroup>
        <FormGroup style={{width: "100px", backgroundColor: colors.base}}>
            <TextFieldMui 
                inputProps ={{ style: {fontSize: '13px'}}}
                value="2020"
                type ="text"
              //   variant="outlined"
                label = "YYYY"
                />
        </FormGroup>
    </div>
    <FormGroup style={{width: "100px", backgroundColor: colors.base}}>
        <TextFieldMui 
            type ="text"
            value="1235"
          //   variant="outlined"
            inputProps ={{ style: {fontSize: '13.5px'}}}
            label = "CCV"
            />
    </FormGroup>
</div>
  </Card>
    </AccordionDetails>
</Accordion> 
);

  export function Savedcards () {
    const [value, setValue] = React.useState("add");
    const [name, setName] = React.useState("add");
    
    const onChangeCard = (event) => {
    setValue(event.target.value);
    setName(event.target.name);
    }
    return ( 
    <div>
    <RadioGroup 
    name={name}
    value={value}
    onChange={onChangeCard}
    >
        <Accordion style={{backgroundColor: colors.bluegray}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <span style={{fontSize: "15px"}}>
            <IconButton style={{padding: "0px"}}>
                <Radio name="add" value="add" style={{padding: "0px 0px 0px 10px", color: "#FFC107"}}/>
            </IconButton>
            <img style={{paddingRight: "20px"}}  src={VisaLogo} alt="visa"/>  
            Add card
        </span> 
    </AccordionSummary>
    <AccordionDetails>
    <Card style={{
            backgroundColor: "#FFF",
            padding: "30px 25px"}}>
            <FormGroup style={{backgroundColor: "#fff"}}>
            <TextFieldMui 
                type ="text"
                variant="outlined"
                label = "Name on Card"
                inputProps ={{ style: {fontSize: '13.5px'}}}
                />
            </FormGroup>
            <FormGroup style={{backgroundColor: "#fff", marginTop: "10px" }}>
            <TextFieldMui 
                type ="text"
                variant="outlined"
                label = "Card Number"
                inputProps ={{ style: {fontSize: '13.5px'}}}
            />
            </FormGroup>
        <div style={{display: "flex", justifyContent: "space-between", marginTop: "10px"}} >
            <div style={{ display: "flex"}}>
                <FormGroup style={{width: "100px" ,backgroundColor: colors.base}}>
                    <TextFieldMui 
                        type ="text"
                        variant="outlined"
                        label = "MM"
                        inputProps ={{ style: {fontSize: '13px'}}}
                        />
                </FormGroup>
                <FormGroup style={{width: "100px", backgroundColor: colors.base}}>
                    <TextFieldMui 
                        inputProps ={{ style: {fontSize: '13px'}}}
                        type ="text"
                        variant="outlined"
                        label = "YYYY"
                        />
                </FormGroup>
            </div>
            <FormGroup style={{width: "100px", backgroundColor: colors.base}}>
                <TextFieldMui 
                    type ="text"
                    variant="outlined"
                    inputProps ={{ style: {fontSize: '13.5px'}}}
                    label = "CCV"
                    />
            </FormGroup>
        </div>
        <FormGroup style={{display: "flex", flexDirection: 'row', marginTop: "30px"}}>
            <TextField
            type="checkbox"
            variant="outlined"
            checked={true}
            />
            <Typography variant="caption" style={{paddingLeft: "30px"}}>
                Remember this Card
            </Typography>
        </FormGroup>
        </Card>
    </AccordionDetails>
    </Accordion>
            {[
                {type:"Visa card", name: "visa", value: "visa"}, 
                {type: "Master card", name: "mastre", value: "mastre"} ].map(item => {
                return (
                    <SavedCard card={item} />
                );
            })}
        </RadioGroup>
        </div>
    );
        
}
  
  export function MoMoPay () {
      const [name, setName] = React.useState("momo");
      const [value, setValue] = React.useState("momo");
      const handleChangeCard = (event) => {
          setValue(event.target.value);
          setName(event.target.name);
      }
      return (
          <RadioGroup
          name={name}
          value={value}
          onChange={handleChangeCard}
          >
        <Accordion style={{backgroundColor: colors.bluegray}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <span style={{fontSize: "15px"}}>
            <IconButton style={{padding: "0px"}}>
                <Radio name="momo" value="momo" style={{padding: "0px 20px 0px 10px", color: "#FFC107"}}/>
            </IconButton>
            {/* <CreditCardOutlinedIcon style={{color: "#00ffbg"}}/>   */}
            MoMo Pay
        </span> 
    </AccordionSummary>
    <AccordionDetails>
    <Card style={{
            backgroundColor: "#FFF",
            padding: "30px 25px"}}>
            <FormGroup style={{backgroundColor: "#fff"}}>
            <TextFieldMui 
                type ="text"
                variant="outlined"
                label = "Name on Card"
                inputProps ={{ style: {fontSize: '13.5px'}}}
                />
            </FormGroup>
            <FormGroup style={{backgroundColor: "#fff", marginTop: "10px" }}>
            <TextFieldMui 
                type ="text"
                variant="outlined"
                label = "Card Number"
                inputProps ={{ style: {fontSize: '13.5px'}}}
            />
            </FormGroup>
        <div style={{display: "flex", justifyContent: "space-between", marginTop: "10px"}} >
            <div style={{ display: "flex"}}>
                <FormGroup style={{width: "100px" ,backgroundColor: colors.base}}>
                    <TextFieldMui 
                        type ="text"
                        variant="outlined"
                        label = "MM"
                        inputProps ={{ style: {fontSize: '13px'}}}
                        />
                </FormGroup>
                <FormGroup style={{width: "100px", backgroundColor: colors.base}}>
                    <TextFieldMui 
                        inputProps ={{ style: {fontSize: '13px'}}}
                        type ="text"
                        variant="outlined"
                        label = "YYYY"
                        />
                </FormGroup>
            </div>
            <FormGroup style={{width: "100px", backgroundColor: colors.base}}>
                <TextFieldMui 
                    type ="text"
                    variant="outlined"
                    inputProps ={{ style: {fontSize: '13.5px'}}}
                    label = "CCV"
                    />
            </FormGroup>
        </div>
        <FormGroup style={{display: "flex", flexDirection: 'row', marginTop: "30px"}}>
            <TextField
            type="checkbox"
            variant="outlined"
            checked={true}
            />
            <Typography variant="caption" style={{paddingLeft: "30px"}}>
                Remember this Card
            </Typography>
        </FormGroup>
        </Card>
    </AccordionDetails>
    </Accordion>
    <Accordion style={{backgroundColor: colors.bluegray}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <span style={{fontSize: "15px"}}>
            <IconButton style={{padding: "0px"}}>
                <Radio name="airtel" value="airtel" style={{padding: "0px 20px 0px 10px", color: "#FFC107"}}/>
            </IconButton>
            {/* <CreditCardOutlinedIcon style={{color: "#ff0000"}}/>   */}
            Airtel
        </span> 
    </AccordionSummary>
    <AccordionDetails>
    <Card style={{
            backgroundColor: "#FFF",
            padding: "30px 25px"}}>
            <FormGroup style={{backgroundColor: "#fff"}}>
            <TextFieldMui 
                type ="text"
                variant="outlined"
                label = "Name on Card"
                inputProps ={{ style: {fontSize: '13.5px'}}}
                />
            </FormGroup>
            <FormGroup style={{backgroundColor: "#fff", marginTop: "10px" }}>
            <TextFieldMui 
                type ="text"
                variant="outlined"
                label = "Card Number"
                inputProps ={{ style: {fontSize: '13.5px'}}}
            />
            </FormGroup>
        <div style={{display: "flex", justifyContent: "space-between", marginTop: "10px"}} >
            <div style={{ display: "flex"}}>
                <FormGroup style={{width: "100px" ,backgroundColor: colors.base}}>
                    <TextFieldMui 
                        type ="text"
                        variant="outlined"
                        label = "MM"
                        inputProps ={{ style: {fontSize: '13px'}}}
                        />
                </FormGroup>
                <FormGroup style={{width: "100px", backgroundColor: colors.base}}>
                    <TextFieldMui 
                        inputProps ={{ style: {fontSize: '13px'}}}
                        type ="text"
                        variant="outlined"
                        label = "YYYY"
                        />
                </FormGroup>
            </div>
            <FormGroup style={{width: "100px", backgroundColor: colors.base}}>
                <TextFieldMui 
                    type ="text"
                    variant="outlined"
                    inputProps ={{ style: {fontSize: '13.5px'}}}
                    label = "CCV"
                    />
            </FormGroup>
        </div>
        </Card>
    </AccordionDetails>
    </Accordion>
        </RadioGroup>
      );
  }
  export function ObjectViewCard(props) {
    const classes = useStyles();
  
    const [alignment, setAlignment] = React.useState('left');
    const [isExpanded, setIsExpanded] = useState(false);
    const handleClickExpansion = (event) => {
        setIsExpanded(!isExpanded)};
  
    const handleChange = (
      event,
      newAlignment
    ) => {
      setAlignment(newAlignment);
    };
  
    const children = [
      <StyledToggleButton key={1} value="left">
        {props.leftButtonContent}
      </StyledToggleButton>,
      <StyledToggleButton key={2} value="right">
        {props.rightButtonContent}
      </StyledToggleButton>,
    ];
    return (
        <FormGroup>
        <Card>
             <hr className={classes.divider}/>
           <div style={{textAlign: 'center'}} className={`row ${classes.rowContainer}`}>
      </div>
          <StyledGroupButton value={alignment} exclusive onChange={handleChange}>
            {children}
          </StyledGroupButton>
        </Card>
         <Paper style={{padding: "20px", margin: "10px 0px"}}>
         {
         alignment === "left" ? <MoMoPay />:
        <Savedcards />
         }
      </Paper>
      </FormGroup>
      );
    }

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    grid: {
      width: '90%', 
      margin: 'auto',
      [theme.breakpoints.down('sm')]: {
          width: '100%'
      }
    }
  }));

const Checkout = ({...props}) => {
    const classes = useStyles();
    const learnContent = ["content", "content", "content", "content", "content", "content"]
    return ( 
        <div className={classes.root}>
        <Card className="navbar navbar-default" css={{
            margin: "0 auto",
            backgroundColor: colors.gray,
            borderRadius: '7px',
            width: '95vw',
            height: '10vh'
        }} >
             <ul className="nav navbar-nav container" css={{
                 display: 'flex',
                 flexDirection: 'row',
             }}>
                <li>
                    <Link exact to="/" 
                    activeStyle={{ color: colors.blue}} 
                    css={{
                        color: colors.blue,
                        fontSize: "22px",
                        letterSpacing: '0.15rem'
                    }} >
                        <span></span>
                        &nbsp;Skylla
                    </Link>
                </li>
                <li>
                    <Tooltip title="Cart" aria-label="Cart" style={{color: '#0000FF',}}>
                        <AddShoppingCartIcon style={{color: colors.gray}} />
                    </Tooltip>
                </li>
             </ul>
        </Card>
        <Grid container spacing={6} className={classes.grid}>
            <Grid container spacing={6} style={{
                display: 'flex',
                justifyContent: 'space-evenly',
               }} className={classes.grid}>
                <Grid item xs={12} sm={5} style={{marginTop: '40px'}}>
                    <Typography variant="h6">Checkout</Typography>
                    <FormGroup style={{
                        width: "220px",
                        height: "45px"
                    }}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Billing Address</InputLabel>
                        <Select
                        style={{height: "35px"}}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={learnContent}
                        onChange={() => console.log()}
                        label="Billing Address"
                        >
                         <MenuItem value="" disabled><em>Country</em></MenuItem>
                        {learnContent.map( (item, index) => {
                            return (
                                <MenuItem value={item} key={index}>
                                    {item}
                                </MenuItem>
                            );
                        })}
                        </Select>
                    </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ObjectViewCard 
                        leftButtonContent={
                        <span>
                            <PhoneIphoneOutlined 
                            // style={{color: colors.gray20}} 
                            className={classes.icon}/> Mobile Money
                        </span>} 
                        rightButtonContent={
                            <span>
                             Credit or Debit Card
                            </span>
                        }/>
                    </FormGroup>
                </Grid>
                <Grid item xs={12} sm={5}>
                <Card style={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: "86%",
                        height: 'inherint',
                        padding: "20px 15px"
                    }}>
                        <CardHeader title="Summary"/>
                        <CardContent>
                            <div>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Original Price: </TableCell>
                                            <TableCell>Ush. 50000.00</TableCell>
                                        </TableRow>
                                       <TableRow>
                                            <TableCell>Coupon Discounts: </TableCell>
                                            <TableCell>Ugx. 0.00 </TableCell>
                                       </TableRow>
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell>Total</TableCell>
                                            <TableCell>Ugx. 50000.00 </TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </div>
                            <Typography style={{padding: "20px 0px"}} variant="body2"><span style={{fontWeight: 'bold'}}>SKYLLA</span> is required bt law to collect applicable
                            taxes for purcharses made in some tax juridications</Typography>
                            <Typography variant="subtitle2">By completing your purcharse you have agreed to these 
                                <a href="#">Terms and Conditions</a></Typography>
                            <div>
                                <FormGroup style={{paddingTop: "20px"}}>
                                    <Button style={{backgroundColor: '#FF0000'}}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        >Complete Payment</Button>
                                </FormGroup>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
            {/* <Card style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colors.gray,
                        height: '12vh',
                        marginBottom: '20px',
                    }}>
                        <CardContent>
                            <Typography variant="body">More about the module</Typography>
                        </CardContent>
                    </Card> */}
            </Grid>
               
        </Grid>
        <Footer/>
        </div>
     );
}
 
export default Checkout;