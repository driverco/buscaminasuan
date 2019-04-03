import { START_BOARD, MARK_CELL, UNMARK_CELL, ACTIVATE_CELL } from './ActionTypesScene'

export const startBoard = (bombs,width, height) => ({
    type: START_BOARD,
    bombs,
    width,
    height
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
