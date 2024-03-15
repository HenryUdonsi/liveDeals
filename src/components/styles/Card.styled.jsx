import styled from "styled-components";

export const CardComponent = styled.div`
    background-color: #ffffff;
    padding: 1.5rem;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    border-radius: 8px;
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(6, 1fr);
    }

    &:hover {
        box-shadow: 0px 0px 10px 0px #D4D4D4;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 945px;
    margin: 0 auto;
    margin-top: 45px;
    margin-bottom: 150px;

    @media (max-width: 768px) {
        width: 706px;
    }

`

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap || '0px'};
    justify-content: center;
    align-items: flex-start;

    & > h1 {
        font-size: 1.5rem;
        color: #192A36;
        margin: 0;
    }
`

export const FlexCol2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap || '0px'};
    justify-content: center;
    align-items: flex-start;
    padding: 60px;

    @media (max-width: 838px) {
        padding: 60px 0 0 0;
    }
`

export const FlexContainer = styled.div`
    display: flex;
    grid-column-start: span 9;
    justify-content: space-between;

    @media (max-width: 768px) {
        grid-column-start: span 6;
    }
`


export const Para = styled.p`
    font-size: ${props => props.size || '1rem'};
    font-weight: ${props => props.weight || '400'};
    line-height: ${props => props.height || '1.5rem'};
    color: ${props => props.color || '#26445A'};
    max-width: 629px;
    margin: 0;

    @media (max-width: 768px) {
        max-width: 380px;
    }
`

export const Para2 = styled.p`
    font-size: ${props => props.size || '1rem'};
    font-weight: ${props => props.weight || '400'};
    line-height: ${props => props.height || '1.5rem'};
    color: ${props => props.color || '#26445A'};
    max-width: 629px;
    margin: 0;

    @media (max-width: 768px) {
        max-width: 490px;
    }
`

export const StatsContainer = styled.div`
    display: flex;
    gap: ${props => props.gap || '0px'};
    align-items: flex-start;
    grid-column-start: span 9;
    flex-wrap: wrap;
    row-gap: 8px;

    @media (max-width: 768px) {
        grid-column-start: span 6;
    }
`

export const Tag = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;
    gap: 4px;
    padding: 4px 6px;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 600;
    color: ${props => props.color || '#26445A'};
    background-color: ${props => props.backgroundColor || '#192A36'};
`

export const HeaderWrapper = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;

     & > h1 {
        font-size: 1.5rem;
        color: #192A36;
        margin: 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const DropdownCard = styled.div`
    display: flex;
    background-color: #ffffff;
    justify-content: space-between;
    padding: 6px 16px;
    align-items: center;

    & > p {
        color: ${props => props.color || '#435D70'};
        font-size: 14px;
        font-weight: 400;
        margin: 0;
        
    }

    &:hover {
        background-color: #F7F9FA ;
    }

`

export const LinkContent = styled.div`
    flex-direction: column;
    gap: 8px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 10px 20px 0px rgba(32, 56, 85, 0.15);
    position: absolute;
    top: 205px;
    right: 160px;
    display: ${props => (props.open ? 'flex' : 'none')};
    width: 155px;
    padding: 2px;

    @media (max-width: 768px) {
        right: 30px;
        top: 230px;
    }
`

