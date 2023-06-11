function findWords(board: string[][], words: string[]): string[]{
    let result: Set<string> = new Set();
    const trie: TrieNode = { children: new Map(), isEnd: false }

    const realWords = filterArg(board, words);
    // const realWords = words
    // console.log('过滤后结果', realWords)

    realWords.forEach(word => {
        createTrie(trie, word);
    })

    // console.log('前缀树', trie);

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            // if (i == 2 && j == 1) debugger;
            const res = findDf(board, trie, i, j, []);
            if (res?.size) {
                result = new Set([ ...result, ...res ])
            }
        }
    }

    // console.log('查询后的树', trie);

    return Array.from(result);
}

/** 参数过滤 */ 
const filterArg = (board: string[][], words: string[]): Set<string> => {
    let char = new Set();
    const realWords = new Set<string>();
    board.forEach(item => {
        char = new Set([...char, ...new Set(item)])
    })
    words.forEach(item => {
        if (realWords.has(item)) return;
        for (let i = 0; i < item.length; i++) {
            if (!char.has(item[i])) return;
        }
        realWords.add(item);
    })
    return realWords
}

interface TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;
}

const createTrie = (trie: TrieNode, word: string) => {
    let node = trie;
    
    for (const char of word) {
        if (node.children.has(char)) {
            node = node.children.get(char)!;
        } else {
            node.children.set(char, { children: new Map(), isEnd: false })
            node = node.children.get(char)!;
        }
    }

    node.isEnd = true;
}


const findDf = (board: string[][], preTrieNode: TrieNode, i: number, j: number, path: string[]) => {
    const curChar = board[i][j];
    let result = new Set<string>();
    // debugger

    // 当前位置的字母不属于寻找范畴直接退出
    if (!preTrieNode.children.has(curChar)) return;

    path.push(curChar);

    const currNode = preTrieNode.children.get(curChar)!;

    if (currNode.isEnd) {
        result.add(path.join(''));
    }

    if (currNode.children.size === 0) {
        preTrieNode.children.delete(curChar);
        path.pop()
        return result;
    }

    board[i][j] = "#";

    // 上
    if (i - 1 >= 0) {
        const res = findDf(board, currNode, i - 1, j, path);
        if (res?.size) {
            result = new Set([...result, ...res])
        }
    }
    // 右
    if (j + 1 < board[i].length) {
        const res = findDf(board, currNode, i, j + 1, path);
        if (res?.size) {
            result = new Set([...result, ...res])
        }
    }
    // 下
    if (i + 1 < board.length) {
        const res = findDf(board, currNode, i + 1, j, path);
        if (res?.size) {
            result = new Set([...result, ...res])
        }
    }
    // 左
    if (j - 1 >= 0) {
        const res = findDf(board, currNode, i, j - 1, path);
        if (res?.size) {
            result = new Set([...result, ...res])
        }
    }

    board[i][j] = curChar;
    path.pop();
    if (currNode.children.size === 0) {
        preTrieNode.children.delete(curChar);
    }

    return result;
}

export default findWords;