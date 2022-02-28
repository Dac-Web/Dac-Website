import React,{useState,useEffect} from 'react'
import {NewsContainer, NewsWrapper, NewsHeading} from './NewsElements'
import axios from 'axios'
import {Grid} from 'react-loading-icons'

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  card: {
    height: '400px',
    minHeight: 'fit-content',
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
    axios.get('https://dac-api.herokuapp.com/news?topic=%22datascience%22')
    .then(
      res => {

        console.log(res)

        
        const newNews = news.splice()

        for(var i=0;i<3;i++)
        {
          newNews.push({title : res.data[i][0], img : res.data[i][1], link : res.data[i][2]})
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
    <NewsContainer id='News'>
      <NewsHeading>News</NewsHeading>
      {news.length ? <NewsWrapper>
        {news.map((i) => (
        <Card className={classes.card}>
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
