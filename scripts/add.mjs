// To add a word from word.json into /data/arabicIndex.json
import word from './word.json' assert { type: 'json' };
import path from 'path';
import { promises as fsPromises } from 'fs';

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

                        const collator = new Intl.Collator('ar');
                        json[alphaIndex].list = json[alphaIndex].list.sort((a, b) => collator.compare(a.root, b.root));
                    }
                } else {
                    json.push(word);
                }

                // sort it
                const collator = new Intl.Collator('ar');
                json = json.sort((a, b) => collator.compare(a.ab, b.ab));
                
                fsPromises.writeFile(arabicIndexFile, JSON.stringify(json, null, 4))
                        .then(  () => { console.log('Update Success'); })
                        .catch(err => { console.log("Update Failed: " + err);});
            }
        })
    .catch(err => { console.log("Read Error: " +err);});

