#include "TicTacToeBoard.h"

#include <iostream>

TicTacToeBoard::TicTacToeBoard(TicTacToeState& state)
    : m_State(state)
{}

void TicTacToeBoard::Print() const
{
    if (TicTacToeState::Size > 1)
    {
        PrintRow(0);
    }

    for (int row = 1; row < TicTacToeState::Size; row++)
    {
        PrintLine();
        PrintRow(row);
    }
}

void TicTacToeBoard::PrintRow(int row) const
{
    if (TicTacToeState::Size > 1)
    {
        PrintColumn(row, 0);
    }

    for (int col = 1; col < TicTacToeState::Size; col++)
    {
        std::cout << "|";
        PrintColumn(row, col);
    }

    std::cout << std::endl;
}

void TicTacToeBoard::PrintColumn(int row, int column) const
{
    std::cout << " " << PlayerSymbol(m_State.Get(row, column)) << " ";
}

void TicTacToeBoard::PrintLine() const
{
    std::cout << "-----------" << std::endl;
}

std::string TicTacToeBoard::PlayerSymbol(Player player) const
{
    switch (player)
    {
    case Player::X:
        return "X";
    case Player::O:
        return "O";        
    default:
        return " ";
    }
}