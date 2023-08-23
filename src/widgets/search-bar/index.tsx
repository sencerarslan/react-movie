import { IconButton, InputBase, Paper } from '@mui/material';
import { PageStyled } from './index.styles';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setSearch } from 'store/reducers/searchReducer';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { routesPaths } from 'config/routes';

export default function SearchBar() {
    const { id = '' } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const defaultSearch = useSelector((state: any) => state.search.searchText);
    const [searchText, setSearchText] = useState<string>(defaultSearch);

    const handleSearch = () => {
        id !== '' && navigate(`${routesPaths.base}`);
        if (searchText.length >= 3) {
            dispatch(setSearch(searchText));
            dispatch(setPage('1'));
        }
    };

    return (
        <PageStyled>
            <>
                <div className="search-box">
                    <Paper
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            boxShadow: 'none',
                            background:
                                'rgba(var(--mui-palette-text-primaryChannel) / var(--mui-palette-action-selectedOpacity))',
                        }}
                    >
                        <InputBase
                            className="custom-input"
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search..."
                            defaultValue={defaultSearch}
                            onChange={(e: any) => {
                                setSearchText(e.target.value);
                            }}
                            onKeyDown={(e: any) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                    e.preventDefault();
                                }
                            }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} onClick={handleSearch}>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
            </>
        </PageStyled>
    );
}
