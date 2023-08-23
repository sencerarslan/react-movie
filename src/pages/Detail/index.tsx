import { Styled } from './index.styles';
import { useCallback, useEffect, useState } from 'react';
import omdbService from 'services/omdb/index.api';
import { Loading } from 'components/loading';
import { useNavigate, useParams } from 'react-router-dom';
import { Breadcrumbs, Chip, IconButton, Rating, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { routesPaths } from 'config/routes';

const DetailPage = () => {
    const { id = '' } = useParams();
    const navigate = useNavigate();
    const [loadingState, setLoadingState] = useState<boolean>(true);

    const [data, setData] = useState<any>([]);

    const handleData = useCallback(async () => {
        setLoadingState(false);
        await omdbService
            .Movie(id)
            .then((res: any) => {
                if (res.Response === 'True') {
                    setData(res);
                    setLoadingState(true);
                } else {
                    setLoadingState(true);
                }
            })
            .catch(() => {
                setLoadingState(true);
            });
    }, [id]);

    useEffect(() => {
        handleData();
    }, [id]);

    return (
        <Styled
            style={{
                backgroundImage: `url(${data.Poster !== 'N/A' ? data.Poster : '/assets/images/no-image.svg'})`,
            }}
        >
            {loadingState ? (
                <div className="movie-card">
                    <IconButton
                        className="back"
                        onClick={() => {
                            navigate(`${routesPaths.base}`);
                        }}
                    >
                        <ArrowBack />
                    </IconButton>
                    <div className="image">
                        <img
                            src={data.Poster !== 'N/A' ? data.Poster : '/assets/images/no-image.svg'}
                            alt={data.Title}
                        />

                        <Chip
                            className="chip"
                            label={data.Type}
                            size="small"
                            color={data.Type === 'movie' ? 'primary' : data.Type === 'series' ? 'secondary' : 'success'}
                            variant="filled"
                        />
                    </div>
                    <div className="content">
                        <Breadcrumbs className="breadcrumbs">
                            <Typography>{data.Released}</Typography>
                            <Typography>{data.Runtime}</Typography>
                            <Typography>{data.Language}</Typography>
                        </Breadcrumbs>
                        <div className="title">{data.Title}</div>
                        <div className="info">
                            <small>SUMMARY</small>
                            <small>
                                <Rating
                                    size="small"
                                    defaultValue={data.imdbRating ? Number(data.imdbRating) / 2 : 0}
                                    precision={0.5}
                                    readOnly
                                />
                                {data.imdbRating}
                            </small>
                        </div>
                        <div className="text">{data.Plot}</div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Genre</th>
                                    <td>{data.Genre}</td>
                                </tr>
                                <tr>
                                    <th>Director</th>
                                    <td>{data.Director}</td>
                                </tr>
                                <tr>
                                    <th>Writer</th>
                                    <td>{data.Writer}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </Styled>
    );
};
export default DetailPage;
