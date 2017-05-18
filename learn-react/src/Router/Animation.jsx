import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'

const styles = {}

const HSL = ({ match: { params } }) => (
  <div style={{
    ...styles.fill,
    ...styles.hsl,
    background: `${params.color}`
  }}>color: {params.color}</div>
)

// :color 为 模糊匹配. 参数
const AnimationExample = () => (
  <Router>
    <Route render={({ location }) => (
      <div style={styles.fill}>
        <Route exact path="/Router/" render={() => (
          <Redirect to="/Router/black"/>
        )}/>

        <ul style={styles.nav}>
          <NavLink to="/Router/red">Red</NavLink>
          <NavLink to="/Router/green">Green</NavLink>
          <NavLink to="/Router/blue">Blue</NavLink>
          <NavLink to="/Router/pink">Pink</NavLink>
        </ul>

        <div style={styles.content}>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <Route
              location={location}
              key={location.key}
              path="/Router/:color"
              component={HSL}
            />
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )}/>
  </Router>
)

const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)


styles.fill = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}

styles.nav = {
  padding: 0,
  margin: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

styles.hsl  = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}

export default AnimationExample