'use server';
import React from 'react';
import { Card, CardContent, Typography, Grid2, Box, CardHeader, Stack } from "@mui/material";

const TeamsPage = () => {
    const leagues = [
        {
            name: "Premier League",
            teams: [
                {
                    name: "Manchester United",
                    coaches: [
                        {
                            id: 12345,
                            firstName: "Eric",
                            lastName: "ten Hag"
                        },
                        {
                            id: 12346,
                            firstName: "Someone",
                            lastName: "Else"
                        },
                    ],
                    players: [
                        {
                            id: 12345,
                            firstName: "Ronaldo",
                            lastName: "Test"
                        },
                        {
                            id: 12346,
                            firstName: "Sancho",
                            lastName: "Test"
                        },
                        {
                            id: 12347,
                            firstName: "Varane",
                            lastName: "Test"
                        },
                    ],
                },
                {
                    name: "Real Madrid",
                    coaches: [
                        {
                            id: 12345,
                            firstName: "Eric",
                            lastName: "ten Hag"
                        },
                        {
                            id: 12346,
                            firstName: "Someone",
                            lastName: "Else"
                        },
                    ],
                    players: [
                        {
                            id: 12345,
                            firstName: "Ronaldo",
                            lastName: "Test"
                        },
                        {
                            id: 12346,
                            firstName: "Sancho",
                            lastName: "Test"
                        },
                        {
                            id: 12347,
                            firstName: "Varane",
                            lastName: "Test"
                        },
                    ],
                },
                {
                    name: "Juventus",
                    coaches: [
                        {
                            id: 12345,
                            firstName: "Eric",
                            lastName: "ten Hag"
                        },
                        {
                            id: 12346,
                            firstName: "Someone",
                            lastName: "Else"
                        },
                    ],
                    players: [
                        {
                            id: 12345,
                            firstName: "Ronaldo",
                            lastName: "Test"
                        },
                        {
                            id: 12346,
                            firstName: "Sancho",
                            lastName: "Test"
                        },
                        {
                            id: 12347,
                            firstName: "Varane",
                            lastName: "Test"
                        },
                    ],
                },
            ],
        },
        {
            name: "La Liga",
            teams: [
                {
                    name: "Manchester United",
                    coaches: [
                        {
                            id: 12345,
                            firstName: "Eric",
                            lastName: "ten Hag"
                        },
                        {
                            id: 12346,
                            firstName: "Someone",
                            lastName: "Else"
                        },
                    ],
                    players: [
                        {
                            id: 12345,
                            firstName: "Ronaldo",
                            lastName: "Test"
                        },
                        {
                            id: 12346,
                            firstName: "Sancho",
                            lastName: "Test"
                        },
                        {
                            id: 12347,
                            firstName: "Varane",
                            lastName: "Test"
                        },
                    ],
                },
                {
                    name: "Real Madrid",
                    coaches: [
                        {
                            id: 12345,
                            firstName: "Eric",
                            lastName: "ten Hag"
                        },
                        {
                            id: 12346,
                            firstName: "Someone",
                            lastName: "Else"
                        },
                    ],
                    players: [
                        {
                            id: 12345,
                            firstName: "Ronaldo",
                            lastName: "Test"
                        },
                        {
                            id: 12346,
                            firstName: "Sancho",
                            lastName: "Test"
                        },
                        {
                            id: 12347,
                            firstName: "Varane",
                            lastName: "Test"
                        },
                    ],
                },
                {
                    name: "Juventus",
                    coaches: [
                        {
                            id: 12345,
                            firstName: "Eric",
                            lastName: "ten Hag"
                        },
                        {
                            id: 12346,
                            firstName: "Someone",
                            lastName: "Else"
                        },
                    ],
                    players: [
                        {
                            id: 12345,
                            firstName: "Ronaldo",
                            lastName: "Test"
                        },
                        {
                            id: 12346,
                            firstName: "Sancho",
                            lastName: "Test"
                        },
                        {
                            id: 12347,
                            firstName: "Varane",
                            lastName: "Test"
                        },
                    ],
                },
            ],
        },
    ];

  return (
    <Box sx={{ padding: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
            Your Teams
        </Typography>
        <Grid2 container spacing={3}>
            {leagues.map((league, index) => (
                <Grid2 size={{ xs: 12, md: 6 }} key={`league-${index}`}>
                    <Card elevation={3}>
                        <CardHeader title={league.name} />
                        <CardContent>
                            <Grid2 container spacing={2}>
                                {league.teams.map((team, index) => (
                                    <Grid2 size={12} key={`team-${index}`}>
                                        <Card elevation={2} sx={{ padding: 2, borderRadius: '10px' }}>
                                            <CardHeader title={team.name} />
                                            <CardContent>
                                                <Grid2 container spacing={2}>
                                                    <Grid2 size={{ xs: 12, sm: 6 }} key={index}>
                                                        <Typography variant="h5" paddingBottom={2} sx={{ textDecoration: 'underline' }}>
                                                            Coaches
                                                        </Typography>
                                                        {team.coaches.map((coach, index) => (  
                                                            <Stack key={`coach-${index}`}>
                                                                <Typography variant="body1">
                                                                    {coach.firstName} {coach.lastName}
                                                                </Typography>
                                                            </Stack>
                                                        ))}
                                                    </Grid2>
                                                    <Grid2 size={{ xs: 12, sm: 6 }}>
                                                        <Typography variant="h5" paddingBottom={2} sx={{ textDecoration: 'underline' }}>
                                                            Players
                                                        </Typography>
                                                        {team.players.map((player, index) => (  
                                                            <Stack key={`player-${index}`}>
                                                                <Typography variant="body1">
                                                                    {player.firstName} {player.lastName}
                                                                </Typography>
                                                            </Stack>
                                                        ))}
                                                    </Grid2>
                                                </Grid2>
                                            </CardContent>
                                        </Card>
                                    </Grid2>
                                ))}
                            </Grid2>
                        </CardContent>
                    </Card>
                </Grid2>
            ))}
        </Grid2>
    </Box>
  );
};

export default TeamsPage;
