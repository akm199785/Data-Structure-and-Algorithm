#include <iostream>
#include<algorithm>
using namespace std;
/*
Explanation -
Divide list into two halves. People standing ahead of Jesse and persons standing behind Jesse.
Check with each person in both the halves - how many tickets that person wants to buy.
Lets consider first half
If the person wants to buy less number of tickets than that of Jesse - the person will visit the 
ticket window till he buy the tickets before Jesse. So add his number of tickets to the total unit time
If the person wants to buy more or the equal tickets than Jesse then he will visit ticket window before 
Jesse exactly the same number of times that Jesse visits the ticket window. So add Jesse's tickets count 
to the total unit time - which is equal to the person's ticket count which he buys before Jesse
Now consider second half -
If the person standing behind Jesse wants to buy more or equal tickets than Jesse, he will visit ticket
 window one less time than Jesse. So add (Jesse's ticket count - 1) to the total unit time
If the person standing behind Jesse wants to buy less tickets than Jesse, then the person will visit 
ticket window until he buys all his tickets. So add persons total ticket count to the total unit time.
Finally, add Jesse's ticket count to the total unit time too, because Jesse will also visit the ticket
 window until he buys all the tickets that he wants
e.g. Five persons are standing in a queue. Their ticket count is given in the list below. Jesse is 
standing at 3rd position
 (list index = 2)

[2,6,3,4,5]

first half = [2,6] second half = [4,5]

now consider first half -

Person#1 wants to buy 2 tickets. Jesse's count (3) is greater than 2. So this person will definitely 
visit ticket window twice before Jesse. Hence total_unit_time = 2

Person#2 wants to buy 6 tickets. Jesse's count (3) is less than 6. So this person will visit ticket 
window 3 times before Jesse. So total_unit_time = 2+3

now consider second half - 1. Person#1 wants to buy 4 tickets. Jesse's count (3) is less than 4. Now, 
Jesse will buy his first ticket then the person will get a chance to buy his first ticket. But then 
Jesse will have to wait for 2 more turns to buy remaining 2 tickets after this person.
 So total_unit_time = 2+3+(3-1)

Person#2 wants to buy 5 tickets. Again Jesse will buy his first ticket and will wait for his remaining 
two turns until this guy buys two tickets. So total_unit_time = 2+3+2+(3-1)

*/
int solve(int arr[],int n,int p)
{
    int Time=0;
    for(int i=0;i<=p;i++)
    {
        if(arr[i]<arr[p])
        Time+=arr[i];
        else
        Time+=arr[p];
    }
    for(int i=p+1;i<n;i++)
    {
        if(arr[i]<arr[p])
        Time+=arr[i];
        else
        Time+=arr[p]-1;
    }
    return Time;
}
int main() {
	int n,t,p;
	cin>>n>>t;
	int arr[n];
	for(int i=0;i<n;i++)
	cin>>arr[i];
	while(t--)
	{
	    cin>>p;
	cout<<solve(arr,n,p)<<endl;
	}
	return 0;
}