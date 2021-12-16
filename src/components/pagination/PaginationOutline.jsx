import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import './PaginationOutline.less';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

import { sortOff }  from '../../../redux/actions/Actions'

export default function PaginationOutline({pages, currentpage}) {
  let history = useHistory();
  const handleSwitchPage = (num) =>{
    dispatch(sortOff())
    history.push(`/page/${+num}`);
  }
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className='pagination__wrapper'>
      <div className={classes.root}>
        <Pagination count={pages} size={"large"} page ={currentpage } onChange ={(_, num)=>handleSwitchPage(num)} color="primary" />
      </div>
    </div>
    
  );
}
