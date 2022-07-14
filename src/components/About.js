import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Typography } from '@mui/material'
import Link from '@mui/material/Link'
import './About.css'


function About() {

    const cardStyle = {
        display: 'block',
        height: '45vh',
        alignItems: 'center'
    }

    const picStyle ={
        display: 'block',
        height: '100vh',
        justifyItems: 'center',

    }





  return (
    <div className='aboutDiv'>
        <Box sx={{ flexGrow: 1}}>
            <Grid className='aboutGrid' container spacing={0} columns={10}>
                <Grid item xs={5}>
                    <Card className="aboutCard" style={cardStyle}>
                    <CardContent>
                        <Typography sx={{ fontSize: 22 }} align='center' color="text.secondary" gutterBottom>
                        Developer
                        </Typography>
                        <Typography align='center' variant="h3" component="div">
                        Charles Jarvis
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} align='center' color="text.secondary">
                        biography
                        </Typography>
                        <Typography align='center' variant="body1">
                        Former service industry worker turned software engineer. Lifelong interest in computers which I hope to
                        turn into a lifelong career. Currently enrolled in the Flatiron school, learning JavaScript, React, Ruby,
                        and Ruby on rails. Prior to enrolling in Flatiron, received my degree in Computer Networking and Virtualization 
                        from Front Range Community College in Colorado. 
                        <br />
                        <br />
                        Below are Charles' relevant links:
                        </Typography>
                        <br />
                        <Typography align='center'>
                            <Link variant="h4" href="https://github.com/CSJarvis43" color="primary">
                                GitHub
                            </Link>
                        </Typography>
                        <br />
                        <Typography align='center'>
                            <Link variant="h4" href="https://www.linkedin.com/in/charles-jarvis-539b2314a/" color="primary">
                                LinkedIn
                            </Link>
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={5}>
                    <Card  className="aboutCard" style={cardStyle}>
                        <CardContent>
                            <Typography sx={{ fontSize: 22 }} align='center' color="text.secondary" gutterBottom>
                            Developer
                            </Typography>
                            <Typography variant="h3" align='center' component="div">
                            Chris Hendricks
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} align='center' color="text.secondary">
                            biography
                            </Typography>
                            <Typography align='center' variant="body1">
                            well meaning and kindly.
                            <br />
                            <br />
                            Below are Chris' relevant links:
                            </Typography>
                            <br />
                            <Typography align='center'>
                            <Link variant="h4" href="https://github.com/crshenx" color="primary">
                                GitHub
                            </Link>
                        </Typography>
                        <br />
                        <Typography align='center'>
                            <Link variant="h4" href="https://www.linkedin.com/in/chris-hendricks-109b0476/" color="primary">
                                LinkedIn
                            </Link>
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid className='picGrid' item xs={10}>
                    <Card className="aboutPic" style={picStyle}>
                    <CardMedia 
                            component="img"
                            // width="100vw"
                            image="https://media.comicbook.com/wp-content/uploads/2012/09/Avengers_1_2_3_Covers.jpg"
                            alt="avengers picture"
                            
                        />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default About