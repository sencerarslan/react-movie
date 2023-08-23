import styled from 'styled-components';

export const Styled = styled.div`
    position: relative;
    flex: 1;
    .empty-data {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: calc(100vh - 107px);
        .content {
            font-size: 24px;
            font-weight: 600;
            margin: 50px 20px;
            color: #9e9e9e;
            .MuiSvgIcon-root {
                font-size: 48px;
            }
        }
    }
    .MuiTableContainer-root {
        height: calc(100vh - 107px);
        padding-bottom: 62px;
    }
    .custom-table {
        th {
            font-weight: 600;
        }
        tbody > tr {
            cursor: pointer;
        }
    }
    .custom-pagination {
        position: fixed;
        bottom: 0;
        z-index: 10;
        background-color: var(--mui-palette-background-default);
        box-shadow: 0 2px 30px -10px #000;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .mini-card {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 24px;
        .image {
            border-radius: 6px;
            overflow: hidden;
            width: 80px;
            height: 120px;
            object-fit: cover;
        }
        .content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 5px;
            .title {
                font-size: 24px;
                font-weight: 600;
                max-width: 300px;
            }
            .category {
                .chip {
                    text-transform: capitalize;
                    padding: 4px 6px;
                }
            }
        }
    }
`;
