
// For two strings s and t, we say "t divides s" if and only
// if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
//
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:
// Input: str1 = "ABABABABABAB", str2 = "ABABAB"
// Output: "ABAB"
// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// step 1 -> Ensure that the larger string is on the left [check] ==== done
// step 2 -> I want to check if str1 == str2 return any of them (str1) [jumped] === done
// step 3 -> If str1 is greater than str2 -> check if str1 started with str2 (if so, remove the starting point is try again)
// step 4 -> if str1 does not start with str2 return empty string

function solution(str1, str2){
    console.log(`param1 = ${str1}, param2 = ${str2}`)

    let str1Len = str1.length
    let str2Len = str2.length

    if(str2Len > str1Len){
        return solution(str2, str1)
    }

    if(str1 === str2){
        console.log("in this block")
        return str1;
    }
    let offset = str1.substring(0, str2.length);
    let rem = str1.substring(str2.length)

    if(offset === str2){
        return solution(rem,str2)
    }

    return ""
}

console.log(solution("ABCABC", "ABC"))

