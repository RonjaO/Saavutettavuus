#!/bin/bash

for pala in index johdanto perushtml; do
    cat alku.part luennot/$pala.part > $pala.html
done
