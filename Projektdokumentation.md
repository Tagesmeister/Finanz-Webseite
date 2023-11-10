# Finanz-Webseite

Gruppe: Pascal Oestrich, Stefan Jesenko

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   | ✍️ Jedes Mal, wenn Sie an dem Projekt arbeiten, fügen Sie hier eine neue Zeile ein und beschreiben in *einem* Satz, was Sie erreicht haben. |
|       | ...     |                                                              |
|       | 1.0.0   |                                                              |

## 1 Informieren

### 1.1 Ihr Projekt

Wir machen eine dynmaische Onepage Webseite, indem man sein Finanzbudget berechnen lassen kann.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |     Muss            |  Funktionalität    | Ich als User möchte, dass ich meine Finzen in Schreibfälder eintragen kann, damit das Programm meine Zahlen hat, um damit zu rechnen. |
| 2  |        Muss         |  Funktionalität    |     Ich als User möchte, dass meine eingegebene Zahlen zusammen berechnet werden, sodass mein Budget ausgegeben wird.                               |
| 3  |        Muss         |   Funktionalität   |     Ich als User möchte, dass die Webseite Dynamisch ist und beim Aufrufen immer ohne Zahlen erscheint, damit ich direkt meine Zahlen eingeben kann ohne sie zuerst zu löschen.                               |
| 4  |         Muss        |  Qualität    |     Ich als User möchte, dass die Webseite schlicht und einfach gestaltet ist, damit ich ohne verwirung die Webseite verwenden kann.                               |
| 5  |          Muss       |  Qualität    | Ich als User möchte, dass ich für jedes Konto ein eigenes Feld zum eingeben habe, damit ich alles ich im überblick behalten kann.                                   |
| 6  |      Muss           |  Qualität     | Ich als User möchte, dass mein ausgerechneter Budget in einem eingenem Feld ausgegeben wird, damit das Resultat klar angezeigt wird.                                   |
| 7  |      Muss           |  Rand     | Ich als User möchte, dass die Webseite dynamisch ist und somit mit Javascript erstellt wurde.                             |


### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Webseite aufgerufen / gestartet + Eingabefeld für Konto "Bank"            |    543     |      Die Zahl wird in das Feld eingetragen.             |
| 2.1  |   Webseite aufgerufen / gestartet + Alle Zahlen in die Felder eingegeben          |   "Rechnen"      |     Das berechnete Budget erscheint im Budgetfeld.              |
| 3.1  |    Webseite wird aufgerufen / gestartet        |   *nichts*     |      Die Webseite erscheint mit leeren Eingabefelder.             |
| 4.1  | Webseite aufgerufen / gestartet         |    *nichts*     |    Die Eingabefelder erscheinen nacheinander / übereinander.            |
| 5.1  | Webseite aufgerufen / gestartet            |    *nichts*     |      Die Eingabefelder mit der Beschriftung von jedem Konto erscheinen nacheinander / übereinander.             |
| 6.1  |    Webseite wird aufgerufen / gestartet        |   Drücke den Button "Rechnen"     |      Das berechnete Budget wird in dem Budgetfeld ausgegeben.             |
| 7.1  |    *nichts*         |   *nichts*     |      *Die Webseite ist mit Javascript erstellt worden.*             |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

### 1.4 Diagramme

✍️ Hier können Sie PAPs, Use Case- und Gantt-Diagramme oder Ähnliches einfügen.

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |       |           |              |               |
| ...  |       |           |              |               |

Total: 

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

### 5.2 Exploratives Testen

| BR-№ | Ausgangslage | Eingabe | Erwartete Ausgabe | Tatsächliche Ausgabe |
| ---- | ------------ | ------- | ----------------- | -------------------- |
| I    |              |         |                   |                      |
| ...  |              |         |                   |                      |

✍️ Verwenden Sie römische Ziffern für Ihre Bug Reports, also I, II, III, IV etc.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.

