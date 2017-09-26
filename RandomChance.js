function slots(quarters){
    var win = Math.trunc(Math.random()*100);
    for(var i=quarters; i>=0; i--){
        var spin = Math.trunc(Math.random()*100);
        if(i===0){
            console.log("I ran out of money...");
            break;
        }
        else if(spin===win){
            var money=(Math.trunc(100-(Math.random()*50)));
            i=i+money;
            console.log("I won "+money+" quarters!!! I have "+ (i) +" quarters.");
                if(i>=200){
                console.log("Wow, I have "+i+ " quarters! I think that's enough for 1 day.");
                break;
                }
        }
    }
}
slots(100);