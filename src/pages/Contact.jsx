import React, {useState} from 'react';
import Info from '../components/Info/Info'
import Navbar from '../components/Navbar/Navbar'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from '../components/Info/InfoElements'
import Sidebar from '../components/SideBar/Sidebar'
import cn from "../images/contactus.svg"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export const Contactus = {
  id: 'contactus',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: 'Data Analytics Club',
  headline: 'Contact Us',
  description: "",
  buttonLabel: 'Nil',
  imgStart: false,
  img: cn,
  alt: 'contact us',
  dark: true,
  primary: true,
  darkText: false,
};

function Contact() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
    console.log("Button is clicked");
    setIsOpen(!isOpen);
    }


  return <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <div>
            <InfoContainer lightBg={false} id={'contactus'}>
              <InfoWrapper>
                <InfoRow imgStart={false}>
                  <Column1>
                    <TextWrapper>
                      <TopLine>{"Data Analytics Club"}</TopLine>
                      <Heading lightText={true}>{"Contact Us"}</Heading>
                      <Subtitle darkText={false}>
                        Thank you for trying to reach us we are glad to help you!
                      <br/>
                      <br/>
                      {/* <br/> */}
                        <CallIcon style={{color:"#01bf71"}}/> +91 95117 86092<br/>
                        <EmailIcon style={{color:"#01bf71"}}/> dataanalytics.vitcc@gmail.com<br/>
                        <EmailIcon style={{color:"#01bf71"}}/> dhnclub4762@gmail.com (Website issues)<br/><br/>
                      <br/>Social Links are provided in the footer, check em out!!
                        </Subtitle>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrap>
                      <Img src={cn} alt={"contact us"}/>
                    </ImgWrap>
                  </Column2>
                </InfoRow>
              </InfoWrapper>
            </InfoContainer>
            </div>
  </div>;
}

export default Contact;
