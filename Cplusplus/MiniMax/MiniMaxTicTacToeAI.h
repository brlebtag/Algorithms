#ifndef __MINIMAX_TIC_TAC_TOE_AI_H__
#define __MINIMAX_TIC_TAC_TOE_AI_H__

#include "Common.h"
#include "TicTacToeAIBase.h"

class MiniMaxTicTacToeAI : public TicTacToeAIBase
{
public:
    MiniMaxTicTacToeAI(Player player);
    Move NextMove(TicTacToeState& gameState) override;
private:
    int Minimax(TicTacToeState& gameState, bool isMaximizing, int depth);
    Player m_SelectedPlayer;
};

#endif