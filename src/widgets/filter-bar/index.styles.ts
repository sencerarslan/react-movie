import styled from 'styled-components';

export const PageStyled = styled.div`
    position: relative;
    .header {
        box-shadow: none;
        color: #fff;
        padding-top: 30px;

        &.page-header {
            padding-top: 15px;
            background-color: #3f90c8;
            background-image: url('/assets/images/flight/home-plane-sky-bg.jpg');
            background-position: top center;
            background-repeat: no-repeat;
            background-size: cover;
            min-height: 72px;
            position: relative;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            flex-direction: column;
        }

        .MuiToolbar-root {
            min-height: inherit;
        }

        .logo {
            display: inherit;
            & > img {
                width: 170px;
            }
        }
        .left {
            display: flex;
        }
        .right {
            & > *:not(:last-child) {
                margin-right: 10px;
            }
        }
    }

    .account-menu {
        font-weight: 600;
        font-size: 14px;
        .person-icon {
            background-color: var(--mui-palette-secondary-main);
            color: #fff;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            > * {
                font-size: 18px;
                line-height: 18px;
            }
        }
    }
`;
