import React,{useState,useEffect} from 'react'

import {NewsContainer, NewsWrapper, NewsCard, NewsIcon, NewsH2, NewsHeading} from '../News/NewsElements'
import axios from 'axios'
import {Grid} from 'react-loading-icons'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({

  card: {
    height: '100%',
    maxHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    justifyContent: 'space-between',
    // alignItems : 'center',
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


const Blogs = () => {

  const classes = useStyles();

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('https://dac-api.herokuapp.com/blogs').then(
      res => {
        
        const newBlogs = blogs.splice()

        for(var i=0;i<3;i++)
        {
          newBlogs.push({title : res.data[i].title, img : res.data[i].img, readTime : res.data[i].readtime, blogNo: i, link : res.data[i].link, date : res.data[i].date})
        }

        setBlogs(newBlogs)
        
      }
    )
    console.log("From medium",blogs)
  },[])

  const clickHandler = (link) => {
    window.open(link)
  }

  return (
    <NewsContainer id='Blogs'>
      <NewsHeading>Blogs</NewsHeading>

      {blogs.length ? <NewsWrapper>
        {blogs.map((blog) => (
        
        // <NewsCard onClick = {e => clickHandler1(blog.link)}>
        //   <NewsIcon src={blog.img}/>
        //   <NewsH2>{blog.title}</NewsH2>
        //   {/* <NewsButton onClick = {e => clickHandler1(e)}>Learn More</NewsButton> */}
        // </NewsCard>

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
            component="img"
            height="140"
            image={blog.img}
          />
          <CardContent classes={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="div" >
            {blog.title}
            </Typography>
          </CardContent>
          <CardActions style={{display: "flex", justifyContent: "space-between"}}>
            <Button size="small" onClick={e => clickHandler(blog.link)}>Learn More</Button>
          </CardActions>
        </Card>
        
        ))}
        
      </NewsWrapper>
      : <Grid />}
      
    </NewsContainer>
  )
}

export default Blogs
