import styled from 'styled-components';

export const Styled = styled.div`
    flex: 1;
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    position: relative;
    &:before {
        content: '';
        background: linear-gradient(rgba(30, 27, 38, 0.95), rgba(30, 27, 38, 0.95));
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
        user-select: none;
        z-index: 0;
    }
    .movie-card {
        position: relative;
        z-index: 2;
        width: 400px;
        background-color: var(--mui-palette-background-default);
        border-radius: 12px;
        margin: 50px auto;
        overflow: hidden;
        text-align: left;
        .back {
            position: absolute;
            left: 15px;
            top: 15px;
            color: var(--mui-palette-secondary-main);
            background-color: var(--mui-palette-background-default);
            z-index: 3;
        }
        .chip {
            position: absolute;
            left: 15px;
            bottom: 15px;
            z-index: 3;
            text-transform: capitalize;
            padding: 4px 6px;
        }
        .image {
            user-select: none;
            position: relative;
            overflow: hidden;
            &:hover {
                img {
                    transform: scale(1.03);
                }
            }
            &:before {
                content: '';
                position: absolute;
                bottom: 0px;
                background: linear-gradient(transparent, var(--mui-palette-background-default) 80%);
                width: 100%;
                height: 60px;
                z-index: 2;
            }
            img {
                transition: all 1s;
                width: 100%;
                object-fit: cover;
                opacity: 0.9;
            }
        }
        .content {
            padding: 24px;
            padding-top: 0;
            .title {
                color: var(--mui-palette-secondary-main);
                font-size: 24px;
                font-weight: 900;
                margin-bottom: 24px;
            }
            .text {
                font-size: 14px;
                opacity: 0.8;
                margin-bottom: 24px;
            }
            .info {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
                & > small {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
            }
            .breadcrumbs {
                p {
                    font-size: 12px;
                }
            }
            table {
                font-size: 14px;
                padding: 10px;
                background: rgb(0 0 0 / 10%);
                border-radius: 12px;
            }
        }
    }
`;
