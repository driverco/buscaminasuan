import { TOGGLE_LEVELS, SET_BOMBS} from './ActionTypesSelectBoard'

export const toggleLevels = (size, width, height, levels ) => ({
    type: TOGGLE_LEVELS,
    size,
    width,
    height,
    levels
})
export const setBombs = ( bombs,secs) => ({
    type: SET_BOMBS,
    bombs,
    secs
})


