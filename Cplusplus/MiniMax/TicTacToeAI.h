#ifndef __TIC_TAC_TOE_AI_H__
#define __TIC_TAC_TOE_AI_H__

#include <memory>
#include "Common.h"
#include "TicTacToeState.h"

class ITicTacToeAIStrategy
{
public:
    virtual Move NextMove(TicTacToeState & gameState) = 0;
    virtual ~ITicTacToeAIStrategy() = default;
};

class TicTacToeAI
{
public:
    TicTacToeAI(ITicTacToeAIStrategy* aiStrategy, TicTacToeState& state, Player player);
    Move NextMove();

private:
    TicTacToeState& m_State;
    Player m_Player;
    std::unique_ptr<ITicTacToeAIStrategy> m_AIStrategy;
};

#endif