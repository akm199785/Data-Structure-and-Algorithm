Given an array p[] of odd length N where p[i] denotes the probability of getting a head on the ith coin. As the coins are biased, the probability of getting a head is not always equal to 0.5. The task is to find the probability of getting heads more number of times than tails.
Examples: 

Input: p[] = {0.3, 0.4, 0.7} 
Output: 0.442 
Probability for a tail = (1 – Probability for a head) 
For heads greater than tails, there are 4 possibilities: 
P({head, head, tail}) = 0.3 x 0.4 x (1 – 0.7) = 0.036 
P({tail, head, head}) = (1 – 0.3) x 0.4 x 0.7 = 0.196 
P({head, tail, head}) = 0.3 x (1 – 0.4) x 0.7= 0.126 
P({head, head, head}) = 0.3 x 0.4 x 0.7 = 0.084 
Adding the above probabilities 
0.036 + 0.196 + 0.126 + 0.084 = 0.442

Input: p[] = {0.3, 0.5, 0.2, 0.6, 0.9} 
Output: 0.495 