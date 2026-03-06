#include <string>

using namespace std;

class Solution
{
public:
    bool checkOnesSegment(string s)
    {
        int range = s.length() - 1;

        for (int i = 1; i < range; i++)
        {
            if (s[i] == '0' && s[i] != s[i + 1])
                return false;
        }

        return true;
    }
};
