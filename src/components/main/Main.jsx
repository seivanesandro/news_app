import React, {
    useEffect,
    useState
} from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

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
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-start;
    margin: 6rem auto;
    animation: ${Show} 2s linear;
`;

const TitleNews = styled.div`
    margin: 3rem 3rem;
    text-align: center;
    text-transform: capitalize;
    color: #333;
`;

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

const Main = ({ search }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNews(search);
    }, [search]);

    const getNews = async search => {
        const api = await fetch( `${apiUrl}?api_token=${apiKey}&language=pt&search=${search}&locale=pt,us,uk,&sort=published_at&categories=general,science,sports,business,health,entertainment,tech,politics,food,travel`);
        const data = await api.json();

        setNews(data.data);
    };

    const img = 'https://c0.wallpaperflare.com/preview/105/94/569/administration-articles-bank-black-and-white.jpg';
    const setImage = event => {
        event.target.src = img;
    };

    return (
        <>
            <TitleNews className="title-news">
                <h3>results: '{search}...'</h3>
            </TitleNews>
            <ContainerNews className="container-news">
                {news &&
                    news.map(item => (
                        <Card
                            style={{
                                width: '18rem'
                            }}
                            className="card-news"
                            key={item.uuid}
                        >
                            {item.image_url !==
                            null ? (
                                <Card.Img
                                    variant="top"
                                    src={
                                        item.image_url
                                    }
                                    className="mx-auto d-block"
                                    title={
                                        item.title
                                    }
                                    alt={
                                        item.title
                                    }
                                    onError={
                                        setImage
                                    }
                                    style={{
                                        width: '100%',
                                        height: '15%'
                                    }}
                                />
                            ) : (
                                <Card.Img
                                    variant="top"
                                    src={img}
                                    alt={
                                        item.title
                                    }
                                    className="img-thumbnail"
                                    title={
                                        item.title
                                    }
                                    onError={
                                        setImage
                                    }
                                    style={{
                                        width: '100%',
                                        height: '15%'
                                    }}
                                />
                            )}
                            <Card.Header
                                style={{
                                    display:
                                        'flex',
                                    flexDirection:
                                        'column',
                                    alignItems:
                                        'flex-start',
                                    justifyContent:
                                        'start'
                                }}
                            >
                                <label
                                    style={{
                                        color: '#333',
                                        fontWeight:
                                            '500'
                                    }}
                                >
                                    {item.source}
                                </label>
                                <label
                                    style={{
                                        color: '#333',
                                        fontWeight:
                                            '500'
                                    }}
                                >
                                    {moment(
                                        item.published_at
                                    )
                                        .add(
                                            24,
                                            'hours'
                                        )
                                        .format(
                                            'LLL'
                                        )}
                                </label>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <h6
                                        className="news-title text-start fw-500"
                                        dangerouslySetInnerHTML={{
                                            __html: item.title
                                        }}
                                    />
                                </Card.Title>
                                <Card.Text className="news-text text-start">
                                    {
                                        item.description
                                    }
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant="success"
                                    className="rounded-pill px-5 py-1"
                                >
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
                                </Button>
                            </Card.Footer>
                        </Card>
                    ))}
            </ContainerNews>
        </>
    );
};

Main.propTypes = {};

export default Main;
