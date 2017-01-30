import {ncp} from "ncp";
import colors from 'colors';

/*eslint-disable no-console*/

export default function copyFiles(fileCollection) {
    fileCollection.forEach(x => {
        ncp(x.from, x.to, (err) => {
        if (err) {
            return console.error(err.toString().red); 
        }
            console.log(`Successfully copied ${x.from} to ${x.to}`.green);
        });
    });
}