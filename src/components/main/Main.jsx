import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import { devices } from '../../utils/constantes';

const Show = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }

    100%{
        opacity:1;
    }
`;
const ContainerNews = styled.div`

`;
const ContainerRow = styled.div`

`;
const ContainerNewsColumn = styled.div`


    @media only screen and (${devices.tablet}) {
    }
    @media only screen and (${devices.iphone14}) {
    }
    @media only screen and (${devices.mobileG}) {
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileP}) {
    }
`;
const ContainerCard = styled.div`
    animation: ${Show} 2s linear;
    &:hover {
        box-shadow: 0 0 0.6rem #333;
    }
`;
const StyleImg = styled.img`
`;
const ContainerCardHeader = styled.span`
`;
const ContainerCardBody = styled.div`
`;
const Containertitle = styled.h5`
`;
const Containerdescription = styled.p`
`;
const ContainerCardFooter = styled.div`
`;

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL_SEARCH;

const Main = ({search}) => {
 const [news, setNews] = useState([]);

 useEffect(() => {
     getNews(search);
 }, [search]);

 const getNews = async search => {
     const api = await fetch(`${apiUrl}?q=${search}&language=pt&sortBy=revelent&apiKey=${apiKey}`
     );
     const data = await api.json();

     setNews(data.articles);
 };

    const img ='https://c0.wallpaperflare.com/preview/105/94/569/administration-articles-bank-black-and-white.jpg';
    const setImage = event => {
        event.target.src = img;
    };
    
    return (
        <>
            <div className="news">
                <div className="row">
                    {news.map(item => (
                        <div className=" col-lg-4 col-md-6 news-column mb-5">
                            <div className="card">
                                {item.urlToImage !==
                                null ? (
                                    <img
                                        className="card-img-top"
                                        src={
                                            item.urlToImage
                                        }
                                        alt=""
                                        onError={
                                            setImage
                                        }
                                    />
                                ) : (
                                    <img
                                        className="card-img-top"
                                        src={img}
                                        alt=""
                                    />
                                )}
                                <div className="card-header">
                                    <label>
                                        {
                                            item
                                                .source
                                                .name
                                        }
                                    </label>
                                    <label>
                                        {
                                            item.publishedAt
                                        }
                                    </label>
                                </div>
                                <div className="card-body">
                                    <h6
                                        dangerouslySetInnerHTML={{
                                            __html: item.title
                                        }}
                                    />
                                    <p
                                        style={{
                                            fontSize: 13
                                        }}
                                        className="news-text"
                                    >
                                        {
                                            item.description
                                        }
                                    </p>
                                    <button className="btn btn-success">
                                        <a
                                            target="_blanck"
                                            href={
                                                item.url
                                            }
                                            style={{
                                                textDecoration:
                                                    'none',
                                                color: 'white'
                                            }}
                                        >
                                            More
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

Main.propTypes = {};

export default Main;
