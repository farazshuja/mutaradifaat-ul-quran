import uniqBy from 'lodash/uniqBy';
import data from './arabicIndex.json';

export const getArabicIndexData = () => {
    return data;
}

export const getArabicIndexAlphabets = (baseUrl: string) => {
    return data.map((d) => {
        const item = {
            text: d.ab,
            link: `${baseUrl}#${d.bw}`,
            items: [],
        };
        if (d.list.length > 0) {
             const res = d.list.map((i) => ({
                text: i.root,
                link: `${baseUrl}#${i.root_bw}`,
            }));

            item.items = uniqBy(res, (x) => x.text);
        }
        return item;
    });
}