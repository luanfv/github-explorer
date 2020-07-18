import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        @media (max-width: 720px) {
            font-size: 12px;
        }
    }

    svg {
        margin-right: 4px;
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;

            @media (max-width: 720px) {
                width: 80px;
                height: 80px;
            }
        }

        div {
            margin-left: 24px;

            word-wrap: break-word;
            
            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }

            @media (max-width: 720px) {
                strong {
                    font-size: 28px;
                }

                p {
                    font-size: 14px;
                }
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {

            & + li {
                margin-left: 80px;
            }

            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block;
                margin-top: 4px;
                color: #6c6c80;
            }

            @media (max-width: 720px) {
                & + li {
                    margin-left: 30px;
                }

                strong {
                    font-size: 26px;
                }
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 80px;

    a {
        background-color: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: flex;
        text-decoration: none;
        align-items: center;
        transition: transform 0.2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }

        div {
            margin-left: 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }

        @media (max-width: 720px) {
            font-size: 20px;

            div {
                strong {
                    font-size: 16px;
                }

                p {
                    font-size: 14px;
                }
            }
        }
    }
`;