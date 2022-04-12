import React from 'react'

import API from '../API'

const initialState = {
    state: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    isLoading: false,
    hasError: false
}

const useHomeFetch = () => {
    const [ state, setState ] = React.useState(initialState.state)
    const [ isLoading, setIsLoading ] = React.useState(initialState.isLoading)
    const [ hasError, setHasError ] = React.useState(initialState.hasError)
    
    const fetchMovies = async (searchTerm = "", page) => {
        try {
            setIsLoading(true)
            const movies = await API.fetchMovies(searchTerm, page)
            setState(prevState => {
                return {
                    ...movies,
                    results: page > 1 ?
                    [...prevState.results, ...movies.results] :
                    [...movies.results]
                }
            })
        } catch (error) {
            setHasError(true)
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        fetchMovies('', 1)
    }, [])

    return {
        state,
        hasError,
        isLoading
    }
}

export default useHomeFetch