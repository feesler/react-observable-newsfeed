import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import {
  map,
  debounceTime,
  switchMap,
  catchError,
  retryWhen,
  delay,
  take,
  filter,
} from 'rxjs/operators';
import { readNews, readNewsSuccess, readNewsFailure } from '../store/newsFeedSlice';

const newsUrl = process.env.REACT_APP_NEWS_URL;

export const requestNewsEpic = (action$) => action$.pipe(
  filter(o => readNews.match(o)),
  debounceTime(100),
  switchMap(() =>
    ajax.getJSON(newsUrl).pipe(
      map(o => readNewsSuccess(o)),
      //catchError(e => of(readNewsFailure(e))),
      retryWhen(errors => errors.pipe(delay(1000), take(10))),
    )
  )
);
