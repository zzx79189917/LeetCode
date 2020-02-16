/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(let row=0, rowlen=board.length; row<rowlen;row++){
        for(let col=0,collen=board[row].length; col<collen; col++){
            if(board[row][col]===word[0]){
                if(search(board, word, row, col)){
                    return true;
                }
            }
        }
    }
    function search(b, w, r, c){
        if(w===''){
            return true;
        }
        if( !(r>=0)|| !(r<b.length) || !(c>=0) || !(c<b[r].length)){
            return false;
        }
        if(b[r][c] !== w[0]){
            return false;
        }
        let tmp = b[r][c];
        b[r][c] = '#';
        if(search(b, w.slice(1),r+1, c) || search(b, w.slice(1),r-1, c) || search(b, w.slice(1),r, c+1) || search(b, w.slice(1),r, c-1)){
            b[r][c] = tmp;
            return true;
        }else{
            b[r][c] = tmp;
            return false;
        }
    }
    return false;
};