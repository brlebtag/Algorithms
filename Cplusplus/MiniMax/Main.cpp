#include <iostream>
#include <exception>
#include <tuple>
#include <array>
#include <memory>
#include <vector>
#include <climits>
#include "TicTacToeGame.h"
#include "MiniMaxTicTacToeAI.h"


int main(int argc, char* argv[]) {
    TicTacToeGame game;
    game.Run();
    return 0;
}