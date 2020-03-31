// function angkaPalindrome(num) {
//     // you can only write your code here!
//     var rem=num%10;
//     var
//   }
  
//   // TEST CASES
//   console.log(angkaPalindrome(8)); // 9
//   console.log(angkaPalindrome(10)); // 11
//   console.log(angkaPalindrome(117)); // 121
//   console.log(angkaPalindrome(175)); // 181
//   console.log(angkaPalindrome(1000)); // 1001

function Palindrome(number)
	{
		var rem, temp, final = 0;
        temp = number;
        console.log(number)
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
            final = final*10+rem;
            console.log(final)
		}
		if(final==temp)
		{
			console.log("The inputed number is Palindrome");
		}
		else
		{
			console.log("The inputted number is not palindrome");
        }
        console.log (number)
    }

Palindrome(13431)