import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import { SMALL_LIMIT_PER_PAGE } from '../slices/articlesPageSlice';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPageCount = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || SMALL_LIMIT_PER_PAGE;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
