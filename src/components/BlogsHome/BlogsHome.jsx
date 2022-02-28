import React,{useState,useEffect} from 'react'
import {NewsContainer, NewsWrapper, NewsHeading} from '../News/NewsElements'
import axios from 'axios'
import {Grid} from 'react-loading-icons'

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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


const News = () => {

  const classes = useStyles();

  const [news,setNews] = useState([])

  useEffect(() => {
    axios.get('https://dac-api.herokuapp.com/blogs')
    .then(
      res => {

        console.log(res)

        
        const newNews = news.splice()

        for(var i=0;i<3;i++)
        {
          newNews.push({title : res.data[i].title, img : res.data[i].img, readTime : res.data[i].readtime, blogNo: i, link : res.data[i].link, date : res.data[i].date})
        }

        

        

        // console.log(res.data[0][0]);
        setNews(newNews)

      }
    )

    console.log(news)
  }, [])

  const clickHandler = (link) => {
    window.open(link)
  }



  return (
    <NewsContainer id='Blogs'>
      <NewsHeading>Blogs</NewsHeading>
      {news.length ? <NewsWrapper>
        {news.map((i) => (
        <Card className={classes.card}>
          <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src='https://miro.medium.com/fit/c/164/164/1*ktnaz9ZQ5DuNs0Nm0s_U3A.png'>
                          </Avatar>
                        }
                        title="Data Analytics Club"
                        subheader={i.date}
                      />
          <CardMedia
            className={classes.cardMedia}
            image={i.img}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {i.title}
            </Typography>
          </CardContent>
          <CardActions style={{display: "flex", justifyContent: "space-between"}}>
            <Button size="small" color="primary"  onClick = {e => clickHandler(i.link)}>
              Learn More
            </Button>
        
            
          </CardActions>
       </Card>
        ))}
        
      </NewsWrapper>
      : <div>
        
        <Grid/>
        
      </div>}
      
      
    </NewsContainer>
  )
}

export default News
