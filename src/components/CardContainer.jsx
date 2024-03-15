import { useState } from "react";
import CardWrapper from "./Card2";
import CardWrapper1 from "./Card1";
import data from "../data";
import { Para2, Wrapper, FlexCol, HeaderContainer, LinkContent } from "./styles/Card.styled";
import { Btn, FlexItem } from "./styles/Nav.styled";
import down2 from "../assets/down2.svg";
import DropWrapper from "./Dropdown";

export default function CardData() {
    const [isOpen, setisOpen] = useState(false);

    const setDropdown = () => {
        setisOpen(!isOpen);
    };  

    const links = [
        {
            id: 1,
            title: "All",
            isChecked: false,
        },

        {
            id: 2,
            title: "GBP (£)",
            isChecked: true,
        },

        {
            id: 3,
            title: "USD ($)",
            isChecked: false,
        },

    ]

    const cards = data.map(item => {
        return (
            <CardWrapper 
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                return={item.stats.annualizedTargetReturn}
                liquidity={item.stats.liquidity}
                risk={item.stats.riskProfile}
                maturity={item.stats.maturity}
                distribution={item.stats.distributionPaid}
                tag1={item.tags[0]}
                tag2={item.tags[1]}
                isInvested={item.isInvested}
                amount={item.amountInvested}
                isExpiring={item.isExpiring}
                time={item.expiringTime}
            />
        )
    })

    const navCards = links.map(item => {
        return (
            <DropWrapper 
                key={item.id}
                title={item.title}
                isChecked={item.isChecked}                
            />
        )
    })

    return(
        <Wrapper>
            <HeaderContainer>
                <FlexCol>
                    <h1 style={{fontFamily: "Archia", fontSize: "40px", fontStyle: "normal", fontWeight: "700", }}>Live Deals</h1>
                    <Para2 style={{}}>You can invest directly into the individual companies, assets or funds below.</Para2>
                </FlexCol>
                <FlexItem gap= "16px">
                    <p style={{margin: "0", color: "#435D70", fontSize: "14px"}}>Currency</p>
                    <FlexCol>
                        <Btn backgroundColor= "#ffffff" style={{padding: "6px 16px", }} onClick={setDropdown}>
                            <p style={{color: "#435D70", fontSize: "14px"}}>All</p>
                            <img src={down2}/>
                        </Btn>
                        <LinkContent open={isOpen}>
                            {navCards}
                        </LinkContent>
                    </FlexCol>
                </FlexItem>
            </HeaderContainer>
            {cards}
            <CardWrapper1 />
        </Wrapper>
    )
}