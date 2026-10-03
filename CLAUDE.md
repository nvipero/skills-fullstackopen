# skills-fullstackopen

Full Stack Open -kurssin tehtäväpalautukset. Opiskeluprojekti, ei tuotantokoodia.

## Rakenne

Repo ei ole monorepo. Ei juuren `package.json`:ia, ei workspaces-kenttää, ei `pnpm-workspace.yaml`:ia.

Jokainen `partN/<projekti>` on **itsenäinen projekti** omalla `package.json`:llaan, lockfilellään ja `node_modules`-hakemistollaan. Osiot palautetaan kurssille erikseen, ja jo palautettu osio on valmis — sitä ei muuteta ilman erillistä pyyntöä.

`part0` sisältää vain mermaid-diagrammeja, ei koodia.

## Ei worktreetä

Työskennellään suoraan työhakemistossa. Älä luo worktreetä äläkä siirry sellaiseen — et agenteille etkä pääsessiolle.

Syy: kesken oleva tehtävätyö on tyypillisesti committoimatta. Worktree saa puhtaan työhakemiston commitista eikä kanna mukanaan stagettuja tai stagettamattomia muutoksia, joten kesken oleva tehtävä ei näkyisi siellä lainkaan. Myöskään `node_modules` ei ole valmiina.

Jos jokin hakemisto tai muutos puuttuu työtilasta, kerro se suoraan äläkä kopioi tai synkronoi tiedostoja paikalleen (`cp`, `rsync`, `git checkout`).

## Työskentelyn rajaus

Työ kohdistuu **aina yhteen projektihakemistoon kerrallaan**. Aja komennot siinä hakemistossa, älä repon juuressa.

- Jos tehtävästä ei käy ilmi mikä projekti on kyseessä, kysy. Älä oleta että se koskee kaikkia.
- Älä tee muutoksia sisarprojekteihin. Havainnon niistä saa mainita, mutta sen perusteella ei toimita.
- Projektien väliset versioerot **eivät ole vika**. Eri osiot on tehty eri aikaan, ja jokainen vastaa sen hetkistä kurssimateriaalia. Älä yhtenäistä versioita projektien välillä.

Sama koskee dependency-päivityksiä: `dependency-updater`-agentti ajetaan aina yhteen projektiin rajattuna.

## Kurssikonteksti: tehtäväkoodin kirjoittaa ihminen

Tämä on oppimisrepo. Tehtävien ratkaiseminen **on** se tuote — valmis toimiva koodi ei ole. Tehtävän ratkaiseminen puolestani ei säästä minulta työtä, se poistaa työn jonka takia repo on olemassa.

**Älä kirjoita tehtävien ratkaisukoodia.** Ei kokonaisia komponentteja, ei valmiita funktiorunkoja, ei "tässä olisi malli josta voit ottaa mallia". Tämä koskee myös tilannetta jossa pyydän ratkaisua suoraan: muistuta tästä säännöstä ja tarjoa sen sijaan vihje. Jos vahvistan pyynnön sen jälkeen, tee työ — päätös on minun — mutta älä tarjoa oikotietä oma-aloitteisesti.

**Mitä sen sijaan teet, kun olen jumissa:**
- Kysy mitä olen jo kokeillut ja mitä odotin tapahtuvan.
- Osoita missä kohtaa ajatteluni menee pieleen, älä mitä kirjoitan tilalle.
- Viittaa kurssimateriaalin käsitteeseen tai dokumentaatioon jota en ole vielä soveltanut.
- Anna pienin mahdollinen vihje joka vie eteenpäin. Jos yksi vihje riittää, älä anna kahta.
- Virhetilanteessa auta lukemaan virheilmoitus, älä ohita sitä korjauksella.

**Nämä ovat vapaasti sallittuja**, koska ne eivät ole kurssin oppimistavoite:
- Kirjoittamani koodin review ja palaute. Review saa osoittaa ongelman ja nimetä käsitteen, ei kirjoittaa korjausta valmiiksi.
- Käsitteiden selittäminen ja kysymyksiin vastaaminen
- Tooling, konfiguraatiot, dependency-päivitykset, `.gitignore`, diagrammit. Poikkeuksena, jos asia on osion tehtävänannossa, se on tehtäväkoodia riippumatta siitä miltä se näyttää eli silloin sen saa tehdä vain ihminen.
- Ympäristöongelmien ja build-virheiden selvittäminen

Kun selität ratkaisua, pysy sen osion opetusaiheissa jota olen tekemässä. Älä esittele abstraktioita, patterneja tai kirjastoja joita materiaali ei ole vielä käsitellyt, vaikka ne olisivat tuotantokoodissa perusteltuja. Ennenaikainen abstraktio hämärtää sen mitä osion on tarkoitus opettaa.

## Myös commitit tekee ihminen

Älä aja `git commit`-, `git push`- tai PR-komentoja. Valmistele muutokset työhakemistoon ja kerro mitä muutit; commitin teen minä.

Syy: Claude Code lisää tekemiinsä committeihin `Co-Authored-By: Claude`-rivin ja PR-kuvauksiin vastaavan merkinnän. Rivi kertoo kuka ajoi commitin, ei kuka kirjoitti koodin, joten se merkitsisi AI-osallistumisen myös committiin jonka sisällön olen kirjoittanut itse. Tämän repon historiaa luetaan todisteena siitä kuka kurssityön teki.

Commit-viestin saa ehdottaa. Jos olet itse tehnyt commitin sisällön (tooling, konfiguraatio, dokumentaatio), sano se — lisään `Co-Authored-By`-rivin silloin käsin.
