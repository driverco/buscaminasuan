import { START_BOARD } from './ActionTypesScene'

export const startBoard = (bombs,width, height) => ({
    type: START_BOARD,
    bombs,
    width,
    height
})

