import { Styled } from './index.styles';
import { useCallback, useEffect, useState } from 'react';
import omdbService from 'services/omdb/index.api';
import {
    Chip,
    Pagination,
    PaginationItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from 'components/loading';
import { setPage } from 'store/reducers/searchReducer';
import { SentimentDissatisfied } from '@mui/icons-material';
import { routesPaths } from 'config/routes';
import { useNavigate } from 'react-router-dom';

export interface HomePageProps {}

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { filterType, filterDate, searchText, page } = useSelector((state: any) => state.search);

    const [loadingState, setLoadingState] = useState<boolean>(true);
    const [err, setErr] = useState<string>('');

    const [list, setList] = useState<any>([]);
    const [totalPage, setTotalPage] = useState<number>(0);

    const handleData = useCallback(async () => {
        setLoadingState(false);
        setErr('');
        await omdbService
            .AllMovie({ search: searchText, type: filterType, date: filterDate, page: page })
            .then((res: any) => {
                if (res.Response === 'True') {
                    const tempPage = Math.ceil(Number(res.totalResults) / 10);
                    setTotalPage(tempPage);
                    setList(res.Search);
                    setLoadingState(true);
                } else {
                    setErr(res.Error);
                    setLoadingState(true);
                }
            })
            .catch(() => {
                setLoadingState(true);
            });
    }, [page, searchText, filterType, filterDate]);

    const columns: any = [
        { label: 'Title', minWidth: 100 },
        { label: 'Year', minWidth: 100 },
        { label: 'IMDB ID', minWidth: 0 },
    ];
    const handlePage = (e: any) => {
        dispatch(setPage(e));
    };

    useEffect(() => {
        handleData();
    }, [page, searchText, filterType, filterDate]);

    return (
        <Styled>
            {loadingState ? (
                <>
                    {err ? (
                        <div className="empty-data">
                            <div className="content">
                                <SentimentDissatisfied />
                                <div>{err}</div>
                            </div>
                        </div>
                    ) : (
                        <Paper>
                            <TableContainer>
                                <Table className="custom-table" stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column: any, index: number) => (
                                                <TableCell key={index} style={{ minWidth: column.minWidth }}>
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {list.map((item: any, index: number) => {
                                            return (
                                                <TableRow
                                                    onClick={() => {
                                                        navigate(`${routesPaths.base}${item.imdbID}`);
                                                    }}
                                                    hover
                                                    tabIndex={-1}
                                                    key={index}
                                                >
                                                    <TableCell>
                                                        <div className="mini-card">
                                                            <img
                                                                src={
                                                                    item.Poster !== 'N/A'
                                                                        ? item.Poster
                                                                        : '/assets/images/no-image.svg'
                                                                }
                                                                alt={item.Title}
                                                                className="image"
                                                            />
                                                            <div className="content">
                                                                <div className="category">
                                                                    <Chip
                                                                        className="chip"
                                                                        label={item.Type}
                                                                        size="small"
                                                                        color={
                                                                            item.Type === 'movie'
                                                                                ? 'primary'
                                                                                : item.Type === 'series'
                                                                                ? 'secondary'
                                                                                : 'success'
                                                                        }
                                                                        variant="outlined"
                                                                    />
                                                                </div>
                                                                <div className="title">{item.Title}</div>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>{item.Year}</TableCell>
                                                    <TableCell>{item.imdbID}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Pagination
                                className="custom-pagination"
                                page={Number(page)}
                                count={totalPage}
                                onChange={(event, page) => handlePage(page)}
                                renderItem={(item) => <PaginationItem {...item} />}
                            />
                        </Paper>
                    )}
                </>
            ) : (
                <Loading />
            )}
        </Styled>
    );
};
export default HomePage;
