/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    let len = postorder.length;
    if(len<2){
        return true;
    }
    let root = postorder[len-1];
    let mid = 0;
    for(; mid<len-1 && postorder[mid]<root;++mid){}
    for(let i=mid;i<len-1;i++){
        if(postorder[i]<root){
            return false;
        }
    }
    return verifyPostorder(postorder.slice(0, mid)) && verifyPostorder(postorder.slice(mid, len-mid-1));
};