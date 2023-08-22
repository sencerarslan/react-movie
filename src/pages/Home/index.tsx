import SearchBar from 'widgets/search-bar';
import { Styled } from './index.styles';
import FilterBar from 'widgets/filter-bar';
import { useCallback, useEffect, useState } from 'react';
import omdbService from 'services/omdb/index.api';

export interface HomePageProps {}

const HomePage = () => {
    const [list, setList] = useState<any>([]);
    const handleData = useCallback(async () => {
        await omdbService
            .Movie({ search: 'Pokemon', type: 'movie' })
            .then((res: any) => {
                if (res.Response === 'True') {
                    setList(res.Search);
                }
            })
            .catch((err: any) => {
                console.error('err:', err);
            });
    }, []);

    useEffect(() => {
        handleData();
    }, []);

    return (
        <Styled>
            <SearchBar />
            <FilterBar />

            {list.map((item: any, index: number) => {
                return <div key={index}>{item.Title}</div>;
            })}
        </Styled>
    );
};
export default HomePage;
