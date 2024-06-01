import { combineEpics, createEpicMiddleware } from 'redux-observable';
import newsFeedReducer from './newsFeedSlice.js';
import { requestNewsEpic } from '../epics/index.js';
import { configureStore } from '@reduxjs/toolkit';

const epic = combineEpics(
    requestNewsEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: {
        newsFeed: newsFeedReducer,
    },
    middleware: () => (
        [epicMiddleware]
    ),
});

epicMiddleware.run(epic);

export default store;
