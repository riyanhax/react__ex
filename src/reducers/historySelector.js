import { createSelector } from 'reselect'

export const getVisibleHistory = (items, showed, pair) => {
    if (showed) {
        return items
    }
    else {
        return items.filter(item => item.market == pair)
    }

}




