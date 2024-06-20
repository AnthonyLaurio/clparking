import { Container, Box, Typography, Button } from "@mui/material"
import ParkingTable from "./components/parkingTable";
import RegisterVisitorForm from "./components/registerVisitorForm";

export default function Home() {

  return (
    <main>
      <Container maxWidth={false}  sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ height: '8vh', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid grey' }} >
            <Typography variant="h3" fontWeight={700}>
              Carson Landing Parking
            </Typography>
            <RegisterVisitorForm/>
          </Box>
          <Box sx ={{ minHeight: '78vh', display: 'flex', alignItems: 'top', justifyContent: 'center', border: '2px solid grey', marginTop: '1vh'}}>
            <ParkingTable/>
          </Box>
          <Box sx ={{ height: '8vh', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid grey', marginTop: '1vh'}}>
            
          </Box>
        </Container>
    </main>
  );
}
