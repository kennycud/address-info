import React from 'react'
import { useSelector } from 'react-redux'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'

export const AddressTable = () => {
  let key = useSelector((state) => state.auth?.user?.walletInfo)
  if( key === undefined ) key = [];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Path</TableCell>
            <TableCell>Address</TableCell>
            <TableCell align="right">Transaction Count</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {key.map((row) => (
            <TableRow
              key={row.address}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.pathAsString}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell align="right">{row.transactionCount}</TableCell>
              <TableCell align="right">{(row.value * Math.pow(10, -8)).toFixed(8)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
