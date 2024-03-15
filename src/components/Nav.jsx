import React, { useState } from 'react';
import { StyledNav, FlexItem, Nav, NavItem, DropDown, Btn, Content, ContentBlock, ContentPara, ImageBlock, ImageContent, TitleBlock } from "./styles/Nav.styled";
import logo from "../assets/logo.svg";
import rocket from "../assets/rocket.svg";
import menu from "../assets/App-menu.svg";
import gift from "../assets/gift.svg";
import division from "../assets/division.svg";
import video from "../assets/video.svg";
import down from "../assets/down.svg";
import account from "../assets/account.svg";
import notification from "../assets/notification.svg";
import logout from "../assets/logout.svg";
import profile from "../assets/profile-circle.svg";
import message from "../assets/message.svg";
import membership from "../assets/membership.svg";
import help from "../assets/help.svg";
import initials from "../assets/initials.svg";


const NavBar = () => {
    const [isContentOpen, setisContentOpen] = useState(false);
    const [isContentParaOpen, setisContentParaOpen] = useState(false);
    const [isAccountOpen, setisAccountOpen] = useState(false);
  
    const toggleDropdown = () => {
      setisContentOpen(!isContentOpen);
    };

    const hoverDropdown = () => {
        setisContentParaOpen(!isContentParaOpen);
    };

    const handleMouseLeave = () => {
        setisContentParaOpen(false);
    };

    const toggleAccount = () => {
        setisAccountOpen(!isAccountOpen);
      };
  
    return (
        <StyledNav>
        <FlexItem gap="16px">
            <img src={logo} alt="cur8 logo"/>
            <DropDown>
                <Btn onClick={toggleDropdown} onMouseEnter={hoverDropdown} onMouseLeave={handleMouseLeave}>
                    <img src={menu} alt="icon" style={{color: "#ffffff"}}/>
                    <p style={{color: "#ffffff", fontWeight: "700", fontSize: "18px"}}>Invest</p>
                    <img src={down}/>    
                </Btn>
                <Content open={isContentOpen} style={{zIndex: "10"}}>
                    <p style={{fontSize: "14px", margin: "0", padding: "10px 16px 0", color: "#5F7686"}}>All Products</p>
                    <ContentBlock color="#305CFF" weight="600">
                        <img src={rocket} alt="icon" style={{color: "#305CFF", height: "16px"}}/>
                        <a href="#">Invest</a>
                    </ContentBlock>
                    <ContentBlock>
                        <img src={gift} alt="icon" style={{color: "#000000", height: "16px"}}/>
                        <a href="#">Write your will</a>
                    </ContentBlock>
                    <ContentBlock>
                        <img src={division} alt="icon" style={{color: "#000000", height: "16px"}}/>
                        <a href="#">Zakat calculator</a>
                    </ContentBlock>
                    <ContentBlock>
                        <img src={video} alt="icon" style={{color: "#000000", height: "16px"}}/>
                        <a href="#">Courses</a>
                    </ContentBlock>
                </Content>
                <ContentPara padding="4px 16px" open={isContentParaOpen}>
                    <p style={{fontSize: "14px", margin: "0",}}>Click to view our different products </p>
                </ContentPara>        
            </DropDown>
        </FlexItem>           

        <FlexItem gap="15px" style={{ gridColumnStart: 6,}}>
            <Nav>
                <NavItem backgroundColor="#82FF6F" fontWeight="600" borderRadius="48px"  color="#192A36">
                    <a href="#">Live</a>
                </NavItem>
                <NavItem fontWeight="400">
                    <a href="#">Payment</a>
                </NavItem>
                <NavItem fontWeight="400">
                    <a href="#">Portfolio</a>
                </NavItem>
            </Nav>
        </FlexItem>

        <FlexItem gap="24px" style={{ gridColumnStart: -1, alignItems: "flex-start", zIndex: "10"}}>
            <img  src={notification} />
            <ImageBlock>
                <img src={account} onClick={toggleAccount}/>
                <ImageContent open={isAccountOpen}>
                    <TitleBlock>
                        <img src={initials} alt="icon" style={{height: "32px"}}/>
                        <p style={{margin: "0"}}>Muhammad Altalib</p>
                    </TitleBlock>
                    <ContentBlock>
                        <img src={profile} alt="icon" style={{color: "#305CFF", height: "16px"}}/>
                        <a href="#">My Account</a>
                    </ContentBlock>
                    <ContentBlock>
                        <img src={membership} alt="icon" style={{color: "#000000", height: "16px"}}/>
                        <a href="#">Membership</a>
                    </ContentBlock>
                    <ContentBlock>
                        <img src={message} alt="icon" style={{color: "#000000", height: "16px"}}/>
                        <a href="#">Contact Us</a>
                    </ContentBlock>
                    <ContentBlock>
                        <img src={help} alt="icon" style={{color: "#000000", height: "16px"}}/>
                        <a href="#">Help</a>
                    </ContentBlock>
                    <ContentBlock>
                        <img src={logout} alt="icon" style={{color: "#000000", height: "16px"}}/>
                        <a href="#" style={{color: "#941E00", fontWeight: "600"}}>Log out</a>
                    </ContentBlock>
                </ImageContent>
            </ImageBlock>
        </FlexItem>

    </StyledNav>
    );
  };


  export default NavBar