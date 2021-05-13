#include <iostream>
#include <cmath>

using namespace std;

int get_digit(int number, int digit) {
    return (int)(number / pow(10, digit - 1)) % 10;
}

int main(int argc, char* argv[]) {
    
    int first, second;

    cin >> first;

    cout << get_digit(first, 5) << endl;

    return 0;
}
