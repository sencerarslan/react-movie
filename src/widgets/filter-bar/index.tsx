import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { PageStyled } from './index.styles';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterDate, setFilterType, setPage } from 'store/reducers/searchReducer';

export default function FilterBar() {
    const dispatch = useDispatch();
    const { filterType, filterDate } = useSelector((state: any) => state.search);

    const maxDate = moment();

    const handleTypeChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
        dispatch(setFilterType(value));
        dispatch(setPage('1'));
    };
    const handleDateChange = (value: any, err: any) => {
        if (!err.validationError) {
            dispatch(setFilterDate(value ? moment(value).format('YYYY') : ''));
            dispatch(setPage('1'));
        }
    };
    const filterTypeList = [
        { label: 'Movie', value: 'movie' },
        { label: 'Series', value: 'series' },
        { label: 'Episode', value: 'episode' },
    ];
    return (
        <PageStyled>
            <>
                <div className="filter-box">
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            slotProps={{
                                actionBar: {
                                    actions: ['clear'],
                                },
                            }}
                            label={'Year'}
                            views={['year']}
                            openTo="year"
                            value={filterDate ? moment(filterDate) : undefined}
                            maxDate={maxDate}
                            onChange={(value: any, err: any) => {
                                handleDateChange(value, err);
                            }}
                        />
                    </LocalizationProvider>

                    <ToggleButtonGroup color="primary" value={filterType} exclusive onChange={handleTypeChange}>
                        {filterTypeList.map((item: any, index: number) => (
                            <ToggleButton key={index} value={item.value}>
                                {item.label}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </div>
            </>
        </PageStyled>
    );
}
