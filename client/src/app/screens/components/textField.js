/** @jsx jsx */
import {jsx} from '@emotion/core'

import React, { useState } from "react";
import TextField  from "@material-ui/core/TextField";
import InputAdornment  from "@material-ui/core/InputAdornment";
import IconButton  from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
   iconButton: {
       outlined: 'none'
   }
};
const TextFieldMui = ({...props}) => {
    const [showPassword, setShowPassword] = useState(false);
    if (props.type == "password") {
        const handleClickShowPassword = () => setShowPassword(!showPassword);
        const {classes} = props;
        return ( 
            <TextField 
            label = {props.label}
            variant = {props.variant}
            type = {showPassword? 'text': 'password'}
            onChange = {props.onChange}
            inputProps ={{ style: {textAlign: 'center', fontSize: '13.5px'}}}
            size="small"
            className={classes.textField}
            InputProps= {{
                endAdornment: (
                    <InputAdornment>
                        <IconButton
                        arial-label ="toggle password visibility"
                        size="small"
                        className={classes.iconButton}
                        onClick={handleClickShowPassword}>
                            {showPassword? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                )
            }}
            />
         );
    } else {
        return (
            <TextField 
            css={{ textAlign: 'center'}}
            label = {props.label}
            variant = {props.variant}
            type = {props.type}
            size="small"
            inputProps ={{ style: {textAlign: 'center', fontSize: '13.5px'}}}
            onChange = {props.onChange} />
        );
    }
    
}
 
export default withStyles(styles)(TextFieldMui);