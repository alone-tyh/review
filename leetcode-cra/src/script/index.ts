export function findWords(board: Array<Array<string>>, words: string[]): string[] {
    const trie: TrieNode = { children: {} };
    let result: string[] = [];

    let hasCharArr: Set<string> = new Set();

    board.forEach(item => {
        const itemSet = new Set(item);
        hasCharArr = new Set([...hasCharArr, ...itemSet]);
    })

    // 生产前缀树
    new Set(words).forEach(word => {
        for (let i = 0; i < word.length; i++) {
            if (!hasCharArr.has(word[i])) {
                return;
            }
        }
        // console.log('过滤后的词', word);
        addTrieNode(trie, word, 0);
    })

    // console.log("查看前缀树", trie);

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            // console.log('下一个', i, j);
            result = result.concat(chackAround(board, i, j, trie, {}));
        }
    }

    // console.log('查找后的树', trie);
    // return result;
    return Array.from(new Set(result));
};

interface TrieNode {
    children?: Record<string, TrieNode>;
    word?: string;
    // 路过次数，或 分叉树总和
    count?: number;
    isChecked?: boolean;
}


const addTrieNode = (trie: TrieNode, word: string, index: number) => {
    const char = word[index];
    if (!trie.children) {
        trie.children = {}
    }
    if (!trie.children[char]) {
        trie.children[char] = { count: 1 }
    } else {
        trie.children[char].count! += 1;
    }
    if (index >= word.length - 1) {
        trie.children[char].word = word;
        return;
    }
    addTrieNode(trie.children[char], word, index + 1);
}

const chackAround = (board: string[][], i: number, j: number, trie: TrieNode, pathMap: Record<string, boolean>) => {
    const curStr = board[i][j];
    // console.log('当前路径', trie, curStr, i, j)
    const { children } = trie;
    const word = children?.[curStr]?.word;
    const count = children?.[curStr]?.count!;

    // console.log('啊啊啊', count);
    let result: string[] = [];
    // 不回头
    if (pathMap[i + '-' + j]) {
        // console.log('%c不回头', 'color: red');
        return result
    };

    // 没有匹配到
    if (!children?.[curStr]) return result;

    if (count <= 0) return result;

    // 有一个结果产生 应该回归时才去计算答案
    if (word && !children[curStr].isChecked) {
        result.push(word);
        children[curStr].isChecked = true;
    }

    // 这是最后一个了
    if (!children[curStr]?.children) {
        // console.log('这是最后一个了并减1', word);
        children[curStr].count! -= 1;
        return [word!]
    };

    // 标记走过的路
    const newPath = { ...pathMap };
    newPath[i + '-' + j] = true;

    // 上
    if (i - 1 >= 0) {
        const res = chackAround(board, i - 1, j, children[curStr], newPath);
        result = result.concat(res);
        // children[curStr].count! -= res.length;

        // console.log('上', i, j, curStr, res);
    }
    // 右
    if (j + 1 < board[i].length) {
        const res = chackAround(board, i, j + 1, children[curStr], newPath);
        result = result.concat(res);
        // children[curStr].count! -= res.length;
        // console.log('右', i, j, curStr, res);
    }
    // 下
    if (i + 1 < board.length) {
        const res = chackAround(board, i + 1, j, children[curStr], newPath);
        result = result.concat(res);
        // children[curStr].count! -= res.length;
        // console.log('下', i, j, curStr, res);
    }
    // 左
    if (j - 1 >= 0) {
        const res = chackAround(board, i, j - 1, children[curStr], newPath);
        result = result.concat(res);
        // children[curStr].count! -= res.length;
        // console.log('左', i, j, curStr, res);
    }

    // if (children[curStr].count! > 0 && word && !result.includes(word)) {
    //     children[curStr].count! -= 1;
    //     console.log('补充路上的答案', word)
    //     result.push(word);
    // }

    result = Array.from(new Set(result))
    // console.log('这条路减多少个', i, j, curStr, result.length, result)
    children[curStr].count! -= result.length;

    return result;
}