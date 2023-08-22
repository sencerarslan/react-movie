import { IconButton, InputBase, Paper } from '@mui/material';
import { PageStyled } from './index.styles';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props: any) {
    return (
        <PageStyled>
            <>
                <div className="search-box">
                    <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." defaultValue="Pokemon" />
                        <IconButton type="button" sx={{ p: '10px' }}>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
            </>
        </PageStyled>
    );
}
