import React, { useState, useEffect } from 'react';
import './Cart.scss';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import index from '../../Actions/index'

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(name, qty, price) {
  const sum = priceRow(qty, price);
  return { name, qty, price, sum };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('iphoneX', 1, 5000),
  createRow('Samsung20', 1, 2000),
  createRow('SE', 2, 700),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function Cart() {
    const classes = useStyles();
    const cartList = useSelector( state => ({ cartList:state.cartList}) ); 
	return (

        <div className='cart'>
            <div className='cart-back'>
            </div>
            <h1>Your Cart</h1>
            <div className='top'>
            <div className='view'>
         <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Products
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="right">QUANTITY</TableCell>
            <TableCell align="right">REMOVE</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        { <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{ccyFormat(row.sum)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody> }
      </Table>
    </TableContainer>
    </div>
    </div>
        </div>   
	)
}

