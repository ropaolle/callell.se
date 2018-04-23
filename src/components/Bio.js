import React from 'react' /* eslint-disable-line */

import profilePic from './profile-pic.jpg'

const Bio = () => (
  <p>
    <img src={profilePic} alt="Olof Sjögren" />
    Nedpräntat av <strong>Olof Sjögren</strong> som lever och arbetar i
    Sollentuna.{' '}
    <a href="https://twitter.com/ropaolle">Du borde följa honom på Twitter</a>
  </p>
)

export default Bio
