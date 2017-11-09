import logoJS from '../images/js.png'
import logoPHP from '../images/php.png'
import logoJava from '../images/java.png'
import logoSass from '../images/sass.png'
import logoSQL from '../images/sql.png'

/**
 * List of local routes to be used in the navigation bar
 * @type {Map}
 */
export const LOCAL_ROUTES = new Map()
LOCAL_ROUTES.set('Home', '/')
LOCAL_ROUTES.set('CV', '/cv')

/**
 * List of external routes to be used in the navigation bar
 * @type {Map}
 */
export const REMOTE_ROUTES = new Map()
REMOTE_ROUTES.set('Github', 'https://github.com/maxenceng')

/**
 * List of logos shown in the Home page
 * @type {Map}
 */
export const LOGOS = new Map()
LOGOS.set('Logo JS', logoJS)
LOGOS.set('Logo PHP', logoPHP)
LOGOS.set('Logo Java', logoJava)
LOGOS.set('Logo Sass', logoSass)
LOGOS.set('Logo SQL', logoSQL)

/**
 * Defines the size of the logos
 * @type {number}
 */
export const LOGO_SIZE = 75
