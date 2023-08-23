import styled from 'styled-components';

export const PageStyled = styled.div`
    flex: 1;
    .search-box {
        width: 100%;
        margin: auto;
        border-radius: 6px;
        transition: background-color 0.4s;
        &:focus-within {
            background-color: rgba(0, 0, 0, 0.08);
        }
    }
`;
