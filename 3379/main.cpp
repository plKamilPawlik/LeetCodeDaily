class Solution
{
public:
    vector<int> constructTransformedArray(vector<int> &nums)
    {
        auto len = nums.size();
        auto res = vector<int>(len);

        for (int i = 0; i < len; i++)
        {
            res[i] = nums[i] ? (i + nums[i]) % len : 0;
        }

        return res;
    }
};
