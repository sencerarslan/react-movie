import { IconButton, InputBase, Paper } from '@mui/material';
import { PageStyled } from './index.styles';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setSearch } from 'store/reducers/searchReducer';
import { useState } from 'react';

export default function SearchBar() {
    const dispatch = useDispatch();
    const defaultSearch = useSelector((state: any) => state.search.searchText);
    const [searchText, setSearchText] = useState<string>(defaultSearch);

    const handleSearch = () => {
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
                        }}
                    >
                        <InputBase
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
