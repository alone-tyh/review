export function findWords(board: Array<Array<string>>, words: string[]): string[] {
    const trie: TrieNode = { children: {}, count: 1 };
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
            result = result.concat(chackAround(board, i, j, trie, []));
        }
    }

    // console.log('查找后的树', trie);
    // return result;
    return Array.from(new Set(result));
};

interface TrieNode {
    children: Record<string, TrieNode>;
    // 路过次数，或 分叉树总和
    count: number;
    isEnd?: boolean;
}


const addTrieNode = (trie: TrieNode, word: string, index: number) => {
    const char = word[index];
    if (!trie.children[char]) {
        trie.children[char] = { children: {}, isEnd: false,  count: 1 }
    } else {
        trie.children[char].count += 1;
    }
    if (index >= word.length - 1) {
        trie.children[char].isEnd = true;
        return;
    }
    addTrieNode(trie.children[char], word, index + 1);
}

const chackAround = (board: string[][], i: number, j: number, preTrieNode: TrieNode, pathList: string[]) => {
    const curStr = board[i][j];
    // console.log('当前路径', trie, curStr, i, j)
    const { children } = preTrieNode;
    const curNode = children[curStr];

    // console.log('啊啊啊', count);
    let result: string[] = [];

    // 没有匹配到
    if (!curNode) return result;

    if (curNode.count <= 0) return result;

    pathList.push(curStr);
    

    // 有一个结果产生
    if (curNode.isEnd) {
        result.push(pathList.join(''));
        curNode.isEnd = false;
    }

    // 这是最后一个了
    if (!curNode?.children) {
        // console.log('这是最后一个了并减1', word);
        curNode.count! -= 1;
        const word = pathList.join('');
        pathList.pop();
        return [word]
    };

    board[i][j] = '#';

    // 上
    if (i - 1 >= 0) {
        const res = chackAround(board, i - 1, j, children[curStr], pathList);
        result = result.concat(res);
        // children[curStr].count! -= res.length;

        // console.log('上', i, j, curStr, res);
    }
    // 右
    if (j + 1 < board[i].length) {
        const res = chackAround(board, i, j + 1, children[curStr], pathList);
        result = result.concat(res);
        // children[curStr].count! -= res.length;
        // console.log('右', i, j, curStr, res);
    }
    // 下
    if (i + 1 < board.length) {
        const res = chackAround(board, i + 1, j, children[curStr], pathList);
        result = result.concat(res);
        // children[curStr].count! -= res.length;
        // console.log('下', i, j, curStr, res);
    }
    // 左
    if (j - 1 >= 0) {
        const res = chackAround(board, i, j - 1, children[curStr], pathList);
        result = result.concat(res);
        // children[curStr].count! -= res.length;
        // console.log('左', i, j, curStr, res);
    }

    // if (children[curStr].count! > 0 && word && !result.includes(word)) {
    //     children[curStr].count! -= 1;
    //     console.log('补充路上的答案', word)
    //     result.push(word);
    // }

    board[i][j] = curStr;
    pathList.pop();
    result = Array.from(new Set(result))
    // console.log('这条路减多少个', i, j, curStr, result.length, result)
    children[curStr].count -= result.length;

    return result;
}