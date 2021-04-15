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