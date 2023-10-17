#include "TicTacToeGame.h"
#include "MiniMaxTicTacToeAI.h"
#include <iostream>
#include <memory>

TicTacToeGame::TicTacToeGame() :
    m_Board(m_GameState),
    m_AI(new MiniMaxTicTacToeAI(Player::O), m_GameState, Player::O)
{}

void TicTacToeGame::Run()
{
    Move move;

    m_Board.Print();

    while (!m_GameState.IsFinal())
    {       
        move = GetNextFreeSlot();

        try
        {
            m_GameState.Set(move.Row, move.Column, Player::X);

            if (m_GameState.IsFinal())
            {
                if (m_GameState.IsTie())
                {
                    std::cout << "It was a Tie" << std::endl;
                }
                else
                {
                    std::cout << "Player X Won" << std::endl;
                }
                return;
            }

            m_Board.Print();

            move = m_AI.NextMove();

            std::cout << "Best move, Row: " << move.Row << ", Col: " << move.Column << std::endl;

            m_GameState.Set(move.Row, move.Column, Player::O);

            if (m_GameState.IsFinal())
            {
                if (m_GameState.IsTie())
                {
                    std::cout << "It was a Tie" << std::endl;
                }
                else
                {
                    std::cout << "Player O Won" << std::endl;
                }
                return;
            }
            
            m_Board.Print();

            std::cin.clear();
        }
        catch(const std::domain_error& e)
        {
            std::cerr << e.what() << std::endl << "Game has ended!" << std::endl;
            return;
        }
        catch (const std::invalid_argument& e)
        {
            std::cerr << e.what() << std::endl;
            return;
        }
    }
}

Move TicTacToeGame::GetNextFreeSlot()
{
    Move move;

    while (std::cin >> move.Row >> move.Column)
    {
        try
        {
            if (m_GameState.Get(move.Row, move.Column) == Player::None)
            {
                return move;
            }
            else
            {
                std::cout << "Slot already in use" << std::endl;
            }
        }
        catch(const std::exception& e)
        {
            std::cerr << e.what() << '\n';
        }        
    }
}