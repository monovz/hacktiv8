function angkaPalindrome(num) {
    // you can only write your code here!
	var rem = 0;
	var final=0;
	var temp=num;
	while(temp!==final){
		temp++;
		num=temp
		final=0
		while(num>0){
			rem=num%10;
			num=parseInt(num/10);
			final= final*10+rem;
		}
	}
	return temp;
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001