// Modules (Export/Import)
// Making dependencies available to other files
// Default keyword: marking this export the default export of this file

// 1) EXPORT
/* 1.1) DEFAULT EXPORT
 * e.g. person.js */
const person = {
    name: 'Max'
}
export default person

/* 1.2) SPECIFIED EXPORT
* e.g. app.js */
export const baseData = 10;
export const clean = () => { /* something*/ }

// 2) IMPORT

/* 2.1) DEFAULT IMPORT
* e.g. person.js 
* exports always the statement specified in the default
* therefore, the name can be person, but also prs, wejras, or ajews
-> name is up to your!
import person from './person.js'
import asjdsad from './person.js' */

/* 1.2) SPECIFIED IMPORT
* e.g. app.js 
import {baseData} from './utility.js'
import {clean} from './utility.js'
import {clean, baseData} from './utility.js' */