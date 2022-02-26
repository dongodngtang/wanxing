import styled from "@emotion/styled";
import { Button } from "antd";

export const ButtonNoPadding = styled(Button)`
    color: white;
    padding: 0;
    &:hover,
    &:focus{
        color: white;
    }
`

export const FullScreenContainer = styled.div`
    width: 100vw;
    height: 100vh;
`