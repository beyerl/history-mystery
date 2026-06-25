// content/questions.js — Art Music Mystery quiz content for the QuizEngine. 300 landmark works of Western art (classical) music spanning the medieval era to the present day.
// Pieces are ordered by year. Each carries verified, embeddable YouTube video
// ids (with fallbacks) and its era/subgenre info. Video ids were gathered by
// searching YouTube and verified one-by-one via the oEmbed endpoint (HTTP 200 =
// public AND embeddable), so the hidden player can stream them.
// Question contract: { title, year, description, artist, videos[], genre{title,description} }.
export const questions = [
  {
    "title": "O Euchari (antiphon)",
    "artist": "Hildegard von Bingen",
    "year": 1150,
    "description": "Hildegard von Bingen",
    "videos": [
      "HRDI_rJr32E",
      "H9yuWUsVwlw",
      "NC6hXhD2OBE"
    ],
    "genre": {
      "title": "Medieval (plainchant / monophony)",
      "description": "A soaring monophonic antiphon from Hildegard's collection Symphonia armonie celestium revelationum. Its wide melodic range and ecstatic ornamentation typify her highly individual sacred song."
    }
  },
  {
    "title": "Columba aspexit (sequence)",
    "artist": "Hildegard von Bingen",
    "year": 1155,
    "description": "Hildegard von Bingen",
    "videos": [
      "BpmMeIQywYc",
      "J8d7EEM-HR8",
      "puAOTgq3Wkc"
    ],
    "genre": {
      "title": "Medieval (plainchant sequence)",
      "description": "A radiant Latin sequence praising St Maximin, among Hildegard's most recorded chants. It exemplifies the rhapsodic, free-flowing monody of the 12th-century visionary abbess."
    }
  },
  {
    "title": "Congaudeant catholici (Codex Calixtinus)",
    "artist": "Anonymous",
    "year": 1160,
    "description": "Anonymous",
    "videos": [
      "OgAjmFqRfRQ",
      "0-wrUexIRXg",
      "UqaP83h8DmM"
    ],
    "genre": {
      "title": "Medieval (early polyphony / Calixtinus)",
      "description": "From the 12th-century Codex Calixtinus tied to the pilgrimage to Santiago de Compostela, often cited as one of the earliest pieces of notated three-voice polyphony."
    }
  },
  {
    "title": "Can vei la lauzeta mover",
    "artist": "Bernart de Ventadorn",
    "year": 1170,
    "description": "Bernart de Ventadorn",
    "videos": [
      "jkp2GHBRUiQ",
      "1R1FXjDn7Yo",
      "I9gzaauL67s"
    ],
    "genre": {
      "title": "Medieval (troubadour canso)",
      "description": "One of the most celebrated troubadour love songs in Old Occitan, by the master Bernart de Ventadorn. Its lark imagery and refined fin'amor set the model for courtly secular monody."
    }
  },
  {
    "title": "Viderunt omnes (organum duplum)",
    "artist": "Léonin",
    "year": 1175,
    "description": "Léonin",
    "videos": [
      "_p9WQlyVPrA",
      "3oaRM1uDsw8",
      "98dkUTvRKkw"
    ],
    "genre": {
      "title": "Medieval (Notre-Dame organum)",
      "description": "A two-voice organum from the Magnus liber organi of the Notre-Dame school, attributed to Léonin. It stretches the chant tenor into long sustained tones beneath a florid upper voice."
    }
  },
  {
    "title": "Viderunt omnes (organum quadruplum)",
    "artist": "Pérotin",
    "year": 1198,
    "description": "Pérotin",
    "videos": [
      "aySwfcRaOZM",
      "3oaRM1uDsw8",
      "KA6oq_UYbyA"
    ],
    "genre": {
      "title": "Medieval (Notre-Dame organum quadruplum)",
      "description": "Pérotin's monumental four-voice setting for the Notre-Dame liturgy, a landmark of rhythmic, modally organized high-medieval polyphony. Its shimmering upper voices are widely recorded."
    }
  },
  {
    "title": "Sederunt principes (organum quadruplum)",
    "artist": "Pérotin",
    "year": 1199,
    "description": "Pérotin",
    "videos": [
      "EMyWnCf2Anc",
      "_p9WQlyVPrA",
      "ngCRm7uLirA"
    ],
    "genre": {
      "title": "Medieval (Notre-Dame organum quadruplum)",
      "description": "Another towering four-voice organum by Pérotin, built on a slow chant tenor with cascading rhythmic patterns above. A defining achievement of the Parisian Ars Antiqua."
    }
  },
  {
    "title": "A chantar m'er de so q'ieu no volria",
    "artist": "Comtessa de Dia (Beatriz de Dia)",
    "year": 1200,
    "description": "Comtessa de Dia (Beatriz de Dia)",
    "videos": [
      "5Zah4VWPiNE",
      "m2B00v5pD3k",
      "0aZcf5S9HGk"
    ],
    "genre": {
      "title": "Medieval (trobairitz canso)",
      "description": "The only surviving troubadour song by a woman (a trobairitz) preserved with its melody. This Old Occitan canso of betrayed love is a precious witness to female courtly composition."
    }
  },
  {
    "title": "Quant je parti / Tuo (early motet)",
    "artist": "Anonymous",
    "year": 1250,
    "description": "Anonymous",
    "videos": [
      "o4G2eD9iHGc",
      "ftXU-VwT24g",
      "nsDUIJg6Ikw"
    ],
    "genre": {
      "title": "Medieval (Ars Antiqua motet)",
      "description": "A representative 13th-century French motet from the Montpellier Codex tradition, layering distinct texts and melodies over a chant tenor. The motet became the era's most sophisticated polyphonic form."
    }
  },
  {
    "title": "Sumer is icumen in (rota)",
    "artist": "Anonymous",
    "year": 1260,
    "description": "Anonymous",
    "videos": [
      "nyLXPU1xhYA",
      "jp0ICrOItZU",
      "7uhJzYff2zM"
    ],
    "genre": {
      "title": "Medieval (English rota / canon)",
      "description": "A Middle English round for six voices, famed as the oldest known canon and rota. Its joyful summer text and pes ostinato make it a singular monument of medieval English music."
    }
  },
  {
    "title": "Cantiga de Santa Maria No. 100 'Santa Maria, strela do dia'",
    "artist": "Alfonso X el Sabio (attrib.)",
    "year": 1280,
    "description": "Alfonso X el Sabio (attrib.)",
    "videos": [
      "hCGyDmclpS8",
      "HuPLZdfteEY",
      "opEXfcsl2YQ"
    ],
    "genre": {
      "title": "Medieval (Cantiga / Galician-Portuguese song)",
      "description": "From the great 13th-century collection of Marian songs compiled at the court of Alfonso X of Castile. Its dance-like virelai form and vivid devotion are widely beloved and recorded."
    }
  },
  {
    "title": "Garrit Gallus / In nova fert (Roman de Fauvel motet)",
    "artist": "Philippe de Vitry",
    "year": 1316,
    "description": "Philippe de Vitry",
    "videos": [
      "XSsmcXyQ3fE",
      "xyty4VfzyRs",
      "GscjDiMXgbI"
    ],
    "genre": {
      "title": "Medieval (Ars Nova motet)",
      "description": "An isorhythmic motet interpolated into the Roman de Fauvel, attributed to Philippe de Vitry, theorist of the Ars Nova. Its political allegory and rhythmic structure herald the new 14th-century style."
    }
  },
  {
    "title": "Douce dame jolie (virelai)",
    "artist": "Guillaume de Machaut",
    "year": 1350,
    "description": "Guillaume de Machaut",
    "videos": [
      "tJS-HZWB3wE",
      "1kM5qJi2v3c",
      "QWNKf4uq1mI"
    ],
    "genre": {
      "title": "Medieval (Ars Nova virelai)",
      "description": "Machaut's most famous monophonic virelai, an exquisite courtly love song in the fixed-form tradition. Its haunting melody has made it one of the most recorded of all medieval secular pieces."
    }
  },
  {
    "title": "Messe de Nostre Dame: Kyrie",
    "artist": "Guillaume de Machaut",
    "year": 1360,
    "description": "Guillaume de Machaut",
    "videos": [
      "lOVsY1rxJB8",
      "Y47JdUI_PhE",
      "27ol_QffDhE"
    ],
    "genre": {
      "title": "Medieval (Ars Nova Mass)",
      "description": "The Kyrie of Machaut's Mass, the earliest complete polyphonic setting of the Ordinary by a single named composer. A cornerstone of 14th-century sacred music."
    }
  },
  {
    "title": "Messe de Nostre Dame: Agnus Dei",
    "artist": "Guillaume de Machaut",
    "year": 1361,
    "description": "Guillaume de Machaut",
    "videos": [
      "AKpexxzR4Ak",
      "ApX4DJvPpEg",
      "tiLLOLwGG3g"
    ],
    "genre": {
      "title": "Medieval (Ars Nova Mass)",
      "description": "The Agnus Dei from Machaut's unified four-voice Mass, prized for its rich isorhythmic and hocketing textures. The whole work stands as the supreme monument of Ars Nova sacred polyphony."
    }
  },
  {
    "title": "Quant en moy / Amour et biaute / Amara valde (motet)",
    "artist": "Guillaume de Machaut",
    "year": 1365,
    "description": "Guillaume de Machaut",
    "videos": [
      "77t_bjYSDKA",
      "5Ib_9bxmyt4",
      "-N43Bv8wkDs"
    ],
    "genre": {
      "title": "Medieval (Ars Nova isorhythmic motet)",
      "description": "A multi-texted isorhythmic motet by Machaut combining French love poetry over a Latin chant tenor. It shows the intricate rhythmic architecture at the heart of the Ars Nova."
    }
  },
  {
    "title": "Ecco la primavera (ballata)",
    "artist": "Francesco Landini",
    "year": 1375,
    "description": "Francesco Landini",
    "videos": [
      "8aw7Wvivsv4",
      "nHXtzNxzOYs",
      "63DuItyH7KM"
    ],
    "genre": {
      "title": "Medieval (Italian Trecento ballata)",
      "description": "A sparkling spring ballata by the blind Florentine organist Landini, the central figure of the Italian Trecento. Its sweet two-voice writing typifies the lyrical Italian Ars Nova."
    }
  },
  {
    "title": "Gran piant'agli ochi (ballata)",
    "artist": "Francesco Landini",
    "year": 1380,
    "description": "Francesco Landini",
    "videos": [
      "m4xbSH12lSE",
      "P6aDMdG0MSQ",
      "egENcimawh4"
    ],
    "genre": {
      "title": "Medieval (Italian Trecento ballata)",
      "description": "A poignant three-voice ballata by Landini, famed for the cadential 'Landini' suspension that bears his name. A high point of refined Trecento secular polyphony."
    }
  },
  {
    "title": "Belle, bonne, sage (rondeau)",
    "artist": "Baude Cordier",
    "year": 1390,
    "description": "Baude Cordier",
    "videos": [
      "ZcOtQNR8lzE",
      "aui7UUDqoa4",
      "iaeOWdXM4Pg"
    ],
    "genre": {
      "title": "Medieval (Ars Subtilior rondeau)",
      "description": "A heart-shaped notated rondeau by Baude Cordier, an emblem of the rhythmically and visually intricate Ars Subtilior. Its eye-music and complex syncopations close the medieval era in dazzling style."
    }
  },
  {
    "title": "Sus une fontayne (ballade)",
    "artist": "Johannes Ciconia",
    "year": 1400,
    "description": "Johannes Ciconia",
    "videos": [
      "oub1t9ftbLA",
      "F3D-0QeeuV4",
      "8ZbVc3Ayobs"
    ],
    "genre": {
      "title": "Medieval (Ars Subtilior ballade)",
      "description": "An elaborate French-texted ballade by the Liège-born, Italy-based Ciconia, brimming with Ars Subtilior rhythmic complexity. It bridges the late Middle Ages toward the early Renaissance."
    }
  },
  {
    "title": "De plus en plus (chanson)",
    "artist": "Gilles Binchois",
    "year": 1425,
    "description": "Gilles Binchois",
    "videos": [
      "U8UTiR7nlVU",
      "2Hgi2IR7Wj0",
      "MITDlkxmUgI"
    ],
    "genre": {
      "title": "Early Renaissance (Burgundian chanson)",
      "description": "A refined rondeau by Binchois, the leading songwriter of the Burgundian court. Its graceful melody typifies the lyrical, courtly love-song tradition of the early Renaissance."
    }
  },
  {
    "title": "Se la face ay pale (chanson)",
    "artist": "Guillaume Dufay",
    "year": 1434,
    "description": "Guillaume Dufay",
    "videos": [
      "0BJ-9TVqYC4",
      "_EMbGN2jeno",
      "_SLRDmeP1gM"
    ],
    "genre": {
      "title": "Early Renaissance (Burgundian chanson)",
      "description": "A celebrated Burgundian secular chanson whose melody Dufay later reused as the cantus firmus for a famous mass. It exemplifies the elegant three-voice song style of the 15th century."
    }
  },
  {
    "title": "Nuper rosarum flores",
    "artist": "Guillaume Dufay",
    "year": 1436,
    "description": "Guillaume Dufay",
    "videos": [
      "OcVY7jCULSY",
      "naap4CWanv0",
      "_dV5b8AuLHg"
    ],
    "genre": {
      "title": "Early Renaissance (isorhythmic motet)",
      "description": "An isorhythmic motet composed for the consecration of Florence Cathedral's dome by Brunelleschi. Its proportions are often linked to the cathedral's architecture, marking a high point of the early Franco-Flemish style."
    }
  },
  {
    "title": "Missa Caput",
    "artist": "Johannes Ockeghem",
    "year": 1450,
    "description": "Johannes Ockeghem",
    "videos": [
      "pHag1AyF6Kc",
      "6dVPu71D8VI",
      "vBZ-pmN5T0A"
    ],
    "genre": {
      "title": "Renaissance polyphony (cantus firmus mass)",
      "description": "A cyclic cantus firmus mass built on a melisma from a Sarum antiphon, among the earliest English-derived 'Caput' masses on the continent. It showcases Ockeghem's flowing, seamless counterpoint."
    }
  },
  {
    "title": "Missa prolationum",
    "artist": "Johannes Ockeghem",
    "year": 1475,
    "description": "Johannes Ockeghem",
    "videos": [
      "nJwFJc0rZH8",
      "ZWLsLAujZzI",
      "_t-rAsC9IWc"
    ],
    "genre": {
      "title": "Renaissance polyphony (mensuration mass)",
      "description": "A tour de force of mensuration canon in which two voices are derived from a single notated line at different speeds. It is one of the most ingenious contrapuntal achievements of the era."
    }
  },
  {
    "title": "Ave Maria... virgo serena",
    "artist": "Josquin des Prez",
    "year": 1485,
    "description": "Josquin des Prez",
    "videos": [
      "qXMZoKofu7g",
      "fLGE3EDjirg",
      "R9QkdoAN4LM"
    ],
    "genre": {
      "title": "Renaissance polyphony (motet)",
      "description": "Perhaps the most celebrated motet of the Renaissance, opening with luminous imitative entries on the Ave Maria text. It became a model of balanced, expressive vocal polyphony."
    }
  },
  {
    "title": "Missa Pange lingua",
    "artist": "Josquin des Prez",
    "year": 1515,
    "description": "Josquin des Prez",
    "videos": [
      "vlB1HR4BgUg",
      "_zxnFVWZVcE",
      "g50eV39uqqg"
    ],
    "genre": {
      "title": "Renaissance polyphony (paraphrase mass)",
      "description": "A late paraphrase mass derived from the hymn Pange lingua, dissolving the chant into all voices through pervasive imitation. It is regarded as a summit of Josquin's mature style."
    }
  },
  {
    "title": "Mille regretz (chanson)",
    "artist": "Josquin des Prez",
    "year": 1520,
    "description": "Josquin des Prez",
    "videos": [
      "107gP2moTKM",
      "dkfVzCZ68_Q",
      "sHmvyCgcAwk"
    ],
    "genre": {
      "title": "Renaissance polyphony (chanson)",
      "description": "A melancholy four-voice chanson, famously associated with Emperor Charles V. Its plaintive 'song of regret' became one of the most beloved secular pieces of the age."
    }
  },
  {
    "title": "La guerre (La bataille de Marignan)",
    "artist": "Clement Janequin",
    "year": 1528,
    "description": "Clement Janequin",
    "videos": [
      "CSD2NCKsEuQ",
      "JY2rLfhJLmY",
      "8cw1-3YGULs"
    ],
    "genre": {
      "title": "Renaissance polyphony (programmatic chanson)",
      "description": "A vivid programmatic Parisian chanson depicting the sounds of battle through onomatopoeic word-painting. It became the model for the French descriptive chanson genre."
    }
  },
  {
    "title": "Tant que vivray (chanson)",
    "artist": "Claudin de Sermisy",
    "year": 1530,
    "description": "Claudin de Sermisy",
    "videos": [
      "-ZL5515g61I",
      "yD7qRFELl8w",
      "xxHkPm4TP5c"
    ],
    "genre": {
      "title": "Renaissance polyphony (Parisian chanson)",
      "description": "A graceful, syllabic Parisian chanson set to a poem by Clement Marot. Its tuneful homophony epitomizes the lighter French song style of the 1530s."
    }
  },
  {
    "title": "Il bianco e dolce cigno (madrigal)",
    "artist": "Jacques Arcadelt",
    "year": 1538,
    "description": "Jacques Arcadelt",
    "videos": [
      "juAw5n6rRUc",
      "5Da_bVtMo-o",
      "S2CYLysz_-c"
    ],
    "genre": {
      "title": "Renaissance polyphony (Italian madrigal)",
      "description": "One of the most famous early Italian madrigals, gently word-painting the 'white and sweet swan' of the poem. It defined the elegant, four-voice madrigal of the 1530s."
    }
  },
  {
    "title": "Vexilla regis / Sicut lilium",
    "artist": "Cristobal de Morales",
    "year": 1540,
    "description": "Cristobal de Morales",
    "videos": [
      "sK4vDHlKWik",
      "DxezcOzchoI",
      "7p6eEOe3HfQ"
    ],
    "genre": {
      "title": "Renaissance polyphony (motet)",
      "description": "Morales was the leading Spanish composer before Victoria, and his sacred motets circulated widely across Europe. His grave, dignified polyphony marks the flowering of the Iberian school."
    }
  },
  {
    "title": "If ye love me",
    "artist": "Thomas Tallis",
    "year": 1549,
    "description": "Thomas Tallis",
    "videos": [
      "Y1WwNSfCom8",
      "HI5Y9l2NHIo",
      "asY-h_QUq9U"
    ],
    "genre": {
      "title": "Renaissance polyphony (English anthem)",
      "description": "A short, clear English-language anthem written for the new Edwardian Protestant liturgy. Its restrained, word-focused polyphony shaped the Anglican choral tradition."
    }
  },
  {
    "title": "Missa Papae Marcelli",
    "artist": "Giovanni Pierluigi da Palestrina",
    "year": 1562,
    "description": "Giovanni Pierluigi da Palestrina",
    "videos": [
      "3n8XdKkrqgo",
      "QdZ_7dFbl1A",
      "8Qx2lMaMsl8"
    ],
    "genre": {
      "title": "Renaissance polyphony (mass)",
      "description": "The most celebrated mass of the Counter-Reformation, legendarily said to have proven that polyphony could keep sacred texts intelligible. It became the textbook model of pure, balanced counterpoint."
    }
  },
  {
    "title": "Spem in alium",
    "artist": "Thomas Tallis",
    "year": 1570,
    "description": "Thomas Tallis",
    "videos": [
      "Z3FJxDsa-5k",
      "8Qx2lMaMsl8",
      "QmH1nZSGIyY"
    ],
    "genre": {
      "title": "Renaissance polyphony (40-voice motet)",
      "description": "A monumental motet for forty independent voices in eight five-part choirs, unmatched in its scale. It is the supreme English achievement in Renaissance polychoral writing."
    }
  },
  {
    "title": "O magnum mysterium",
    "artist": "Tomas Luis de Victoria",
    "year": 1572,
    "description": "Tomas Luis de Victoria",
    "videos": [
      "9xPh-fXYAc4",
      "PzmkeJUb3uc",
      "cj8_2UiE-ew"
    ],
    "genre": {
      "title": "Renaissance polyphony (motet)",
      "description": "A radiant Christmas motet by the greatest Spanish Renaissance composer, marvelling at the mystery of the Nativity. Its mystical fervor exemplifies the Iberian Counter-Reformation style."
    }
  },
  {
    "title": "Sicut cervus",
    "artist": "Giovanni Pierluigi da Palestrina",
    "year": 1581,
    "description": "Giovanni Pierluigi da Palestrina",
    "videos": [
      "0yd5EE0hAB8",
      "4HWpdFAh0eU",
      "9xPh-fXYAc4"
    ],
    "genre": {
      "title": "Renaissance polyphony (motet)",
      "description": "A serene four-voice motet on Psalm 42, prized for its smooth, arching imitative lines. It remains one of the most widely sung examples of Palestrina's polished style."
    }
  },
  {
    "title": "Matona mia cara",
    "artist": "Orlande de Lassus",
    "year": 1581,
    "description": "Orlande de Lassus",
    "videos": [
      "wl51iST98hA",
      "hswJaD3mBUI",
      "x3c3a-XBaPg"
    ],
    "genre": {
      "title": "Renaissance polyphony (villanella)",
      "description": "A comic Italian villanella poking fun at a German soldier wooing in broken Italian. It shows the witty, light-hearted secular side of the prolific Franco-Flemish master."
    }
  },
  {
    "title": "Mass for Four Voices",
    "artist": "William Byrd",
    "year": 1593,
    "description": "William Byrd",
    "videos": [
      "9yT0kLA6DHA",
      "VXeT2HWpwc4",
      "JEoktElPm5c"
    ],
    "genre": {
      "title": "Late Renaissance (mass)",
      "description": "A compact, deeply felt setting of the Ordinary written for recusant English Catholics worshipping in secret. It blends continental polyphony with a personal, urgent expressivity."
    }
  },
  {
    "title": "Lagrime di San Pietro",
    "artist": "Orlande de Lassus",
    "year": 1594,
    "description": "Orlande de Lassus",
    "videos": [
      "8URQ0ZElT0Q",
      "TQV9E4e5dWo",
      "ysOI5cwLXAQ"
    ],
    "genre": {
      "title": "Late Renaissance (spiritual madrigal cycle)",
      "description": "A profound cycle of twenty spiritual madrigals plus a motet, completed weeks before Lassus's death. Its intense chromaticism and penitential mood form a moving artistic testament."
    }
  },
  {
    "title": "Now is the Month of Maying",
    "artist": "Thomas Morley",
    "year": 1595,
    "description": "Thomas Morley",
    "videos": [
      "g_jWzIemWBE",
      "9NPFUz-kIu4",
      "2V0Ym1glLms"
    ],
    "genre": {
      "title": "Late Renaissance (English ballett)",
      "description": "A buoyant springtime ballett with a dance-like 'fa la la' refrain, the best-known English madrigal of all. It epitomizes the cheerful Elizabethan secular vocal style."
    }
  },
  {
    "title": "Flow my tears (Lachrimae)",
    "artist": "John Dowland",
    "year": 1600,
    "description": "John Dowland",
    "videos": [
      "8DLaLgi9AKo",
      "M1aa_W-ddXo",
      "FHk6v6LvACA"
    ],
    "genre": {
      "title": "Late Renaissance (lute song / ayre)",
      "description": "The most famous English lute song, built on a falling 'teardrop' melody that became a Europe-wide hit. Its exquisite melancholy defines the Elizabethan ayre."
    }
  },
  {
    "title": "As Vesta Was from Latmos Hill Descending",
    "artist": "Thomas Weelkes",
    "year": 1601,
    "description": "Thomas Weelkes",
    "videos": [
      "x5sF28RN5r0",
      "95DJ7oqTWK8",
      "9LLDwTNj6f4"
    ],
    "genre": {
      "title": "Late Renaissance (English madrigal)",
      "description": "A dazzling madrigal from The Triumphs of Oriana with vivid word-painting on 'descending', 'ascending' and 'two by two'. It is a showpiece of English madrigalian text illustration."
    }
  },
  {
    "title": "Il bianco e dolce cigno... Ohime, se tanto amate (Book IV madrigals)",
    "artist": "Claudio Monteverdi",
    "year": 1603,
    "description": "Claudio Monteverdi",
    "videos": [
      "YIilzY5FIh0",
      "sm4TeLzFIaI",
      "BlkduD0yOzc"
    ],
    "genre": {
      "title": "Late Renaissance (madrigal)",
      "description": "From Monteverdi's fourth book, 'Ohime, se tanto amate' is an intensely affective madrigal sighing the word ohime through descending figures. It captures the late-Renaissance turn toward word-driven emotion."
    }
  },
  {
    "title": "Officium Defunctorum (Requiem 1605)",
    "artist": "Tomas Luis de Victoria",
    "year": 1603,
    "description": "Tomas Luis de Victoria",
    "videos": [
      "RI_U6o7tAzk",
      "BDdZZgDJ5Tw",
      "DWyG4wqU0Tw"
    ],
    "genre": {
      "title": "Late Renaissance (Requiem mass)",
      "description": "Victoria's six-voice Requiem, composed for the funeral rites of the Dowager Empress Maria. Often considered his masterpiece, it is a sublime farewell to Renaissance sacred polyphony."
    }
  },
  {
    "title": "Cruda Amarilli (madrigal)",
    "artist": "Claudio Monteverdi",
    "year": 1605,
    "description": "Claudio Monteverdi",
    "videos": [
      "bKTQQ28sSNo",
      "u0qkP1kvEdQ",
      "Q_o1xDJyiOU"
    ],
    "genre": {
      "title": "Late Renaissance (madrigal, seconda prattica)",
      "description": "The opening madrigal of Monteverdi's fifth book, whose bold dissonances ignited a famous controversy with the theorist Artusi. It heralds the expressive 'second practice' bridging to the Baroque."
    }
  },
  {
    "title": "Ave verum corpus",
    "artist": "William Byrd",
    "year": 1605,
    "description": "William Byrd",
    "videos": [
      "Z2ckGcpx6xI",
      "8Qx2lMaMsl8",
      "wRm0mS6UrH8"
    ],
    "genre": {
      "title": "Late Renaissance (Latin motet)",
      "description": "An intimate, intensely expressive motet from Byrd's Gradualia, written for clandestine Catholic worship in Protestant England. Its aching suspensions make it a treasured devotional miniature."
    }
  },
  {
    "title": "L'Orfeo: Toccata (Opening)",
    "artist": "Claudio Monteverdi",
    "year": 1607,
    "description": "Claudio Monteverdi",
    "videos": [
      "mjpFi9bn1do",
      "zz6OwhE322Q",
      "jUep3sqe35o"
    ],
    "genre": {
      "title": "Early Baroque opera",
      "description": "One of the earliest operas still regularly performed, L'Orfeo fused recitative, aria and instrumental ritornellos. Its brass toccata is often cited as the first true operatic overture."
    }
  },
  {
    "title": "Vespro della Beata Vergine (Vespers of 1610): Dixit Dominus",
    "artist": "Claudio Monteverdi",
    "year": 1610,
    "description": "Claudio Monteverdi",
    "videos": [
      "IiwKjNpiC_o",
      "QahnveGrxLw",
      "qUX9eJ0kWqQ"
    ],
    "genre": {
      "title": "Early Baroque sacred music",
      "description": "A monumental setting of the Marian Vespers blending stile antico polyphony with the new concertato style. It stands among the grandest sacred works before Bach."
    }
  },
  {
    "title": "Moro, lasso, al mio duolo",
    "artist": "Carlo Gesualdo",
    "year": 1611,
    "description": "Carlo Gesualdo",
    "videos": [
      "6dVPu71D8VI",
      "dIe5zDoGlyU",
      "te5HRmQgp4E"
    ],
    "genre": {
      "title": "Late Renaissance (chromatic madrigal)",
      "description": "A startlingly chromatic madrigal from Gesualdo's sixth book, lurching between distant harmonies to depict anguish. Its harmonic daring was unrivalled until the late 19th century."
    }
  },
  {
    "title": "The Silver Swan",
    "artist": "Orlando Gibbons",
    "year": 1612,
    "description": "Orlando Gibbons",
    "videos": [
      "ZYvZvAihBP0",
      "uNdXFlbNIfI",
      "l8kUlKE10-E"
    ],
    "genre": {
      "title": "Late Renaissance (English madrigal)",
      "description": "A poignant five-voice madrigal lamenting that the swan sings only at its death. It is among the finest and most elegiac of all English madrigals."
    }
  },
  {
    "title": "Toccata No. 9 (Toccate e partite, Book I)",
    "artist": "Girolamo Frescobaldi",
    "year": 1615,
    "description": "Girolamo Frescobaldi",
    "videos": [
      "bPZUObf0VGg",
      "zhlKUu4R5hM",
      "lLHfOsH-hOQ"
    ],
    "genre": {
      "title": "Early Baroque keyboard toccata",
      "description": "Frescobaldi's free, sectional toccatas revolutionized keyboard writing and influenced generations including J.S. Bach. They epitomize the expressive Italian stile fantastico."
    }
  },
  {
    "title": "Miserere",
    "artist": "Gregorio Allegri",
    "year": 1638,
    "description": "Gregorio Allegri",
    "videos": [
      "THU9zfWCUr0",
      "c297e_yjlAQ",
      "UUo_Dgbq3VU"
    ],
    "genre": {
      "title": "Late Renaissance / early Baroque (choral)",
      "description": "A polychoral setting of Psalm 51 sung in the Sistine Chapel during Holy Week, famed for its soaring top C and once guarded as a Vatican secret. It is the most beloved survival of the Roman a cappella tradition."
    }
  },
  {
    "title": "Symphoniae sacrae: Saul, was verfolgst du mich (SWV 415)",
    "artist": "Heinrich Schütz",
    "year": 1650,
    "description": "Heinrich Schütz",
    "videos": [
      "vTiMOsMsv2I",
      "ZHCxeeSSLTU",
      "0OFa0R-nkGs"
    ],
    "genre": {
      "title": "German Baroque sacred concerto",
      "description": "Schütz brought the Venetian polychoral style to Germany, laying the groundwork for the Lutheran sacred tradition Bach would inherit. This dramatic motet depicts the conversion of Saul."
    }
  },
  {
    "title": "Armide: Overture",
    "artist": "Jean-Baptiste Lully",
    "year": 1686,
    "description": "Jean-Baptiste Lully",
    "videos": [
      "n-ml8Q6KyPo",
      "HWIaanFmhYY",
      "D3PMBLGw7iA"
    ],
    "genre": {
      "title": "French Baroque opera (tragédie en musique)",
      "description": "Lully defined French opera and the stately French overture form with its dotted-rhythm slow section and fugal fast section. Armide is his late masterpiece."
    }
  },
  {
    "title": "Dido and Aeneas: Dido's Lament 'When I am laid in earth'",
    "artist": "Henry Purcell",
    "year": 1689,
    "description": "Henry Purcell",
    "videos": [
      "uGQq3HcOB0Y",
      "-H--Z9UzQYE",
      "jOIAi2XwuWo"
    ],
    "genre": {
      "title": "English Baroque opera",
      "description": "England's greatest Baroque opera, built over a descending ground bass. Dido's Lament is one of the most poignant arias ever written."
    }
  },
  {
    "title": "Concerto Grosso in G minor 'Christmas Concerto', Op. 6 No. 8",
    "artist": "Arcangelo Corelli",
    "year": 1690,
    "description": "Arcangelo Corelli",
    "videos": [
      "9ywBhi99Mxo",
      "viq3HmuOQaA",
      "e68h3Qwm2OA"
    ],
    "genre": {
      "title": "Baroque concerto grosso",
      "description": "Corelli standardized the concerto grosso, contrasting a small solo group against the full ensemble. The 'Christmas Concerto' ends with a gentle Pastorale evoking the Nativity."
    }
  },
  {
    "title": "Canon in D major",
    "artist": "Johann Pachelbel",
    "year": 1690,
    "description": "Johann Pachelbel",
    "videos": [
      "NlprozGcs80",
      "JvNQLJ1_HQ0",
      "9nX_ReyaetE"
    ],
    "genre": {
      "title": "Baroque chamber canon",
      "description": "Built on a repeating eight-note ground bass, Pachelbel's Canon is among the most recognizable pieces of Baroque music and a wedding favorite worldwide."
    }
  },
  {
    "title": "Te Deum (Prelude)",
    "artist": "Marc-Antoine Charpentier",
    "year": 1692,
    "description": "Marc-Antoine Charpentier",
    "videos": [
      "I3LIlzPtsmw",
      "iwU37osOkQA",
      "uQof69ujtgs"
    ],
    "genre": {
      "title": "French Baroque sacred music",
      "description": "Charpentier's jubilant Te Deum opens with a Prelude that became the anthem of the Eurovision broadcast network. It is a brilliant example of the French grand motet."
    }
  },
  {
    "title": "Sonata da chiesa, Op. 5 No. 12 'La Follia'",
    "artist": "Arcangelo Corelli",
    "year": 1700,
    "description": "Arcangelo Corelli",
    "videos": [
      "_FX3GH2qiEk",
      "e1CtMeEGBZ8",
      "VBJxHUTzcs0"
    ],
    "genre": {
      "title": "Baroque violin sonata / variations",
      "description": "Corelli's set of variations on the famous 'La Follia' theme is a cornerstone of the violin repertoire and influenced countless later composers."
    }
  },
  {
    "title": "Toccata and Fugue in D minor, BWV 565",
    "artist": "Johann Sebastian Bach",
    "year": 1704,
    "description": "Johann Sebastian Bach",
    "videos": [
      "erXG9vnN-GI",
      "ho9rZjlsyYY",
      "O192eo9zbT4"
    ],
    "genre": {
      "title": "Baroque organ work",
      "description": "Perhaps the most famous organ piece ever written, with its dramatic opening flourish. Its iconic sound is synonymous with the Baroque organ."
    }
  },
  {
    "title": "Adagio in G minor",
    "artist": "Tomaso Albinoni (arr. Giazotto)",
    "year": 1708,
    "description": "Tomaso Albinoni (arr. Giazotto)",
    "videos": [
      "XMbvcp480Y4",
      "u99f9RAvwu4",
      "_eLU5W1vc8Y"
    ],
    "genre": {
      "title": "Baroque-style adagio",
      "description": "Famously attributed to Albinoni though largely composed by Remo Giazotto in the 20th century, this solemn organ-and-strings adagio is a concert-hall staple."
    }
  },
  {
    "title": "L'estro armonico, Op. 3 No. 10 in B minor for 4 violins",
    "artist": "Antonio Vivaldi",
    "year": 1711,
    "description": "Antonio Vivaldi",
    "videos": [
      "GWZTyiMXulQ",
      "ZPdk5GaIDjo",
      "PRSj_Tq5MWE"
    ],
    "genre": {
      "title": "Baroque concerto",
      "description": "Vivaldi's groundbreaking concerto collection that Bach studied and transcribed. The concerto for four violins is a dazzling showcase of Venetian virtuosity."
    }
  },
  {
    "title": "Rinaldo: Lascia ch'io pianga",
    "artist": "George Frideric Handel",
    "year": 1711,
    "description": "George Frideric Handel",
    "videos": [
      "EKo_EmfEPWs",
      "KxnBjAaJWCc",
      "TqdFoRjL1Bk"
    ],
    "genre": {
      "title": "Baroque opera aria",
      "description": "From Handel's first London opera, this sarabande-tempo lament is among his most beloved arias, celebrated for its serene, aching melody."
    }
  },
  {
    "title": "Gloria in D major, RV 589: Gloria in excelsis Deo",
    "artist": "Antonio Vivaldi",
    "year": 1715,
    "description": "Antonio Vivaldi",
    "videos": [
      "2eWjQOdYzMQ",
      "zhhYIZJj6rk",
      "wXx_1pZV8tE"
    ],
    "genre": {
      "title": "Baroque sacred choral",
      "description": "Vivaldi's jubilant Gloria, written for the Ospedale della Pietà, opens with bounding octave leaps. It is one of the most performed Baroque choral works."
    }
  },
  {
    "title": "Adagio from Oboe Concerto in D minor, S. D935",
    "artist": "Alessandro Marcello",
    "year": 1717,
    "description": "Alessandro Marcello",
    "videos": [
      "E0BalQMrVDU",
      "tjLoOmDddgk",
      "aYnU-CaH0bM"
    ],
    "genre": {
      "title": "Baroque concerto",
      "description": "Marcello's lyrical oboe concerto, whose haunting slow movement Bach admired enough to transcribe for keyboard. A jewel of the Venetian Baroque."
    }
  },
  {
    "title": "Water Music: Suite No. 2 in D, Alla Hornpipe",
    "artist": "George Frideric Handel",
    "year": 1717,
    "description": "George Frideric Handel",
    "videos": [
      "oRoEo7lZO6s",
      "1h4mAceHmrI",
      "6fa2wZEsRWM"
    ],
    "genre": {
      "title": "Baroque orchestral suite",
      "description": "Composed for King George I's barge party on the Thames, the Water Music is festive outdoor music. The Alla Hornpipe blazes with horns and trumpets."
    }
  },
  {
    "title": "Viola Concerto in G major, TWV 51:G9, Mvt 1",
    "artist": "Georg Philipp Telemann",
    "year": 1720,
    "description": "Georg Philipp Telemann",
    "videos": [
      "gFGP8ZjQViY",
      "K-E0HEV8hjk",
      "rdMqkRk1jLc"
    ],
    "genre": {
      "title": "Baroque concerto",
      "description": "One of the earliest concertos written for the viola as a solo instrument. Its singing lines made it a cornerstone of the viola repertoire."
    }
  },
  {
    "title": "Suite in D minor, HWV 437: Sarabande",
    "artist": "George Frideric Handel",
    "year": 1720,
    "description": "George Frideric Handel",
    "videos": [
      "xOLQd_pUbxs",
      "EgVPrviDHSU",
      "6lnGFib_WiU"
    ],
    "genre": {
      "title": "Baroque keyboard suite",
      "description": "Handel's solemn Sarabande, a set of variations over a repeating bass, gained fame through the film 'Barry Lyndon'. Its grave dignity is unforgettable."
    }
  },
  {
    "title": "Cello Suite No. 1 in G major, BWV 1007: Prelude",
    "artist": "Johann Sebastian Bach",
    "year": 1720,
    "description": "Johann Sebastian Bach",
    "videos": [
      "1prweT95Mo0",
      "DwHpDOWhkGk",
      "EQkNmAARSe0"
    ],
    "genre": {
      "title": "Baroque solo cello suite",
      "description": "The flowing, arpeggiated Prelude opens Bach's six suites for unaccompanied cello, cornerstones of the instrument's repertoire. Endlessly recorded and beloved."
    }
  },
  {
    "title": "Partita No. 2 in D minor, BWV 1004: Chaconne",
    "artist": "Johann Sebastian Bach",
    "year": 1720,
    "description": "Johann Sebastian Bach",
    "videos": [
      "ngjEVKxQCWs",
      "fQILEU6BHps",
      "SCOY3BGdHG4"
    ],
    "genre": {
      "title": "Baroque solo violin work",
      "description": "A towering set of variations over a repeating bass for solo violin, often regarded as the greatest piece ever written for the instrument."
    }
  },
  {
    "title": "Brandenburg Concerto No. 3 in G major, BWV 1048, Mvt 1",
    "artist": "Johann Sebastian Bach",
    "year": 1721,
    "description": "Johann Sebastian Bach",
    "videos": [
      "Czsd13Mmcg0",
      "qr0f6t2UbOo",
      "pdsyNwUoON0"
    ],
    "genre": {
      "title": "Baroque concerto grosso",
      "description": "The six Brandenburg Concertos are pinnacles of Baroque instrumental music. No. 3, scored for three groups of strings, bursts with contrapuntal energy."
    }
  },
  {
    "title": "Brandenburg Concerto No. 5 in D major, BWV 1050, Mvt 1",
    "artist": "Johann Sebastian Bach",
    "year": 1721,
    "description": "Johann Sebastian Bach",
    "videos": [
      "gIgqeA76cdU",
      "LHjbRMIIhuM",
      "vMSwVf_69Hc"
    ],
    "genre": {
      "title": "Baroque concerto grosso",
      "description": "Featuring an extended harpsichord cadenza, this concerto is often called the first true keyboard concerto. It crowns the Brandenburg set."
    }
  },
  {
    "title": "The Well-Tempered Clavier, Book I: Prelude No. 1 in C major, BWV 846",
    "artist": "Johann Sebastian Bach",
    "year": 1722,
    "description": "Johann Sebastian Bach",
    "videos": [
      "gVah1cr3pU0",
      "Dk3MLRgFQPE",
      "iWoI8vmE8bI"
    ],
    "genre": {
      "title": "Baroque keyboard prelude and fugue",
      "description": "Bach's 'The 48' systematically explores all 24 keys, demonstrating well-tempered tuning. The gentle C-major Prelude is among the most famous keyboard pieces ever."
    }
  },
  {
    "title": "The Four Seasons: Spring (La primavera), Mvt 1",
    "artist": "Antonio Vivaldi",
    "year": 1723,
    "description": "Antonio Vivaldi",
    "videos": [
      "e3nSvIiBNFo",
      "IUZEtVbJT5c",
      "AG2U_i_6jg4"
    ],
    "genre": {
      "title": "Baroque programmatic concerto",
      "description": "Vivaldi's set of four violin concertos depicts the seasons with birdsong, storms and ice. Spring's opening is one of the most recognizable melodies in classical music."
    }
  },
  {
    "title": "The Four Seasons: Summer (L'estate), Mvt 3 'Presto'",
    "artist": "Antonio Vivaldi",
    "year": 1723,
    "description": "Antonio Vivaldi",
    "videos": [
      "laGT9IB2bFo",
      "ZPdk5GaIDjo",
      "wVAq3CzHf9E"
    ],
    "genre": {
      "title": "Baroque programmatic concerto",
      "description": "The thrilling finale of Summer depicts a violent thunderstorm with furious violin runs. It is a tour de force of Baroque tone-painting."
    }
  },
  {
    "title": "The Four Seasons: Winter (L'inverno), Mvt 1",
    "artist": "Antonio Vivaldi",
    "year": 1723,
    "description": "Antonio Vivaldi",
    "videos": [
      "aem4yhhe6ZA",
      "UWg5ugyMjIc",
      "ttHwuyJsZAI"
    ],
    "genre": {
      "title": "Baroque programmatic concerto",
      "description": "Winter opens with shivering tremolo strings evoking icy cold and chattering teeth. It is a vivid masterpiece of musical illustration."
    }
  },
  {
    "title": "St John Passion, BWV 245: Herr, unser Herrscher (Opening Chorus)",
    "artist": "Johann Sebastian Bach",
    "year": 1724,
    "description": "Johann Sebastian Bach",
    "videos": [
      "FyeOPfg_6FE",
      "lJWjdc0DFFI",
      "VGjq7ksEspU"
    ],
    "genre": {
      "title": "Baroque sacred oratorio passion",
      "description": "Bach's dramatic setting of the Passion according to John, with its surging opening chorus over churning strings. A pillar of Lutheran sacred music."
    }
  },
  {
    "title": "Zadok the Priest (Coronation Anthem No. 1), HWV 258",
    "artist": "George Frideric Handel",
    "year": 1727,
    "description": "George Frideric Handel",
    "videos": [
      "5xWhclVLQyI",
      "jI0YOPoj4t0",
      "LtN3GQTu3PY"
    ],
    "genre": {
      "title": "Baroque coronation anthem",
      "description": "Composed for the coronation of George II, this anthem has been sung at every British coronation since. Its swelling string crescendo and choral entry are electrifying."
    }
  },
  {
    "title": "St Matthew Passion, BWV 244: Kommt, ihr Töchter (Opening Chorus)",
    "artist": "Johann Sebastian Bach",
    "year": 1727,
    "description": "Johann Sebastian Bach",
    "videos": [
      "RnkSFKJ4rC0",
      "VW1vQTx1EhA",
      "MDWMHHyFJSI"
    ],
    "genre": {
      "title": "Baroque sacred oratorio passion",
      "description": "Bach's grandest sacred work, for double choir and orchestra. The monumental opening chorus layers two choirs with a chorale tune sung by a third group."
    }
  },
  {
    "title": "Concerto for Two Trumpets in C major, RV 537",
    "artist": "Antonio Vivaldi",
    "year": 1730,
    "description": "Antonio Vivaldi",
    "videos": [
      "9ZVKInM7es0",
      "VSFKp0rNABQ",
      "C9VXJ9WiMjE"
    ],
    "genre": {
      "title": "Baroque concerto",
      "description": "A bright, festive double concerto showcasing two trumpets in dialogue. It remains a favorite for ceremonial and wedding occasions."
    }
  },
  {
    "title": "Suite No. 3 in D major, BWV 1068: Air ('Air on the G String')",
    "artist": "Johann Sebastian Bach",
    "year": 1731,
    "description": "Johann Sebastian Bach",
    "videos": [
      "1PkD47rNkfY",
      "pzlw6fUux4o",
      "bvj25SpFUJ8"
    ],
    "genre": {
      "title": "Baroque orchestral suite",
      "description": "The serene Air from Bach's third orchestral suite, famously arranged so the violin plays entirely on its lowest string. One of his most beloved melodies."
    }
  },
  {
    "title": "Tafelmusik (Musique de table): Concerto in D for trumpet",
    "artist": "Georg Philipp Telemann",
    "year": 1733,
    "description": "Georg Philipp Telemann",
    "videos": [
      "e3vtyS0Vn4s",
      "qkCuB7w7tHY",
      "SaaOns3UaQs"
    ],
    "genre": {
      "title": "Late Baroque chamber/orchestral collection",
      "description": "Telemann's enormously popular collection of mixed chamber and orchestral works for dining entertainment. It showcases his fluent, cosmopolitan late-Baroque style."
    }
  },
  {
    "title": "Hippolyte et Aricie: Overture",
    "artist": "Jean-Philippe Rameau",
    "year": 1733,
    "description": "Jean-Philippe Rameau",
    "videos": [
      "GniXwgTlmx0",
      "Kt9sJ01oEpU",
      "3AqNs__qalE"
    ],
    "genre": {
      "title": "French Baroque opera (tragédie en musique)",
      "description": "Rameau's first opera scandalized and electrified Paris with its harmonic boldness. It established him as Lully's great successor in French opera."
    }
  },
  {
    "title": "Les Indes galantes: Les Sauvages",
    "artist": "Jean-Philippe Rameau",
    "year": 1735,
    "description": "Jean-Philippe Rameau",
    "videos": [
      "2sPC8HsXxik",
      "3zegtH-acXE",
      "MvRMfR2c1hY"
    ],
    "genre": {
      "title": "French Baroque opéra-ballet",
      "description": "A vibrant dance from Rameau's exotic opéra-ballet, its insistent rhythm a Baroque earworm. It captures the era's fascination with the 'noble savage'."
    }
  },
  {
    "title": "Stabat Mater: Stabat Mater dolorosa (Opening duet)",
    "artist": "Giovanni Battista Pergolesi",
    "year": 1736,
    "description": "Giovanni Battista Pergolesi",
    "videos": [
      "yALiXuYqdWE",
      "CVwne4YEN7A",
      "h9ZET0kU9qs"
    ],
    "genre": {
      "title": "Late Baroque sacred music",
      "description": "Composed as Pergolesi lay dying at 26, this setting of the grieving Virgin is built on aching suspensions between two voices. It became the most-printed work of the 18th century."
    }
  },
  {
    "title": "Messiah, HWV 56: Hallelujah Chorus",
    "artist": "George Frideric Handel",
    "year": 1741,
    "description": "George Frideric Handel",
    "videos": [
      "iqc4GTpXJYQ",
      "IUZEtVbJT5c",
      "weFJHtcxJt0"
    ],
    "genre": {
      "title": "Baroque oratorio",
      "description": "The climactic chorus of Handel's Messiah, traditionally heard standing. Its triumphant 'King of Kings' acclamations make it the most famous chorus in Western music."
    }
  },
  {
    "title": "Messiah, HWV 56: 'Comfort ye' and 'Every valley shall be exalted'",
    "artist": "George Frideric Handel",
    "year": 1741,
    "description": "George Frideric Handel",
    "videos": [
      "uP33mc-SI9U",
      "XbSIAmv2CaM",
      "LyC7KKYznnY"
    ],
    "genre": {
      "title": "Baroque oratorio",
      "description": "The tenor's opening accompagnato and aria that launch Messiah, setting Isaiah's prophecy. Their hopeful lyricism establishes the oratorio's spirit."
    }
  },
  {
    "title": "Goldberg Variations, BWV 988: Aria",
    "artist": "Johann Sebastian Bach",
    "year": 1741,
    "description": "Johann Sebastian Bach",
    "videos": [
      "55hk75OgWDg",
      "FHqytGT0lqo",
      "7hkw4rw3ong"
    ],
    "genre": {
      "title": "Baroque keyboard variations",
      "description": "Thirty variations framed by a serene sarabande Aria, a summit of keyboard art reputedly written to soothe an insomniac count. Endlessly studied and recorded."
    }
  },
  {
    "title": "Keyboard Sonata in D minor, K. 141",
    "artist": "Domenico Scarlatti",
    "year": 1745,
    "description": "Domenico Scarlatti",
    "videos": [
      "Gh9WX7TKfkI",
      "h6LtERRLKww",
      "1yyBP3t7g90"
    ],
    "genre": {
      "title": "Baroque keyboard sonata",
      "description": "Scarlatti's 555 single-movement sonatas burst with Spanish guitar effects, hand-crossings and repeated-note virtuosity. K. 141 is a thrilling toccata-like display."
    }
  },
  {
    "title": "Music for the Royal Fireworks, HWV 351: La Réjouissance",
    "artist": "George Frideric Handel",
    "year": 1749,
    "description": "George Frideric Handel",
    "videos": [
      "mpTeslni6tA",
      "EkttBYzD-jY",
      "p5jgSVw3nms"
    ],
    "genre": {
      "title": "Baroque orchestral suite",
      "description": "Composed to celebrate the Peace of Aix-la-Chapelle, scored for a vast wind band. 'La Réjouissance' blazes with trumpets, horns and drums."
    }
  },
  {
    "title": "Mass in B minor, BWV 232: Kyrie eleison",
    "artist": "Johann Sebastian Bach",
    "year": 1749,
    "description": "Johann Sebastian Bach",
    "videos": [
      "V04DSPycwRQ",
      "3FLbiDrn8IE",
      "TMCpjUg411s"
    ],
    "genre": {
      "title": "Baroque sacred mass",
      "description": "Bach's culminating sacred masterwork, assembling a complete Latin Mass of staggering scope. The opening Kyrie is a vast, anguished choral fugue."
    }
  },
  {
    "title": "Mass in B minor, BWV 232: Gloria in excelsis Deo",
    "artist": "Johann Sebastian Bach",
    "year": 1749,
    "description": "Johann Sebastian Bach",
    "videos": [
      "dSg1DezYN40",
      "p16wOPrX7Rk",
      "3FLbiDrn8IE"
    ],
    "genre": {
      "title": "Baroque sacred mass",
      "description": "The exuberant Gloria erupts with trumpets and dancing triple meter, a blaze of celebratory counterpoint. It is a high point of Bach's choral writing."
    }
  },
  {
    "title": "The Art of Fugue, BWV 1080: Contrapunctus I",
    "artist": "Johann Sebastian Bach",
    "year": 1750,
    "description": "Johann Sebastian Bach",
    "videos": [
      "VXnx5NBxiPU",
      "N6sUlZa-IrU",
      "9WC_Vxe--SU"
    ],
    "genre": {
      "title": "Late Baroque contrapuntal cycle",
      "description": "Bach's unfinished testament exploring every contrapuntal device on a single subject. Contrapunctus I introduces the theme in serene, austere four-part counterpoint."
    }
  },
  {
    "title": "Keyboard Sonata in E major, K. 380",
    "artist": "Domenico Scarlatti",
    "year": 1754,
    "description": "Domenico Scarlatti",
    "videos": [
      "1slH1f3IQn4",
      "LJy2LaFOouo",
      "IpdKBQq0Yd4"
    ],
    "genre": {
      "title": "Baroque keyboard sonata",
      "description": "One of Scarlatti's most elegant and lyrical sonatas, with a courtly, processional character. A favorite encore for pianists and harpsichordists alike."
    }
  },
  {
    "title": "Symphony No. 1 in E-flat major",
    "artist": "Carl Philipp Emanuel Bach",
    "year": 1762,
    "description": "Carl Philipp Emanuel Bach",
    "videos": [
      "6xBZJO-WDGE",
      "W4LtreOlZxE",
      "4MSOTWYfnvY"
    ],
    "genre": {
      "title": "Empfindsamer Stil symphony",
      "description": "A symphony in the 'sensitive style' (Empfindsamkeit) by J.S. Bach's most influential son, bridging the Baroque and the emerging Classical idiom. C.P.E. Bach's restless harmonic surprises deeply influenced Haydn and Mozart."
    }
  },
  {
    "title": "Orfeo ed Euridice",
    "artist": "Christoph Willibald Gluck",
    "year": 1762,
    "description": "Christoph Willibald Gluck",
    "videos": [
      "D2EoqOcIuuM",
      "0bUAM0ER-Dw",
      "2BjCvWvg0So"
    ],
    "genre": {
      "title": "Reform opera",
      "description": "Gluck's landmark 'reform' opera that stripped away vocal excess in favor of dramatic truth and noble simplicity. The aria 'Che farò senza Euridice' is among the most beloved in the operatic canon."
    }
  },
  {
    "title": "Cello Concerto in C major",
    "artist": "Joseph Haydn",
    "year": 1762,
    "description": "Joseph Haydn",
    "videos": [
      "JGBZIfaxfrM",
      "bniAamEGHXs",
      "mooB5Q-0FIE"
    ],
    "genre": {
      "title": "Classical concerto",
      "description": "An early Classical-era concerto from Haydn's years at the Esterházy court, rediscovered only in 1961. Its galant elegance and virtuosic cello writing make it a cornerstone of the cello repertoire."
    }
  },
  {
    "title": "Minuet (String Quintet in E major, Op. 11 No. 5)",
    "artist": "Luigi Boccherini",
    "year": 1771,
    "description": "Luigi Boccherini",
    "videos": [
      "5fLPBIBOE5U",
      "2AZOknKotVc",
      "_WglKB01SX0"
    ],
    "genre": {
      "title": "Classical chamber minuet",
      "description": "The famous 'Boccherini Minuet,' the third movement of his String Quintet in E major, epitomizes galant grace and courtly charm. It remains one of the most instantly recognizable chamber works of the era."
    }
  },
  {
    "title": "Piano Sonata No. 11 in A major, 'Rondo alla Turca'",
    "artist": "Wolfgang Amadeus Mozart",
    "year": 1783,
    "description": "Wolfgang Amadeus Mozart",
    "videos": [
      "n2Tru4Qa3pc",
      "aeEmGvm7kDk",
      "0HhBr0t4VJ0"
    ],
    "genre": {
      "title": "Classical piano sonata",
      "description": "Mozart's A major sonata closes with the celebrated 'Turkish March,' evoking the janissary bands then fashionable in Vienna. The Rondo alla Turca is one of the most popular piano pieces ever written."
    }
  },
  {
    "title": "The Marriage of Figaro",
    "artist": "Wolfgang Amadeus Mozart",
    "year": 1786,
    "description": "Wolfgang Amadeus Mozart",
    "videos": [
      "Mp6UAGN_Ir4",
      "J02j_bjTO7k",
      "5nLU-5TDHSA"
    ],
    "genre": {
      "title": "Classical opera buffa",
      "description": "Mozart's comic masterpiece with a libretto by Da Ponte, blending sparkling wit with profound humanity. Its ensembles and the Overture set a benchmark for operatic craft."
    }
  },
  {
    "title": "Don Giovanni",
    "artist": "Wolfgang Amadeus Mozart",
    "year": 1787,
    "description": "Wolfgang Amadeus Mozart",
    "videos": [
      "MMd44lWiHd8",
      "jyjVCbTo5F0",
      "jFPqTCR0_F8"
    ],
    "genre": {
      "title": "Classical dramma giocoso",
      "description": "A 'dramma giocoso' mixing comedy and the supernatural, climaxing in the damnation of the unrepentant libertine. Widely regarded as one of the greatest operas ever composed."
    }
  },
  {
    "title": "Eine kleine Nachtmusik",
    "artist": "Wolfgang Amadeus Mozart",
    "year": 1787,
    "description": "Wolfgang Amadeus Mozart",
    "videos": [
      "oy2zDJPIgwc",
      "r_oK8dKIBYc",
      "WAqK92t_mrA"
    ],
    "genre": {
      "title": "Classical serenade",
      "description": "A serenade for strings whose buoyant opening Allegro is among the most famous melodies in all music. Its perfect balance and clarity epitomize the Classical style."
    }
  },
  {
    "title": "Symphony No. 40 in G minor",
    "artist": "Wolfgang Amadeus Mozart",
    "year": 1788,
    "description": "Wolfgang Amadeus Mozart",
    "videos": [
      "BJPmYURJk4c",
      "uDjMC_aTeEM",
      "QyQ-POuTNn8"
    ],
    "genre": {
      "title": "Classical symphony",
      "description": "One of only two symphonies Mozart wrote in a minor key, its urgent, sighing first theme conveys restless drama. It stands among the supreme achievements of the Classical symphony."
    }
  },
  {
    "title": "Symphony No. 41 in C major, 'Jupiter'",
    "artist": "Wolfgang Amadeus Mozart",
    "year": 1788,
    "description": "Wolfgang Amadeus Mozart",
    "videos": [
      "0vfU4cmdx-s",
      "yZpFrydm6G4",
      "prvBEXbnDR0"
    ],
    "genre": {
      "title": "Classical symphony",
      "description": "Mozart's last and grandest symphony, crowned by a finale of dazzling contrapuntal mastery. Its majestic scope earned the nickname 'Jupiter.'"
    }
  },
  {
    "title": "Symphony No. 94 in G major, 'Surprise'",
    "artist": "Joseph Haydn",
    "year": 1791,
    "description": "Joseph Haydn",
    "videos": [
      "VOLy6JxEDLw",
      "tF5kr251BRs",
      "b9Umjnwvn4g"
    ],
    "genre": {
      "title": "Classical symphony",
      "description": "One of Haydn's celebrated 'London' symphonies, famous for the sudden fortissimo chord that jolts listeners in the gentle Andante. A perfect display of Haydn's wit and craftsmanship."
    }
  },
  {
    "title": "Clarinet Concerto in A major",
    "artist": "Wolfgang Amadeus Mozart",
    "year": 1791,
    "description": "Wolfgang Amadeus Mozart",
    "videos": [
      "7dK0CWmE_oU",
      "YT_63UntRJE",
      "VpDq4Wu2f0A"
    ],
    "genre": {
      "title": "Classical concerto",
      "description": "Mozart's final concerto, written for the basset clarinet, balances serene lyricism with virtuosic warmth. Its Adagio is one of the most sublime slow movements in the repertoire."
    }
  },
  {
    "title": "The Magic Flute",
    "artist": "Wolfgang Amadeus Mozart",
    "year": 1791,
    "description": "Wolfgang Amadeus Mozart",
    "videos": [
      "YuBeBjqKSGQ",
      "pZcaf9GfyWs",
      "5iN-2-uIErs"
    ],
    "genre": {
      "title": "Classical Singspiel",
      "description": "A German-language Singspiel blending fairy-tale fantasy with Masonic symbolism. The Queen of the Night's coloratura aria 'Der Hölle Rache' is a showpiece of operatic virtuosity."
    }
  },
  {
    "title": "Requiem in D minor",
    "artist": "Wolfgang Amadeus Mozart",
    "year": 1791,
    "description": "Wolfgang Amadeus Mozart",
    "videos": [
      "MafAZeag1_0",
      "FRO8SQjn6A4",
      "LtN3GQTu3PY"
    ],
    "genre": {
      "title": "Classical sacred Requiem",
      "description": "Mozart's unfinished final work, left incomplete at his death and completed by Süssmayr. The thunderous 'Dies irae' and 'Lacrimosa' are among the most powerful pages of choral music."
    }
  },
  {
    "title": "Symphony No. 104 in D major, 'London'",
    "artist": "Joseph Haydn",
    "year": 1795,
    "description": "Joseph Haydn",
    "videos": [
      "OitPLIowJ70",
      "l9bbz0tHVf4",
      "kg6Q9tkHOw0"
    ],
    "genre": {
      "title": "Classical symphony",
      "description": "The last of Haydn's twelve 'London' symphonies and the culmination of his symphonic art. Its grand slow introduction and exuberant finale mark the summit of the Classical symphony before Beethoven."
    }
  },
  {
    "title": "Trumpet Concerto in E-flat major",
    "artist": "Joseph Haydn",
    "year": 1796,
    "description": "Joseph Haydn",
    "videos": [
      "lDXPC5QGrLE",
      "hb5MSJcBb9o",
      "J7t384ipf5c"
    ],
    "genre": {
      "title": "Classical concerto",
      "description": "Written for the newly invented keyed trumpet, this concerto exploits the instrument's then-novel chromatic range. Its sparkling finale is a staple of the trumpet repertoire."
    }
  },
  {
    "title": "String Quartet Op. 76 No. 3, 'Emperor'",
    "artist": "Joseph Haydn",
    "year": 1797,
    "description": "Joseph Haydn",
    "videos": [
      "mBmCcSz6HWw",
      "9EgQ6E4Gc7o",
      "v8ssyi0SvBk"
    ],
    "genre": {
      "title": "Classical string quartet",
      "description": "Nicknamed 'Emperor' for its slow-movement variations on the 'Gott erhalte' hymn, later adopted as the German national anthem. Haydn, the 'father of the string quartet,' here perfects the genre he largely created."
    }
  },
  {
    "title": "The Creation",
    "artist": "Joseph Haydn",
    "year": 1798,
    "description": "Joseph Haydn",
    "videos": [
      "GmPlG5cOWcw",
      "qQqC5B5oX3I",
      "oe2Rs8WRk2w"
    ],
    "genre": {
      "title": "Classical oratorio",
      "description": "A grand oratorio depicting the biblical creation of the world, opening with the famous orchestral 'Representation of Chaos' and the radiant 'Let there be light.' Inspired by Handel, it crowns Haydn's late career."
    }
  },
  {
    "title": "Piano Sonata No. 8 in C minor, 'Pathétique'",
    "artist": "Ludwig van Beethoven",
    "year": 1798,
    "description": "Ludwig van Beethoven",
    "videos": [
      "BuN3yCmHb_U",
      "e175ObkGDB4",
      "vGq3-Fi_zQY"
    ],
    "genre": {
      "title": "Classical piano sonata",
      "description": "An early Beethoven sonata of striking emotional power, from its tragic slow introduction to the songful Adagio cantabile. The name 'Pathétique' reflects its grand pathos."
    }
  },
  {
    "title": "Symphony No. 1 in C major",
    "artist": "Ludwig van Beethoven",
    "year": 1800,
    "description": "Ludwig van Beethoven",
    "videos": [
      "JAGip4nOsOg",
      "6gtKKT1e83w",
      "GG5kjyvzThU"
    ],
    "genre": {
      "title": "Classical symphony",
      "description": "Beethoven's first symphony, indebted to Haydn and Mozart yet already marked by harmonic daring and a Scherzo-like minuet. It announced a new symphonic voice in Vienna."
    }
  },
  {
    "title": "Piano Sonata No. 14 in C-sharp minor, 'Moonlight'",
    "artist": "Ludwig van Beethoven",
    "year": 1801,
    "description": "Ludwig van Beethoven",
    "videos": [
      "sbTVZMJ9Z2I",
      "B5rpg5XdQ2Q",
      "oqnKwesvSGQ"
    ],
    "genre": {
      "title": "Classical piano sonata",
      "description": "Subtitled 'Quasi una fantasia,' its hushed, hypnotic opening Adagio sostenuto earned the nickname 'Moonlight.' One of the most beloved piano works ever written."
    }
  },
  {
    "title": "Symphony No. 2 in D major",
    "artist": "Ludwig van Beethoven",
    "year": 1802,
    "description": "Ludwig van Beethoven",
    "videos": [
      "ytOL_iszvAE",
      "STiAxX3GTz8",
      "_Duki30rC2E"
    ],
    "genre": {
      "title": "Classical symphony",
      "description": "Composed amid Beethoven's growing deafness yet brimming with energy and humor. Its expanded scope and propulsive finale point toward the revolutionary 'Eroica.'"
    }
  },
  {
    "title": "Piano Sonata No. 21 in C major, 'Waldstein'",
    "artist": "Ludwig van Beethoven",
    "year": 1804,
    "description": "Ludwig van Beethoven",
    "videos": [
      "lbblMw6k1cU",
      "G7Aj7EkefGQ",
      "J3l18HTo5rY"
    ],
    "genre": {
      "title": "Classical piano sonata",
      "description": "A pillar of the 'heroic' middle period, demanding virtuosity and exploiting the piano's expanding range. Its luminous rondo finale shimmers with sustained pedal effects."
    }
  },
  {
    "title": "Symphony No. 3 in E-flat major, 'Eroica'",
    "artist": "Ludwig van Beethoven",
    "year": 1804,
    "description": "Ludwig van Beethoven",
    "videos": [
      "DWwppYEEdcI",
      "fhHcty9OM-0",
      "EPxoK254aXg"
    ],
    "genre": {
      "title": "Heroic-period symphony",
      "description": "A revolutionary work that nearly doubled the symphony's scale and inaugurated the Romantic era. Originally dedicated to Napoleon, it transformed what a symphony could express."
    }
  },
  {
    "title": "Fidelio",
    "artist": "Ludwig van Beethoven",
    "year": 1805,
    "description": "Ludwig van Beethoven",
    "videos": [
      "4f0QfrnToZM",
      "ReSwAZ8jNyQ",
      "FMm2406hUpQ"
    ],
    "genre": {
      "title": "Classical rescue opera",
      "description": "Beethoven's only opera, a 'rescue opera' celebrating conjugal love, freedom, and triumph over tyranny. The 'Leonore' overtures and the Prisoners' Chorus are among its enduring highlights."
    }
  },
  {
    "title": "Piano Sonata No. 23 in F minor, 'Appassionata'",
    "artist": "Ludwig van Beethoven",
    "year": 1805,
    "description": "Ludwig van Beethoven",
    "videos": [
      "0Ak_7tTxZrk",
      "Z2wFcGoSDAo",
      "QImFm4Y_QPM"
    ],
    "genre": {
      "title": "Heroic-period piano sonata",
      "description": "One of Beethoven's most turbulent and technically demanding sonatas, a pinnacle of his heroic style. Its stormy outer movements frame a serene set of variations."
    }
  },
  {
    "title": "Piano Concerto No. 4 in G major",
    "artist": "Ludwig van Beethoven",
    "year": 1806,
    "description": "Ludwig van Beethoven",
    "videos": [
      "6lvBQJjxw4c",
      "CTPhTQVzp9I",
      "Q_V1XmJbIBI"
    ],
    "genre": {
      "title": "Classical piano concerto",
      "description": "Groundbreaking for opening with the solo piano alone, before the orchestra enters. Its dialogue-like slow movement is often likened to Orpheus taming the Furies."
    }
  },
  {
    "title": "Violin Concerto in D major",
    "artist": "Ludwig van Beethoven",
    "year": 1806,
    "description": "Ludwig van Beethoven",
    "videos": [
      "cokCgWPRZPg",
      "0Cg_0jepxow",
      "v08hDIiheyU"
    ],
    "genre": {
      "title": "Classical concerto",
      "description": "Beethoven's only violin concerto, expansive and lyrical, opening with five soft timpani strokes. Initially neglected, it is now considered the greatest of all violin concertos."
    }
  },
  {
    "title": "Symphony No. 5 in C minor",
    "artist": "Ludwig van Beethoven",
    "year": 1808,
    "description": "Ludwig van Beethoven",
    "videos": [
      "I7AQeN-x_Xs",
      "TlZ2mZ83zuY",
      "3WZP7-41iAU"
    ],
    "genre": {
      "title": "Heroic-period symphony",
      "description": "Defined by its iconic four-note 'fate' motif, it traverses darkness to triumph from C minor to C major. Perhaps the most famous symphony in the world."
    }
  },
  {
    "title": "Symphony No. 6 in F major, 'Pastoral'",
    "artist": "Ludwig van Beethoven",
    "year": 1808,
    "description": "Ludwig van Beethoven",
    "videos": [
      "m81VOP6dEV8",
      "TlZ2mZ83zuY",
      "xWDIwsfgQnE"
    ],
    "genre": {
      "title": "Programmatic symphony",
      "description": "A pioneering programmatic symphony evoking country scenes, a babbling brook, peasant dances, and a thunderstorm. Premiered alongside the Fifth in the famous 1808 concert."
    }
  },
  {
    "title": "Piano Concerto No. 5 in E-flat major, 'Emperor'",
    "artist": "Ludwig van Beethoven",
    "year": 1809,
    "description": "Ludwig van Beethoven",
    "videos": [
      "m0evC5OMofs",
      "TFIs0gwWCKo",
      "3TiYGxOQDYw"
    ],
    "genre": {
      "title": "Heroic-period concerto",
      "description": "Beethoven's grandest and final piano concerto, majestic and heroic in scope, opening with sweeping solo flourishes. The 'Emperor' nickname reflects its imperial grandeur."
    }
  },
  {
    "title": "Bagatelle in A minor, 'Für Elise'",
    "artist": "Ludwig van Beethoven",
    "year": 1810,
    "description": "Ludwig van Beethoven",
    "videos": [
      "6J8jzYIFWc0",
      "CQIDLhBJ2y4",
      "J3oCumjhF2k"
    ],
    "genre": {
      "title": "Classical piano bagatelle",
      "description": "A short piano bagatelle whose wistful main theme is among the most recognized melodies in the world. Published only decades after Beethoven's death."
    }
  },
  {
    "title": "Piano Trio No. 7 in B-flat major, 'Archduke'",
    "artist": "Ludwig van Beethoven",
    "year": 1811,
    "description": "Ludwig van Beethoven",
    "videos": [
      "ezRNLXBbB8Q",
      "LZ5bULkLzak",
      "wP-snALRQ58"
    ],
    "genre": {
      "title": "Classical piano trio",
      "description": "The crowning masterpiece of Beethoven's piano trios, dedicated to his patron Archduke Rudolph. Its spacious, noble themes and profound slow variations mark a peak of the chamber repertoire."
    }
  },
  {
    "title": "Symphony No. 7 in A major",
    "artist": "Ludwig van Beethoven",
    "year": 1812,
    "description": "Ludwig van Beethoven",
    "videos": [
      "O1VdzzMHYyI",
      "sv2QnrCJNk0",
      "xaYWy3eHtCM"
    ],
    "genre": {
      "title": "Heroic-period symphony",
      "description": "Hailed by Wagner as 'the apotheosis of the dance' for its relentless rhythmic drive. Its solemn Allegretto became one of Beethoven's most popular movements."
    }
  },
  {
    "title": "Symphony No. 8 in F major",
    "artist": "Ludwig van Beethoven",
    "year": 1812,
    "description": "Ludwig van Beethoven",
    "videos": [
      "Iq4bHt5FTmY",
      "D-snKvzL3tM",
      "GQ7-hbEWdw8"
    ],
    "genre": {
      "title": "Classical symphony",
      "description": "A compact, good-humored symphony Beethoven affectionately called his 'little' one, looking back to Haydnesque wit. Its ticking Allegretto playfully parodies the metronome."
    }
  },
  {
    "title": "Erlkönig",
    "artist": "Franz Schubert",
    "year": 1815,
    "description": "Franz Schubert",
    "videos": [
      "JS91p-vmSf0",
      "ozzgKpd3mBw",
      "lTjXk-cPkrY"
    ],
    "genre": {
      "title": "Classical/early-Romantic Lied",
      "description": "A dramatic art song setting Goethe's ballad, with galloping piano figuration and four vivid character voices. Composed when Schubert was only eighteen, it launched the German Lied tradition."
    }
  },
  {
    "title": "Erlkönig (D. 328)",
    "artist": "Franz Schubert",
    "year": 1815,
    "description": "Franz Schubert",
    "videos": [
      "PaBNUzVSnj8",
      "DKbYusQNdVw",
      "mEFyLEkvthk"
    ],
    "genre": {
      "title": "Romantic art song (Lied)",
      "description": "A dramatic through-composed setting of Goethe's ballad, with a galloping piano motif depicting a desperate ride through the night. It is a cornerstone of the German Lied tradition."
    }
  },
  {
    "title": "Symphony No. 5 in B-flat major",
    "artist": "Franz Schubert",
    "year": 1816,
    "description": "Franz Schubert",
    "videos": [
      "AdzjpPt-P00",
      "OHkot1TmvZU",
      "nvuxiqj00rk"
    ],
    "genre": {
      "title": "Classical symphony",
      "description": "A youthful, Mozartean symphony of lightness and charm, scored for a small Classical orchestra. It captures Schubert's lyrical gift before his turn toward Romantic depth."
    }
  },
  {
    "title": "The Barber of Seville",
    "artist": "Gioachino Rossini",
    "year": 1816,
    "description": "Gioachino Rossini",
    "videos": [
      "mdGtyQnCMtI",
      "JZI5mqy7-Vk",
      "YaoxBYHaQ3A"
    ],
    "genre": {
      "title": "Italian opera buffa",
      "description": "A sparkling comic opera whose Overture and the bravura aria 'Largo al factotum' are perennial favorites. Rossini's wit and brilliant crescendos define late-Classical Italian comedy."
    }
  },
  {
    "title": "The Barber of Seville (Overture)",
    "artist": "Gioachino Rossini",
    "year": 1816,
    "description": "Gioachino Rossini",
    "videos": [
      "mdGtyQnCMtI",
      "OloXRhesab0",
      "ZVYtROUyaWk"
    ],
    "genre": {
      "title": "Italian comic opera",
      "description": "A sparkling opera buffa whose crackling overture and effervescent ensembles epitomize Rossini's bel canto wit. It remains one of the most beloved comic operas ever written."
    }
  },
  {
    "title": "Piano Sonata No. 29 in B-flat major, 'Hammerklavier'",
    "artist": "Ludwig van Beethoven",
    "year": 1818,
    "description": "Ludwig van Beethoven",
    "videos": [
      "FwZsDzGY1XA",
      "AAwRRLDpBVM",
      "fg3Yk-vr8PE"
    ],
    "genre": {
      "title": "Late-period piano sonata",
      "description": "A monumental and formidably difficult sonata, climaxing in a vast three-voice fugue. It stands as one of the supreme challenges of the piano literature, pointing toward Beethoven's late style."
    }
  },
  {
    "title": "Trout Quintet (D. 667)",
    "artist": "Franz Schubert",
    "year": 1819,
    "description": "Franz Schubert",
    "videos": [
      "g3k81__bwrM",
      "XhDex_eO7Xk",
      "NtzEdLS6IQA"
    ],
    "genre": {
      "title": "Romantic chamber music",
      "description": "A sunny piano quintet whose fourth movement varies Schubert's own song 'Die Forelle' (The Trout). Its unusual scoring with double bass gives it a warm, buoyant texture."
    }
  },
  {
    "title": "Symphony No. 8 in B minor 'Unfinished' (D. 759)",
    "artist": "Franz Schubert",
    "year": 1822,
    "description": "Franz Schubert",
    "videos": [
      "3tisvEpblig",
      "uWnKMzAedK4",
      "oBPwpX3VDZE"
    ],
    "genre": {
      "title": "Early Romantic symphony",
      "description": "Two completed movements of haunting lyricism and dark orchestral color, left mysteriously incomplete. Its emotional depth marks a decisive turn toward Romantic symphonic expression."
    }
  },
  {
    "title": "Symphony No. 9 in D minor 'Choral' (Op. 125)",
    "artist": "Ludwig van Beethoven",
    "year": 1824,
    "description": "Ludwig van Beethoven",
    "videos": [
      "fzyO3fLV5O0",
      "fEiJwgcawvI",
      "ChygZLpJDNE"
    ],
    "genre": {
      "title": "Late-Classical/Romantic symphony",
      "description": "Beethoven's monumental final symphony, the first to incorporate vocal soloists and chorus, culminating in the 'Ode to Joy.' It became the defining bridge from the Classical to the Romantic era."
    }
  },
  {
    "title": "Missa Solemnis (Op. 123)",
    "artist": "Ludwig van Beethoven",
    "year": 1824,
    "description": "Ludwig van Beethoven",
    "videos": [
      "S8Yy0gSt-JE",
      "b4iSmbYhYbY",
      "CNYrfHZoP8A"
    ],
    "genre": {
      "title": "Sacred choral mass",
      "description": "A vast, deeply personal setting of the Mass that Beethoven considered his greatest work. Its monumental choral writing pushed the genre toward Romantic spiritual grandeur."
    }
  },
  {
    "title": "Ave Maria (Ellens dritter Gesang, D. 839)",
    "artist": "Franz Schubert",
    "year": 1825,
    "description": "Franz Schubert",
    "videos": [
      "yAJJqIrwrCc",
      "2H5rusicEnc",
      "tDQj7j-xogM"
    ],
    "genre": {
      "title": "Romantic art song",
      "description": "A serenely devotional song originally set to a text from Walter Scott, later universally sung to the Latin prayer. Its flowing melody is among the most famous in all music."
    }
  },
  {
    "title": "A Midsummer Night's Dream Overture (Op. 21)",
    "artist": "Felix Mendelssohn",
    "year": 1826,
    "description": "Felix Mendelssohn",
    "videos": [
      "qU0d0zuNn7k",
      "hId2MUSO2xY",
      "fouUaqR0pWY"
    ],
    "genre": {
      "title": "Romantic concert overture",
      "description": "A gossamer overture composed when Mendelssohn was just 17, conjuring Shakespeare's enchanted forest with shimmering fairy music. It launched the Romantic concert overture as a form."
    }
  },
  {
    "title": "String Quartet No. 14 'Death and the Maiden' (D. 810)",
    "artist": "Franz Schubert",
    "year": 1826,
    "description": "Franz Schubert",
    "videos": [
      "CSdlrvC08lM",
      "7daW-UBBdKs",
      "otdayisyIiM"
    ],
    "genre": {
      "title": "Romantic string quartet",
      "description": "A turbulent, death-haunted quartet whose slow movement varies Schubert's song of the same name. It stands among the most dramatic and intense works in the chamber repertoire."
    }
  },
  {
    "title": "Winterreise (D. 911)",
    "artist": "Franz Schubert",
    "year": 1827,
    "description": "Franz Schubert",
    "videos": [
      "l0Rry-ahcHM",
      "MpFh5Cb600E",
      "1Txexqrl1HE"
    ],
    "genre": {
      "title": "Romantic song cycle",
      "description": "A bleak cycle of 24 songs tracing a heartbroken wanderer's winter journey toward despair. It is widely regarded as the supreme achievement of the German Lied."
    }
  },
  {
    "title": "William Tell (Overture)",
    "artist": "Gioachino Rossini",
    "year": 1829,
    "description": "Gioachino Rossini",
    "videos": [
      "c7O91GDWGPU",
      "j3T8-aeOrbg",
      "awFoZIO0g1Q"
    ],
    "genre": {
      "title": "Grand opera overture",
      "description": "The overture to Rossini's final opera, progressing from a dawn cello prelude through a storm to its galloping cavalry finale. The famous gallop is one of the most recognizable passages in music."
    }
  },
  {
    "title": "Piano Concerto No. 1 in E minor (Op. 11)",
    "artist": "Frédéric Chopin",
    "year": 1830,
    "description": "Frédéric Chopin",
    "videos": [
      "2bFo65szAP0",
      "614oSsDS734",
      "gV_x_QY1P5c"
    ],
    "genre": {
      "title": "Romantic piano concerto",
      "description": "A youthful concerto pairing brilliant pianistic display with intimate lyricism, especially in its dreamlike Romance slow movement. It showcases Chopin's gift for singing melody at the keyboard."
    }
  },
  {
    "title": "Symphonie fantastique (Op. 14)",
    "artist": "Hector Berlioz",
    "year": 1830,
    "description": "Hector Berlioz",
    "videos": [
      "598i8b3HGrw",
      "bNeDT-U9eg0",
      "QwCuFaq2L3U"
    ],
    "genre": {
      "title": "Romantic programme symphony",
      "description": "A wildly original autobiographical symphony depicting an artist's opium-fueled visions, unified by a recurring 'idée fixe' theme. Its 'March to the Scaffold' and witches' sabbath are landmarks of orchestral imagination."
    }
  },
  {
    "title": "Revolutionary Étude (Op. 10 No. 12)",
    "artist": "Frédéric Chopin",
    "year": 1831,
    "description": "Frédéric Chopin",
    "videos": [
      "g1uLrHq9TDg",
      "7VWHBHeNrg4",
      "w2vLEQno9Ks"
    ],
    "genre": {
      "title": "Romantic piano étude",
      "description": "A tempestuous study in left-hand technique, reputedly inspired by the failed Polish uprising against Russia. It fuses virtuosity with fierce emotional defiance."
    }
  },
  {
    "title": "Nocturne in E-flat major (Op. 9 No. 2)",
    "artist": "Frédéric Chopin",
    "year": 1832,
    "description": "Frédéric Chopin",
    "videos": [
      "p29JUpsOSTE",
      "9E6b3swbnWg",
      "-PaYq5Pt228"
    ],
    "genre": {
      "title": "Romantic piano nocturne",
      "description": "An exquisitely ornamented nighttime song for the piano, with a bel canto melody floating over a gently rocking accompaniment. It is the most famous of Chopin's nocturnes."
    }
  },
  {
    "title": "Symphony No. 4 in A major 'Italian' (Op. 90)",
    "artist": "Felix Mendelssohn",
    "year": 1833,
    "description": "Felix Mendelssohn",
    "videos": [
      "_HX_jF1_Tgc",
      "ovPdGKXxmO4",
      "XMLyJNgd6LA"
    ],
    "genre": {
      "title": "Romantic symphony",
      "description": "A sunlit, exuberant symphony inspired by Mendelssohn's travels in Italy, framed by a brilliant opening and a whirling saltarello finale. It captures Romantic delight in southern landscape."
    }
  },
  {
    "title": "Ballade No. 1 in G minor (Op. 23)",
    "artist": "Frédéric Chopin",
    "year": 1835,
    "description": "Frédéric Chopin",
    "videos": [
      "BSFNl4roGlI",
      "Zj_psrTUW_w",
      "VmFmAvwO1pE"
    ],
    "genre": {
      "title": "Romantic piano ballade",
      "description": "A sweeping narrative work that pioneered the instrumental ballade as a Romantic form, building from brooding lyricism to a ferocious coda. It is among Chopin's most celebrated pieces."
    }
  },
  {
    "title": "Fantaisie-Impromptu (Op. 66, posth.)",
    "artist": "Frédéric Chopin",
    "year": 1835,
    "description": "Frédéric Chopin",
    "videos": [
      "Gus4dnQuiGk",
      "_hyAOYMUVDs",
      "Gy5UHK4EeM8"
    ],
    "genre": {
      "title": "Romantic piano impromptu",
      "description": "A whirlwind of cross-rhythms surrounding a famous singing middle section, published only after Chopin's death. It is one of his most popular and technically dazzling pieces."
    }
  },
  {
    "title": "Hexameron / Grandes études (early Transcendental Études)",
    "artist": "Franz Liszt",
    "year": 1837,
    "description": "Franz Liszt",
    "videos": [
      "KsGLmrR0BVs",
      "1O4h0AapdbQ",
      "kD4T-rNklsY"
    ],
    "genre": {
      "title": "Romantic piano étude",
      "description": "Liszt's set of formidable concert études pushed piano technique to unprecedented extremes of virtuosity. Later revised as the Transcendental Études, they redefined the instrument's expressive range."
    }
  },
  {
    "title": "Kinderszenen (Träumerei, Op. 15)",
    "artist": "Robert Schumann",
    "year": 1838,
    "description": "Robert Schumann",
    "videos": [
      "_RmuTuVWXy4",
      "9zVQk0YviAA",
      "7HDFeEexQ-8"
    ],
    "genre": {
      "title": "Romantic piano miniatures",
      "description": "A set of thirteen tender vignettes of childhood seen through adult memory, crowned by the beloved 'Träumerei' (Dreaming). It exemplifies the Romantic character-piece."
    }
  },
  {
    "title": "Dichterliebe (Op. 48)",
    "artist": "Robert Schumann",
    "year": 1840,
    "description": "Robert Schumann",
    "videos": [
      "SZJkY4kv4_A",
      "ASyIyNnJhEU",
      "SaaBlfBdBO8"
    ],
    "genre": {
      "title": "Romantic song cycle",
      "description": "A cycle of sixteen songs to Heine's poems tracing the joys and bitter disillusionment of love. The piano is an equal partner, its postludes voicing what words cannot."
    }
  },
  {
    "title": "Symphony No. 3 in A minor 'Scottish' (Op. 56)",
    "artist": "Felix Mendelssohn",
    "year": 1842,
    "description": "Felix Mendelssohn",
    "videos": [
      "rw6slNXSzNg",
      "nR0amzWr0J0",
      "0QPGWMXjYQ0"
    ],
    "genre": {
      "title": "Romantic symphony",
      "description": "A misty, atmospheric symphony evoking the brooding landscapes and history of Scotland. Its folk-tinged themes and stormy textures embody Romantic landscape painting in sound."
    }
  },
  {
    "title": "Polonaise in A-flat major 'Heroic' (Op. 53)",
    "artist": "Frédéric Chopin",
    "year": 1842,
    "description": "Frédéric Chopin",
    "videos": [
      "p_iI1J0bALE",
      "Gus4dnQuiGk",
      "L-B2Sxvi4Yk"
    ],
    "genre": {
      "title": "Romantic piano polonaise",
      "description": "A grand, martial polonaise radiating Polish national pride and triumphant grandeur. Its thundering octave passages make it one of the most heroic works in the piano repertoire."
    }
  },
  {
    "title": "The Flying Dutchman (Overture)",
    "artist": "Richard Wagner",
    "year": 1843,
    "description": "Richard Wagner",
    "videos": [
      "Ezqen5-UxlQ",
      "HqezCR_XzaI",
      "nEcyCEAm1Mg"
    ],
    "genre": {
      "title": "Romantic opera",
      "description": "Wagner's tale of a cursed sea captain redeemed by faithful love, with a storm-tossed overture introducing his leitmotif technique. It marks his emergence as a distinctly Romantic dramatist."
    }
  },
  {
    "title": "Violin Concerto in E minor (Op. 64)",
    "artist": "Felix Mendelssohn",
    "year": 1844,
    "description": "Felix Mendelssohn",
    "videos": [
      "R_3da0fPLQs",
      "I03Hs6dwj7E",
      "vzbC39utkTw"
    ],
    "genre": {
      "title": "Romantic violin concerto",
      "description": "A radiant concerto of seamless lyricism, innovatively linking its three movements without pause. It is among the most beloved and frequently performed of all violin concertos."
    }
  },
  {
    "title": "Songs Without Words (Spring Song, Op. 62 No. 6)",
    "artist": "Felix Mendelssohn",
    "year": 1844,
    "description": "Felix Mendelssohn",
    "videos": [
      "QPwNbEySjG4",
      "9E6b3swbnWg",
      "xOJWbo3TVKI"
    ],
    "genre": {
      "title": "Romantic piano miniature",
      "description": "Part of Mendelssohn's collections of lyrical 'song-like' piano pieces without text. The buoyant 'Spring Song' is among the most cherished domestic Romantic miniatures."
    }
  },
  {
    "title": "Tannhäuser (Overture)",
    "artist": "Richard Wagner",
    "year": 1845,
    "description": "Richard Wagner",
    "videos": [
      "SRmCEGHt-Qk",
      "XdqRLSWXDlM",
      "o-NI4WixVUg"
    ],
    "genre": {
      "title": "Romantic opera",
      "description": "An opera of sacred and profane love whose grand overture contrasts the Pilgrims' Chorus with the sensual music of Venusberg. It expanded Wagner's vision of music drama."
    }
  },
  {
    "title": "Piano Concerto in A minor (Op. 54)",
    "artist": "Robert Schumann",
    "year": 1845,
    "description": "Robert Schumann",
    "videos": [
      "4RQoJjhFv2s",
      "Ynky7qoPnUU",
      "fWDrJT0s1s8"
    ],
    "genre": {
      "title": "Romantic piano concerto",
      "description": "A poetic concerto treating soloist and orchestra as intimate partners rather than rivals. Its lyrical first movement and joyous finale make it a cornerstone of the Romantic repertoire."
    }
  },
  {
    "title": "Hungarian Rhapsody No. 2 in C-sharp minor (S. 244)",
    "artist": "Franz Liszt",
    "year": 1847,
    "description": "Franz Liszt",
    "videos": [
      "LdH1hSWGFGU",
      "6oGEN7oS2z4",
      "goeOUTRy2es"
    ],
    "genre": {
      "title": "Romantic virtuoso piano work",
      "description": "A dazzling rhapsody alternating a brooding 'lassan' with a fiery 'friska' in the style of Hungarian gypsy music. Its bravura writing made it a showpiece of Romantic virtuosity."
    }
  },
  {
    "title": "Liebestraum No. 3 (S. 541)",
    "artist": "Franz Liszt",
    "year": 1850,
    "description": "Franz Liszt",
    "videos": [
      "MBOa-2b4uQQ",
      "FZ651tNXp0Y",
      "ZXQql0Gp6nY"
    ],
    "genre": {
      "title": "Romantic piano work",
      "description": "A rapturous 'dream of love' built on a soaring melody framed by cascading arpeggios. It is the most famous of Liszt's three Liebesträume and a staple of the salon repertoire."
    }
  },
  {
    "title": "Lohengrin: Bridal Chorus",
    "artist": "Richard Wagner",
    "year": 1850,
    "description": "Richard Wagner",
    "videos": [
      "J2lX86w-pT4",
      "Cx1tlrkufnY",
      "DZPjHUPkKpk"
    ],
    "genre": {
      "title": "Romantic opera chorus",
      "description": "The 'Treulich geführt' chorus from Wagner's Romantic opera 'Lohengrin', universally known as 'Here Comes the Bride'. It became the standard Western wedding processional."
    }
  },
  {
    "title": "Rigoletto (La donna è mobile / Quartet)",
    "artist": "Giuseppe Verdi",
    "year": 1851,
    "description": "Giuseppe Verdi",
    "videos": [
      "a8-vZJNY10k",
      "BUya6roaX0E",
      "8A3zetSuYRg"
    ],
    "genre": {
      "title": "Italian Romantic opera",
      "description": "A dark tragedy of a court jester and his doomed daughter, famous for the duke's aria 'La donna è mobile' and a celebrated act-three quartet. It marks Verdi's rise to operatic mastery."
    }
  },
  {
    "title": "Rigoletto",
    "artist": "Giuseppe Verdi",
    "year": 1851,
    "description": "Giuseppe Verdi",
    "videos": [
      "8A3zetSuYRg",
      "a8-vZJNY10k",
      "xCFEk6Y8TmM"
    ],
    "genre": {
      "title": "Italian Romantic opera",
      "description": "A pivotal mid-Romantic Italian opera built on dark melodrama and unforgettable melodies such as 'La donna è mobile'. It marked Verdi's leap into psychologically rich music drama."
    }
  },
  {
    "title": "Piano Sonata in B minor (S. 178)",
    "artist": "Franz Liszt",
    "year": 1853,
    "description": "Franz Liszt",
    "videos": [
      "36SDx8bue08",
      "VCHE-UPwBJA",
      "H1Dvg2MxQn8"
    ],
    "genre": {
      "title": "Romantic piano sonata",
      "description": "A vast single-movement sonata of thematic transformation, fusing multiple movements into one continuous, dramatic span. It is widely regarded as the supreme Romantic piano sonata."
    }
  },
  {
    "title": "La traviata (Brindisi / Prelude)",
    "artist": "Giuseppe Verdi",
    "year": 1853,
    "description": "Giuseppe Verdi",
    "videos": [
      "afhAqMeeQJk",
      "pu7zWrIMV_g",
      "l7eHO_PEWLk"
    ],
    "genre": {
      "title": "Italian Romantic opera",
      "description": "A poignant tragedy of a Parisian courtesan's love and sacrifice, opening with the famous drinking song 'Libiamo.' It is among the most performed operas in the world."
    }
  },
  {
    "title": "Il trovatore (Anvil Chorus)",
    "artist": "Giuseppe Verdi",
    "year": 1853,
    "description": "Giuseppe Verdi",
    "videos": [
      "MdX3T_Kjcos",
      "QDLOOpCEvo8",
      "uFS92xkXuqg"
    ],
    "genre": {
      "title": "Italian Romantic opera",
      "description": "A melodramatic tale of love, vengeance and mistaken identity, bursting with rousing choruses including the famous 'Anvil Chorus.' It exemplifies Verdi's full-blooded middle-period style."
    }
  },
  {
    "title": "La Traviata",
    "artist": "Giuseppe Verdi",
    "year": 1853,
    "description": "Giuseppe Verdi",
    "videos": [
      "pu7zWrIMV_g",
      "l7eHO_PEWLk",
      "WpTmUJO0fus"
    ],
    "genre": {
      "title": "Italian Romantic opera",
      "description": "One of the most performed operas ever written, tracing the doomed courtesan Violetta through intimate, song-like arias. Its blend of lyricism and tragedy defined Romantic Italian theatre."
    }
  },
  {
    "title": "Les Préludes (Symphonic Poem No. 3, S. 97)",
    "artist": "Franz Liszt",
    "year": 1854,
    "description": "Franz Liszt",
    "videos": [
      "psCI_CQ9jaU",
      "IC20YIllemg",
      "jb2bkVQwtBs"
    ],
    "genre": {
      "title": "Romantic symphonic poem",
      "description": "Liszt's most famous symphonic poem and a defining example of the genre he invented, depicting life as a series of preludes to the unknown. It pioneered the single-movement programmatic orchestral work."
    }
  },
  {
    "title": "Tristan und Isolde",
    "artist": "Richard Wagner",
    "year": 1859,
    "description": "Richard Wagner",
    "videos": [
      "5NvUyCdKAxM",
      "n4bqRlNSQQE",
      "5cLh7bRY-Rk"
    ],
    "genre": {
      "title": "Late Romantic music drama",
      "description": "A landmark music drama whose 'Tristan chord' and endless chromaticism pushed tonality to its breaking point. It reshaped the harmonic future of Western music toward modernism."
    }
  },
  {
    "title": "The Blue Danube Waltz",
    "artist": "Johann Strauss II",
    "year": 1866,
    "description": "Johann Strauss II",
    "videos": [
      "vtWQ1fDjaRc",
      "IDaJ7rFg66A",
      "zPmFXf-Ljlw"
    ],
    "genre": {
      "title": "Viennese concert waltz",
      "description": "The most famous of all Viennese waltzes, emblematic of 19th-century Vienna's dance culture. Its sweeping triple-time melody became a symbol of Romantic elegance."
    }
  },
  {
    "title": "Night on Bald Mountain",
    "artist": "Modest Mussorgsky",
    "year": 1867,
    "description": "Modest Mussorgsky",
    "videos": [
      "52iOdAVU4C8",
      "-vKnF9YQE7E",
      "by4khgR7Q5k"
    ],
    "genre": {
      "title": "Romantic symphonic poem",
      "description": "A dark tone poem depicting a witches' sabbath on St John's Night, full of demonic energy. Its menacing brass theme became iconic through 'Fantasia'."
    }
  },
  {
    "title": "Piano Concerto in A minor",
    "artist": "Edvard Grieg",
    "year": 1868,
    "description": "Edvard Grieg",
    "videos": [
      "I1Yoyz6_Los",
      "pZtKXXrm-Xs",
      "udnkx9hi7Yk"
    ],
    "genre": {
      "title": "Romantic piano concerto",
      "description": "A beloved Norwegian-flavored concerto opening with a dramatic descending cascade from the soloist. Its lyrical themes and folk colors made it a Romantic favorite."
    }
  },
  {
    "title": "A German Requiem",
    "artist": "Johannes Brahms",
    "year": 1868,
    "description": "Johannes Brahms",
    "videos": [
      "ZXU9vqVdudM",
      "jeCtv_2Zgu0",
      "k7iafiLXU3k"
    ],
    "genre": {
      "title": "Late Romantic choral work",
      "description": "A monumental sacred choral work setting German biblical texts focused on consolation for the living rather than judgment of the dead. It established Brahms as a leading symphonic-choral voice."
    }
  },
  {
    "title": "Lullaby (Wiegenlied)",
    "artist": "Johannes Brahms",
    "year": 1868,
    "description": "Johannes Brahms",
    "videos": [
      "EtEDeEkg_ig",
      "IXcGORjWte8",
      "T6nb35I9w-8"
    ],
    "genre": {
      "title": "Romantic art song",
      "description": "The world's most famous lullaby, a tender cradle song of gentle rocking melody. Its simple beauty has made it a universal bedtime tune."
    }
  },
  {
    "title": "Hungarian Dance No. 5",
    "artist": "Johannes Brahms",
    "year": 1869,
    "description": "Johannes Brahms",
    "videos": [
      "Nzo3atXtm54",
      "mmCnQDUSO4I",
      "O192eo9zbT4"
    ],
    "genre": {
      "title": "Romantic dance",
      "description": "The most famous of Brahms's spirited Hungarian Dances, built on fiery csárdás rhythms. Its sudden tempo shifts made it a popular-concert staple."
    }
  },
  {
    "title": "Die Walküre: Ride of the Valkyries",
    "artist": "Richard Wagner",
    "year": 1870,
    "description": "Richard Wagner",
    "videos": [
      "hQM97_iNXhk",
      "PSuRJueqsQg",
      "s2RiOhYpRFc"
    ],
    "genre": {
      "title": "Late Romantic opera orchestral excerpt",
      "description": "The thunderous orchestral opening to Act III of 'Die Walküre' from the 'Ring' cycle, depicting the warrior-maidens in flight. It is among the most recognizable passages in all opera."
    }
  },
  {
    "title": "Aida",
    "artist": "Giuseppe Verdi",
    "year": 1871,
    "description": "Giuseppe Verdi",
    "videos": [
      "AssDQbaIP_I",
      "3CJR7OwlsBk",
      "pEvrqfe_CVA"
    ],
    "genre": {
      "title": "Italian grand opera",
      "description": "A grand Egyptian-set opera famed for its 'Triumphal March' and sweeping spectacle. It crowned Verdi's mature mastery of large-scale Romantic theatre."
    }
  },
  {
    "title": "The Moldau (Vltava)",
    "artist": "Bedřich Smetana",
    "year": 1874,
    "description": "Bedřich Smetana",
    "videos": [
      "l6kqu2mk-Kw",
      "Kl0-Pdo0vi8",
      "BhAwqPBPIEM"
    ],
    "genre": {
      "title": "Romantic nationalist symphonic poem",
      "description": "A tone poem from the cycle 'Má vlast' tracing the Vltava river through the Bohemian landscape. Its flowing main theme is a beloved emblem of Czech nationalism."
    }
  },
  {
    "title": "Danse Macabre",
    "artist": "Camille Saint-Saëns",
    "year": 1874,
    "description": "Camille Saint-Saëns",
    "videos": [
      "ZDWMoJz8OYU",
      "YyknBTm_YyM",
      "71fZhMXlGT4"
    ],
    "genre": {
      "title": "Late Romantic symphonic poem",
      "description": "A vivid tone poem depicting Death playing the violin while skeletons dance at midnight. Its xylophone rattling bones is one of Romanticism's great orchestral effects."
    }
  },
  {
    "title": "Verdi Requiem",
    "artist": "Giuseppe Verdi",
    "year": 1874,
    "description": "Giuseppe Verdi",
    "videos": [
      "eaebqmzm0RA",
      "X6cogix3cwQ",
      "60mRj_9Rybc"
    ],
    "genre": {
      "title": "Late Romantic sacred work",
      "description": "A vast Requiem Mass of operatic intensity, especially the cataclysmic 'Dies irae'. It fuses sacred liturgy with theatrical grandeur on a symphonic scale."
    }
  },
  {
    "title": "Pictures at an Exhibition",
    "artist": "Modest Mussorgsky",
    "year": 1874,
    "description": "Modest Mussorgsky",
    "videos": [
      "XwJMpQiqCm4",
      "gexw3NUTVxk",
      "yUfSstK3MOc"
    ],
    "genre": {
      "title": "Romantic piano suite (later orchestrated)",
      "description": "A vivid suite of musical 'pictures' inspired by an art exhibition, linked by a recurring 'Promenade'. Best known in Ravel's dazzling orchestration."
    }
  },
  {
    "title": "Peer Gynt Suite (In the Hall of the Mountain King)",
    "artist": "Edvard Grieg",
    "year": 1875,
    "description": "Edvard Grieg",
    "videos": [
      "OqvHWUZZdP0",
      "p6J9k3HVhz8",
      "PdNilhpO0jY"
    ],
    "genre": {
      "title": "Romantic incidental music",
      "description": "Incidental music for Ibsen's play, including the relentlessly accelerating 'In the Hall of the Mountain King' and the serene 'Morning Mood'. It is a cornerstone of Norwegian nationalist Romanticism."
    }
  },
  {
    "title": "Carmen",
    "artist": "Georges Bizet",
    "year": 1875,
    "description": "Georges Bizet",
    "videos": [
      "OGw20DHzZxA",
      "6qMrNQzKzOc",
      "-hfkMsaJiFo"
    ],
    "genre": {
      "title": "French Romantic opera",
      "description": "A fiery opéra-comique of passion and fate set in Seville, brimming with the 'Habanera' and 'Toreador Song'. Initially scandalous, it became one of the world's most beloved operas."
    }
  },
  {
    "title": "Piano Concerto No. 1",
    "artist": "Pyotr Ilyich Tchaikovsky",
    "year": 1875,
    "description": "Pyotr Ilyich Tchaikovsky",
    "videos": [
      "2DmfJu3oNDM",
      "BWerj8FcprM",
      "SAkJFfg9_hg"
    ],
    "genre": {
      "title": "Romantic piano concerto",
      "description": "A thunderous concerto opening with one of the most famous introductions in music. Its virtuosic sweep made it a cornerstone of the Romantic concerto repertoire."
    }
  },
  {
    "title": "Symphony No. 1",
    "artist": "Johannes Brahms",
    "year": 1876,
    "description": "Johannes Brahms",
    "videos": [
      "ctV9mgwk9eY",
      "BRdEgS_OHAk",
      "51xDbdUFc8o"
    ],
    "genre": {
      "title": "Late Romantic symphony",
      "description": "A symphony two decades in the making, hailed as 'Beethoven's Tenth' for its monumental finale. It reasserted the symphony as a vehicle of profound Romantic argument."
    }
  },
  {
    "title": "Swan Lake",
    "artist": "Pyotr Ilyich Tchaikovsky",
    "year": 1876,
    "description": "Pyotr Ilyich Tchaikovsky",
    "videos": [
      "F2d_vv2w--8",
      "9cNQFB0TDfY",
      "b4zkDz6CIQA"
    ],
    "genre": {
      "title": "Romantic ballet",
      "description": "The archetypal Romantic ballet, telling of the enchanted swan-princess Odette with shimmering, melodically rich music. Its lakeside theme is instantly recognizable worldwide."
    }
  },
  {
    "title": "Symphony No. 2",
    "artist": "Johannes Brahms",
    "year": 1877,
    "description": "Johannes Brahms",
    "videos": [
      "FAuUUIvfkp0",
      "qbcfuMlNRWg",
      "EDYauTx76yI"
    ],
    "genre": {
      "title": "Late Romantic symphony",
      "description": "A sunny, pastoral symphony often called Brahms's 'Pastoral', completed swiftly after his weighty First. Its lyrical warmth balances rigorous Classical structure."
    }
  },
  {
    "title": "Slavonic Dances",
    "artist": "Antonín Dvořák",
    "year": 1878,
    "description": "Antonín Dvořák",
    "videos": [
      "ntUWGb4W2Rg",
      "mLIEzogowTQ",
      "fcpDZqAeSCs"
    ],
    "genre": {
      "title": "Romantic nationalist dances",
      "description": "A set of vivacious orchestral dances drawing on Bohemian and Slavic folk rhythms. They brought Dvořák international fame and exemplify musical nationalism."
    }
  },
  {
    "title": "Violin Concerto",
    "artist": "Johannes Brahms",
    "year": 1878,
    "description": "Johannes Brahms",
    "videos": [
      "UFl9xuYP5T8",
      "KDJ6Wbzgy3E",
      "qqtLVvoXLig"
    ],
    "genre": {
      "title": "Late Romantic concerto",
      "description": "A symphonic concerto of grandeur and lyrical depth, written for the virtuoso Joseph Joachim. It stands among the supreme Romantic works for violin and orchestra."
    }
  },
  {
    "title": "In the Steppes of Central Asia",
    "artist": "Alexander Borodin",
    "year": 1880,
    "description": "Alexander Borodin",
    "videos": [
      "g4tlQxaHetI",
      "wiexn6O9To4",
      "ZaO9FBtDzyk"
    ],
    "genre": {
      "title": "Romantic symphonic sketch",
      "description": "An evocative orchestral sketch portraying a caravan crossing the Asian steppe, blending Russian and Eastern melodies. It epitomizes the exoticism of the Russian nationalist school."
    }
  },
  {
    "title": "1812 Overture",
    "artist": "Pyotr Ilyich Tchaikovsky",
    "year": 1880,
    "description": "Pyotr Ilyich Tchaikovsky",
    "videos": [
      "JAjN9WkTwA8",
      "u2W1Wi2U9sQ",
      "LGPqtXv72Wg"
    ],
    "genre": {
      "title": "Romantic festival overture",
      "description": "A bombastic commemorative overture marking Russia's repulse of Napoleon, complete with cannon fire and bells. It is a perennial favorite of outdoor concerts."
    }
  },
  {
    "title": "Romeo and Juliet Fantasy Overture",
    "artist": "Pyotr Ilyich Tchaikovsky",
    "year": 1880,
    "description": "Pyotr Ilyich Tchaikovsky",
    "videos": [
      "9VMCiewc7mE",
      "f6qZUCi7ToQ",
      "k7hTk2bQJnw"
    ],
    "genre": {
      "title": "Romantic symphonic overture",
      "description": "A fantasy-overture after Shakespeare whose soaring love theme is among the most quoted melodies in music. It marries dramatic conflict with sweeping Romantic lyricism."
    }
  },
  {
    "title": "Symphony No. 7",
    "artist": "Anton Bruckner",
    "year": 1883,
    "description": "Anton Bruckner",
    "videos": [
      "uaV3eEJB55c",
      "v0xyhNgs9Xo",
      "dtrH-TWCHxY"
    ],
    "genre": {
      "title": "Late Romantic symphony",
      "description": "A vast, cathedral-like symphony whose Adagio mourns the death of Wagner, scored with Wagner tubas. It secured Bruckner's reputation as a symphonic monumentalist."
    }
  },
  {
    "title": "Symphony No. 4",
    "artist": "Johannes Brahms",
    "year": 1885,
    "description": "Johannes Brahms",
    "videos": [
      "o69YVL_XKJo",
      "7QLuYj2jxoc",
      "t894eGoymio"
    ],
    "genre": {
      "title": "Late Romantic symphony",
      "description": "Brahms's final symphony, crowned by a monumental passacaglia finale rooted in Baroque variation form. It fuses austere intellect with deep autumnal feeling."
    }
  },
  {
    "title": "The Carnival of the Animals",
    "artist": "Camille Saint-Saëns",
    "year": 1886,
    "description": "Camille Saint-Saëns",
    "videos": [
      "3qrKjywjo7Q",
      "b44-5M4e9nI",
      "hCsB3WtlyaM"
    ],
    "genre": {
      "title": "Romantic musical suite",
      "description": "A witty chamber suite of musical portraits of animals, including the famous cello solo 'The Swan'. Saint-Saëns intended it as a private joke yet it became a beloved classic."
    }
  },
  {
    "title": "Symphony No. 3 'Organ Symphony'",
    "artist": "Camille Saint-Saëns",
    "year": 1886,
    "description": "Camille Saint-Saëns",
    "videos": [
      "swDuXAKLy8U",
      "zAjTC2HFcYI",
      "yeckyz-GJJk"
    ],
    "genre": {
      "title": "Late Romantic symphony",
      "description": "A grand symphony incorporating organ and piano, building to a blazing chorale finale. It represents the summit of French Romantic symphonic writing."
    }
  },
  {
    "title": "Requiem",
    "artist": "Gabriel Fauré",
    "year": 1888,
    "description": "Gabriel Fauré",
    "videos": [
      "p-uzBqbMUvc",
      "4xZbnY5jQSk",
      "5fUi2Bt4U3o"
    ],
    "genre": {
      "title": "Late Romantic sacred work",
      "description": "A serene, consoling Requiem emphasizing peace and rest, crowned by the radiant 'In Paradisum' and 'Pie Jesu'. It offers a gentle counterpoint to dramatic Romantic Requiems."
    }
  },
  {
    "title": "Symphony No. 1 'Titan'",
    "artist": "Gustav Mahler",
    "year": 1888,
    "description": "Gustav Mahler",
    "videos": [
      "_MjEp_SAfS0",
      "4XbHLFkg_Mw",
      "2tAS9WxucBU"
    ],
    "genre": {
      "title": "Late Romantic symphony",
      "description": "Mahler's expansive First Symphony, ranging from nature-evoking calm to a stormy, triumphant finale. It announced his vision of the symphony as an all-embracing world."
    }
  },
  {
    "title": "Scheherazade",
    "artist": "Nikolai Rimsky-Korsakov",
    "year": 1888,
    "description": "Nikolai Rimsky-Korsakov",
    "videos": [
      "zY4w4_W30aQ",
      "6exoB7IW8qw",
      "17lEx0ytE_0"
    ],
    "genre": {
      "title": "Romantic symphonic suite",
      "description": "A lavishly orchestrated symphonic suite evoking the Arabian Nights through a recurring solo-violin Scheherazade theme. It is a showcase of late-Romantic orchestral color."
    }
  },
  {
    "title": "Sleeping Beauty",
    "artist": "Pyotr Ilyich Tchaikovsky",
    "year": 1889,
    "description": "Pyotr Ilyich Tchaikovsky",
    "videos": [
      "FBEqq2HO-yI",
      "ODeNHRtVNO4",
      "qqejv_BQ7Zg"
    ],
    "genre": {
      "title": "Romantic ballet",
      "description": "A sumptuous full-length ballet of fairy-tale grandeur, including the famous Waltz and Rose Adagio. It marked the height of Imperial Russian ballet collaboration."
    }
  },
  {
    "title": "The Nutcracker",
    "artist": "Pyotr Ilyich Tchaikovsky",
    "year": 1892,
    "description": "Pyotr Ilyich Tchaikovsky",
    "videos": [
      "gFjveJ5sgeQ",
      "zV1qLYukTH8",
      "M8J8urC_8Jw"
    ],
    "genre": {
      "title": "Romantic ballet",
      "description": "A Christmas ballet of enchanting set pieces, including the 'Dance of the Sugar Plum Fairy' and 'Waltz of the Flowers'. It is the most beloved holiday score worldwide."
    }
  },
  {
    "title": "Symphony No. 9 'From the New World'",
    "artist": "Antonín Dvořák",
    "year": 1893,
    "description": "Antonín Dvořák",
    "videos": [
      "rCxErKvSMTY",
      "XZTeavJ9frA",
      "vl0NqrP-5lY"
    ],
    "genre": {
      "title": "Late Romantic symphony",
      "description": "Composed during Dvořák's American sojourn, weaving spiritual-like melodies into a Bohemian symphonic frame. Its 'Largo' theme is among the most famous in the repertoire."
    }
  },
  {
    "title": "Symphony No. 6 'Pathétique'",
    "artist": "Pyotr Ilyich Tchaikovsky",
    "year": 1893,
    "description": "Pyotr Ilyich Tchaikovsky",
    "videos": [
      "qVA1ieo9Js4",
      "SVnF3x44rvU",
      "KvGC8hZC29U"
    ],
    "genre": {
      "title": "Late Romantic symphony",
      "description": "Tchaikovsky's emotionally shattering final symphony, ending uniquely with a despairing slow movement. Premiered days before his death, it reads as a musical farewell."
    }
  },
  {
    "title": "Prélude à l'après-midi d'un faune",
    "artist": "Claude Debussy",
    "year": 1894,
    "description": "Claude Debussy",
    "videos": [
      "Y9iDOt2WbjY",
      "bYyK922PsUw",
      "0QPGWMXjYQ0"
    ],
    "genre": {
      "title": "Impressionism",
      "description": "A symphonic poem inspired by Mallarmé's poem, often cited as the work that opened the door to musical Impressionism and modernism. Its fluid harmony and flute opening were revolutionary."
    }
  },
  {
    "title": "Symphony No. 2 'Resurrection'",
    "artist": "Gustav Mahler",
    "year": 1894,
    "description": "Gustav Mahler",
    "videos": [
      "RkLIKptIqGo",
      "wgtSa6XYWdE",
      "L7116asiGmI"
    ],
    "genre": {
      "title": "Late Romantic",
      "description": "A vast five-movement symphony for orchestra, soloists and chorus depicting death and resurrection. Its choral finale is one of the great climaxes of the repertoire."
    }
  },
  {
    "title": "Cello Concerto in B minor",
    "artist": "Antonín Dvořák",
    "year": 1895,
    "description": "Antonín Dvořák",
    "videos": [
      "wBFeeOt_SGY",
      "t6fJO4hhRtQ",
      "nJSlmoXpzfM"
    ],
    "genre": {
      "title": "Late Romantic concerto",
      "description": "Widely regarded as the greatest cello concerto ever written, rich in Bohemian lyricism and symphonic grandeur. It expanded the expressive range of the solo cello."
    }
  },
  {
    "title": "La Bohème",
    "artist": "Giacomo Puccini",
    "year": 1896,
    "description": "Giacomo Puccini",
    "videos": [
      "OkHGUaB1Bs8",
      "B4o4vDYQKA4",
      "Fk4rtSm5BXE"
    ],
    "genre": {
      "title": "Italian Romantic opera",
      "description": "A tender verismo opera of bohemian love and loss in Paris, brimming with arias like 'Che gelida manina'. It remains one of the most performed and moving operas."
    }
  },
  {
    "title": "Also sprach Zarathustra",
    "artist": "Richard Strauss",
    "year": 1896,
    "description": "Richard Strauss",
    "videos": [
      "Szdziw4tI9o",
      "GfwAPg4rQQE",
      "ayDohuoqnIs"
    ],
    "genre": {
      "title": "Late Romantic (tone poem)",
      "description": "A tone poem after Nietzsche whose sunrise opening became globally famous through Kubrick's 2001: A Space Odyssey. A landmark of orchestral grandeur."
    }
  },
  {
    "title": "Verklärte Nacht",
    "artist": "Arnold Schoenberg",
    "year": 1899,
    "description": "Arnold Schoenberg",
    "videos": [
      "0DR3bvkUCBA",
      "vQVkbKULKpI",
      "5h5Xc-rUef4"
    ],
    "genre": {
      "title": "Late Romantic",
      "description": "A lush, programmatic string sextet (later arranged for string orchestra) rooted in Wagnerian chromaticism. It marks Schoenberg's tonal apprenticeship before atonality."
    }
  },
  {
    "title": "Enigma Variations (Nimrod)",
    "artist": "Edward Elgar",
    "year": 1899,
    "description": "Edward Elgar",
    "videos": [
      "7iM5dymBBI4",
      "p6J9k3HVhz8",
      "_8NOVGHJmRs"
    ],
    "genre": {
      "title": "Late Romantic orchestral variations",
      "description": "A set of orchestral variations each portraying one of Elgar's friends, crowned by the elegiac 'Nimrod'. It established Elgar as England's leading composer."
    }
  },
  {
    "title": "Finlandia",
    "artist": "Jean Sibelius",
    "year": 1899,
    "description": "Jean Sibelius",
    "videos": [
      "qOSaT6U4e-8",
      "wqRHRfcnOwQ",
      "fE0RbPsC9uE"
    ],
    "genre": {
      "title": "Late Romantic / Nationalism",
      "description": "A patriotic tone poem that became an anthem of Finnish national identity. Its stirring hymn-like central melody is among the most recognizable in orchestral music."
    }
  },
  {
    "title": "Pavane pour une infante défunte",
    "artist": "Maurice Ravel",
    "year": 1899,
    "description": "Maurice Ravel",
    "videos": [
      "2_c8JRCKq1A",
      "DVtNt-6OTM8",
      "L6l5vRaoo88"
    ],
    "genre": {
      "title": "Impressionism",
      "description": "A gentle, nostalgic pavane originally for piano and later orchestrated. Its archaic elegance and tender melody made it instantly popular."
    }
  },
  {
    "title": "Flight of the Bumblebee",
    "artist": "Nikolai Rimsky-Korsakov",
    "year": 1900,
    "description": "Nikolai Rimsky-Korsakov",
    "videos": [
      "59QXMCsx_5E",
      "aYAJopwEYv8",
      "7pt8JpOzGv4"
    ],
    "genre": {
      "title": "Romantic orchestral interlude",
      "description": "A breathless orchestral interlude from the opera 'The Tale of Tsar Saltan', mimicking a buzzing bumblebee through rapid chromatic runs. It became a virtuoso showpiece across instruments."
    }
  },
  {
    "title": "Piano Concerto No. 2 in C minor",
    "artist": "Sergei Rachmaninoff",
    "year": 1901,
    "description": "Sergei Rachmaninoff",
    "videos": [
      "NsqXCO0ADwM",
      "rEGOihjqO9w",
      "3khFqp4QHpw"
    ],
    "genre": {
      "title": "Late Romanticism",
      "description": "One of the most beloved piano concertos, blending sweeping lyricism with virtuosic writing. It restored the composer's confidence after a creative crisis."
    }
  },
  {
    "title": "Symphony No. 5 (Adagietto)",
    "artist": "Gustav Mahler",
    "year": 1902,
    "description": "Gustav Mahler",
    "videos": [
      "Bj6KLv7kv2Q",
      "Les39aIKbzE",
      "QNRxHyZDU-Q"
    ],
    "genre": {
      "title": "Late Romantic",
      "description": "The famous Adagietto for strings and harp is a tender slow movement made iconic by Visconti's film Death in Venice. The full symphony spans grief to triumph."
    }
  },
  {
    "title": "Symphony No. 2 in D major",
    "artist": "Jean Sibelius",
    "year": 1902,
    "description": "Jean Sibelius",
    "videos": [
      "2lHncn68uyQ",
      "iXU8EXL7a_4",
      "-10jYSvWYeI"
    ],
    "genre": {
      "title": "Late Romantic / Nationalism",
      "description": "A monumental symphony built from organically growing fragments, culminating in a triumphant finale. It is the most popular of Sibelius's symphonies."
    }
  },
  {
    "title": "La Mer",
    "artist": "Claude Debussy",
    "year": 1905,
    "description": "Claude Debussy",
    "videos": [
      "fe1pB9KqHRg",
      "UCF2UxOluUM",
      "lpmOHl5QChg"
    ],
    "genre": {
      "title": "Impressionism",
      "description": "Three symphonic sketches evoking the sea's moods through shimmering orchestral color. It is a cornerstone of orchestral Impressionism."
    }
  },
  {
    "title": "Suite bergamasque (Clair de Lune)",
    "artist": "Claude Debussy",
    "year": 1905,
    "description": "Claude Debussy",
    "videos": [
      "fZrm9h3JRGs",
      "WNcsUNKlAKw",
      "-Bxpm0EmOMU"
    ],
    "genre": {
      "title": "Impressionism (piano)",
      "description": "Clair de Lune, the third movement of this piano suite, is among the most famous piano pieces ever written. Its serene moonlit lyricism epitomizes Impressionist piano writing."
    }
  },
  {
    "title": "Violin Concerto in D minor",
    "artist": "Jean Sibelius",
    "year": 1905,
    "description": "Jean Sibelius",
    "videos": [
      "3u-unvYedx8",
      "J0w0t4Qn6LY",
      "06WmTl_d1FM"
    ],
    "genre": {
      "title": "Late Romantic / Nationalism",
      "description": "The only concerto Sibelius wrote, combining icy Nordic atmosphere with fierce virtuosity. It is a staple of the violin repertoire."
    }
  },
  {
    "title": "The Unanswered Question",
    "artist": "Charles Ives",
    "year": 1908,
    "description": "Charles Ives",
    "videos": [
      "WBiL0VEttZw",
      "0QPGWMXjYQ0",
      "kkaOz48cq2g"
    ],
    "genre": {
      "title": "American Modernism",
      "description": "A pioneering work layering a contemplative string backdrop, a questioning trumpet, and agitated woodwinds. It anticipated polytonality and spatial music decades early."
    }
  },
  {
    "title": "Das Lied von der Erde",
    "artist": "Gustav Mahler",
    "year": 1909,
    "description": "Gustav Mahler",
    "videos": [
      "5c7LzrI0ELw",
      "IUZLLmUpaTk",
      "_Z4nnIJ0A7E"
    ],
    "genre": {
      "title": "Late Romantic (symphonic song cycle)",
      "description": "A symphony in the form of a song cycle for two soloists and orchestra, set to Chinese poetry. Its farewell finale, 'Der Abschied', is profoundly moving."
    }
  },
  {
    "title": "The Firebird",
    "artist": "Igor Stravinsky",
    "year": 1910,
    "description": "Igor Stravinsky",
    "videos": [
      "UclWVWurxgM",
      "kd1xYKGnOEw",
      "MHmk7yccvws"
    ],
    "genre": {
      "title": "Modernism (ballet)",
      "description": "Stravinsky's first ballet for the Ballets Russes, blending Russian folklore with dazzling orchestration. Its Infernal Dance and Finale remain showpieces."
    }
  },
  {
    "title": "Fantasia on a Theme by Thomas Tallis",
    "artist": "Ralph Vaughan Williams",
    "year": 1910,
    "description": "Ralph Vaughan Williams",
    "videos": [
      "e6pEIHtffqQ",
      "ihx5LCF1yJY",
      "0U6sWqfrnTs"
    ],
    "genre": {
      "title": "English Pastoral",
      "description": "A work for double string orchestra built on a Tudor hymn tune, evoking the spaciousness of an English cathedral. A landmark of the English musical renaissance."
    }
  },
  {
    "title": "Petrushka",
    "artist": "Igor Stravinsky",
    "year": 1911,
    "description": "Igor Stravinsky",
    "videos": [
      "esD90diWZds",
      "AuwUaA17ZHs",
      "Fzp89DVuUlI"
    ],
    "genre": {
      "title": "Modernism (ballet)",
      "description": "A ballet about a puppet who comes to life, marked by bitonal harmony and brilliant orchestration. The 'Petrushka chord' became a modernist signature."
    }
  },
  {
    "title": "Der Rosenkavalier",
    "artist": "Richard Strauss",
    "year": 1911,
    "description": "Richard Strauss",
    "videos": [
      "7PP5cMyts58",
      "7w2uvF1Dl88",
      "cSdtBE-LywQ"
    ],
    "genre": {
      "title": "Late Romantic (opera)",
      "description": "A comic opera set in 18th-century Vienna, famous for its lush waltzes and ravishing final trio. A high point of Strauss's operatic output."
    }
  },
  {
    "title": "Pierrot Lunaire",
    "artist": "Arnold Schoenberg",
    "year": 1912,
    "description": "Arnold Schoenberg",
    "videos": [
      "vxyN0qJvZOg",
      "c8adOgOUlFU",
      "48WnNgrH57E"
    ],
    "genre": {
      "title": "Expressionism / Atonality",
      "description": "A cycle of 21 melodramas for voice and chamber ensemble using Sprechstimme (speech-song). A defining work of musical Expressionism."
    }
  },
  {
    "title": "Daphnis et Chloé",
    "artist": "Maurice Ravel",
    "year": 1912,
    "description": "Maurice Ravel",
    "videos": [
      "HcsKthVVQwU",
      "fDm_hU3y_gg",
      "sxPcroAcCfY"
    ],
    "genre": {
      "title": "Impressionism (ballet)",
      "description": "A 'choreographic symphony' for the Ballets Russes with wordless chorus and the famous Daybreak sequence. Ravel's largest and most opulent orchestral score."
    }
  },
  {
    "title": "The Rite of Spring",
    "artist": "Igor Stravinsky",
    "year": 1913,
    "description": "Igor Stravinsky",
    "videos": [
      "5UJOaGIhG7A",
      "9Nw678fQ4dI",
      "f20vBzwMK2A"
    ],
    "genre": {
      "title": "Modernism (ballet)",
      "description": "A ballet depicting pagan ritual whose pounding rhythms and dissonance caused a riot at its premiere. It is perhaps the single most influential work of 20th-century music."
    }
  },
  {
    "title": "The Lark Ascending",
    "artist": "Ralph Vaughan Williams",
    "year": 1914,
    "description": "Ralph Vaughan Williams",
    "videos": [
      "UhJtXBAmJOw",
      "MUT2CZjo6Ow",
      "iNQgRnfeWs4"
    ],
    "genre": {
      "title": "English Pastoral",
      "description": "A 'romance' for violin and orchestra evoking a soaring skylark over the English countryside. A perennial favourite of English pastoral music."
    }
  },
  {
    "title": "Romanian Folk Dances",
    "artist": "Béla Bartók",
    "year": 1915,
    "description": "Béla Bartók",
    "videos": [
      "MbbRTCaLOcw",
      "Z50Ooqv1GFg",
      "zo0_k2H_E_M"
    ],
    "genre": {
      "title": "Modernism / Nationalism",
      "description": "A set of short dances based on Transylvanian folk tunes Bartók collected. They distill his pioneering ethnomusicological research into vivid miniatures."
    }
  },
  {
    "title": "The Planets",
    "artist": "Gustav Holst",
    "year": 1916,
    "description": "Gustav Holst",
    "videos": [
      "HP5xhyPn58U",
      "RkiiAloL6aE",
      "EE6_PacCnRw"
    ],
    "genre": {
      "title": "Modernism (orchestral suite)",
      "description": "A seven-movement orchestral suite portraying the astrological characters of the planets. 'Mars' and 'Jupiter' are among the most influential cinematic-sounding orchestral movements."
    }
  },
  {
    "title": "Piano Concerto No. 3 in C major",
    "artist": "Sergei Prokofiev",
    "year": 1921,
    "description": "Sergei Prokofiev",
    "videos": [
      "BS0SwRoYAW0",
      "rSrlrcpNu7o",
      "KDfGBmbNbMw"
    ],
    "genre": {
      "title": "Modernism (concerto)",
      "description": "A brilliant, percussive yet lyrical concerto that is the most popular of Prokofiev's piano concertos. It balances steely virtuosity with sparkling wit."
    }
  },
  {
    "title": "Rhapsody in Blue",
    "artist": "George Gershwin",
    "year": 1924,
    "description": "George Gershwin",
    "videos": [
      "cH2PH0auTUU",
      "VR8X26YpUbQ",
      "0U-IXWaapx4"
    ],
    "genre": {
      "title": "Jazz-influenced concert music",
      "description": "A jazz-infused work for piano and orchestra that fused American popular idioms with the concert hall. Its clarinet glissando opening is instantly recognizable."
    }
  },
  {
    "title": "Pines of Rome",
    "artist": "Ottorino Respighi",
    "year": 1924,
    "description": "Ottorino Respighi",
    "videos": [
      "XgE7PUXTrlo",
      "rIs2ijQ6tlg",
      "zBFSI-x2ETY"
    ],
    "genre": {
      "title": "Late Romantic / Modernism (tone poem)",
      "description": "A symphonic poem in four movements painting Roman pine groves, including a recorded nightingale and a blazing 'Pines of the Appian Way' finale. A showcase of orchestral color."
    }
  },
  {
    "title": "Wozzeck",
    "artist": "Alban Berg",
    "year": 1925,
    "description": "Alban Berg",
    "videos": [
      "b8WeX8MrThU",
      "jVmWimEX1gw",
      "SRhLO0_Ezi8"
    ],
    "genre": {
      "title": "Expressionism / Atonality (opera)",
      "description": "A harrowing atonal opera about a downtrodden soldier, structured on rigorous classical forms. It is the towering operatic achievement of the Second Viennese School."
    }
  },
  {
    "title": "An American in Paris",
    "artist": "George Gershwin",
    "year": 1928,
    "description": "George Gershwin",
    "videos": [
      "K4I2OzMltM4",
      "cH2PH0auTUU",
      "_xtyQ4Iv7jA"
    ],
    "genre": {
      "title": "Jazz-influenced concert music",
      "description": "A tone poem evoking a stroll through Paris, complete with taxi horns and a bluesy homesick interlude. It fuses jazz and the symphonic tradition."
    }
  },
  {
    "title": "Boléro",
    "artist": "Maurice Ravel",
    "year": 1928,
    "description": "Maurice Ravel",
    "videos": [
      "s_pSJOkmYBA",
      "cmNEvSFWftc",
      "Dh9bUD-hC0A"
    ],
    "genre": {
      "title": "Modernism (orchestral)",
      "description": "A single relentless crescendo over an unchanging snare-drum ostinato and repeating melody. Its hypnotic build and orchestration made it Ravel's most famous work."
    }
  },
  {
    "title": "Symphony of Psalms",
    "artist": "Igor Stravinsky",
    "year": 1930,
    "description": "Igor Stravinsky",
    "videos": [
      "_PgtW3IS2AU",
      "hBFdhhX5hZ4",
      "sr9AXMQnmGA"
    ],
    "genre": {
      "title": "Neoclassicism",
      "description": "A choral symphony setting Latin psalms, austere and ritualistic with a distinctive wind-heavy orchestration. A key work of Stravinsky's neoclassical period."
    }
  },
  {
    "title": "Piano Concerto in G major",
    "artist": "Maurice Ravel",
    "year": 1931,
    "description": "Maurice Ravel",
    "videos": [
      "0Sk4qRlDoAo",
      "5hNyYomGtEw",
      "vwVo2S8t6nk"
    ],
    "genre": {
      "title": "Neoclassicism / Jazz-influenced",
      "description": "A sparkling concerto fusing jazz idioms with Mozartean clarity and a sublime slow movement. One of Ravel's last and most beloved works."
    }
  },
  {
    "title": "Lieutenant Kijé Suite",
    "artist": "Sergei Prokofiev",
    "year": 1934,
    "description": "Sergei Prokofiev",
    "videos": [
      "DkoKGA-30cY",
      "YbaY7p5ahZo",
      "fr6eFP07uU0"
    ],
    "genre": {
      "title": "Modernism (film/suite)",
      "description": "An orchestral suite drawn from film music about a fictitious officer, including the famous 'Troika'. Witty, satirical and tuneful."
    }
  },
  {
    "title": "Rhapsody on a Theme of Paganini",
    "artist": "Sergei Rachmaninoff",
    "year": 1934,
    "description": "Sergei Rachmaninoff",
    "videos": [
      "ThTU04p3drM",
      "9ytg7T9aR_E",
      "PKUPBr0eY6Y"
    ],
    "genre": {
      "title": "Late Romanticism",
      "description": "A set of 24 variations for piano and orchestra on Paganini's Caprice, including the famous lyrical 18th variation. A virtuoso favourite."
    }
  },
  {
    "title": "Violin Concerto 'To the Memory of an Angel'",
    "artist": "Alban Berg",
    "year": 1935,
    "description": "Alban Berg",
    "videos": [
      "iNrvX5uobG0",
      "AuwUaA17ZHs",
      "P0GzNmf_AUw"
    ],
    "genre": {
      "title": "Twelve-tone / Late Modernism",
      "description": "A poignant twelve-tone concerto written as a requiem for a young girl, quoting a Bach chorale. It reconciles serial technique with deep emotion."
    }
  },
  {
    "title": "Romeo and Juliet",
    "artist": "Sergei Prokofiev",
    "year": 1935,
    "description": "Sergei Prokofiev",
    "videos": [
      "Z_hOR50u7ek",
      "mmCnQDUSO4I",
      "bYBqEs-WcCE"
    ],
    "genre": {
      "title": "Modernism (ballet)",
      "description": "A full-length ballet whose 'Dance of the Knights' (Montagues and Capulets) is one of the most dramatic orchestral themes ever written. A 20th-century ballet masterpiece."
    }
  },
  {
    "title": "Music for Strings, Percussion and Celesta",
    "artist": "Béla Bartók",
    "year": 1936,
    "description": "Béla Bartók",
    "videos": [
      "QElT9KD4uX8",
      "2EsNGS9vYe8",
      "L0bX1BVXJak"
    ],
    "genre": {
      "title": "Modernism",
      "description": "A four-movement work of arch-form structure and eerie 'night music', famously used in The Shining. One of Bartók's supreme achievements."
    }
  },
  {
    "title": "Carmina Burana",
    "artist": "Carl Orff",
    "year": 1936,
    "description": "Carl Orff",
    "videos": [
      "Yb6jULNu5ik",
      "EJC-_j3SnXk",
      "i8yXqfZeKus"
    ],
    "genre": {
      "title": "Modernism (cantata)",
      "description": "A scenic cantata setting medieval poems, framed by the thunderous 'O Fortuna'. Its primal rhythms and choruses made it one of the most performed 20th-century works."
    }
  },
  {
    "title": "Adagio for Strings",
    "artist": "Samuel Barber",
    "year": 1936,
    "description": "Samuel Barber",
    "videos": [
      "WAoLJ8GbA4Y",
      "Hc8gYoXkLZ4",
      "YVowLNuV4Zk"
    ],
    "genre": {
      "title": "American Neo-Romanticism",
      "description": "An intensely elegiac work for string orchestra arranged from his string quartet. It has become a near-universal music of mourning."
    }
  },
  {
    "title": "Peter and the Wolf",
    "artist": "Sergei Prokofiev",
    "year": 1936,
    "description": "Sergei Prokofiev",
    "videos": [
      "MfM7Y9Pcdzw",
      "oZ5WMZUbKy4",
      "Li4MDNvaV5Q"
    ],
    "genre": {
      "title": "Modernism (musical fairy tale)",
      "description": "A narrated children's piece in which each character is depicted by an instrument. It remains the classic introduction to the orchestra."
    }
  },
  {
    "title": "Symphony No. 5 in D minor",
    "artist": "Dmitri Shostakovich",
    "year": 1937,
    "description": "Dmitri Shostakovich",
    "videos": [
      "cg0M4LzEITQ",
      "5zFOf9m03-M",
      "3PQZjKNCIME"
    ],
    "genre": {
      "title": "Soviet Modernism",
      "description": "Composed as 'a Soviet artist's reply to just criticism', it balances apparent triumph with hidden tragedy. Its driving finale is one of the great symphonic climaxes."
    }
  },
  {
    "title": "Symphony No. 7 'Leningrad'",
    "artist": "Dmitri Shostakovich",
    "year": 1941,
    "description": "Dmitri Shostakovich",
    "videos": [
      "GB3zR_X25UU",
      "hR37aTd8mMM",
      "OFYCSrSvNKs"
    ],
    "genre": {
      "title": "Soviet Modernism",
      "description": "Composed during the siege of Leningrad, its relentless 'invasion' theme became a symbol of wartime resistance. A monumental statement of defiance."
    }
  },
  {
    "title": "Quartet for the End of Time",
    "artist": "Olivier Messiaen",
    "year": 1941,
    "description": "Olivier Messiaen",
    "videos": [
      "QAQmZvxVffY",
      "gh-RC6SphAY",
      "UpdmlyGYYnM"
    ],
    "genre": {
      "title": "Wartime modernism",
      "description": "Composed and premiered in a German prisoner-of-war camp, this chamber quartet for clarinet, violin, cello and piano fuses Catholic mysticism with birdsong and non-retrogradable rhythms. It stands as a transcendent threshold into the postwar era."
    }
  },
  {
    "title": "Fanfare for the Common Man",
    "artist": "Aaron Copland",
    "year": 1942,
    "description": "Aaron Copland",
    "videos": [
      "ZdqjcMmjeaA",
      "kyQ8AHNyR7k",
      "_eAilku4fOE"
    ],
    "genre": {
      "title": "American Modernism",
      "description": "A short, majestic fanfare for brass and percussion written during World War II. Its noble brass theme became an enduring American emblem."
    }
  },
  {
    "title": "Concerto for Orchestra",
    "artist": "Béla Bartók",
    "year": 1943,
    "description": "Béla Bartók",
    "videos": [
      "pG26BMDVR9E",
      "clzcGIdMaN0",
      "0DKuzKnkIro"
    ],
    "genre": {
      "title": "Modernism",
      "description": "A five-movement showpiece treating the whole orchestra as a virtuoso soloist. Composed in American exile, it is Bartók's most accessible orchestral masterpiece."
    }
  },
  {
    "title": "Appalachian Spring",
    "artist": "Aaron Copland",
    "year": 1944,
    "description": "Aaron Copland",
    "videos": [
      "Q3aUMKrCh8Q",
      "1DlVh9RFfws",
      "TXV8yO1FucA"
    ],
    "genre": {
      "title": "American Modernism",
      "description": "A ballet score evoking a pioneer wedding, built around variations on the Shaker tune 'Simple Gifts'. It defined the open, optimistic 'American sound'."
    }
  },
  {
    "title": "Peter Grimes",
    "artist": "Benjamin Britten",
    "year": 1945,
    "description": "Benjamin Britten",
    "videos": [
      "nOIj93J5P_8",
      "t-uJ2_1tKCk",
      "c4yR8dDmvWY"
    ],
    "genre": {
      "title": "Postwar British opera",
      "description": "Britten's opera about a tormented Suffolk fisherman ostracised by his community revived English opera as a serious form. Its 'Four Sea Interludes' are concert staples."
    }
  },
  {
    "title": "The Young Person's Guide to the Orchestra",
    "artist": "Benjamin Britten",
    "year": 1946,
    "description": "Benjamin Britten",
    "videos": [
      "4vbvhU22uAM",
      "fo7c79CffRc",
      "pbVRn3q3fEw"
    ],
    "genre": {
      "title": "Postwar British tonal",
      "description": "A set of variations and a fugue on a theme of Purcell, designed to introduce the timbres of every orchestral instrument. It became one of the most performed didactic showpieces of the century."
    }
  },
  {
    "title": "Sonatas and Interludes for Prepared Piano",
    "artist": "John Cage",
    "year": 1948,
    "description": "John Cage",
    "videos": [
      "jRHoKZRYBlY",
      "X990zJyVguc",
      "N6Sl5wmy9t4"
    ],
    "genre": {
      "title": "American experimentalism",
      "description": "Cage transformed the piano into a percussion orchestra by inserting screws, bolts and rubber between the strings. The cycle of twenty pieces evokes Indian aesthetic 'permanent emotions'."
    }
  },
  {
    "title": "Turangalîla-Symphonie",
    "artist": "Olivier Messiaen",
    "year": 1948,
    "description": "Olivier Messiaen",
    "videos": [
      "xOnZ1-sOCwo",
      "eCO7le_6LzU",
      "oEghV-AJ230"
    ],
    "genre": {
      "title": "Postwar modernism",
      "description": "A vast ten-movement symphony of love, ecstasy and death featuring solo piano and ondes Martenot. Its riotous color and rhythmic complexity made it a landmark of mid-century orchestral writing."
    }
  },
  {
    "title": "Gesang der Jünglinge",
    "artist": "Karlheinz Stockhausen",
    "year": 1956,
    "description": "Karlheinz Stockhausen",
    "videos": [
      "nffOJXcJCDg",
      "N9pOq8u6-bA",
      "UmGIiBfWI0E"
    ],
    "genre": {
      "title": "Electronic music",
      "description": "A pioneering work of electronic music blending a boy's recorded voice with synthesized sound, spatialised across loudspeakers. It is a foundational text of the studio era."
    }
  },
  {
    "title": "West Side Story",
    "artist": "Leonard Bernstein",
    "year": 1957,
    "description": "Leonard Bernstein",
    "videos": [
      "dUSPzL7lsY8",
      "srb2EyvTSGw",
      "-HLDqBUxcD4"
    ],
    "genre": {
      "title": "American musical theatre",
      "description": "Bernstein's reimagining of Romeo and Juliet on the streets of New York fused Broadway, jazz and symphonic craft. The 'Symphonic Dances' brought its music into the concert hall."
    }
  },
  {
    "title": "Kontakte",
    "artist": "Karlheinz Stockhausen",
    "year": 1960,
    "description": "Karlheinz Stockhausen",
    "videos": [
      "UoH0130FvcQ",
      "u6sDQ1ReHy4",
      "umsEF9u6dCA"
    ],
    "genre": {
      "title": "Electronic music",
      "description": "An electronic work, optionally with piano and percussion, exploring 'contacts' between electronic and instrumental sound and between perceptions of timbre and pitch. A pillar of postwar electronic composition."
    }
  },
  {
    "title": "Threnody to the Victims of Hiroshima",
    "artist": "Krzysztof Penderecki",
    "year": 1960,
    "description": "Krzysztof Penderecki",
    "videos": [
      "Dp3BlFZWJNA",
      "Pu371CDZ0ws",
      "HilGthRhwP8"
    ],
    "genre": {
      "title": "Sonorism / avant-garde",
      "description": "Written for 52 strings using clusters, glissandi and extended techniques, this elegy creates dense walls of sound. It became an emblem of the Polish sonorist avant-garde."
    }
  },
  {
    "title": "Atmosphères",
    "artist": "György Ligeti",
    "year": 1961,
    "description": "György Ligeti",
    "videos": [
      "jUaPwTL5vL8",
      "E-bemE-bCXQ",
      "RCNzwdLwA8g"
    ],
    "genre": {
      "title": "Micropolyphony / avant-garde",
      "description": "An orchestral study in shifting tone-color and dense micropolyphony with no melody or rhythm in the traditional sense. Kubrick's use of it in '2001: A Space Odyssey' made it iconic."
    }
  },
  {
    "title": "In C",
    "artist": "Terry Riley",
    "year": 1964,
    "description": "Terry Riley",
    "videos": [
      "lJPJywWfyGo",
      "aX96z7AuICs",
      "u7IErSweXpk"
    ],
    "genre": {
      "title": "Minimalism",
      "description": "An open-instrumentation work of 53 short patterns repeated ad libitum over a pulsing C, widely regarded as the founding score of musical minimalism."
    }
  },
  {
    "title": "Lux Aeterna",
    "artist": "György Ligeti",
    "year": 1966,
    "description": "György Ligeti",
    "videos": [
      "-iVYu5lyX5M",
      "mvZzL_imXq8",
      "CXULsghOD4o"
    ],
    "genre": {
      "title": "Micropolyphony / choral",
      "description": "A sixteen-voice a cappella setting of the Requiem text built from shimmering micropolyphonic clusters. Also famously used by Kubrick in '2001: A Space Odyssey'."
    }
  },
  {
    "title": "String Quartet No. 2",
    "artist": "Krzysztof Penderecki",
    "year": 1968,
    "description": "Krzysztof Penderecki",
    "videos": [
      "wV6grmu3wh8",
      "AT_Dn8FVTe8",
      "C78Y14z917M"
    ],
    "genre": {
      "title": "Sonorism / chamber",
      "description": "A compact single-movement quartet exploring percussive and extended string techniques characteristic of the Polish avant-garde. A concentrated example of sonorist chamber writing."
    }
  },
  {
    "title": "Sinfonia",
    "artist": "Luciano Berio",
    "year": 1968,
    "description": "Luciano Berio",
    "videos": [
      "qA2mXSUt77o",
      "JwJHu2gSj1A",
      "9YU-V2C4ryU"
    ],
    "genre": {
      "title": "Postmodern collage",
      "description": "A five-movement work for orchestra and amplified voices whose third movement layers a vast collage of musical quotations over the scherzo of Mahler's Second. A landmark of postmodern composition."
    }
  },
  {
    "title": "Symphony No. 14",
    "artist": "Dmitri Shostakovich",
    "year": 1969,
    "description": "Dmitri Shostakovich",
    "videos": [
      "bAzZcKB6LO8",
      "O70pMTSx6OU",
      "WL9gjQmh4BY"
    ],
    "genre": {
      "title": "Late Soviet symphony",
      "description": "A song-symphony for soprano, bass and chamber orchestra setting eleven poems on the theme of death. One of Shostakovich's most personal and unsparing late statements."
    }
  },
  {
    "title": "Clapping Music",
    "artist": "Steve Reich",
    "year": 1972,
    "description": "Steve Reich",
    "videos": [
      "lzkOFJMI5i8",
      "liYkRarIDfo",
      "YPU5XrmORCQ"
    ],
    "genre": {
      "title": "Minimalism / phase music",
      "description": "A work for two performers clapping a single pattern, one shifting by an eighth-note until they realign. A pure distillation of Reich's phasing technique requiring no instruments."
    }
  },
  {
    "title": "Symphony No. 3 (Symphony of Sorrowful Songs)",
    "artist": "Henryk Górecki",
    "year": 1976,
    "description": "Henryk Górecki",
    "videos": [
      "u7vQ6ztojNQ",
      "Vpx2GjUHKB0",
      "6_ClMrE6AgE"
    ],
    "genre": {
      "title": "Holy minimalism",
      "description": "Three slow movements for soprano and orchestra on themes of motherhood and loss, including a prayer scratched on a Gestapo cell wall. Its 1992 recording became an unexpected global bestseller."
    }
  },
  {
    "title": "De Staat",
    "artist": "Louis Andriessen",
    "year": 1976,
    "description": "Louis Andriessen",
    "videos": [
      "MC1TkipqZrM",
      "pxVRJ5lmBkE",
      "5oXzphF7ukY"
    ],
    "genre": {
      "title": "Dutch minimalism",
      "description": "A driving, hard-edged setting of Plato's Republic for four female voices and amplified ensemble. A founding work of the muscular European minimalist tradition."
    }
  },
  {
    "title": "Einstein on the Beach",
    "artist": "Philip Glass",
    "year": 1976,
    "description": "Philip Glass",
    "videos": [
      "UK0tzdCRjzc",
      "5PcgXev7VlU",
      "FowSeDVoV48"
    ],
    "genre": {
      "title": "Minimalist opera",
      "description": "A nearly five-hour non-narrative opera created with Robert Wilson, built from repeating modules, solfège and numbers. It redefined what opera could be."
    }
  },
  {
    "title": "Music for 18 Musicians",
    "artist": "Steve Reich",
    "year": 1976,
    "description": "Steve Reich",
    "videos": [
      "ZXJWO2FQ16c",
      "1oOmUi4HGt0",
      "ApnbymNz9dE"
    ],
    "genre": {
      "title": "Minimalism",
      "description": "An hour-long pulsing cycle through eleven chords, scored for an ensemble of mallets, pianos, voices and winds. It is the central masterpiece of American minimalism."
    }
  },
  {
    "title": "Concerto Grosso No. 1",
    "artist": "Alfred Schnittke",
    "year": 1977,
    "description": "Alfred Schnittke",
    "videos": [
      "4RrLWema4tU",
      "eE3xPdT5jx8",
      "M3Xehs1rHfM"
    ],
    "genre": {
      "title": "Polystylism",
      "description": "A six-movement concerto grosso for two violins, harpsichord, prepared piano and strings that collides Baroque forms with tango, chorale and dissonance. The defining example of Schnittke's polystylism."
    }
  },
  {
    "title": "Tabula Rasa",
    "artist": "Arvo Pärt",
    "year": 1977,
    "description": "Arvo Pärt",
    "videos": [
      "SMN9h85DrFM",
      "8HON4AswPVk",
      "7YqF69HLkj8"
    ],
    "genre": {
      "title": "Holy minimalism / tintinnabuli",
      "description": "A double concerto for two violins, prepared piano and strings in two movements, 'Ludus' and 'Silentium'. A defining statement of Pärt's tintinnabuli style."
    }
  },
  {
    "title": "Fratres",
    "artist": "Arvo Pärt",
    "year": 1977,
    "description": "Arvo Pärt",
    "videos": [
      "RNVoZVFpW58",
      "7PS5QMsGaRw",
      "JBj-sH-PDbA"
    ],
    "genre": {
      "title": "Holy minimalism / tintinnabuli",
      "description": "A set of austere, chant-like variations over a drone, existing in many instrumental arrangements. One of Pärt's most beloved and frequently recorded works."
    }
  },
  {
    "title": "Spiegel im Spiegel",
    "artist": "Arvo Pärt",
    "year": 1978,
    "description": "Arvo Pärt",
    "videos": [
      "JxYZu9piR64",
      "ZmcoTNn9YAk",
      "n37bNmVggtU"
    ],
    "genre": {
      "title": "Holy minimalism / tintinnabuli",
      "description": "A serenely simple piece for solo instrument and piano built on rising and falling triadic figures over a steady pulse. One of the most widely heard works of contemporary classical music."
    }
  },
  {
    "title": "Offertorium",
    "artist": "Sofia Gubaidulina",
    "year": 1980,
    "description": "Sofia Gubaidulina",
    "videos": [
      "NTl-Q-DgiJg",
      "-jVW32wUim0",
      "QA-lI1KS4zQ"
    ],
    "genre": {
      "title": "Soviet spiritual avant-garde",
      "description": "A violin concerto built on the 'royal theme' from Bach's Musical Offering, progressively dismantled and reborn as a symbol of sacrifice and resurrection. A signature work of Gubaidulina's mystical modernism."
    }
  },
  {
    "title": "Glassworks",
    "artist": "Philip Glass",
    "year": 1982,
    "description": "Philip Glass",
    "videos": [
      "-nBE9U7q1Uc",
      "_2vRbNehGB0",
      "1P0SW0VskaQ"
    ],
    "genre": {
      "title": "Minimalism",
      "description": "A six-movement chamber album conceived for the Walkman era, opening with the gentle piano 'Opening'. It brought Glass's minimalism to a mass audience."
    }
  },
  {
    "title": "Koyaanisqatsi",
    "artist": "Philip Glass",
    "year": 1982,
    "description": "Philip Glass",
    "videos": [
      "LMmuzmhsVfM",
      "Ploj-2di-rE",
      "r4WlNj1TTqA"
    ],
    "genre": {
      "title": "Minimalist film score",
      "description": "Glass's hypnotic, repetitive score for Godfrey Reggio's wordless documentary on humanity and nature. A landmark fusion of minimalism and cinema."
    }
  },
  {
    "title": "Symphony No. 3 (Symphony of Three Orchestras)",
    "artist": "Witold Lutosławski",
    "year": 1983,
    "description": "Witold Lutosławski",
    "videos": [
      "apXl3wbLPeg",
      "aDWHXo0-hJU",
      "fF4LhlBBlZ0"
    ],
    "genre": {
      "title": "Postwar Polish modernism",
      "description": "A single-movement symphony alternating aleatoric counterpoint with rigorously notated sections, crowned by a powerful coda. A summit of Lutosławski's mature orchestral language."
    }
  },
  {
    "title": "From the House of the Dead / Requiem of Reconciliation",
    "artist": "Krzysztof Penderecki",
    "year": 1984,
    "description": "Krzysztof Penderecki",
    "videos": [
      "0ukgUxGlOz4",
      "IwHpAUmiGM8",
      "1JES6jo978M"
    ],
    "genre": {
      "title": "Neo-Romantic sacred",
      "description": "Penderecki's Polish Requiem, a large-scale sacred work begun in homage to Solidarity's victims, marks his turn from avant-garde toward expansive neo-Romanticism."
    }
  },
  {
    "title": "Short Ride in a Fast Machine",
    "artist": "John Adams",
    "year": 1986,
    "description": "John Adams",
    "videos": [
      "5LoUm_r7It8",
      "W-Sx8sa4HLk",
      "qwa42YhCT2E"
    ],
    "genre": {
      "title": "Postminimalism",
      "description": "A four-minute orchestral fanfare driven by a relentless woodblock pulse, exuberant and propulsive. One of the most frequently programmed American concert openers."
    }
  },
  {
    "title": "Nixon in China",
    "artist": "John Adams",
    "year": 1987,
    "description": "John Adams",
    "videos": [
      "G72JjpMEdKs",
      "cqKZIzZPLgg",
      "wKT9SbL-lI8"
    ],
    "genre": {
      "title": "Postminimalist opera",
      "description": "An opera dramatising President Nixon's 1972 visit to China, set to Adams's pulsing postminimalist score and Alice Goodman's poetic libretto. It established the contemporary 'CNN opera'."
    }
  },
  {
    "title": "Different Trains",
    "artist": "Steve Reich",
    "year": 1988,
    "description": "Steve Reich",
    "videos": [
      "KNY7JhPbYug",
      "CWnqX41JHuM",
      "D_2PwYmmbXI"
    ],
    "genre": {
      "title": "Minimalism / documentary",
      "description": "A work for string quartet and tape that turns recorded speech about train journeys before and during the Holocaust into melodic material. It won a Grammy and pioneered 'speech-melody' composition."
    }
  },
  {
    "title": "From Me Flows What You Call Time",
    "artist": "Toru Takemitsu",
    "year": 1990,
    "description": "Toru Takemitsu",
    "videos": [
      "W_PCpyB-aJs",
      "kWipy3Q6gAI",
      "LNxPGQ3eokI"
    ],
    "genre": {
      "title": "Japanese contemporary",
      "description": "A meditative concerto for five percussionists and orchestra, evoking color, wind and Tibetan ritual. It exemplifies Takemitsu's luminous fusion of East and West."
    }
  },
  {
    "title": "Song for Athene",
    "artist": "John Tavener",
    "year": 1993,
    "description": "John Tavener",
    "videos": [
      "tK3bIQxMMEg",
      "SN1Ehbv8f6E",
      "PHRII3y1WRQ"
    ],
    "genre": {
      "title": "Holy minimalism / choral",
      "description": "A choral elegy over a sustained drone, alternating Orthodox 'Alleluias' with words from Shakespeare and the funeral liturgy. It reached global fame at Princess Diana's funeral."
    }
  },
  {
    "title": "The Piano (soundtrack)",
    "artist": "Michael Nyman",
    "year": 1993,
    "description": "Michael Nyman",
    "videos": [
      "toOShA7omUk",
      "TCJB9mIlFBs",
      "NsQBKr_x-P4"
    ],
    "genre": {
      "title": "Minimalist film score",
      "description": "Nyman's Scottish-folk-inflected, surging piano score for Jane Campion's film, including 'The Heart Asks Pleasure First'. It brought process-driven minimalism to a wide cinema audience."
    }
  },
  {
    "title": "Lonh",
    "artist": "Kaija Saariaho",
    "year": 1996,
    "description": "Kaija Saariaho",
    "videos": [
      "XNUjwGb9y_U",
      "Zkeju6aF9fQ",
      "5PYCcmZxVVM"
    ],
    "genre": {
      "title": "Spectralism / electronics",
      "description": "A work for soprano and electronics setting a troubadour song of distant love, surrounding the voice with shimmering processed sound. A signature of Saariaho's spectral, sensuous idiom."
    }
  },
  {
    "title": "Asyla",
    "artist": "Thomas Adès",
    "year": 1997,
    "description": "Thomas Adès",
    "videos": [
      "p9YGQ86vIps",
      "GvDqaYajjEE",
      "cbnAJW_olUI"
    ],
    "genre": {
      "title": "Contemporary orchestral",
      "description": "A four-movement symphony-in-all-but-name whose third movement, 'Ecstasio', evokes a rave. It announced Adès as a leading composer of his generation."
    }
  },
  {
    "title": "Lux Aurumque",
    "artist": "Eric Whitacre",
    "year": 2000,
    "description": "Eric Whitacre",
    "videos": [
      "X5_LSBuPwXs",
      "e6HVCqQStRE",
      "GZ2eykDkiFU"
    ],
    "genre": {
      "title": "Contemporary choral",
      "description": "A short a cappella choral work in Whitacre's signature lush, cluster-rich harmonic style, setting a Latin poem on light and gold. It became a defining piece of 21st-century choral music and the basis of his 'Virtual Choir'."
    }
  },
  {
    "title": "The Dharma at Big Sur",
    "artist": "John Adams",
    "year": 2003,
    "description": "John Adams",
    "videos": [
      "6HN83Z9Di6A",
      "_S-32gXykFE",
      "TaAisp-HcPM"
    ],
    "genre": {
      "title": "Postminimalism",
      "description": "A concerto for electric violin and orchestra inspired by the California coast and just intonation, written to inaugurate Disney Hall. It blends Adams's pulse with microtonal color."
    }
  },
  {
    "title": "On the Nature of Daylight",
    "artist": "Max Richter",
    "year": 2004,
    "description": "Max Richter",
    "videos": [
      "InyT9Gyoz_o",
      "rVN1B-tUpgs",
      "b_YHE4Sx-08"
    ],
    "genre": {
      "title": "Postminimalism / neoclassical",
      "description": "A slow, aching string elegy from the album 'The Blue Notebooks' built on a descending ground bass. It became one of the most widely used pieces in film and television."
    }
  },
  {
    "title": "Partita for 8 Voices",
    "artist": "Caroline Shaw",
    "year": 2011,
    "description": "Caroline Shaw",
    "videos": [
      "NDVMtnaB28E",
      "HC6vss-WnNM",
      "BiKCuNH1rC4"
    ],
    "genre": {
      "title": "Contemporary vocal",
      "description": "A four-movement a cappella work for the ensemble Roomful of Teeth using speech, sliding tones, overtone singing and dance forms. It won the 2013 Pulitzer Prize for Music, making Shaw its youngest-ever recipient."
    }
  },
  {
    "title": "Recomposed: Vivaldi – The Four Seasons",
    "artist": "Max Richter",
    "year": 2012,
    "description": "Max Richter",
    "videos": [
      "DLDvbnK_Sqk",
      "6T0MFCX9SLI",
      "41IOkVjy3MM"
    ],
    "genre": {
      "title": "Postminimalism / recomposition",
      "description": "Richter's radical re-imagining of Vivaldi, keeping fragments of the original and looping them through minimalist textures. A landmark of contemporary 'recomposition'."
    }
  },
  {
    "title": "Become Ocean",
    "artist": "John Luther Adams",
    "year": 2013,
    "description": "John Luther Adams",
    "videos": [
      "dGva1NVWRXk",
      "oce8vIc26Eg",
      "1VN9TBfWAEo"
    ],
    "genre": {
      "title": "Contemporary / soundscape",
      "description": "A single forty-minute orchestral wave for three independent ensembles, swelling and receding like the sea. It won the 2014 Pulitzer Prize for Music and a Grammy."
    }
  },
  {
    "title": "In the Light of Air",
    "artist": "Anna Thorvaldsdóttir",
    "year": 2014,
    "description": "Anna Thorvaldsdóttir",
    "videos": [
      "Pid-bOD1ux0",
      "pa5Y6346myw",
      "EMIY9uVf0Wc"
    ],
    "genre": {
      "title": "Contemporary / soundscape",
      "description": "A four-part chamber work for amplified ensemble with electronics and an installation, evoking vast, slowly shifting natural textures. It typifies Thorvaldsdóttir's geological, elemental sound world."
    }
  }
];
