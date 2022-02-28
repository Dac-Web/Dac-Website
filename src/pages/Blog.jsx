import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {color} from '../components/Info/ColorTheme'

import Info from '../components/Info/Info'
import {Ourblog, Writeblog, Writeblog2} from '../components/Info/Data';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/SideBar/Sidebar'


import axios from 'axios'
import { useStateValue } from '../StateProvider';

import {Puff} from 'react-loading-icons'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardContainer: {
    paddingBottom: theme.spacing(8),
    display: 'flex',
    justifyContent: 'space-around',
    alignItems : 'space-around',
    justifyItems : 'space-around',
    alignContent : 'space-around',
  },
  cardGrid: {
    justifyContent: 'center',
    
  },
  card: {
    height: '100%',
    width: '80%',
    display: 'flex',
    maxHeight: '400px',
    flexDirection: 'column',
    alignSelf: 'center',
    justifySelf: 'center',
    justifyContent: 'space-around',
    alignItems : 'space-around',
    justifyItems : 'space-around',
    alignContent : 'space-around',
    marginLeft: '10%',
    marginBottom: '10%',
    
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Blog2() {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false)

  const [blogs, setBlogs] = useState([])

  const [{role}] = useStateValue()

  useEffect(() => {
    axios.get('https://dac-api.herokuapp.com/blogs').then(
      res => {
        console.log(res.data)
        const newBlogs = blogs.splice()

        for(var i=0;i<res.data.length;i++)
        {
          newBlogs.push({title : res.data[i].title, img : res.data[i].img, readTime : res.data[i].readtime, blogNo: i, link : res.data[i].link, date : res.data[i].date})
        }

        setBlogs(newBlogs)
        
      }
    )
    console.log("From medium",blogs)
  },[])

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const clickHandler = (link) => {
    window.open(link)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <main>
        {/* Hero unit */}
        
        
        
          {/* End hero unit */}
          <Info {...Ourblog}/>
          <div style={{backgroundColor: color.Navy,marginTop:"-100px", width: "100%"}}>
          {!blogs.length ? <Puff style={{marginLeft:"48%",marginBottom:"4%"}}/>:<></>}
          <Container className={classes.cardContainer} maxWidth="70%" >
          <Grid container spacing={12} className={classes.cardGrid}>
            {blogs.map((blog) => (
              <Grid item key={blog.blogNo} xs={12} sm={6} md={4}>
                    {/* <BlogsCard onClick = {e => clickHandler(blog.link)}>
                      <BlogsIcon src = {blog.img}/>
                      <BlogsH1>{blog.title}</BlogsH1>
                    </BlogsCard> */}
                    
                    <Card className={classes.card}>
                      <CardHeader
                                    avatar={
                                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src='https://miro.medium.com/fit/c/164/164/1*ktnaz9ZQ5DuNs0Nm0s_U3A.png'>
                                      </Avatar>
                                    }
                                    title="Data Analytics Club"
                                    subheader={blog.date}
                                  />
                      <CardMedia
                        className={classes.cardMedia}
                        image={blog.img}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {blog.title}
                        </Typography>
                      </CardContent>
                      <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                        <Button size="small" color="primary"  onClick = {e => clickHandler(blog.link)}>
                          Learn More
                        </Button>
                    
                        
                      </CardActions>
                    </Card>
               
              </Grid>
            ))}
          </Grid>
        </Container>
          {role !== 'U' ? <Info {...Writeblog}/> : <Info {...Writeblog2}/>}
          </div>
          
          
      </main>

    </React.Fragment>
  );
}


















