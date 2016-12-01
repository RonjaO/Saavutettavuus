#!/bin/bash

for pala in index johdanto perushtml syvemmalle; do
    cat alku.part luennot/$pala.part > $pala.html
done
