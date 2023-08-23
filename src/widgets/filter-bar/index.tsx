import { Button, ToggleButton, ToggleButtonGroup, styled } from '@mui/material';
import { PageStyled } from './index.styles';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterDate, setFilterType, setPage } from 'store/reducers/searchReducer';
import { Divider } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { routesPaths } from 'config/routes';

export default function FilterBar() {
    const dispatch = useDispatch();
    const { id = '' } = useParams();
    const navigate = useNavigate();
    const { filterType, filterDate } = useSelector((state: any) => state.search);

    const maxDate = moment();
    const [open, setOpen] = useState(false);

    const controlPage = () => {
        dispatch(setPage('1'));
        id !== '' && navigate(`${routesPaths.base}`);
    };

    const handleTypeChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
        dispatch(setFilterType(value));
        controlPage();
    };
    const handleDateChange = (value: any, err: any) => {
        setOpen(false);
        if (!err.validationError) {
            dispatch(setFilterDate(value ? moment(value).format('YYYY') : ''));
            controlPage();
        }
    };

    const handleIconClick = () => {
        setOpen(true);
    };

    const filterTypeList = [
        { label: 'Movie', value: 'movie' },
        { label: 'Series', value: 'series' },
        { label: 'Episode', value: 'episode' },
    ];
    const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
        '& .MuiToggleButtonGroup-grouped': {
            margin: 5,
            border: 0,
            '&:not(:first-of-type)': {
                borderRadius: theme.shape.borderRadius,
            },
            '&:first-of-type': {
                borderRadius: theme.shape.borderRadius,
            },
        },
    }));
    return (
        <PageStyled>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Button color="primary" className="custom-button" onClick={handleIconClick}>
                    <EventIcon />
                </Button>

                <MobileDatePicker
                    sx={{ display: 'none' }}
                    open={open}
                    onClose={() => setOpen(false)}
                    className="custom-datepicker"
                    slotProps={{
                        actionBar: {
                            actions: ['clear'],
                        },
                    }}
                    label={'Year'}
                    views={['year']}
                    openTo="year"
                    value={filterDate ? moment(filterDate) : null}
                    maxDate={maxDate}
                    onChange={(value: any, err: any) => {
                        handleDateChange(value, err);
                    }}
                />
            </LocalizationProvider>
            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
            <StyledToggleButtonGroup color="primary" value={filterType} exclusive onChange={handleTypeChange}>
                {filterTypeList.map((item: any, index: number) => (
                    <ToggleButton className="custom-button" key={index} value={item.value}>
                        {item.label}
                    </ToggleButton>
                ))}
            </StyledToggleButtonGroup>
        </PageStyled>
    );
}
