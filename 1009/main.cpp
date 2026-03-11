class Solution
{
public:
    int bitwiseComplement(int n) {
        int complement = 0;
        int offsetBits = 1;

        do {
            complement += n & offsetBits ? 0 : offsetBits;
            offsetBits <<= 1;
        } while (n > offsetBits);

        return complement;
    }
};
