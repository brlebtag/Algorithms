#ifndef __COMMON_H___
#define __COMMON_H___


enum class Player { None = 0, X = 1, O = 2 };

struct Move
{
    int Row;
    int Column;

    void Set(int row, int col);
};

#endif