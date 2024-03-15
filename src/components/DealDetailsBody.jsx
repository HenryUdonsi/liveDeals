import { BodyGrid, NavContainer, NavContainer3, VFlex} from "./styles/DealsDeatails.styled";
import { NavItem, Btn } from "./styles/Nav.styled";
import { FlexCol, FlexCol2, FlexContainer } from "./styles/Card.styled";
import CardDetails from "./DealsCard";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/Linkedin.svg"

import description from "/images/description.png";
import download from "../assets/download.svg";

export default function DealDetailsBody() {
    const Items = [
        { title: 'Target Return', text: '25%' },
        { title: 'Maturity', text: '5-7 yrs' },
        { title: 'Liquidity', text: '3 months' },
        { title: 'Risk Profile', text: 'Low' },
        { title: 'Dividends', text: 'Quarterly' },
        { title: 'Pre-Money Evaluation', text: '£4,650,000' },
        { title: 'Minimum Investment', text: '£1,500' },
    ];
    
    return(
        <BodyGrid>
            <FlexCol2 gap="32px" style={{width: "547px", }}>
                <NavContainer>
                    <NavItem backgroundColor="#ffffff" color="#305CFF" fontWeight="500" borderRadius="48px" style={{height: "24px"}}>
                        <a href="#">Summary</a>
                    </NavItem>
                    <NavItem backgroundColor="none" fontWeight="600" borderRadius="48px"  color="#5F7686">
                        <a href="#">Description</a>
                    </NavItem>
                    <NavItem backgroundColor="none" fontWeight="600" borderRadius="48px"  color="#5F7686">
                        <a href="#">Documents</a>
                    </NavItem>         
                </NavContainer>
                <FlexCol gap="32px">
                    <p style={{lineHeight: "32px", margin: "0", fontWeight: "500"}}>
                        Sarmayacar is Pakistan's leading venture capital firm which backs daring entrepreneurs building market-transforming technology startups in Pakistan
                    </p>
                    <div>
                        <CardDetails items={Items}/>
                    </div>
                </FlexCol>
                <FlexCol gap="16px">
                    <p style={{color: "#435D70", fontWeight: "500"}}>Description</p>
                    <img src={description} />
                    <p style={{lineHeight: "32px", color: "#435D70"}}>
                        Sarmaycar is building Metaverse for the masses. Their platform allows users to create their own virtual world in minutes and get others to join easily via a single url.
                        The team have a strong blend of technical and startup expertise and this has allowed them to create the only device agnostic Metaverse platform with genuinely realistic 
                        graphics. In doing so they are taking the first steps to enabling both the Western world but also the mobile first Emerging Markets. This market is forecast to boom, 
                        with current predictions estimating it's value will rocket to $850bn by 2030.
                    </p>
                    <FlexCol gap="16px" style={{width: "547px", }}>
                        <p style={{color: "#435D70", fontWeight: "500"}}>Documents</p>
                        <FlexContainer style={{backgroundColor: "#ffffff", alignItems: "center", padding: "16px", width: "94%", borderRadius: "8px",}}>
                            <p style={{fontSize: "16px", fontWeight: "600", color: "#26445A"}}>Pitch Deck.pdf</p>
                            <Btn backgroundColor="#ffffff" style={{border: "1px solid #D4DADE", width: "115px", padding: "14px", justifyContent: "space-between"}}>
                                <img src={download} />
                                <p style={{fontSize: "14px", color: "#26445A"}}>Download</p>
                            </Btn>
                        </FlexContainer>
                        <FlexContainer style={{backgroundColor: "#ffffff", alignItems: "center", padding: "16px", width: "94%", borderRadius: "8px",}}>
                            <p style={{fontSize: "16px", fontWeight: "600", color: "#26445A"}}>Agreement IFG_VC.pdf</p>
                            <Btn backgroundColor="#ffffff" style={{border: "1px solid #D4DADE", width: "115px", padding: "14px", justifyContent: "space-between"}}>
                                <img src={download} />
                                <p style={{fontSize: "14px", color: "#26445A"}}>Download</p>
                            </Btn>
                        </FlexContainer>
                        <FlexContainer style={{backgroundColor: "#ffffff", alignItems: "center", padding: "16px", width: "94%", borderRadius: "8px",}}>
                            <p style={{fontSize: "16px", fontWeight: "600", color: "#26445A"}}>Investment Memo.docx</p>
                            <Btn backgroundColor="#ffffff" style={{border: "1px solid #D4DADE", width: "115px", padding: "14px", justifyContent: "space-between"}}>
                                <img src={download} />
                                <p style={{fontSize: "14px", color: "#26445A"}}>Download</p>
                            </Btn>
                        </FlexContainer>
                        <Btn backgroundColor="#305CFF" style={{border: "1px solid #D4DADE", width: "100%", padding: "14px", justifyContent: "center", alignItems: "center"}}>
                            <p style={{fontSize: "14px", color: "#ffffff"}}>Invest Now in Sarmaycar</p>
                        </Btn>                      
                    </FlexCol>
                </FlexCol>
            </FlexCol2>
            <VFlex>
                <Btn backgroundColor="#305CFF" style={{ width: "100%", justifyContent: "center", alignItems: "center"}}>
                    <p style={{fontSize: "14px", color: "#ffffff"}}>Invest Now</p>
                </Btn>
                <FlexCol style={{padding:"16px 24px", paddingRight: "0", border: "1px solid #D7DDD9", borderRadius: "8px", width: "92%", height: "75px",}}>
                    <FlexCol gap="2px">
                        <p style={{fontSize: "14px", fontWeight: "500", color: "#435D70"}}>Investor Call</p>
                        <p style={{fontSize: "14px", fontWeight: "400", color: "#435D70"}}>Scheduled for 24 June 2023</p>
                    </FlexCol>
                    <NavItem backgroundColor="none" fontWeight="500" borderRadius="48px"  color="#305CFF" style={{padding:"0"}}>
                        <a href="#">Register now</a>
                    </NavItem>  
                </FlexCol>  
                <FlexCol style={{padding:"16px 24px", paddingRight: "0", border: "1px solid #D7DDD9", borderRadius: "8px", width: "92%", height: "75px",}}>
                    <FlexCol gap="2px">
                        <p style={{fontSize: "14px", fontWeight: "500", color: "#435D70"}}>Discuss this investment</p>
                        <p style={{fontSize: "14px", fontWeight: "400", color: "#435D70", width: "90%"}}>Be part of the conversation around this investment</p>
                    </FlexCol>
                    <NavItem backgroundColor="none" fontWeight="500" borderRadius="48px"  color="#305CFF" style={{padding:"0"}}>
                        <a href="#">Join Telegram Group</a>
                    </NavItem>  
                </FlexCol>      
            </VFlex>
            <NavContainer3 style={{gap: "16px"}}>
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
            </NavContainer3>            
        </BodyGrid>
       
    )
}