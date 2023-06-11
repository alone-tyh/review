import { testData } from "./testData";
import findWords2 from "./code2";
import { findWords } from "./code";
import oldFindwords from './old_code';

export const trie2 = () => {
    console.log('啊啊啊', "oldFindwords")
    // const arg = testData[7]
    // console.log('参数', arg);
    // const res = findWOrds2(arg.bord, arg.word);
    // console.log('最终结果', res);
    console.time()
    testData.forEach((arg, index) => {
        console.log('参数', index, arg);
        const res = oldFindwords(arg.bord, arg.word);
        console.log('最终结果--' + index, res);
    })
    console.timeEnd()
}