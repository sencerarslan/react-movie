import { ReactNode } from 'react';
import { BaseLayoutStyled } from './index.styles';

interface BaseLayoutProps {
    children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
    return (
        <BaseLayoutStyled>
            <div className="page">{children}</div>
        </BaseLayoutStyled>
    );
};

export default BaseLayout;
