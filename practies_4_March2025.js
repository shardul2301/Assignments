
// reverse the string without usinh inbuilt method
function reverse(str) {
    let reversestr = "";
    for (let i = str.length-1; i>=0;i--){
        // console.log(str[i]);
        reversestr =reversestr +str[i];
    }
    return reversestr;
}
console.log("shar");
console.log(reverse("shar"));

// Output:

// shar
// rahs