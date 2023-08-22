import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';
import { PageStyled } from './index.styles';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';
import { Check, CheckBox } from '@mui/icons-material';
import { useState } from 'react';

export default function FilterBar(props: any) {
    const maxDate = moment();
    const minDate = moment().add(-50, 'year');

    const [movieType, setMovieType] = useState<string>('');
    const handleChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
        setMovieType(value);
    };
    const filterType = [
        { label: 'Movie', value: 'movie' },
        { label: 'Series', value: 'series' },
        { label: 'Episode', value: 'episode' },
    ];
    return (
        <PageStyled>
            <>
                <div className="filter-box">
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker label={'Year'} views={['year']} openTo="year" minDate={minDate} maxDate={maxDate} />
                    </LocalizationProvider>

                    <ToggleButtonGroup
                        color="primary"
                        value={movieType}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        {filterType.map((item: any, index: number) => (
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
