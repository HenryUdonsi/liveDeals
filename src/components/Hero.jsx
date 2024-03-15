import { Hero, NavContainer, NavContainer2, NavLinks, NavWrapper } from "../components/styles/DealsDeatails.styled"
import { Btn, NavItem } from "../components/styles/Nav.styled"
import left from "../assets/left-small.svg";
import sarmayacar from "/images/sarmayacar1.png";
import linkedin from "../assets/Linkedin.svg";
import twitter from "../assets/twitter.svg";


export default function HeroComponent() {
    return(
       <Hero>
            <NavWrapper style={{marginTop: "15px"}}>
                <Btn style={{width: "134px"}}>
                    <img src={left} />
                    <p style={{margin: "0", color: "#ffffff"}}>Back to Deals</p>
                </Btn>
                <NavContainer>
                    <NavLinks color="#F5F6FF" backgroundColor="#000F80">
                        <a href="#">New</a>
                    </NavLinks>
                    <NavLinks color="#F5F6FF" backgroundColor="#4C3E33">
                        <a href="#">Featured</a>
                    </NavLinks>
                    <NavLinks color="#278717" backgroundColor="#ECFBEA">
                        <a href="#">Fixed Returns</a>
                    </NavLinks>
                </NavContainer>
            </NavWrapper>
            <NavWrapper style={{gridRowStart: 4, marginBottom: "-20px"}}>
                <NavContainer style={{gap: "16px"}}>
                    <img src={sarmayacar} style={{border: "3px solid #ffffff", borderRadius: "100px"}}/>
                    <p>Sarmayacar</p>
                </NavContainer>
                <NavContainer2 style={{gap: "16px"}}>
                    <NavItem backgroundColor= "#ffffff" color="#435D70" fontSize="14px" style={{border: "1px solid #D4DADE", height: "36px"}}>
                        <a href="#">View Product</a>
                    </NavItem>
                    <NavItem backgroundColor= "#ffffff" fontSize="14px" style={{border: "1px solid #D4DADE", height: "36px"}}>
                        <img src={linkedin} />
                    </NavItem>
                    <NavItem backgroundColor= "#ffffff" fontSize="14px" style={{border: "1px solid #D4DADE", height: "36px"}}>
                        <img src={twitter} />
                    </NavItem>
                    <NavItem backgroundColor= "#ffffff" fontSize="14px" color="#435D70" style={{border: "1px solid #D4DADE", height: "36px"}}>
                        <a href="#">Company Details</a>
                    </NavItem>
                </NavContainer2>
            </NavWrapper>
               
            
       </Hero>
    )
}