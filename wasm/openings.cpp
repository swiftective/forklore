#include <emscripten.h>
#include <cstring>
#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>

using namespace std;

typedef struct
{
    string eco;
    string name;
    vector<string> moves;
} Opening;

vector<string> split(const string &str, char delimter);
inline const char *cstr(const std::string &message);
const vector<Opening> load_openings(void);

#ifdef __cplusplus
#define EXTERN extern "C"
#else
#define EXTERN
#endif

EXTERN EMSCRIPTEN_KEEPALIVE
const char *get_opening(const char *str)
{
    const vector<string> moves = split(str, ' ');

    Opening found;
    int bookMoves = 0;

    vector<Opening> openings = load_openings();

    for (Opening opening : openings)
    {
        int tempBookMoves = 0;
        int size = 0;

        if (opening.moves.size() > moves.size())
        {
            size = moves.size();
        }
        else
        {
            size = opening.moves.size();
        }

        for (int i = 0; i < size; i++)
        {
            if (moves[i] != opening.moves[i])
            {
                break;
            }
            tempBookMoves++;
        }

        if (tempBookMoves >= bookMoves)
        {
            if (tempBookMoves > bookMoves)
            {
                bookMoves = tempBookMoves;
                found = opening;
            }
            else if (tempBookMoves == bookMoves &&
                     found.moves.size() > opening.moves.size())
            {
                bookMoves = tempBookMoves;
                found = opening;
            }
        }
    }

    return cstr(found.eco + "\n" + found.name + "\n" + to_string(bookMoves));
}

// splits string based on character (delimiter)
vector<string> split(const string &str, char delimter)
{
    stringstream ss(str);
    string token;
    vector<string> result;

    while (getline(ss, token, delimter))
    {
        result.push_back(token);
    }

    return result;
}

// convert std::string object to char* for js
inline const char *cstr(const std::string &message)
{
    char *cstr = new char[message.length() + 1];
    strcpy(cstr, message.c_str());
    return cstr;
}

// load openings from full.tsv
const vector<Opening> load_openings(void)
{

    ifstream f("full.tsv");

    vector<Opening> openings;

    if (f.fail())
    {
        cerr << "Error opening file!" << endl;
    }

    Opening o;
    string line;

    while (getline(f, line))
    {

        vector<string> info = split(line, '\t');

        o.eco = info[0];
        o.name = info[1];

        vector<string> splitMoves = split(info[2], ' ');
        vector<string> moves;

        for (int i = 0; i < splitMoves.size(); i++)
        {
            if (i % 3 != 0)
            {
                moves.push_back(splitMoves[i]);
            }
        }

        o.moves = moves;
        openings.push_back(o);
    }

    f.close();

    return openings;
}
