### Build

```sh
emcc -O3 openings.cpp -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']" --embed-file=openings.tsv -o openings.js
```
