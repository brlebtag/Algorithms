#include "TicTacToeState.h"
#include <exception>
#include <iostream>

TicTacToeState::TicTacToeState()
{
    Reset();
}

TicTacToeState::TicTacToeState(const TicTacToeState& state)
{
    Copy(state);
}

TicTacToeState& TicTacToeState::operator=(const TicTacToeState& state) 
{
    Copy(state);
    return *this;
}

void TicTacToeState::Copy(const TicTacToeState& state)
{
    m_Final = state.m_Final;
    m_FreeSeats = state.m_FreeSeats;

    for (int i = 0; i < Size; i++)
    {
        for (int j = 0; j < Size; j++)
        {
            m_State[i][j] = state.m_State[i][j];
        }
    }
}

void TicTacToeState::Reset()
{
    for(auto& row : m_State) row.fill(Player::None);
    m_FreeSeats = 0;
    m_Final = false;
}

void TicTacToeState::Set(int row, int col, Player player)
{
    if (m_Final) throw std::domain_error("Game is over");
    if (player == Player::None) throw std::domain_error("Cannot set None Player. Use Clear() instead!");

    ValidateCoordinates(row, col);

    m_State[row][col] = player;
    m_FreeSeats++;
    m_Final = IsFinalDiagonally(row, col) || IsFinalLinearly(row, col) || IsTie();
}

Player TicTacToeState::Get(int row, int col) const
{
    ValidateCoordinates(row, col);
    return m_State[row][col];
}

bool TicTacToeState::IsFinal() const
{
    return m_Final;
}

bool TicTacToeState::IsTie() const
{
    return m_FreeSeats == (Size * Size);
}

void TicTacToeState::Clear(int row, int col)
{
    bool final = IsFinalDiagonally(row, col) || IsFinalLinearly(row, col) || IsTie();

    if (m_State[row][col] != Player::None)
    {
        m_FreeSeats--;
    }

    // if it was final because of this position, it no longer is
    if (final)
    {
        m_Final = false;
    }

    m_State[row][col] = Player::None;
}

void TicTacToeState::ValidateCoordinates(int row, int column) const
{
    if (row < 0 || row > Size)
    {
        throw std::invalid_argument("invalid row argument");
    }

    if (column < 0 || column > Size)
    {
        throw std::invalid_argument("invalid column argument");
    }
}

bool TicTacToeState::IsFinalLinearly(int row, int col)
{
    bool same1 = true;
    bool same2 = true;

    for (int i = 0; i < Size; i++)
    {
        same1 &= m_State[i][col] == m_State[row][col];
        same2 &= m_State[row][i] == m_State[row][col];
    }        

    return same1 || same2;
}

bool TicTacToeState::IsFinalDiagonally(int row, int col)
{
    bool same1 = true;
    bool same2 = true;

    for (int i = 0; i < Size; i++)
    {
        same1 &= m_State[i][i] == m_State[row][col];
        same2 &= m_State[i][Size - i - 1] == m_State[row][col];
    }        

    return same1 || same2;
}