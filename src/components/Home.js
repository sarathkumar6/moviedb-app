import React from 'react';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

//Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb
 from './Thumb';
//Hook
import useMovieFetch from '../hooks/useHomeFetch'
//Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const { state, hasError, isLoading } = useMovieFetch()
    const firstMovie = state.results[0]
    
    return <>
    {
            firstMovie ?
                <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${firstMovie.backdrop_path}`}
                         title={firstMovie.original_title} 
                         text={firstMovie.overview}>
                </HeroImage> :
                null
    }
        <Grid header='Popular Movies'>
            {state.results.map(movie => (
                <Thumb key={movie.id} 
                        image={movie.poster_path ? 
                            IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : 
                            null
                        }
                        movieId={movie.id} 
                        clickable={true}>
                </Thumb>
            ))}
        </Grid>
    </>
}

export default Home;
