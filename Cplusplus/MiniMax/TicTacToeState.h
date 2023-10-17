#ifndef __TIC_TAC_TOE_STATE_H__
#define __TIC_TAC_TOE_STATE_H__

#include <array>
#include "Common.h"

class TicTacToeState
{
public:
    static const int Size = 3;
    TicTacToeState();
    TicTacToeState(const TicTacToeState& state);
    TicTacToeState& operator=(const TicTacToeState& state);
    void Copy(const TicTacToeState& state);
    void Reset();
    void Set(int row, int col, Player player);
    void Clear(int row, int col);
    Player Get(int row, int col) const;
    bool IsFinal() const;
    bool IsTie() const;
    Player PlayerTurn();
    Player PlayerWon();

private:
    std::array<std::array<Player, Size>, Size> m_State;
    bool m_Final;
    int m_FreeSeats;
    void ValidateCoordinates(int row, int column) const;
    bool IsFinalLinearly(int row, int col);
    bool IsFinalDiagonally(int row, int col);
};

#endif