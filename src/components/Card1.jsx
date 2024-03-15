import { CardComponent, Para, FlexCol, FlexContainer, StatsContainer, Tag } from "./styles/Card.styled";
import sarmayacar from "/images/sarmayacar.png"

export default function CardWrapper1() {
    return(
       <CardComponent>
            <FlexContainer>
                <FlexCol gap="20px">
                    <h1>Sarmayacar</h1>
                    <Para>
                        Sarmayacar is Pakistan's leading venture capital firm which backs daring entrepreneurs building market-transforming technology startups in Pakistan
                    </Para>
                </FlexCol>
                <div>
                    <img src={sarmayacar} />
                </div>
            </FlexContainer>

            <StatsContainer gap="32px">
                <FlexCol>
                    <Para size="0.7rem" height="20px" color="#5F7686">Target Investment</Para>
                    <Para color="#192A36" weight="500">£400,000</Para>
                </FlexCol>
                <FlexCol>
                    <Para size="0.7rem" height="20px" color="#5F7686">Valuation</Para>
                    <Para color="#192A36" weight="500">£850,000</Para>
                </FlexCol>
                <FlexCol>
                    <Para size="0.7rem" height="20px" color="#5F7686">Returns</Para>
                    <Para color="#192A36" weight="500">~5.5 p.a</Para>
                </FlexCol>
                <FlexCol>
                    <Para size="0.7rem" height="20px" color="#5F7686">Liquidity</Para>
                    <Para color="#192A36" weight="500">6 months</Para>
                </FlexCol>
                <FlexCol>
                    <Para size="0.7rem" height="20px" color="#5F7686">Min. Investment</Para>
                    <Para color="#192A36" weight="500">£1,500</Para>
                </FlexCol>
                <FlexCol>
                    <Para size="0.7rem" height="20px" color="#5F7686">Tax Benefit</Para>
                    <Para color="#192A36" weight="500">SEIS</Para>
                </FlexCol>
                <FlexCol>
                    <Para size="0.7rem" height="20px" color="#5F7686">Risk Profile</Para>
                    <Para color="#192A36" weight="500">Low</Para>
                </FlexCol>
            </StatsContainer>

            <StatsContainer gap="8px">
                <Tag color="#000F80" backgroundColor="#E5E8FF">Venture Capital</Tag>
                <Tag color="#A600A8" backgroundColor="#FFE0FF">Sukuk</Tag>
            </StatsContainer>

       </CardComponent>
    )
}