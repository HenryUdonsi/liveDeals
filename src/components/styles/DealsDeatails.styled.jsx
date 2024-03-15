import styled from "styled-components";

export const Hero = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    background-image: url("/images/sarmayacar-banner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const NavLinks = styled.div`
    cursor: pointer;
    height: ${props => props.height || '22px'};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${props => props.backgroundColor || '#192A36'};
    padding: 2px 8px;

    & > a {
        text-decoration: none;
        color: ${props => props.color || '#D4DADE'};
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 600;
    }
`

export const NavContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    & > p {
        margin: 0;
        font-size: 28px;
        font-weight: 600;
        color: #ffffff;
    }
`

export const NavContainer2 = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    & > p {
        margin: 0;
        font-size: 28px;
        font-weight: 600;
        color: #ffffff;
    }

    @media (max-width: 838px) {
        display: none;
    }
`

export const NavContainer3 = styled.div`
    gap: 8px;
    align-items: center;
    display: none;

    & > p {
        margin: 0;
        font-size: 28px;
        font-weight: 600;
        color: #ffffff;
    }

    @media (max-width: 838px) {
        display: flex;
        padding-bottom: 60px;
        justify-content: center;
    }
`

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column-start: span 8;
    padding: 0 60px;
`

export const BodyGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 838px) {
         grid-template-columns: 1fr;
         row-gap: 30px;
         width: fit-content;
    }
    
`

export const VFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap || '24px'};
    justify-content: flex-start;
    align-items: flex-start;
    width: 296px;
    padding: 60px;

    & > h1 {
        font-size: 1.5rem;
        color: #192A36;
        margin: 0;
    }

    & > button {
        @media (max-width: 838px) {
        display: none;
       
    }
    }

    @media (max-width: 838px) {
        flex-direction: row;
        gap: ${props => props.gap || '12px'};
        width: fit-content;
        padding: 0;
    }
`

export const Container = styled.div`
    display: flex;
    gap: 32px;
    row-gap: 16px;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`

export const DetailsWrapper = styled.div`
    display: flex;
    width: 200px;
    padding: 16px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 16px;
    background-color: #ffffff ;
`