import React from 'react';
import { Styled } from './index.styles';
import SearchBar from 'widgets/search-bar';
import FilterBar from 'widgets/filter-bar';
import { IconButton, Paper } from '@mui/material';
import { setTheme } from 'store/reducers/themeReducer';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state: any) => state.theme.currentTheme);
    return (
        <Styled>
            <div className="logo">
                OMDb<small>~ Movie ~</small>
            </div>
            <div className="search-bar">
                <Paper
                    elevation={0}
                    sx={{
                        display: 'flex',
                        p: 1,
                        flexWrap: 'wrap',
                    }}
                >
                    <SearchBar />
                    <FilterBar />
                </Paper>
            </div>

            <IconButton
                className="color-mode"
                onClick={() => {
                    const th = currentTheme === 'light' ? 'dark' : 'light';
                    dispatch(setTheme(th));
                }}
                color="inherit"
            >
                {currentTheme === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
        </Styled>
    );
};

export default Header;
