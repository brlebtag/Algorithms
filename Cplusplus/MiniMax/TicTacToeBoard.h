#ifndef __TIC_TAC_TOE_BOARD_H__
#define __TIC_TAC_TOE_BOARD_H__

#include <string>
#include "TicTacToeState.h"

class TicTacToeBoard
{
public:
    TicTacToeBoard(TicTacToeState& state);
    void Print() const;

private:
    TicTacToeState& m_State;

    void PrintRow(int row) const;
    void PrintColumn(int row, int column) const;
    void PrintLine() const;
    std::string PlayerSymbol(Player player) const;
};

#endif