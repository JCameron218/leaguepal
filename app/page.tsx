'use client';
import { Box, Grid2, Typography } from "@mui/material";
import Image from 'next/image';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactsIcon from '@mui/icons-material/Contacts';
import { IconLink } from "@components/common";

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
          How does League Pal work? It&#39;s easy!
          <br /><br />
          First, create an organization to manage all your leagues, teams, and players.
          <br /><br />
          Now that you have an organization, create a league.<br />This can be something like &#34;Town Soccer&#34; or more specific like &#34;Boys U8 Soccer&#34;.
          <br /><br />
          Next, create teams and players. This can be done in any order, but you&#39;ll need teams and players to create games.
        </Typography>
      </Grid2>
      <Grid2 size={12}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 6, md: 3 }}>
            <IconLink href="/organizations">
                <CorporateFareIcon fontSize="large" />
                <h3>Organizations</h3>
            </IconLink>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 3 }}>
            <IconLink href="/leagues">
              <GroupWorkIcon fontSize="large" />
              <h3>Leagues</h3>
            </IconLink>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 3 }}>
            <IconLink href="/teams">
              <GroupsIcon fontSize="large" />
              <h3>Teams</h3>
            </IconLink>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 3 }}>
            <IconLink href="/players">
              <ContactsIcon fontSize="large" />
              <h3>Players</h3>
            </IconLink>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={6}>
        More Content.
      </Grid2>
    </Grid2>
  );
}
