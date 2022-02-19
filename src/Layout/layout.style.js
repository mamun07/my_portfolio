import { Col } from "react-bootstrap";
import styled from "styled-components";

export const SideCol = styled(Col)`
    border-right: 1px solid #ddd;
`;
export const SideBar = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
export const SideLogo = styled.div`
    padding: 30px 20px;
    img{
        width:100%;
    }
`;