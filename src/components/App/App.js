import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'

import Header from '../Header/Header'

import SignUp from '../Authentication/SignUp'
import SignIn from '../Authentication/SignIn'
import SignOut from '../Authentication/SignOut'
import ChangePassword from '../Authentication/ChangePassword'
// import MemoryCreate from '../Memories/MemoryCreate'
import MemoryIndex from '../Memories/MemoryIndex'
import MemoryShow from '../Memories/MemoryShow'
import MemoryUpdate from '../Memories/MemoryUpdate'
// import MemoryDestroy from '../Memories/MemoryDestroy'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })
  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          {/* _____Authentication Routes for Users_____ */}
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />

          {/* _____RESTful Routes for Memories_____ */}
          <AuthenticatedRoute user={user} path='/memories' render={() => (
            <MemoryIndex msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/memories/:id' render={(data) => (
            <MemoryShow msgAlert={this.msgAlert} user={user} id={data.match.params.id}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/memories/:id' render={() => (
            <MemoryUpdate msgAlert={this.msgAlert} user={user} />
          )} />
        </main>

      </Fragment>
    )
  }
}

export default App
