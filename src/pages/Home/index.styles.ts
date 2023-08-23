import styled from 'styled-components';

export const Styled = styled.div`
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
