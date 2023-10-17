#ifndef __TIC_TAC_TOE_GAME_H__
#define __TIC_TAC_TOE_GAME_H__

#include "TicTacToeBoard.h"
#include "TicTacToeAI.h"

class TicTacToeGame
{
public:
    TicTacToeGame();
    void Run();

private:
    Move GetNextFreeSlot();
    TicTacToeState m_GameState;
    TicTacToeBoard m_Board;
    TicTacToeAI m_AI;
};

#endif