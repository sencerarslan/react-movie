import styled from 'styled-components';

export const Styled = styled.div`
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 20px 30px;
    background-color: #060316;
    border-bottom: solid 3px var(--mui-palette-secondary-main);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    .color-mode {
        color: #fff;
        width: 48px;
        height: 48px;
    }
    .logo {
        font-size: 40px;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 30px;
        font-weight: 900;
        user-select: none;
        small {
            font-size: 20px;
            line-height: 20px;
            color: var(--mui-palette-secondary-main);
        }
    }
    .search-bar {
        display: flex;
        flex: 1;
        flex-direction: column;
    }
`;
