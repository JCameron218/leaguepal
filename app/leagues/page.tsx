'use server';
import React from 'react';
import { Card, CardContent, Typography, Grid2, Box, CardHeader, Stack } from "@mui/material";

const LeaguesPage = () => {
  const leagues = [
    {
      name: "Premier League",
      teams: 20,
      players: 500,
    },
    {
      name: "La Liga",
      teams: 20,
      players: 480,
    },
    {
      name: "Serie A",
      teams: 20,
      players: 490,
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
            Your Leagues
        </Typography>
        <Grid2 container spacing={3} sx={{ pt: 5 }}>
            {leagues.map((league, index) => (
            <Grid2 size={{xs: 12, sm: 6, md: 4 }} key={index}>
                <Card elevation={3}>
                <CardHeader title={league.name} style={{ textAlign: 'center'}} />
                <CardContent>
                    <Grid2 container spacing={2}>
                    <Grid2 size={6}>
                        <Card elevation={2} sx={{ padding: 2, borderRadius: '10px' }}>
                            <Stack justifyContent="center" alignItems="center">
                                <Typography variant="body1">
                                    Teams
                                </Typography>
                                <Typography variant="h4">
                                    {league.teams}
                                </Typography>
                            </Stack>
                        </Card>
                    </Grid2>
                    <Grid2 size={6}>
                        <Card elevation={2} sx={{ padding: 2, borderRadius: '10px' }}>
                            <Stack justifyContent="center" alignItems="center">
                                <Typography variant="body1">
                                    Players
                                </Typography>
                                <Typography variant="h4">
                                    {league.players}
                                </Typography>
                            </Stack>
                        </Card>
                    </Grid2>
                    </Grid2>
                </CardContent>
                </Card>
            </Grid2>
            ))}
        </Grid2>
    </Box>
  );
};

export default LeaguesPage;
