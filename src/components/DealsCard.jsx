import React from 'react';
import { Container, DetailsWrapper } from './styles/DealsDeatails.styled';

export default function CardDetails({ items }) {
    return(
        <Container>
            {items.map((item, index) => (
            <DetailsWrapper key={index}>
                <p style={{fontSize: "14px", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase", color: "#5F7686"}}>{item.title}</p>
                <p style={{fontSize: "18px", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase", color: "#192A36"}}>{item.text}</p>
            </DetailsWrapper>
            ))}
        </Container>
    )
}