import {createStore} from 'redux'
import spellBook from './reducers'

const store = createStore(spellBook)

export default store
