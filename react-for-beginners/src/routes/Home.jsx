import { useState, useEffect } from "react";
import MovieItem from '../components/MovieItem';

export default function Home() {
    const [ loading, setLoading ] = useState(true);
    const [ movies, setMovies ] = useState([]);

    // 또 다른 통신 방법 (비동기방식)
    const getMovies = async() => {
        // async function getMovies() { ... } > 자스 업뎃하면서 async 안 써도 됨
        const url =
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`;

        const res = await fetch(url);
        const json = await res.json();
        setMovies(json.data.movies);
        setLoading(false); 

        // Promise 통신 ------------------
        // fetch(url)
        // .then(res => res.json())
        // .then(json => {
        //     setMovies(json.data.movies)
        //     setLoading(false)
        // })
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div>
            <h1>MovieApp</h1>
            {loading ? <h3>Loading ...</h3> : (
                movies.map(item => (
                    <MovieItem
                        key={item.id}
                        id={item.id}
                        coverImg={item.medium_cover_image}
                        title={item.title}
                        summary={item.summary}
                        genres={item.genres}
                    />
                ))
            )}
        </div>
    )
}