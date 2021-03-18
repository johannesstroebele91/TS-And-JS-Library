// A) EXPORT
// Used for exporting data in a file for usage somewhere else

// 1) Export before declarations
export const getSubtotalPrice = () => {}
export const getBackgroundColorStyleForButton = () => {}

// 2) Export apart from declarations
// AND use export "as"
const getMinimalPrice = () => {}
const getBackgroundColorStyleForHeader = () => {}
export {
    getMinimalPrice,
    getBackgroundColorStyleForHeader as getStyleHeader
};

// B) IMPORT
// Used for importing data into a file from somewhere else
// AND Import "as"
import {getSubtotalPrice as getPrice, getBackgroundColorStyleForHeader} from './import-and-export.js'

getPrice();

// C) EXPORT DEFAULT AND IMPORT
// Is only possible once per file!!!
// If export default is chosen, the name of the function or variable to be imported can be chosen freely like with "as" in a
export default getMinimalPrice;

import getMinPrice from './import-and-export.js';
getMinPrice();

// D) Import with default();
import * as productUtils from './import-and-export.js';
productUtils.default();

// E) Import / Export React Components
// Enables to reuse React components
class AboutPage extends React.Component {}
export default AboutPage;
import AboutPage from './import-and-export.js';
