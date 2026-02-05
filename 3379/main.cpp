#include <vector>

class Solution
{
public:
    std::vector<int> constructTransformedArray(std::vector<int> &nums)
    {
        int size = nums.size();
        auto res = std::vector<int>(size);

        for (int i = 0; i < size; i++) {
            res[i] = nums[((i + nums[i]) % size + size) % size];
        }

        return res;
    }
};
