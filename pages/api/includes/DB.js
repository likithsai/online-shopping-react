//  DB.js
//  Contains database connection settings

import mysql from 'mysql';
import settings from '../../../data/settings';

const DB = mysql.createConnection({
    host: settings.server[0].dbserver,
    user: settings.server[0].dbuser,
    password: settings.server[0].dbpass,
    database: settings.server[0].database
});

export default DB;