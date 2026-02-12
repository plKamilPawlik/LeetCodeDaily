class Solution:
    def longestBalanced(self, s: str) -> int:
        maxLength = 0

        for i in range(len(s)):
            charFreq = [0] * 26

            for j in range(i, len(s)):
                charCode = ord(s[j]) - 97
                charFreq[charCode] += 1

                if all(freq == 0 or freq == charFreq[charCode] for freq in charFreq):
                    maxLength = max(maxLength, j - i + 1)

        return maxLength
