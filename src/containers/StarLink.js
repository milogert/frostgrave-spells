import { connect } from 'react-redux'
import { toggleStar } from '../actions'
import ToggleLink from '../components/ToggleLink'

const mapStateToProps = (state, ownProps) => {
  return {
    text: ownProps.starred ? "Unstar" : "Star"
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleStar(ownProps.id))
    }
  }
}

const StarLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleLink)

export default StarLink
