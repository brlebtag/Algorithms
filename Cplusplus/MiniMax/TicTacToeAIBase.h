#ifndef  __TIC_TAC_TOE_AI_BASE_H__
#define __TIC_TAC_TOE_AI_BASE_H__

#include "TicTacToeAI.h"

class TicTacToeAIBase : public ITicTacToeAIStrategy
{
public:
    ~TicTacToeAIBase() = default;
    TicTacToeAIBase(Player player);
protected:
    Player Opponent(Player player);
    int Value(Player player);
    Player m_Player;
    Player m_Opponent;
};

#endif