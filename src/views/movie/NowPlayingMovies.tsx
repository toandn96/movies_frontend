import { Container, Pagination } from '@app/components/common';
import { MovieList } from '@app/components/main';
import { numberWithCommas } from '@app/helpers/helperFunctions';
import { useDocumentTitle, usePageSaver } from '@app/hooks';
import { fetchNowPlayingMovies, fetchTopRatedMovies } from '@app/redux/actions';
import { IRootState } from '@app/types/types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const NowPlayingMovies = () => {
  const { nowPlayingMovies, isLoading } = useSelector((state: IRootState) => ({
    nowPlayingMovies: state.movies.nowPlaying,
    isLoading: state.misc.isLoading,
  }));
  const { currentPage, setCurrentPage } = usePageSaver();
  const dispatch = useDispatch();

  useDocumentTitle('Now Playing Movies | MOVIES');
  useEffect(() => {
    if (!nowPlayingMovies) {
      debugger
      dispatch(fetchNowPlayingMovies(currentPage));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [nowPlayingMovies?.page]);

  const handlePageChange = (page: number) => {
    if (nowPlayingMovies?.page !== page && !isLoading) {
      dispatch(fetchNowPlayingMovies(page));
      setCurrentPage(page)
    }
  };

  return (
    <Container>
      <div className="movie__header">
        <div className="movie__header-title">
          <h1>Now Playing Movies</h1>
          <h3>{numberWithCommas(nowPlayingMovies?.total_results || 0)} Movies</h3>
        </div>
      </div>
      <MovieList
        movies={nowPlayingMovies?.results || []}
        templateCount={10}
      />
      {nowPlayingMovies && (
        <Pagination
          activePage={nowPlayingMovies.page}
          itemsCountPerPage={1}
          onChange={handlePageChange}
          pageRangeDisplayed={10}
          totalItemsCount={nowPlayingMovies.total_pages}
          totalPage={nowPlayingMovies.total_pages}
        />
      )}
    </Container>
  );
};

export default NowPlayingMovies;
