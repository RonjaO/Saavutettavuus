#!/bin/bash

for pala in index johdanto perushtml syvemmalle sisalto; do
    cat alku.part luennot/$pala.part > $pala.html
done
