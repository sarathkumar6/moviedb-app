import React from 'react';

import MovieDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, MovieDBLogoImg } from './Header.styles';

const Header = () => {
    return <Wrapper>
        <Content>
            <LogoImg src={MovieDBLogo} alt="moviedb-logo"></LogoImg>
            <MovieDBLogoImg src={TMDBLogo} alt="moviedb-logo-img"></MovieDBLogoImg>
        </Content>
    </Wrapper>
}

export default Header;