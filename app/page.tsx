import { Box, Grid2, Paper, Stack, Typography } from "@mui/material";
import Image from 'next/image';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function Home() {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src="/LeaguePal.jpg"
            alt="The Future"
            width={400}
            height={250}
            style={{
              borderRadius: '5px',
            }}
          />
        </Box> 
      </Grid2>
      <Grid2 size={12}>
        <Typography variant="body1" align="center">
          How does League Pal work? It's easy!
          <br /><br />
          First, create an organization to manage all your leagues, teams, and players.
          <br /><br />
          Now that you have an organization, create a league.<br />This can be something like "Town Soccer" or more specific like "Boys U8 Soccer".
          <br /><br />
          Next, create teams and players. This can be done in any order, but you'll need teams and players to create games.
        </Typography>
      </Grid2>
      <Grid2 size={12}>
        <Paper elevation={3} sx={{ pt: 4, pb: 4, borderRadius: '10px', backgroundColor: 'lightgray' }}>
          <Grid2 container spacing={2}>
            <Grid2 size={3}>
              <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
                <CorporateFareIcon fontSize="large" />
                <h3>Organizations</h3>
              </Stack>
            </Grid2>
            <Grid2 size={3}>
              <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
                <GroupWorkIcon fontSize="large" />
                <h3>Leagues</h3>
              </Stack>
            </Grid2>
            <Grid2 size={3}>
              <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
                <GroupsIcon fontSize="large" />
                <h3>Teams</h3>
              </Stack>
            </Grid2>
            <Grid2 size={3}>
              <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
                <ContactsIcon fontSize="large" />
                <h3>Players</h3>
              </Stack>
            </Grid2>
          </Grid2>
        </Paper>
      </Grid2>
      <Grid2 size={6}>
        More Content.
      </Grid2>
    </Grid2>
  );
}
