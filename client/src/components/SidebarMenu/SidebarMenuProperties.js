import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #EEFBFB;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const Background = styled.div`
    background: linear-gradient(
        108deg,
        rgba(32, 54, 71, 1) 0%,
        rgba(77, 168, 218, 1) 100%
    );
`;