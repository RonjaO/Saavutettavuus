#!/bin/bash

for pala in index johdanto perushtml syvemmalle sisalto kaytettavyys mallivastaukset; do
    cat alku.part luennot/$pala.part > $pala.html
done
