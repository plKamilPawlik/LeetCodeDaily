#include <algorithm>
#include <vector>
#include <set>

class Solution
{
public:
    int longestBalanced(std::vector<int> &nums) {
        int maxLength = 0;
        
        for (int i = 0; i < nums.size() - 1; i++) {
            auto odd = std::set<int>();
            auto even = std::set<int>();
            
            for (int j = i; j < nums.size(); j++) {
                nums[j] & 1 ? odd.insert(nums[j]) : even.insert(nums[j]);

                if (odd.size() == even.size()) {
                    maxLength = std::max(maxLength, j - i + 1);
                }
            }
        }

        return maxLength;
    }
};
