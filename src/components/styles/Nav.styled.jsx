import styled from "styled-components";

export const StyledNav = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 0 60px;
    height: 72px;
    background-color: #192A36;
    color: #D4DADE;
    font-size: 16px;
    align-items: center;

    @media (max-width: 768px) {
        padding: 0 30px;
    }
`

export const FlexItem = styled.div`
    display: flex;
    gap: ${props => props.gap || '8px'};
    align-items: center;
`

export const Nav = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

export const NavItem = styled.div`
    cursor: pointer;
    padding: 0 14px;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius:  ${props => props.borderRadius || '8px'}; 
    background-color: ${props => props.backgroundColor || '#192A36'};

    & > a {
        text-decoration: none;
        color: ${props => props.color || '#D4DADE'};
        font-size: ${props => props.fontSize || '16px'};
        font-weight: ${props => props.fontWeight || '500'};
    }
`

export const DropDown = styled.div`

`

export const Btn = styled.button`
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 0 8px;
    background-color: ${props => props.backgroundColor || '#192A36'};
    height: 40px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`

export const Content = styled.div`
    padding: ${props => props.padding || '0'};
    flex-direction: column;
    gap: 8px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 10px 20px 0px rgba(32, 56, 85, 0.15);
    position: absolute;
    display: ${props => (props.open ? 'flex' : 'none')};
`

export const ImageContent = styled.div`
    padding: ${props => props.padding || '0'};
    flex-direction: column;
    gap: 8px;
    background-color: #ffffff;
    border-radius: 10px 10px 8px 8px;
    box-shadow: 0px 10px 20px 0px rgba(32, 56, 85, 0.15);
    position: absolute;
    top: 50px;
    right: 60px;
    display: ${props => (props.open ? 'flex' : 'none')};

    @media (max-width: 768px) {
        right: 30px;
    }
`

export const ContentPara = styled.div`
    padding: ${props => props.padding || '0'};
    flex-direction: column;
    gap: 8px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 10px 20px 0px rgba(32, 56, 85, 0.15);
    position: absolute;
    color: #000000;
    display: ${props => (props.open ? 'flex' : 'none')};
`

export const ContentBlock =styled.div`
    cursor: pointer;
    padding: 10px 16px;
    gap: 8px;
    align-items: center;
    color: ${props => props.color || '#000000'};
    display: flex;

    & > a {
        text-decoration: none;
        color: ${props => props.color || '#435D70'};
        font-size: 14px;
        font-weight: ${props => props.weight || '400'};
        
    }

    &:hover {
        background-color: #F7F9FA ;
    }
`

export const TitleBlock =styled.div`
    cursor: pointer;
    padding: 14px 16px;
    gap: 8px;
    align-items: center;
    
    background-color: #26445A;
    display: flex;
    width: 203px;
    border-radius: 8px 8px 0 0;

    & > p {
        color: '#ffffff';
    }
`

export const ImageBlock = styled.div`
   
`