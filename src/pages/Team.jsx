import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
import React,{useState} from 'react'
import './team.css'
import CuratorImg from '../images/Curator.png'
import SocialitesImg from '../images/Socialites.png'
import HeadHunterImg from '../images/headhunters.png'
import ExplorersImg from '../images/explorers.png'
import AnalystsImg from '../images/analysts.png'
import Sidebar from '../components/SideBar/Sidebar'
import Navbar from '../components/Navbar/Navbar'


export const Card = styled.div`
    margin-top : 80px;
    box-shadow : green;
    display : flex;
    width : 100%;
    z-index : 5;
    display : flex;
    justify-content : center;
    `;

export const CardContainer = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
    width : 70%;
`

export const CardServices = styled(LinkR)`
display : flex;
flex-direction : column;
background-color : black;
padding: 0 0 32px;
margin: 48px auto 0;
width: 100%;
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
border-radius: 20px;
height : 600px;
position : relative;
color : black;
justify-content : center;
text-decoration : none;

&:hover
{
    transition : all 0.2s ease-out;
    /* transform : scale(1.03); */
    text-decoration : none;
    color : black;
    border : 2px solid white;
    color : black;
    
}

@media screen and (max-width: 768px) {
    border : 2px solid white;
    height : auto;
    justify-content : center;
    justify-items : center;
    align-items : center;
    align-content : center;
  }
`;

export const CardHeaderContainer = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    justify-self: center;
    align-self: center;
    margin-bottom : 100px;
    margin-top : 100px;
    
    @media screen and (max-width: 768px) {
        margin-bottom : 50px;
        margin-top : 50px;
      }
`;

export const CardHeader = styled.div`
    justify-content : center;
    align-items : center;
    justify-self: center;
    align-self: center;
    font-family : sans-serif;
    font-size : 2.2rem;
    font-weight : bold;
    color : white;

`;


export const CardImg = styled.img`
    height: 200px;
    width: 220px;
    margin-left : 1%;
    margin-top: -2%;
    @media screen and (max-width: 768px) {
    height : 100px;
    margin-bottom : 50px;
    width : 110px;
  }

`;

export const CardImg2 = styled.img`
    height: 240px;
    width: 220px;
    margin-left : 1%;
    border-radius : 20px;
    @media screen and (max-width: 768px) {
    height : 120px;
    width : 110px;
  }

  &:hover
{
    transition : all 0.2s ease-out;
    /* transform : scale(1.03); */
    text-decoration : none;
    color : black;
    border : 2px solid #01bf71;
    color : black;
    
}
`;


export const CardBodyContainer = styled.div`
    display : flex;
    justify-content : center;
    margin-bottom : 100px;
    width : 100%;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items : center;
        justify-content : center;

    }
`;

export const CardBodyContainer2 = styled.div`
    display : flex;
    justify-content : space-around;
    align-items : center;
    margin-bottom : 100px;
    width : 100%;
    margin-top : -50px;
    @media screen and (max-width: 768px) {
        flex-direction : column;
      }
`;

export const CardBody = styled.div`
    justify-content : center;
    height: auto;
    color : white;
    width: 80%;
    padding-left : 10%;
    padding-right : 10%;
    font-size : 1.2rem;
    margin-right : 10px;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin-right : 0px;
  }
`;
export const CardFooterContainer = styled.div`
    display : flex;
    justify-content : center;
    margin-bottom : 100px;

    @media screen and (max-width: 768px) {
    align-items : center;
    justify-content : center;
    text-align : center;
  }
`;

export const CardFooter = styled.div`
    justify-content : center;
    font-family : sans-serif;
    margin-top : 40px;
    height : auto;
    color : white;

    
`;

const CardContents = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    
    @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items : center;
    justify-content : center;
  }
`

const CardPerson = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content : center;
    align-items : center;

    @media screen and (max-width: 768px) {
    margin-top : 50px;
  }
}
`


