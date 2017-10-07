const global  = require('../../global');
let route;

if (global.activeServerSubdomain) {
    route = {
        tweets: '/tweets',
        user: '/user',
        root: '/'
    };
    
} else {
    const APPNAME = global.APPNAME.replace(/\//g, '');
    
    const BASEROUTE = APPNAME ? `/${APPNAME}`: '';
    route = {
        tweets: `${BASEROUTE}/tweets`,
        user: `${BASEROUTE}/user`,
        root: `${BASEROUTE}/`
    };
    
}

export default route;