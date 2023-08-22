export interface colorModel {
    text: Partial<{
        primary: string;
        secondary: string;
        disabled: string;
        light: string;
        white: string;
    }>;
    gray: Partial<{
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        white: string;
    }>;
    background: Partial<{
        body: string;
        color1: string;
        background1: string;
        background2: string;
        background3: string;
        background4: string;
    }>;
}
export interface muiColorGroupModel {
    primary: Partial<muiColorModel>;
    secondary: Partial<muiColorModel>;
    error: Partial<muiColorModel>;
    warning: Partial<muiColorModel>;
    success: Partial<muiColorModel>;
    info: Partial<muiColorModel>;
}
export interface muiColorModel {
    dark: string;
    main: string;
    light: string;
    light2: string;
    light3: string;
    contrastText: string;
}

// Custom Light Color
export const lightCustomColor: Partial<colorModel> = {
    text: {
        primary: '#303641',
        secondary: '#646A76',
        disabled: '#C1C3C8',
        light: '#F0F4F9',
        white: '#FFFFFF',
    },
    gray: {
        gray1: '#303641',
        gray2: '#646A76',
        gray3: '#C1C3C8',
        gray4: '#F0F4F9',
        white: '#FFFFFF',
    },
    background: {
        body: '#F9FAFC',
        color1: '#C1C3C8',
        background1: '#F0F4F9',
        background2: '#F8F9FC',
        background3: '#FFFFFF',
        background4: '#292F3C',
    },
};

// Custom Dark Color
export const darkCustomColor: Partial<colorModel> = {
    text: {
        primary: '#303641',
        secondary: '#646A76',
        disabled: '#C1C3C8',
        light: '#F0F4F9',
        white: '#FFFFFF',
    },
    gray: {
        gray1: '#303641',
        gray2: '#646A76',
        gray3: '#C1C3C8',
        gray4: '#F0F4F9',
        white: '#FFFFFF',
    },
    background: {
        body: '#292F3C',
        color1: '#C1C3C8',
        background1: '#F0F4F9',
        background2: '#F8F9FC',
        background3: '#292F3C',
        background4: '#292F3C',
    },
};

// Custom MUI Color
export const customColor: Partial<muiColorGroupModel> = {
    primary: {
        main: '#0098C2',
        dark: '#0E708F',
        light: '#54D3F2',
        light2: '#B9EEF9',
        light3: '#E3F1F6',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#FD6D21',
        dark: '#F44D1D',
        light: '#FD8124',
        light2: '#FDB657',
        light3: '#FED39E',
        contrastText: '#FFFFFF',
    },
    error: {
        main: '#D32F2F',
        dark: '#C62828',
        light: '#EF5350',
    },
    warning: {
        main: '#ED6C02',
        dark: '#E65100',
        light: '#FF9800',
    },
    success: {
        main: '#2E7D32',
        dark: '#1B5E20',
        light: '#4CAF50',
    },
    info: {
        main: '#0288D1',
        dark: '#01579B',
        light: '#03A9F4',
    },
};

// Light Theme
export const lightThemeColor: Partial<muiColorGroupModel> = {
    ...(customColor as muiColorGroupModel),
    ...(lightCustomColor as colorModel),
};

// Dark Theme
export const darkThemeColor: Partial<muiColorGroupModel> = {
    ...(customColor as muiColorGroupModel),
    ...(darkCustomColor as colorModel),
};
