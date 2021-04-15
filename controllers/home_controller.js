module.exports.home = function(req, res){
    return res.render('home', {
        title: "Home"
    });
};

module.exports.checkPangram = function(req, res){
    // console.log(req.body.sentence);
    let s = req.body.sentence.toLowerCase();
    let arr = new Array(26);
    for(c of s){
        if(c !== ' '){
            arr[c.codePointAt(0)-97] = 1;
        }
    }
    let miss = '';
    for(let i = 0; i < 26; i++){
        if(!arr[i]){
            // console.log( String.fromCodePoint(i + 97));
            miss = miss + String.fromCodePoint(i + 97) + ', '
        }
    }
    if(miss !== ''){
        return res.render('home', {
            title: "Home",
            sol: "The sentence is not a pangram",
            miss: "The missing characters are " + miss
        });
    }else {
        return res.render('home', {
            title: "Home",
            sol: "The sentence is a pangram"
        });
    }
};

module.exports.showStar = function(req, res) {
    console.log(req.body);
    let r = parseInt(req.body.range);
    let list = req.body.list;
    let a = [];
    for(let i = 0 ; i < list.length; i++){
        if(list[i] >= '0' && list[i] <= '9'){
            a.push(parseInt(list[i]));
        }
        if(list[i] == '-'){
            let x = parseInt(list[i] + list[i+1]);
            a.push(x)
        }
    }
    console.log(a);
    let s = [];
    for(let i = 0; i < 2 * r + 1; i++) {
        let str = '';
        for(let j = 0; j < 2 * r + 1; j++) {
            str += '#' ;
        }
        s.push(str);
    }
    // console.log(s);
    let ani = [];
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            for(let j=r-a[i];j<r;j++){
                let obj = (j).toString() + ' ' + (r+a[i]).toString();
                ani.push(obj);
                console.log(obj);
            }
        }else if(a[i]<0){
            for(let j=r;j<r-a[i];j++){
                let obj = (j+1).toString() + ' ' + (r+a[i]).toString();
                ani.push(obj);
                console.log(obj);
            }
        }else {
            let obj = (r).toString() + ' ' + (r).toString();
            ani.push(obj);
            console.log(obj);
        }
    }
    console.log(ani);
    let ans = ""
    for(let i=0;i<r*2+1;i++){
        for(let j=0;j<r*2+1;j++){
            let obj = (i).toString() + ' ' + (j).toString();
            if(ani.includes(obj)){
                // console.log(i,j, ani.includes(obj));
                ans = ans + '*' + " ";
            }else{
                ans = ans + ' ' + " ";
            }
        }
        ans = ans + '\n'
    }
    console.log(ans);

    res.redirect('back');
}