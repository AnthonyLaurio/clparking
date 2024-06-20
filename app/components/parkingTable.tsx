import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import prisma from '@/lib/db';

export default async function ParkingTable() {
  const visitors = await prisma.visitors.findMany()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>License Plate #</TableCell>
            <TableCell align="right">Sponsor</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visitors.map((visitor) => (
            <TableRow 
              key={visitor.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {visitor.plate}
              </TableCell>
              <TableCell align="right">{visitor.sponsor}</TableCell>
              <TableCell align="right">{visitor.startDate.toDateString()}</TableCell>
              <TableCell align="right">{visitor.endDate.toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}