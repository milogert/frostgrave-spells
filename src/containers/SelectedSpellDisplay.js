import { connect} from 'react-redux'
import SelectedSpell from '../components/SelectedSpell'

const mapStateToProps = state => {
  return {
    spell: state.spell,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const SelectedSpellDisplay = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectedSpell)

export default SelectedSpellDisplay
