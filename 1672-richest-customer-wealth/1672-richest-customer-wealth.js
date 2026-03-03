/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result=0
    for(i=0;i<accounts.length;i++){
        sum=0
        for(j=0;j<accounts[i].length;j++){
            sum+=accounts[i][j]
            if(sum>result){
                result=sum
            }
        }
    }
    return result
};