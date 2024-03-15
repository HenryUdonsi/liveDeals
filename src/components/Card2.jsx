import { CardComponent, Para, FlexCol, FlexContainer, StatsContainer, Tag, HeaderWrapper } from "./styles/Card.styled";
import checker from "../assets/check-one.svg";
import timer from "../assets/timer.svg";

export default function CardWrapper(props) {
    return(
       <CardComponent>
            <FlexContainer>
                <FlexCol gap="20px">
                    <HeaderWrapper>
                        <h1 style={{margin: "0"}}>{props.title}</h1>
                        
                        {props.isInvested && <Tag backgroundColor="#278717" style={{width: "fit-content"}}>
                            <img src={checker} />
                            <Para color="#ffffff" size="0.75rem" weight="500" height="0">
                                {props.amount} Invested
                            </Para>
                        </Tag>}
                    </HeaderWrapper>
                    <Para>
                        {props.description}
                    </Para>
                </FlexCol>
                <div>
                    <img src={props.image} />
                </div>
            </FlexContainer>

            <StatsContainer gap="32px">
                <FlexCol>
                    <Para size="0.7rem" height="20px" color="#5F7686">Annualised Target Return</Para>
                    <Para color="#192A36" weight="500">{props.return}</Para>
                </FlexCol>
                <FlexCol>
                    <Para size="0.7rem" height="20px" color="#5F7686">Liquidity</Para>
                    <Para color="#192A36" weight="500">{props.liquidity}</Para>
                </FlexCol>
                <FlexCol>
                    <Para size="0.7rem" height="20px" color="#5F7686">Risk Profile</Para>
                    <Para color="#192A36" weight="500">{props.risk}</Para>
                </FlexCol>
                <FlexCol>
                    <Para size="0.7rem" height="20px" color="#5F7686">Maturity</Para>
                    <Para color="#192A36" weight="500">{props.maturity}</Para>
                </FlexCol>
                <FlexCol>
                    <Para size="0.7rem" height="20px" color="#5F7686">Distribution Paid</Para>
                    <Para color="#192A36" weight="500">{props.distribution}</Para>
                </FlexCol>
            </StatsContainer>

            <StatsContainer gap="8px">
                <Tag color="#000F80" backgroundColor="#E5E8FF">{props.tag1}</Tag>
                <Tag color="#A600A8" backgroundColor="#FFE0FF">{props.tag2}</Tag>

                {props.isExpiring && <Tag backgroundColor="#FFF0B3" style={{width: "fit-content"}}>
                    <img src={timer} />
                    <Para color="#26445A" size="0.7rem" weight="600" height="1.5">
                        Expiring in {props.time} days
                    </Para>
                </Tag>}

            </StatsContainer>

       </CardComponent>
    )
}