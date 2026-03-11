class Solution:
    def bitwiseComplement(self, n: int) -> int:
        if n == 0:
            return 1

        complement = 0
        shiftBit = 1

        while n > shiftBit:
            complement += 0 if n & shiftBit else shiftBit
            shiftBit <<= 1

        return complement
