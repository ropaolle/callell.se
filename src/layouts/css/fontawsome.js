/*
Creates a Fontawsome library that can be used in the project, https://fontawesome.com/icons.

USAGE
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

<FontAwesomeIcon icon="check-square" />
*/

import fontawesome from '@fortawesome/fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faRss from '@fortawesome/fontawesome-free-solid/faRss'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

fontawesome.library.add(faGithub, faEnvelope, faHome, faRss, faBars)

