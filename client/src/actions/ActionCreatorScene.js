import { START_BOARD, MARK_CELL, UNMARK_CELL, ACTIVATE_CELL, SET_REMAINING_SECS, LOST_GAME, PLAYING_GAME } from './ActionTypesScene'
import { LOST, PLAYING } from '../reducers/Scene';

export const startBoard = (bombs,width, height, remainingSecs, gameId) => ({
    type: START_BOARD,
    bombs,
    width,
    height,
    remainingSecs,
    gameId
});

export const markCell = (y, x) => ({
    type: MARK_CELL,
    y,
    x
});


export const unmarkCell = (y, x) => ({
    type: UNMARK_CELL,
    y,
    x
});


export const activateCell = (y, x) => ({
    type: ACTIVATE_CELL,
    y,
    x
});
export const setRemainingSecs = (remainingSecs) => ({
    type: SET_REMAINING_SECS,
    remainingSecs
});
export const lostGame = () => ({
    type: LOST_GAME,
    playingState: LOST
});
export const playingGame = () => ({
    type: PLAYING_GAME,
    playingState: PLAYING
});
