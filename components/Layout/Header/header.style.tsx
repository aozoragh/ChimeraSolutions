import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 84px;
`;
export const HeaderContainer = styled.div`
  display: flex;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  @media screen and (max-width: 1440px) {
    padding: 0 20px;
  }
`;
export const MenuView = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
export const HeaderView = styled.div`
  display: flex;
  max-width: 840px !important;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HeaderTxt = styled.span`
  font-size: 40px;
  font-weight: bold;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: rgb(239, 239, 239);
  }
  :active {
    color: rgb(239, 239, 239);
  }
`;
