// To add a word from word.json into /data/arabicIndex.json
import word from './word.json' assert { type: 'json' };
import path from 'path';
import { promises as fsPromises } from 'fs';

const sortIndex = (x) => ['a', 'b', 't', 'v', 'j', 'H', 'x', 'd', '*', 'r', 'z', 'j', 's', '$', 'S', 'D', 'T', 'Z', 'E', 'g', 'f', 'k', 'q', 'l', 'm', 'n', 'w', 'h', 'y'].findIndex((y) => x === y);

const arabicIndexFile = path.join(process.cwd(), 'data/arabicIndex.json');

fsPromises.readFile(arabicIndexFile, 'utf8') 
    .then(data => { 
            debugger;
            let json = JSON.parse(data);
            if (word.ab) {
                // if alphabet already exist then append into it
                const alphaIndex = json.findIndex((j) => j.bw === word.bw);
                // append into it
                if (alphaIndex > -1) {
                    // insert into list if not already there
                    const listIndex = json[alphaIndex].list.findIndex((j) => j.word === word.list[0].word);
                    if (listIndex === -1) {
                        json[alphaIndex].list.push(word.list[0]);
                        // sort it
                        const v = (rootBw) => {
                            let i = 0;
                            rootBw.forEach((c) => i += sortIndex(c));
                            return i;
                        };
                        json[alphaIndex].list = json[alphaIndex].list.sort((a, b) => (v(a.root_bw) - v(b.root_bw)));
                    }
                } else {
                    json.push(word);
                }

                // sort it
                json = json.sort((a, b) => (sortIndex(a.bw) - sortIndex(b.bw)));
                
                fsPromises.writeFile(arabicIndexFile, JSON.stringify(json, null, 4))
                        .then(  () => { console.log('Update Success'); })
                        .catch(err => { console.log("Update Failed: " + err);});
            }
        })
    .catch(err => { console.log("Read Error: " +err);});

