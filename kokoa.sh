#!/bin/bash

for pala in index johdanto; do
    cat alku.part luennot/$pala.part > $pala.html
done
