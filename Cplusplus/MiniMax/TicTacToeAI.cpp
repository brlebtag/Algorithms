#include "TicTacToeAI.h"

TicTacToeAI::TicTacToeAI(ITicTacToeAIStrategy* aiStrategy, TicTacToeState& state, Player player) :
    m_State(state),
    m_AIStrategy(aiStrategy),
    m_Player(player)
{}

Move TicTacToeAI::NextMove()
{
    return m_AIStrategy->NextMove(m_State);
}