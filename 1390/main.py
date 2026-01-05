from typing import List


class Solution:

    def sumFourDivisors(self, nums: List[int]) -> int:
        self.memo = dict[int, List[int]]()

        sum = 0

        for num in nums:
            divisors = self.getDivisorsOf(num)

            if len(divisors) == 2:
                sum += 1 + divisors[0] + divisors[1] + num

        return sum

    def getDivisorsOf(self, num: int) -> List[int]:
        if num in self.memo:
            return self.memo[num]

        divisors = list[int]()

        i = 2

        while i * i <= num:

            if num % i == 0:
                if num / i == i:
                    divisors.extend([i])
                else:
                    divisors.extend([i, num // i])

            i += 1

        self.memo[num] = divisors

        return divisors
