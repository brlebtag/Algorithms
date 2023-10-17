#include "TicTacToeAIBase.h"

TicTacToeAIBase::TicTacToeAIBase(Player player) :
    m_Player(player),
    m_Opponent(Opponent(player))
{}

Player TicTacToeAIBase::Opponent(Player player)
{
    if (player == Player::X)
        return Player::O;
    if (player == Player::O)
        return Player::X;
    
    throw std::invalid_argument("player");
}

int TicTacToeAIBase::Value(Player player)
{
    if (player == m_Player)
        return 1; // maximize
    return -1; // minimize
}