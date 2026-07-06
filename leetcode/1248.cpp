#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int removeCoveredIntervals(vector<vector<int>>& q) {

        sort(q.begin(), q.end(), [](const vector<int>& a, const vector<int>& b) {
            if (a[0] != b[0])
                return a[0] < b[0];
            return a[1] > b[1];
        });

        int c = 0;
        int right = 0;

        for (auto &i : q) {
            if (i[1] > right) {
                c++;
                right = i[1];
            }
        }

        return c;
    }
};

int main() {
    Solution obj;

    int n;
    cout << "Enter number of intervals: ";
    cin >> n;

    vector<vector<int>> intervals(n, vector<int>(2));

    cout << "Enter intervals (start end):\n";
    for (int i = 0; i < n; i++) {
        cin >> intervals[i][0] >> intervals[i][1];
    }

    cout << "Remaining intervals: "
         << obj.removeCoveredIntervals(intervals) << endl;

    return 0;
}