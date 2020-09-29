import styled, { css } from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-self: stretch;
  justify-content: center;
  flex-direction: ${props => props.flexDirection || 'column'};
  background: ${props => props.theme || 'transparent'};
  background: ${props => props.gradient || 'undefined'};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
  flex: 1;
  position: relative;
`

export const SectionFS = styled(Section)`
  min-height: 100vh;
`

export const SectionFSHero = styled(Section)`
  min-height: 100vh;
  background: rgb(31,23,47);
  background: linear-gradient(283deg, rgba(31,23,47,1) 0%, rgba(62,9,40,1) 45%, rgba(17,58,72,1) 100%);
`

export const SectionHero = styled(Section)`
  background: rgb(31,23,47);
  background: linear-gradient(283deg, rgba(31,23,47,1) 0%, rgba(62,9,40,1) 45%, rgba(17,58,72,1) 100%);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
  position: relative;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  background: ${props => props.bg || 'transparent'};
  flex: ${props => props.flex || '1'};
  flex-direction: ${props => props.direction || 'column'};
  align-self: ${props => props.self || 'auto'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  margin: ${props => props.margin || '0px'};
  min-width: ${props => props.minWidth || 'auto'};
  column-gap: ${props => props.columnGap || 'initial'};
  row-gap: ${props => props.rowGap || 'initial'};
  font-size: ${props => props.size || "inherit"};
`

export const ItemH = styled(Item)`
  flex-direction: row;
  flex: 1 1 0;
  column-gap: ${props => props.columnGap || '40px'};
`

export const WaveOuter = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: ${props => props.bottom || '-70px'};
  top: ${props => props.top || 'auto'};
`;

export const WaveInner = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
`;


export const H1 = styled.h1`
  @media (max-width: 480px) {
    font-size: 2.1rem;
  }
`

export const H2 = styled.h2`
  color: ${props => props.color || '#000'};
  font-weight: ${props => props.weight || 600};
  font-size: ${props => props.size || "2rem"};
  text-transform: ${props => props.textTransform || "inherit"};
  margin: ${props => props.margin || "20px 0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "inherit"};
  font-family: ${props => props.family || "'Source Sans Pro', Helvetica, sans-serif"};
`

export const H3 = styled.h3`
  color: ${props => props.color || 'rgb(0 0 0 / 0.5)'};
  font-weight: ${props => props.weight || 300};
  font-size: ${props => props.size || "1rem"};
  text-transform: ${props => props.textTransform || "uppercase"};
  margin: ${props => props.margin || "-15px 0px 20px 0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "0.1em"};
  font-family: ${props => props.family || "'Source Sans Pro', Helvetica, sans-serif"};
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: flex;
`

export const P = styled.p`
  color: ${props => props.color || '#000'};

  font-weight: ${props => props.weight || 300};
  font-size: ${props => props.size || "inherit"};
  letter-spacing: ${props => props.spacing || "normal"};
`

export const Span = styled.span`
  color: ${props => props.color || '#000'};
  background: ${props => props.bg || 'transparent'};
  font-weight: ${props => props.weight || 300};
  font-size: ${props => props.size || "inherit"};
  text-transform: ${props => props.textTransform || "inherit"};
  margin: ${props => props.margin || "0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "inherit"};
`

export const Anchor = styled.a`
  display: flex;
  border-radius: ${props => props.radius || "0px"};
  font-weight: ${props => props.weight || 400};
  color: ${props => props.color || "#fff"};
  background: ${props => props.bg || "#e20880"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "8px 15px"};
  border: ${props => props.border || "none"};
  border-radius: ${props => props.borderRadius || "2px"};
  position: relative;
  text-decoration: none;
  overflow: ${props => props.overflow || "hidden"};
  z-index: 3;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.hover || (props.bg ? props.bg : "transparent")};
    display: none;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.hoverBG || "#000"};
    opacity: 0;
    z-index: -1;
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
    cursor: pointer;
    pointer: hand;
  }
  &:active:after {
    opacity: 0.15;
    cursor: pointer;
    pointer: hand;
  }
`

export const Button = styled.button`

`
