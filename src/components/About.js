import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'


function About() {
  return (
    <div>
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2} columns={10}>
                <Grid item xs={5}>
                    <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                        poop
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                        </Typography>
                        <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={5}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                            poop
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                            </Typography>
                            <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default About