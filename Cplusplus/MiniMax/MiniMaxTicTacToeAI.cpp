#include "MiniMaxTicTacToeAI.h"
#include "climits"
#include <iostream>

MiniMaxTicTacToeAI::MiniMaxTicTacToeAI(Player player) :
    TicTacToeAIBase(player)
{}

Move MiniMaxTicTacToeAI::NextMove(TicTacToeState& gameState)
{
    // Maximize ... 
    int bestScore = INT_MIN;
    Move bestMove {0, 0};
    for (int row = 0; row < TicTacToeState::Size; row++)
    {
        for (int col = 0; col < TicTacToeState::Size; col++)
        {
            Player _player = gameState.Get(row, col);

            // Is spot available?
            if (_player == Player::None)
            {
                gameState.Set(row, col, m_Player);
                int score = Minimax(gameState, false, 0);
                gameState.Clear(row, col);

                if (score > bestScore)
                {
                    bestScore = score;
                    bestMove.Set(row, col);
                }
            }
        }
        
    }

    return bestMove;
}

int MiniMaxTicTacToeAI::Minimax(TicTacToeState& gameState, bool isMaximizing, int depth)
{
    if (gameState.IsFinal())
    {
        if (gameState.IsTie())
        {
            return 0;
        }
        else
        {
            // `isMaximizing == true` means I was minimazing (here it arrived the opposite) then I return -1
            // `isMaximizing == false` means I was maximazing (here it arrived the opposite) then I return 1
            return (isMaximizing ? -1 : 1);
        }
    }

    if (isMaximizing)
    {
        int bestCore = INT_MIN;

        for (int row = 0; row < TicTacToeState::Size; row++)
        {
            for (int col = 0; col < TicTacToeState::Size; col++)
            {
                if (gameState.Get(row, col) == Player::None)
                {
                    gameState.Set(row, col, m_Player);
                    int score = Minimax(gameState, false, depth + 1);
                    gameState.Clear(row, col);
                    bestCore = std::max(bestCore, score);
                }
            }
        }

        return bestCore;
    }

    if (!isMaximizing)
    {
        int bestCore = INT_MAX;

        for (int row = 0; row < TicTacToeState::Size; row++)
        {
            for (int col = 0; col < TicTacToeState::Size; col++)
            {
                if (gameState.Get(row, col) == Player::None)
                {
                    gameState.Set(row, col, m_Opponent);
                    int score = Minimax(gameState, true, depth + 1);
                    gameState.Clear(row, col);
                    bestCore = std::min(bestCore, score);
                }
            }
        }

        return bestCore;
    }
}
