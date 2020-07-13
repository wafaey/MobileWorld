import React, { useState, useEffect } from 'react';
import MobileCard from '../../../Components/MobileCard/MobileCard'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './BestSellers.scss'

const useStyles = makeStyles((theme) => ({
    pag:{
        width:"60%",
        [theme.breakpoints.down('md')]: {
          width:"100%",
          height: 'auto',
        },
        margin:"auto",
        height: '48px',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.1) !important',
        backgroundColor: '#ffffff'
    }
  }));
export default function BestSellers() {
    const classes = useStyles();
    const mobilesInfo = [
        { id: 0, name: 'X', brand:'iphone ', date: '2017', color: "black",image:'iphone-x1.jpg', weight:'100gm', width:'6cm', height:'7cm'  },
        { id: 1, name: 'S20', brand:'Sumsung ', date: '2018', color: "blue",image:'iphone7.jpg', weight:'100gm', width:'6cm', height:'7cm'  },
        { id: 2, name: 'SE', brand:'iphone ', date: '2019', color: "white",image:'iphoneSE1.jpg', weight:'100gm', width:'6cm', height:'7cm'  },
        { id: 3, name: 'Note10', brand:'Sumsung ', date: '2017', color: "green",image:'iphone-xr1.jpg', weight:'100gm', width:'6cm', height:'7cm'  },
        { id: 4, name: '11', brand:'iphone ', date: '2020', color: "yellow",image:'iphone-11pro1.jpg', weight:'100gm', width:'6cm', height:'7cm'  },
        { id: 5, name: 'X', brand:'iphone ', date: '2017', color: "black",image:'iphone-x1.jpg', weight:'100gm', width:'6cm', height:'7cm'  },
        { id: 6, name: 'S20', brand:'Sumsung ', date: '2018', color: "blue",image:'iphone7.jpg', weight:'100gm', width:'6cm', height:'7cm'  },
        { id: 7, name: 'SE', brand:'iphone ', date: '2019', color: "white",image:'iphoneSE1.jpg', weight:'100gm', width:'6cm', height:'7cm'  },
        { id: 8, name: 'Note10', brand:'Sumsung ', date: '2017', color: "green",image:'iphone-xr1.jpg', weight:'100gm', width:'6cm', height:'7cm'  },
   ];
    const [pageNumber,setPageNumber] = useState(1);
    const onChangePage = (event,value)=>{
        setPageNumber(value);
    }
	return (
            <div className='sellers'>
                <h1>Best Seller Mobiles</h1>
                <div className='mobiles'>
                 {mobilesInfo.map((mobile,key)=> <MobileCard mobile={mobile} key={key}/>) }  
                </div>
                <div style={{ margin:"3%",width:"70%"}}> 
                <Pagination count={Math.ceil(mobilesInfo.length/9)} page={pageNumber} onChange={onChangePage} shape="rounded" className={classes.pag}/>
                </div>
            </div>
	)
}

