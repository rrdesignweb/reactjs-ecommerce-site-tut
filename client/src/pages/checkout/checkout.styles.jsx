import styled from "styled-components";

const darkgrey = "darkgrey";
const red = "red";

export const CheckOutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    width: 95%;
  }
  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const CheckOutPageHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${darkgrey};
`;

export const CheckOutPageHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
    @media screen and (max-width: 800px) {
      width: 12%;
    }
  }
`;

export const CheckOutPageTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const CheckOutTestingWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: ${red};
`;
