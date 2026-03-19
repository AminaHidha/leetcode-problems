/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
        let arr=[]
    let result=image.map(image=>image.reverse())
    console.log((result));
    for(i=0;i<result.length;i++){
        let x=result[i]

        for(j=0;j<x.length;j++){
            if (x[j]==0){
                x[j]=1

            }else{
                x[j]=0
            }
        }
    }
    return result
};