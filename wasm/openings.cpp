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
    int bookMoves;
    string posFen;
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
    const vector<string> moves = split(str, '\t');
    const vector<Opening> openings = load_openings();

    Opening found;
    found.bookMoves = 0;

    for (Opening opening : openings)
    {
        if (opening.posFen == moves[opening.bookMoves - 1] &&
            opening.bookMoves > found.bookMoves)
        {
            found = opening;
        }
    }

    return cstr(found.eco + "\n" + found.name + "\n" +
                to_string(found.bookMoves) + "\n");
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

// load openings from openings.tsv
const vector<Opening> load_openings(void)
{

    ifstream f("openings.tsv");

    vector<Opening> openings;

    if (f.fail())
    {
        cerr << "Error opening file!" << endl;
    }

    Opening opening;
    string line;

    while (getline(f, line))
    {

        vector<string> info = split(line, '\t');

        opening.eco = info[0];
        opening.name = info[1];
        opening.bookMoves = split(info[3], ' ').size();
        opening.posFen = info[4];
        openings.push_back(opening);
    }

    f.close();

    return openings;
}