const Team = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
    console.log("Button is clicked");
    setIsOpen(!isOpen);
    }

    const clickHandler = (link) => {
        window.open(link)
      }

    return (
        <div className = "Team">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Card>
                <CardContainer>

                <CardServices >
                        <CardContents>
                            <CardHeaderContainer>
                                <CardHeader>
                                    Club Heads
                                </CardHeader>
                            </CardHeaderContainer>

                            <CardBodyContainer2>
                                <CardPerson>
                                     <div style={{color: "white",fontSize : "1.8rem", marginBottom: "0.5rem"}}>Dr.Syed Ibrahim</div>
                                     <CardImg2 src = {"https://cdn.discordapp.com/attachments/937023844143755264/937584410595840010/50392-255x319.png"}
                                     onClick = {e => clickHandler('https://chennai.vit.ac.in/member/dr-syed-ibrahim-s-p/')} />
                                     <div style={{color: "white",fontSize : "1rem", marginTop: "0.5rem"}}>Professor Incharge</div>
                                </CardPerson>

                                <CardPerson>
                                     <div style={{color: "white",fontSize : "1.8rem", marginBottom: "0.5rem"}}>Mihir Gupte</div>
                                     <CardImg2 src = {"https://cdn.discordapp.com/attachments/937023844143755264/937429248115871744/25b231c1-1089-410d-92b7-5191874d0f53.png"}
                                     onClick = {e => clickHandler('https://github.com/mihirgupte')} />
                                     <div style={{color: "white",fontSize : "1rem", marginTop: "0.5rem"}}>Club Head</div>
                                </CardPerson>
                                
                                <CardPerson>
                                     <div style={{color: "white",fontSize : "1.8rem", marginBottom: "0.5rem"}}>Ashwin Iyer</div>
                                     <CardImg2 src = {"https://cdn.discordapp.com/attachments/937023844143755264/937588026899587092/ae318e08-9ced-4127-8e33-1780a2a85ff1.jpg"}
                                     onClick = {e => clickHandler('https://www.linkedin.com/in/ashwiniyer176/')} />
                                     <div style={{color: "white",fontSize : "1rem", marginTop: "0.5rem"}}>Club Head</div>
                                </CardPerson>
                                
                            </CardBodyContainer2>

                        </CardContents>  
                    </CardServices>

                <CardServices >
                        <CardContents>
                            <CardHeaderContainer>
                                <CardHeader>
                                    Creators of DAC Website
                                </CardHeader>
                            </CardHeaderContainer>

                            <CardBodyContainer2>
                                <CardPerson>
                                     <div style={{color: "white",fontSize : "1.8rem", marginBottom: "0.5rem"}}>Deepakindresh</div>
                                     <CardImg2 src = {"https://cdn.discordapp.com/attachments/937023844143755264/937024139385012224/formals1.PNG"}
                                     onClick = {e => clickHandler('https://www.linkedin.com/in/deepakindresh-n/')} />
                                     <div style={{color: "white",fontSize : "1rem", marginTop: "0.5rem"}}>Web-Dev Lead / Full Stack</div>
                                </CardPerson>

                                <CardPerson>
                                    <div style={{color: "white",fontSize : "1.8rem", marginBottom: "0.5rem"}}>Harshavardhan</div>
                                    <CardImg2 src = {"https://cdn.discordapp.com/attachments/937023844143755264/937023875227734056/harsha.jpg"}
                                    onClick = {e => clickHandler('https://www.linkedin.com/in/harshavardhan-jothi-kumar-259ba8185/')}/>
                                    <div style={{color: "white",fontSize : "1rem", marginTop: "0.5rem"}}>Full Stack Web Developer</div>
                                </CardPerson>

                                <CardPerson>
                                    <div style={{color: "white",fontSize : "1.8rem", marginBottom: "0.5rem"}}>Nitin</div>
                                    <CardImg2 src = {"https://cdn.discordapp.com/attachments/937023844143755264/937751144011272233/Untitled.png"}
                                    onClick = {e => clickHandler('https://www.linkedin.com/in/nitin-narayanan-n/')}/>
                                    <div style={{color: "white",fontSize : "1rem", marginTop: "0.5rem"}}>Backend Developer</div>
                                </CardPerson>
                                
                            </CardBodyContainer2>

                        </CardContents>  
                    </CardServices>


                    <CardServices >
                        <CardContents>
                            <CardHeaderContainer>
                                <CardHeader>
                                    Curators
                                </CardHeader>
                            </CardHeaderContainer>

                            <CardBodyContainer>
                                <CardImg src = {CuratorImg}/>
                                <CardBody>
                                Curators
                                are responsible for creating posters and
                                videos as required, designing posts and
                                curating the content that goes up on our
                                social media handles(eg reels and posts)
                                and blog (in case).
                                </CardBody>
                            </CardBodyContainer>

                            
                        </CardContents>  
                    </CardServices>

                    <CardServices>
                        <CardContents>
                            <CardHeaderContainer>
                                <CardHeader>
                                    Socialites
                                </CardHeader>
                            </CardHeaderContainer>

                            <CardBodyContainer>
                                <CardImg src = {SocialitesImg}/>
                                <CardBody>
                                Socialites are responsible for the
effective handling and administration
of all the social media handles of the
Club. ( Instagram account and other
handles)
                                </CardBody>
                            </CardBodyContainer>

                        </CardContents>  
                    </CardServices>

                    <CardServices>
                        <CardContents>
                            <CardHeaderContainer>
                                <CardHeader>
                                    HeadHunters
                                </CardHeader>
                            </CardHeaderContainer>

                            <CardBodyContainer>
                                <CardImg src = {HeadHunterImg}/>
                                <CardBody>
                                Responsible not only for filing event
proposals but maintaining a record
of events, handling FFCS members,
and data regarding clubs. Also are
required to conduct meetings, team
bonding sessions, etc.
                                </CardBody>
                            </CardBodyContainer>

                    
                        </CardContents>  
                    </CardServices>

                    <CardServices>
                        <CardContents>
                            <CardHeaderContainer>
                                <CardHeader>
                                    Explorers
                                </CardHeader>
                            </CardHeaderContainer>

                            <CardBodyContainer>
                                <CardImg src = {ExplorersImg}/>
                                <CardBody>
                                Explorers are responsible for helping the
Content Team out with topics and
providing resources (like datasets, etc)
however need be. (Topics for blog )
                                </CardBody>
                            </CardBodyContainer>


                        </CardContents>  
                    </CardServices>

                    <CardServices>
                        <CardContents>
                            <CardHeaderContainer>
                                <CardHeader>
                                    Analysts
                                </CardHeader>
                            </CardHeaderContainer>

                            <CardBodyContainer>
                                <CardImg src = {AnalystsImg}/>
                                <CardBody>
                                Analysts are responsible for making
projects and designing the website
for the club (recommended for
people with prior knowledge in data
analytics or a strong foundation in
programming or web development
skills)
                                </CardBody>
                            </CardBodyContainer>

                        </CardContents>  
                    </CardServices>
                </CardContainer>
            </Card>
        </div>
    )
}

export default Team
