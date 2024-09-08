document.addEventListener("DOMContentLoaded", function () {
  // Example datasets for MPs by country
  const mpDataByCountry = {
    UK: [
      {
        name: "Diane Abbott",
        constituency: "Hackney North and Stoke Newington",
        email: "diane.abbott.mp@parliament.uk"
      },
      {
        name: "Jack Abbott",
        constituency: "Ipswich",
        email: "jack.abbott.mp@parliament.uk"
      },
      {
        name: "Debbie Abrahams",
        constituency: "Oldham East and Saddleworth",
        email: "debbie.abrahams.mp@parliament.uk"
      },
      {
        name: "Shockat Adam",
        constituency: "Leicester South",
        email: "shockat.adam.mp@parliament.uk"
      },
      {
        name: "Zubir Ahmed",
        constituency: "Glasgow South West",
        email: "zubir.ahmed.mp@parliament.uk"
      },
      {
        name: "Luke Akehurst",
        constituency: "North Durham",
        email: "luke.akehurst.mp@parliament.uk"
      },
      {
        name: "Sadik Al-Hassan",
        constituency: "North Somerset",
        email: "sadik.al-hassan.mp@parliament.uk"
      },
      {
        name: "Bayo Alaba",
        constituency: "Southend East and Rochford",
        email: "bayo.alaba.mp@parliament.uk"
      },
      {
        name: "Dan Aldridge",
        constituency: "Weston-super-Mare",
        email: "dan.aldridge.mp@parliament.uk"
      },
      {
        name: "Douglas Alexander",
        constituency: "Lothian East",
        email: "douglas.alexander.mp@parliament.uk"
      },
      {
        name: "Heidi Alexander",
        constituency: "Swindon South",
        email: "heidi.alexander.mp@parliament.uk"
      },
      {
        name: "Rushanara Ali",
        constituency: "Bethnal Green and Stepney",
        email: "rushanara.ali.mp@parliament.uk"
      },
      {
        name: "Tahir Ali",
        constituency: "Birmingham Hall Green and Moseley",
        email: "tahir.ali.mp@parliament.uk"
      },
      {
        name: "Rosena Allin-Khan",
        constituency: "Tooting",
        email: "rosena.allin-khan.mp@parliament.uk"
      },
      {
        name: "Jim Allister",
        constituency: "North Antrim",
        email: "jim.allister.mp@parliament.uk"
      },
      {
        name: "Mike Amesbury",
        constituency: "Runcorn and Helsby",
        email: "mike.amesbury.mp@parliament.uk"
      },
      {
        name: "Gideon Amos",
        constituency: "Taunton and Wellington",
        email: "gideon.amos.mp@parliament.uk"
      },
      {
        name: "Callum Anderson",
        constituency: "Buckingham and Bletchley",
        email: "callum.anderson.mp@parliament.uk"
      },
      {
        name: "Fleur Anderson",
        constituency: "Putney",
        email: "fleur.anderson.mp@parliament.uk"
      },
      {
        name: "Lee Anderson",
        constituency: "Ashfield",
        email: "lee.anderson.mp@parliament.uk"
      },
      {
        name: "Stuart Anderson",
        constituency: "South Shropshire",
        email: "stuart.anderson.mp@parliament.uk"
      },
      {
        name: "Stuart Andrew",
        constituency: "Daventry",
        email: "stuart.andrew.mp@parliament.uk"
      },
      {
        name: "Tonia Antoniazzi",
        constituency: "Gower",
        email: "tonia.antoniazzi.mp@parliament.uk"
      },
      {
        name: "Steffan Aquarone",
        constituency: "North Norfolk",
        email: "steffan.aquarone.mp@parliament.uk"
      },
      {
        name: "Edward Argar",
        constituency: "Melton and Syston",
        email: "edward.argar.mp@parliament.uk"
      },
      {
        name: "Scott Arthur",
        constituency: "Edinburgh South West",
        email: "scott.arthur.mp@parliament.uk"
      },
      {
        name: "Jessica Asato",
        constituency: "Lowestoft",
        email: "jessica.asato.mp@parliament.uk"
      },
      {
        name: "James Asser",
        constituency: "West Ham and Beckton",
        email: "james.asser.mp@parliament.uk"
      },
      {
        name: "Jas Athwal",
        constituency: "Ilford South",
        email: "jas.athwal.mp@parliament.uk"
      },
      {
        name: "Victoria Atkins",
        constituency: "Louth and Horncastle",
        email: "victoria.atkins.mp@parliament.uk"
      },
      {
        name: "Catherine Atkinson",
        constituency: "Derby North",
        email: "catherine.atkinson.mp@parliament.uk"
      },
      {
        name: "Lewis Atkinson",
        constituency: "Sunderland Central",
        email: "lewis.atkinson.mp@parliament.uk"
      },
      {
        name: "Josh Babarinde",
        constituency: "Eastbourne",
        email: "josh.babarinde.mp@parliament.uk"
      },
      {
        name: "Gareth Bacon",
        constituency: "Orpington",
        email: "gareth.bacon.mp@parliament.uk"
      },
      {
        name: "Kemi Badenoch",
        constituency: "North West Essex",
        email: "kemi.badenoch.mp@parliament.uk"
      },
      {
        name: "Calvin Bailey",
        constituency: "Leyton and Wanstead",
        email: "calvin.bailey.mp@parliament.uk"
      },
      {
        name: "Olivia Bailey",
        constituency: "Reading West and Mid Berkshire",
        email: "olivia.bailey.mp@parliament.uk"
      },
      {
        name: "David Baines",
        constituency: "St Helens North",
        email: "david.baines.mp@parliament.uk"
      },
      {
        name: "Alex Baker",
        constituency: "Aldershot",
        email: "alex.baker.mp@parliament.uk"
      },
      {
        name: "Richard Baker",
        constituency: "Glenrothes and Mid Fife",
        email: "richard.baker.mp@parliament.uk"
      },
      {
        name: "Harriett Baldwin",
        constituency: "West Worcestershire",
        email: "harriett.baldwin.mp@parliament.uk"
      },
      {
        name: "Alex Ballinger",
        constituency: "Halesowen",
        email: "alex.ballinger.mp@parliament.uk"
      },
      {
        name: "Antonia Bance",
        constituency: "Tipton and Wednesbury",
        email: "antonia.bance.mp@parliament.uk"
      },
      {
        name: "Steve Barclay",
        constituency: "North East Cambridgeshire",
        email: "steve.barclay.mp@parliament.uk"
      },
      {
        name: "Paula Barker",
        constituency: "Liverpool Wavertree",
        email: "paula.barker.mp@parliament.uk"
      },
      {
        name: "Lee Barron",
        constituency: "Corby and East Northamptonshire",
        email: "lee.barron.mp@parliament.uk"
      },
      {
        name: "Alex Barros-Curtis",
        constituency: "Cardiff West",
        email: "alex.barros-curtis.mp@parliament.uk"
      },
      {
        name: "Johanna Baxter",
        constituency: "Paisley and Renfrewshire South",
        email: "johanna.baxter.mp@parliament.uk"
      },
      {
        name: "Danny Beales",
        constituency: "Uxbridge and South Ruislip",
        email: "danny.beales.mp@parliament.uk"
      },
      {
        name: "Lorraine Beavers",
        constituency: "Blackpool North and Fleetwood",
        email: "lorraine.beavers.mp@parliament.uk"
      },
      {
        name: "Peter Bedford",
        constituency: "Mid Leicestershire",
        email: "peter.bedford.mp@parliament.uk"
      },
      {
        name: "Órfhlaith Begley",
        constituency: "West Tyrone",
        email: "órfhlaith.begley.mp@parliament.uk"
      },
      {
        name: "Apsana Begum",
        constituency: "Poplar and Limehouse",
        email: "apsana.begum.mp@parliament.uk"
      },
      {
        name: "Torsten Bell",
        constituency: "Swansea West",
        email: "torsten.bell.mp@parliament.uk"
      },
      {
        name: "Hilary Benn",
        constituency: "Leeds South",
        email: "hilary.benn.mp@parliament.uk"
      },
      {
        name: "Alison Bennett",
        constituency: "Mid Sussex",
        email: "alison.bennett.mp@parliament.uk"
      },
      {
        name: "Siân Berry",
        constituency: "Brighton Pavilion",
        email: "siân.berry.mp@parliament.uk"
      },
      {
        name: "Clive Betts",
        constituency: "Sheffield South East",
        email: "clive.betts.mp@parliament.uk"
      },
      {
        name: "Saqib Bhatti",
        constituency: "Meriden and Solihull East",
        email: "saqib.bhatti.mp@parliament.uk"
      },
      {
        name: "Polly Billington",
        constituency: "East Thanet",
        email: "polly.billington.mp@parliament.uk"
      },
      {
        name: "Matt Bishop",
        constituency: "Forest of Dean",
        email: "matt.bishop.mp@parliament.uk"
      },
      {
        name: "Bob Blackman",
        constituency: "Harrow East",
        email: "bob.blackman.mp@parliament.uk"
      },
      {
        name: "Kirsty Blackman",
        constituency: "Aberdeen North",
        email: "kirsty.blackman.mp@parliament.uk"
      },
      {
        name: "Olivia Blake",
        constituency: "Sheffield Hallam",
        email: "olivia.blake.mp@parliament.uk"
      },
      {
        name: "Rachel Blake",
        constituency: "Cities of London and Westminster",
        email: "rachel.blake.mp@parliament.uk"
      },
      {
        name: "Christopher Bloore",
        constituency: "Redditch",
        email: "christopher.bloore.mp@parliament.uk"
      },
      {
        name: "Elsie Blundell",
        constituency: "Heywood and Middleton North",
        email: "elsie.blundell.mp@parliament.uk"
      },
      {
        name: "Kevin Bonavia",
        constituency: "Stevenage",
        email: "kevin.bonavia.mp@parliament.uk"
      },
      {
        name: "Sarah Bool",
        constituency: "South Northamptonshire",
        email: "sarah.bool.mp@parliament.uk"
      },
      {
        name: "Jade Botterill",
        constituency: "Ossett and Denby Dale",
        email: "jade.botterill.mp@parliament.uk"
      },
      {
        name: "Andrew Bowie",
        constituency: "West Aberdeenshire and Kincardine",
        email: "andrew.bowie.mp@parliament.uk"
      },
      {
        name: "Sureena Brackenridge",
        constituency: "Wolverhampton North East",
        email: "sureena.brackenridge.mp@parliament.uk"
      },
      {
        name: "Karen Bradley",
        constituency: "Staffordshire Moorlands",
        email: "karen.bradley.mp@parliament.uk"
      },
      {
        name: "Aphra Brandreth",
        constituency: "Chester South and Eddisbury",
        email: "aphra.brandreth.mp@parliament.uk"
      },
      {
        name: "Jonathan Brash",
        constituency: "Hartlepool",
        email: "jonathan.brash.mp@parliament.uk"
      },
      {
        name: "Suella Braverman",
        constituency: "Fareham and Waterlooville",
        email: "suella.braverman.mp@parliament.uk"
      },
      {
        name: "Alex Brewer",
        constituency: "North East Hampshire",
        email: "alex.brewer.mp@parliament.uk"
      },
      {
        name: "Phil Brickell",
        constituency: "Bolton West",
        email: "phil.brickell.mp@parliament.uk"
      },
      {
        name: "Jessica Brown-Fuller",
        constituency: "Chichester",
        email: "jessica.brown-fuller.mp@parliament.uk"
      },
      {
        name: "Chris Bryant",
        constituency: "Rhondda and Ogmore",
        email: "chris.bryant.mp@parliament.uk"
      },
      {
        name: "Julia Buckley",
        constituency: "Shrewsbury",
        email: "julia.buckley.mp@parliament.uk"
      },
      {
        name: "Alex Burghart",
        constituency: "Brentwood and Ongar",
        email: "alex.burghart.mp@parliament.uk"
      },
      {
        name: "Richard Burgon",
        constituency: "Leeds East",
        email: "richard.burgon.mp@parliament.uk"
      },
      {
        name: "Maureen Burke",
        constituency: "Glasgow North East",
        email: "maureen.burke.mp@parliament.uk"
      },
      {
        name: "David Burton-Sampson",
        constituency: "Southend West and Leigh",
        email: "david.burton-sampson.mp@parliament.uk"
      },
      {
        name: "Dawn Butler",
        constituency: "Brent East",
        email: "dawn.butler.mp@parliament.uk"
      },
      {
        name: "Ian Byrne",
        constituency: "Liverpool West Derby",
        email: "ian.byrne.mp@parliament.uk"
      },
      {
        name: "Liam Byrne",
        constituency: "Birmingham Hodge Hill and Solihull North",
        email: "liam.byrne.mp@parliament.uk"
      },
      {
        name: "Ruth Cadbury",
        constituency: "Brentford and Isleworth",
        email: "ruth.cadbury.mp@parliament.uk"
      },
      {
        name: "Nesil Caliskan",
        constituency: "Barking",
        email: "nesil.caliskan.mp@parliament.uk"
      },
      {
        name: "Alan Campbell",
        constituency: "Tynemouth",
        email: "alan.campbell.mp@parliament.uk"
      },
      {
        name: "Gregory Campbell",
        constituency: "East Londonderry",
        email: "gregory.campbell.mp@parliament.uk"
      },
      {
        name: "Irene Campbell",
        constituency: "North Ayrshire and Arran",
        email: "irene.campbell.mp@parliament.uk"
      },
      {
        name: "Juliet Campbell",
        constituency: "Broxtowe",
        email: "juliet.campbell.mp@parliament.uk"
      },
      {
        name: "Markus Campbell-Savours",
        constituency: "Penrith and Solway",
        email: "markus.campbell-savours.mp@parliament.uk"
      },
      {
        name: "Charlotte Cane",
        constituency: "Ely and East Cambridgeshire",
        email: "charlotte.cane.mp@parliament.uk"
      },
      {
        name: "Dan Carden",
        constituency: "Liverpool Walton",
        email: "dan.carden.mp@parliament.uk"
      },
      {
        name: "Sam Carling",
        constituency: "North West Cambridgeshire",
        email: "sam.carling.mp@parliament.uk"
      },
      {
        name: "Alistair Carmichael",
        constituency: "Orkney and Shetland",
        email: "alistair.carmichael.mp@parliament.uk"
      },
      {
        name: "Alistair Carns",
        constituency: "Birmingham Selly Oak",
        email: "alistair.carns.mp@parliament.uk"
      },
      {
        name: "James Cartlidge",
        constituency: "South Suffolk",
        email: "james.cartlidge.mp@parliament.uk"
      },
      {
        name: "David Chadwick",
        constituency: "Brecon, Radnor and Cwm Tawe",
        email: "david.chadwick.mp@parliament.uk"
      },
      {
        name: "Wendy Chamberlain",
        constituency: "North East Fife",
        email: "wendy.chamberlain.mp@parliament.uk"
      },
      {
        name: "Danny Chambers",
        constituency: "Winchester",
        email: "danny.chambers.mp@parliament.uk"
      },
      {
        name: "Sarah Champion",
        constituency: "Rotherham",
        email: "sarah.champion.mp@parliament.uk"
      },
      {
        name: "Bambos Charalambous",
        constituency: "Southgate and Wood Green",
        email: "bambos.charalambous.mp@parliament.uk"
      },
      {
        name: "Luke Charters",
        constituency: "York Outer",
        email: "luke.charters.mp@parliament.uk"
      },
      {
        name: "Christopher Chope",
        constituency: "Christchurch",
        email: "christopher.chope.mp@parliament.uk"
      },
      {
        name: "Ellie Chowns",
        constituency: "North Herefordshire",
        email: "ellie.chowns.mp@parliament.uk"
      },
      {
        name: "Feryal Clark",
        constituency: "Enfield North",
        email: "feryal.clark.mp@parliament.uk"
      },
      {
        name: "James Cleverly",
        constituency: "Braintree",
        email: "james.cleverly.mp@parliament.uk"
      },
      {
        name: "Geoffrey Clifton-Brown",
        constituency: "North Cotswolds",
        email: "geoffrey.clifton-brown.mp@parliament.uk"
      },
      {
        name: "Lewis Cocking",
        constituency: "Broxbourne",
        email: "lewis.cocking.mp@parliament.uk"
      },
      {
        name: "Chris Coghlan",
        constituency: "Dorking and Horley",
        email: "chris.coghlan.mp@parliament.uk"
      },
      {
        name: "Ben Coleman",
        constituency: "Chelsea and Fulham",
        email: "ben.coleman.mp@parliament.uk"
      },
      {
        name: "Jacob Collier",
        constituency: "Burton and Uttoxeter",
        email: "jacob.collier.mp@parliament.uk"
      },
      {
        name: "Lizzi Collinge",
        constituency: "Morecambe and Lunesdale",
        email: "lizzi.collinge.mp@parliament.uk"
      },
      {
        name: "Tom Collins",
        constituency: "Worcester",
        email: "tom.collins.mp@parliament.uk"
      },
      {
        name: "Victoria Collins",
        constituency: "Harpenden and Berkhamsted",
        email: "victoria.collins.mp@parliament.uk"
      },
      {
        name: "Liam Conlon",
        constituency: "Beckenham and Penge",
        email: "liam.conlon.mp@parliament.uk"
      },
      {
        name: "Sarah Coombes",
        constituency: "West Bromwich",
        email: "sarah.coombes.mp@parliament.uk"
      },
      {
        name: "Andrew Cooper",
        constituency: "Mid Cheshire",
        email: "andrew.cooper.mp@parliament.uk"
      },
      {
        name: "Beccy Cooper",
        constituency: "Worthing West",
        email: "beccy.cooper.mp@parliament.uk"
      },
      {
        name: "Daisy Cooper",
        constituency: "St Albans",
        email: "daisy.cooper.mp@parliament.uk"
      },
      {
        name: "John Cooper",
        constituency: "Dumfries and Galloway",
        email: "john.cooper.mp@parliament.uk"
      },
      {
        name: "Yvette Cooper",
        constituency: "Pontefract, Castleford and Knottingley",
        email: "yvette.cooper.mp@parliament.uk"
      },
      {
        name: "Jeremy Corbyn",
        constituency: "Islington North",
        email: "jeremy.corbyn.mp@parliament.uk"
      },
      {
        name: "Alberto Costa",
        constituency: "South Leicestershire",
        email: "alberto.costa.mp@parliament.uk"
      },
      {
        name: "Deirdre Costigan",
        constituency: "Ealing Southall",
        email: "deirdre.costigan.mp@parliament.uk"
      },
      {
        name: "Claire Coutinho",
        constituency: "East Surrey",
        email: "claire.coutinho.mp@parliament.uk"
      },
      {
        name: "Geoffrey Cox",
        constituency: "Torridge and Tavistock",
        email: "geoffrey.cox.mp@parliament.uk"
      },
      {
        name: "Pam Cox",
        constituency: "Colchester",
        email: "pam.cox.mp@parliament.uk"
      },
      {
        name: "Neil Coyle",
        constituency: "Bermondsey and Old Southwark",
        email: "neil.coyle.mp@parliament.uk"
      },
      {
        name: "Jennifer Craft",
        constituency: "Thurrock",
        email: "jennifer.craft.mp@parliament.uk"
      },
      {
        name: "Mary Creagh",
        constituency: "Coventry East",
        email: "mary.creagh.mp@parliament.uk"
      },
      {
        name: "Stella Creasy",
        constituency: "Walthamstow",
        email: "stella.creasy.mp@parliament.uk"
      },
      {
        name: "Torcuil Crichton",
        constituency: "Na h-Eileanan an Iar",
        email: "torcuil.crichton.mp@parliament.uk"
      },
      {
        name: "Harriet Cross",
        constituency: "Gordon and Buchan",
        email: "harriet.cross.mp@parliament.uk"
      },
      {
        name: "Pat Cullen",
        constituency: "Fermanagh and South Tyrone",
        email: "pat.cullen.mp@parliament.uk"
      },
      {
        name: "Judith Cummins",
        constituency: "Bradford South",
        email: "judith.cummins.mp@parliament.uk"
      },
      {
        name: "Chris Curtis",
        constituency: "Milton Keynes North",
        email: "chris.curtis.mp@parliament.uk"
      },
      {
        name: "Janet Daby",
        constituency: "Lewisham East",
        email: "janet.daby.mp@parliament.uk"
      },
      {
        name: "Nicholas Dakin",
        constituency: "Scunthorpe",
        email: "nicholas.dakin.mp@parliament.uk"
      },
      {
        name: "Ashley Dalton",
        constituency: "West Lancashire",
        email: "ashley.dalton.mp@parliament.uk"
      },
      {
        name: "Adam Dance",
        constituency: "Yeovil",
        email: "adam.dance.mp@parliament.uk"
      },
      {
        name: "Steve Darling",
        constituency: "Torbay",
        email: "steve.darling.mp@parliament.uk"
      },
      {
        name: "Emily Darlington",
        constituency: "Milton Keynes Central",
        email: "emily.darlington.mp@parliament.uk"
      },
      {
        name: "Edward Davey",
        constituency: "Kingston and Surbiton",
        email: "edward.davey.mp@parliament.uk"
      },
      {
        name: "Ann Davies",
        constituency: "Caerfyrddin",
        email: "ann.davies.mp@parliament.uk"
      },
      {
        name: "Gareth Davies",
        constituency: "Grantham and Bourne",
        email: "gareth.davies.mp@parliament.uk"
      },
      {
        name: "Jonathan Davies",
        constituency: "Mid Derbyshire",
        email: "jonathan.davies.mp@parliament.uk"
      },
      {
        name: "Mims Davies",
        constituency: "East Grinstead and Uckfield",
        email: "mims.davies.mp@parliament.uk"
      },
      {
        name: "Paul Davies",
        constituency: "Colne Valley",
        email: "paul.davies.mp@parliament.uk"
      },
      {
        name: "Shaun Davies",
        constituency: "Telford",
        email: "shaun.davies.mp@parliament.uk"
      },
      {
        name: "Alex Davies-Jones",
        constituency: "Pontypridd",
        email: "alex.davies-jones.mp@parliament.uk"
      },
      {
        name: "David Davis",
        constituency: "Goole and Pocklington",
        email: "david.davis.mp@parliament.uk"
      },
      {
        name: "Marsha de Cordova",
        constituency: "Battersea",
        email: "marsha.de cordova.mp@parliament.uk"
      },
      {
        name: "Bobby Dean",
        constituency: "Carshalton and Wallington",
        email: "bobby.dean.mp@parliament.uk"
      },
      {
        name: "Josh Dean",
        constituency: "Hertford and Stortford",
        email: "josh.dean.mp@parliament.uk"
      },
      {
        name: "Kate Dearden",
        constituency: "Halifax",
        email: "kate.dearden.mp@parliament.uk"
      },
      {
        name: "Carla Denyer",
        constituency: "Bristol Central",
        email: "carla.denyer.mp@parliament.uk"
      },
      {
        name: "Charlie Dewhirst",
        constituency: "Bridlington and The Wolds",
        email: "charlie.dewhirst.mp@parliament.uk"
      },
      {
        name: "Tan Dhesi",
        constituency: "Slough",
        email: "tan.dhesi.mp@parliament.uk"
      },
      {
        name: "Jim Dickson",
        constituency: "Dartford",
        email: "jim.dickson.mp@parliament.uk"
      },
      {
        name: "Lee Dillon",
        constituency: "Newbury",
        email: "lee.dillon.mp@parliament.uk"
      },
      {
        name: "Caroline Dinenage",
        constituency: "Gosport",
        email: "caroline.dinenage.mp@parliament.uk"
      },
      {
        name: "Anna Dixon",
        constituency: "Shipley",
        email: "anna.dixon.mp@parliament.uk"
      },
      {
        name: "Samantha Dixon",
        constituency: "Chester North and Neston",
        email: "samantha.dixon.mp@parliament.uk"
      },
      {
        name: "Anneliese Dodds",
        constituency: "Oxford East",
        email: "anneliese.dodds.mp@parliament.uk"
      },
      {
        name: "Helena Dollimore",
        constituency: "Hastings and Rye",
        email: "helena.dollimore.mp@parliament.uk"
      },
      {
        name: "Dave Doogan",
        constituency: "Angus and Perthshire Glens",
        email: "dave.doogan.mp@parliament.uk"
      },
      {
        name: "Stephen Doughty",
        constituency: "Cardiff South and Penarth",
        email: "stephen.doughty.mp@parliament.uk"
      },
      {
        name: "Peter Dowd",
        constituency: "Bootle",
        email: "peter.dowd.mp@parliament.uk"
      },
      {
        name: "Oliver Dowden",
        constituency: "Hertsmere",
        email: "oliver.dowden.mp@parliament.uk"
      },
      {
        name: "Graeme Downie",
        constituency: "Dunfermline and Dollar",
        email: "graeme.downie.mp@parliament.uk"
      },
      {
        name: "Rosie Duffield",
        constituency: "Canterbury",
        email: "rosie.duffield.mp@parliament.uk"
      },
      {
        name: "Iain Duncan Smith",
        constituency: "Chingford and Woodford Green",
        email: "iain.duncan smith.mp@parliament.uk"
      },
      {
        name: "Neil Duncan-Jordan",
        constituency: "Poole",
        email: "neil.duncan-jordan.mp@parliament.uk"
      },
      {
        name: "Sarah Dyke",
        constituency: "Glastonbury and Somerton",
        email: "sarah.dyke.mp@parliament.uk"
      },
      {
        name: "Angela Eagle",
        constituency: "Wallasey",
        email: "angela.eagle.mp@parliament.uk"
      },
      {
        name: "Maria Eagle",
        constituency: "Liverpool Garston",
        email: "maria.eagle.mp@parliament.uk"
      },
      {
        name: "Alex Easton",
        constituency: "North Down",
        email: "alex.easton.mp@parliament.uk"
      },
      {
        name: "Colum Eastwood",
        constituency: "Foyle",
        email: "colum.eastwood.mp@parliament.uk"
      },
      {
        name: "Sorcha Eastwood",
        constituency: "Lagan Valley",
        email: "sorcha.eastwood.mp@parliament.uk"
      },
      {
        name: "Cat Eccles",
        constituency: "Stourbridge",
        email: "cat.eccles.mp@parliament.uk"
      },
      {
        name: "Lauren Edwards",
        constituency: "Rochester and Strood",
        email: "lauren.edwards.mp@parliament.uk"
      },
      {
        name: "Sarah Edwards",
        constituency: "Tamworth",
        email: "sarah.edwards.mp@parliament.uk"
      },
      {
        name: "Clive Efford",
        constituency: "Eltham and Chislehurst",
        email: "clive.efford.mp@parliament.uk"
      },
      {
        name: "Damien Egan",
        constituency: "Bristol North East",
        email: "damien.egan.mp@parliament.uk"
      },
      {
        name: "Maya Ellis",
        constituency: "Ribble Valley",
        email: "maya.ellis.mp@parliament.uk"
      },
      {
        name: "Chris Elmore",
        constituency: "Bridgend",
        email: "chris.elmore.mp@parliament.uk"
      },
      {
        name: "Kirith Entwistle",
        constituency: "Bolton North East",
        email: "kirith.entwistle.mp@parliament.uk"
      },
      {
        name: "Florence Eshalomi",
        constituency: "Vauxhall and Camberwell Green",
        email: "florence.eshalomi.mp@parliament.uk"
      },
      {
        name: "Bill Esterson",
        constituency: "Sefton Central",
        email: "bill.esterson.mp@parliament.uk"
      },
      {
        name: "Chris Evans",
        constituency: "Caerphilly",
        email: "chris.evans.mp@parliament.uk"
      },
      {
        name: "Luke Evans",
        constituency: "Hinckley and Bosworth",
        email: "luke.evans.mp@parliament.uk"
      },
      {
        name: "Miatta Fahnbulleh",
        constituency: "Peckham",
        email: "miatta.fahnbulleh.mp@parliament.uk"
      },
      {
        name: "Hamish Falconer",
        constituency: "Lincoln",
        email: "hamish.falconer.mp@parliament.uk"
      },
      {
        name: "Nigel Farage",
        constituency: "Clacton",
        email: "nigel.farage.mp@parliament.uk"
      },
      {
        name: "Linsey Farnsworth",
        constituency: "Amber Valley",
        email: "linsey.farnsworth.mp@parliament.uk"
      },
      {
        name: "Tim Farron",
        constituency: "Westmorland and Lonsdale",
        email: "tim.farron.mp@parliament.uk"
      },
      {
        name: "Josh Fenton-Glynn",
        constituency: "Calder Valley",
        email: "josh.fenton-glynn.mp@parliament.uk"
      },
      {
        name: "Mark Ferguson",
        constituency: "Gateshead Central and Whickham",
        email: "mark.ferguson.mp@parliament.uk"
      },
      {
        name: "Patricia Ferguson",
        constituency: "Glasgow West",
        email: "patricia.ferguson.mp@parliament.uk"
      },
      {
        name: "John Finucane",
        constituency: "Belfast North",
        email: "john.finucane.mp@parliament.uk"
      },
      {
        name: "Natalie Fleet",
        constituency: "Bolsover",
        email: "natalie.fleet.mp@parliament.uk"
      },
      {
        name: "Stephen Flynn",
        constituency: "Aberdeen South",
        email: "stephen.flynn.mp@parliament.uk"
      },
      {
        name: "Emma Foody",
        constituency: "Cramlington and Killingworth",
        email: "emma.foody.mp@parliament.uk"
      },
      {
        name: "Catherine Fookes",
        constituency: "Monmouthshire",
        email: "catherine.fookes.mp@parliament.uk"
      },
      {
        name: "Richard Foord",
        constituency: "Honiton and Sidmouth",
        email: "richard.foord.mp@parliament.uk"
      },
      {
        name: "Will Forster",
        constituency: "Woking",
        email: "will.forster.mp@parliament.uk"
      },
      {
        name: "Peter Fortune",
        constituency: "Bromley and Biggin Hill",
        email: "peter.fortune.mp@parliament.uk"
      },
      {
        name: "Paul Foster",
        constituency: "South Ribble",
        email: "paul.foster.mp@parliament.uk"
      },
      {
        name: "Ashley Fox",
        constituency: "Bridgwater",
        email: "ashley.fox.mp@parliament.uk"
      },
      {
        name: "Vicky Foxcroft",
        constituency: "Lewisham North",
        email: "vicky.foxcroft.mp@parliament.uk"
      },
      {
        name: "Mary Foy",
        constituency: "City of Durham",
        email: "mary.foy.mp@parliament.uk"
      },
      {
        name: "Daniel Francis",
        constituency: "Bexleyheath and Crayford",
        email: "daniel.francis.mp@parliament.uk"
      },
      {
        name: "Mark Francois",
        constituency: "Rayleigh and Wickford",
        email: "mark.francois.mp@parliament.uk"
      },
      {
        name: "Zöe Franklin",
        constituency: "Guildford",
        email: "zöe.franklin.mp@parliament.uk"
      },
      {
        name: "George Freeman",
        constituency: "Mid Norfolk",
        email: "george.freeman.mp@parliament.uk"
      },
      {
        name: "Louie French",
        constituency: "Old Bexley and Sidcup",
        email: "louie.french.mp@parliament.uk"
      },
      {
        name: "James Frith",
        constituency: "Bury North",
        email: "james.frith.mp@parliament.uk"
      },
      {
        name: "Richard Fuller",
        constituency: "North Bedfordshire",
        email: "richard.fuller.mp@parliament.uk"
      },
      {
        name: "Gill Furniss",
        constituency: "Sheffield Brightside and Hillsborough",
        email: "gill.furniss.mp@parliament.uk"
      },
      {
        name: "Roger Gale",
        constituency: "Herne Bay and Sandwich",
        email: "roger.gale.mp@parliament.uk"
      },
      {
        name: "Barry Gardiner",
        constituency: "Brent West",
        email: "barry.gardiner.mp@parliament.uk"
      },
      {
        name: "Allison Gardner",
        constituency: "Stoke-on-Trent South",
        email: "allison.gardner.mp@parliament.uk"
      },
      {
        name: "Mark Garnier",
        constituency: "Wyre Forest",
        email: "mark.garnier.mp@parliament.uk"
      },
      {
        name: "Anna Gelderd",
        constituency: "South East Cornwall",
        email: "anna.gelderd.mp@parliament.uk"
      },
      {
        name: "Alan Gemmell",
        constituency: "Central Ayrshire",
        email: "alan.gemmell.mp@parliament.uk"
      },
      {
        name: "Andrew George",
        constituency: "St Ives",
        email: "andrew.george.mp@parliament.uk"
      },
      {
        name: "Gill German",
        constituency: "Clwyd North",
        email: "gill.german.mp@parliament.uk"
      },
      {
        name: "Stephen Gethins",
        constituency: "Arbroath and Broughty Ferry",
        email: "stephen.gethins.mp@parliament.uk"
      },
      {
        name: "Nusrat Ghani",
        constituency: "Sussex Weald",
        email: "nusrat.ghani.mp@parliament.uk"
      },
      {
        name: "Sarah Gibson",
        constituency: "Chippenham",
        email: "sarah.gibson.mp@parliament.uk"
      },
      {
        name: "Tracy Gilbert",
        constituency: "Edinburgh North and Leith",
        email: "tracy.gilbert.mp@parliament.uk"
      },
      {
        name: "Preet Kaur Gill",
        constituency: "Birmingham Edgbaston",
        email: "preet kaur.gill.mp@parliament.uk"
      },
      {
        name: "Rachel Gilmour",
        constituency: "Tiverton and Minehead",
        email: "rachel.gilmour.mp@parliament.uk"
      },
      {
        name: "Becky Gittins",
        constituency: "Clwyd East",
        email: "becky.gittins.mp@parliament.uk"
      },
      {
        name: "John Glen",
        constituency: "Salisbury",
        email: "john.glen.mp@parliament.uk"
      },
      {
        name: "Mary Glindon",
        constituency: "Newcastle upon Tyne East and Wallsend",
        email: "mary.glindon.mp@parliament.uk"
      },
      {
        name: "Olly Glover",
        constituency: "Didcot and Wantage",
        email: "olly.glover.mp@parliament.uk"
      },
      {
        name: "Marie Goldman",
        constituency: "Chelmsford",
        email: "marie.goldman.mp@parliament.uk"
      },
      {
        name: "Ben Goldsborough",
        constituency: "South Norfolk",
        email: "ben.goldsborough.mp@parliament.uk"
      },
      {
        name: "Tom Gordon",
        constituency: "Harrogate and Knaresborough",
        email: "tom.gordon.mp@parliament.uk"
      },
      {
        name: "Jodie Gosling",
        constituency: "Nuneaton",
        email: "jodie.gosling.mp@parliament.uk"
      },
      {
        name: "Georgia Gould",
        constituency: "Queen's Park and Maida Vale",
        email: "georgia.gould.mp@parliament.uk"
      },
      {
        name: "John Grady",
        constituency: "Glasgow East",
        email: "john.grady.mp@parliament.uk"
      },
      {
        name: "Helen Grant",
        constituency: "Maidstone and Malling",
        email: "helen.grant.mp@parliament.uk"
      },
      {
        name: "Sarah Green",
        constituency: "Chesham and Amersham",
        email: "sarah.green.mp@parliament.uk"
      },
      {
        name: "Lilian Greenwood",
        constituency: "Nottingham South",
        email: "lilian.greenwood.mp@parliament.uk"
      },
      {
        name: "Andrew Griffith",
        constituency: "Arundel and South Downs",
        email: "andrew.griffith.mp@parliament.uk"
      },
      {
        name: "Nia Griffith",
        constituency: "Llanelli",
        email: "nia.griffith.mp@parliament.uk"
      },
      {
        name: "Alison Griffiths",
        constituency: "Bognor Regis and Littlehampton",
        email: "alison.griffiths.mp@parliament.uk"
      },
      {
        name: "Andrew Gwynne",
        constituency: "Gorton and Denton",
        email: "andrew.gwynne.mp@parliament.uk"
      },
      {
        name: "Amanda Hack",
        constituency: "North West Leicestershire",
        email: "amanda.hack.mp@parliament.uk"
      },
      {
        name: "Louise Haigh",
        constituency: "Sheffield Heeley",
        email: "louise.haigh.mp@parliament.uk"
      },
      {
        name: "Sarah Hall",
        constituency: "Warrington South",
        email: "sarah.hall.mp@parliament.uk"
      },
      {
        name: "Fabian Hamilton",
        constituency: "Leeds North East",
        email: "fabian.hamilton.mp@parliament.uk"
      },
      {
        name: "Paulette Hamilton",
        constituency: "Birmingham Erdington",
        email: "paulette.hamilton.mp@parliament.uk"
      },
      {
        name: "Claire Hanna",
        constituency: "Belfast South and Mid Down",
        email: "claire.hanna.mp@parliament.uk"
      },
      {
        name: "Monica Harding",
        constituency: "Esher and Walton",
        email: "monica.harding.mp@parliament.uk"
      },
      {
        name: "Emma Hardy",
        constituency: "Kingston upon Hull West and Haltemprice",
        email: "emma.hardy.mp@parliament.uk"
      },
      {
        name: "Carolyn Harris",
        constituency: "Neath and Swansea East",
        email: "carolyn.harris.mp@parliament.uk"
      },
      {
        name: "Rebecca Harris",
        constituency: "Castle Point",
        email: "rebecca.harris.mp@parliament.uk"
      },
      {
        name: "Lloyd Hatton",
        constituency: "South Dorset",
        email: "lloyd.hatton.mp@parliament.uk"
      },
      {
        name: "Helen Hayes",
        constituency: "Dulwich and West Norwood",
        email: "helen.hayes.mp@parliament.uk"
      },
      {
        name: "John Hayes",
        constituency: "South Holland and The Deepings",
        email: "john.hayes.mp@parliament.uk"
      },
      {
        name: "Tom Hayes",
        constituency: "Bournemouth East",
        email: "tom.hayes.mp@parliament.uk"
      },
      {
        name: "Claire Hazelgrove",
        constituency: "Filton and Bradley Stoke",
        email: "claire.hazelgrove.mp@parliament.uk"
      },
      {
        name: "Christopher Hazzard",
        constituency: "South Down",
        email: "christopher.hazzard.mp@parliament.uk"
      },
      {
        name: "John Healey",
        constituency: "Rawmarsh and Conisbrough",
        email: "john.healey.mp@parliament.uk"
      },
      {
        name: "Mark Hendrick",
        constituency: "Preston",
        email: "mark.hendrick.mp@parliament.uk"
      },
      {
        name: "Pippa Heylings",
        constituency: "South Cambridgeshire",
        email: "pippa.heylings.mp@parliament.uk"
      },
      {
        name: "Meg Hillier",
        constituency: "Hackney South and Shoreditch",
        email: "meg.hillier.mp@parliament.uk"
      },
      {
        name: "Chris Hinchliff",
        constituency: "North East Hertfordshire",
        email: "chris.hinchliff.mp@parliament.uk"
      },
      {
        name: "Jonathan Hinder",
        constituency: "Pendle and Clitheroe",
        email: "jonathan.hinder.mp@parliament.uk"
      },
      {
        name: "Damian Hinds",
        constituency: "East Hampshire",
        email: "damian.hinds.mp@parliament.uk"
      },
      {
        name: "Simon Hoare",
        constituency: "North Dorset",
        email: "simon.hoare.mp@parliament.uk"
      },
      {
        name: "Wera Hobhouse",
        constituency: "Bath",
        email: "wera.hobhouse.mp@parliament.uk"
      },
      {
        name: "Sharon Hodgson",
        constituency: "Washington and Gateshead South",
        email: "sharon.hodgson.mp@parliament.uk"
      },
      {
        name: "Richard Holden",
        constituency: "Basildon and Billericay",
        email: "richard.holden.mp@parliament.uk"
      },
      {
        name: "Kevin Hollinrake",
        constituency: "Thirsk and Malton",
        email: "kevin.hollinrake.mp@parliament.uk"
      },
      {
        name: "Paul Holmes",
        constituency: "Hamble Valley",
        email: "paul.holmes.mp@parliament.uk"
      },
      {
        name: "Rachel Hopkins",
        constituency: "Luton South and South Bedfordshire",
        email: "rachel.hopkins.mp@parliament.uk"
      },
      {
        name: "Lindsay Hoyle",
        constituency: "Chorley",
        email: "lindsay.hoyle.mp@parliament.uk"
      },
      {
        name: "Nigel Huddleston",
        constituency: "Droitwich and Evesham",
        email: "nigel.huddleston.mp@parliament.uk"
      },
      {
        name: "Neil Hudson",
        constituency: "Epping Forest",
        email: "neil.hudson.mp@parliament.uk"
      },
      {
        name: "Claire Hughes",
        constituency: "Bangor Aberconwy",
        email: "claire.hughes.mp@parliament.uk"
      },
      {
        name: "Dáire Hughes",
        constituency: "Newry and Armagh",
        email: "dáire.hughes.mp@parliament.uk"
      },
      {
        name: "Alison Hume",
        constituency: "Scarborough and Whitby",
        email: "alison.hume.mp@parliament.uk"
      },
      {
        name: "Jeremy Hunt",
        constituency: "Godalming and Ash",
        email: "jeremy.hunt.mp@parliament.uk"
      },
      {
        name: "Rupa Huq",
        constituency: "Ealing Central and Acton",
        email: "rupa.huq.mp@parliament.uk"
      },
      {
        name: "Patrick Hurley",
        constituency: "Southport",
        email: "patrick.hurley.mp@parliament.uk"
      },
      {
        name: "Adnan Hussain",
        constituency: "Blackburn",
        email: "adnan.hussain.mp@parliament.uk"
      },
      {
        name: "Imran Hussain",
        constituency: "Bradford East",
        email: "imran.hussain.mp@parliament.uk"
      },
      {
        name: "Leigh Ingham",
        constituency: "Stafford",
        email: "leigh.ingham.mp@parliament.uk"
      },
      {
        name: "Natasha Irons",
        constituency: "Croydon East",
        email: "natasha.irons.mp@parliament.uk"
      },
      {
        name: "Sally Jameson",
        constituency: "Doncaster Central",
        email: "sally.jameson.mp@parliament.uk"
      },
      {
        name: "Christine Jardine",
        constituency: "Edinburgh West",
        email: "christine.jardine.mp@parliament.uk"
      },
      {
        name: "Dan Jarvis",
        constituency: "Barnsley North",
        email: "dan.jarvis.mp@parliament.uk"
      },
      {
        name: "Liz Jarvis",
        constituency: "Eastleigh",
        email: "liz.jarvis.mp@parliament.uk"
      },
      {
        name: "Bernard Jenkin",
        constituency: "Harwich and North Essex",
        email: "bernard.jenkin.mp@parliament.uk"
      },
      {
        name: "Robert Jenrick",
        constituency: "Newark",
        email: "robert.jenrick.mp@parliament.uk"
      },
      {
        name: "Terry Jermy",
        constituency: "South West Norfolk",
        email: "terry.jermy.mp@parliament.uk"
      },
      {
        name: "Adam Jogee",
        constituency: "Newcastle-under-Lyme",
        email: "adam.jogee.mp@parliament.uk"
      },
      {
        name: "Caroline Johnson",
        constituency: "Sleaford and North Hykeham",
        email: "caroline.johnson.mp@parliament.uk"
      },
      {
        name: "Diana R. Johnson",
        constituency: "Kingston upon Hull North and Cottingham",
        email: "diana r..johnson.mp@parliament.uk"
      },
      {
        name: "Kim Johnson",
        constituency: "Liverpool Riverside",
        email: "kim.johnson.mp@parliament.uk"
      },
      {
        name: "Clive Jones",
        constituency: "Wokingham",
        email: "clive.jones.mp@parliament.uk"
      },
      {
        name: "Darren Jones",
        constituency: "Bristol North West",
        email: "darren.jones.mp@parliament.uk"
      },
      {
        name: "Gerald Jones",
        constituency: "Merthyr Tydfil and Aberdare",
        email: "gerald.jones.mp@parliament.uk"
      },
      {
        name: "Lillian Jones",
        constituency: "Kilmarnock and Loudoun",
        email: "lillian.jones.mp@parliament.uk"
      },
      {
        name: "Louise Jones",
        constituency: "North East Derbyshire",
        email: "louise.jones.mp@parliament.uk"
      },
      {
        name: "Ruth Jones",
        constituency: "Newport West and Islwyn",
        email: "ruth.jones.mp@parliament.uk"
      },
      {
        name: "Sarah Jones",
        constituency: "Croydon West",
        email: "sarah.jones.mp@parliament.uk"
      },
      {
        name: "Lincoln Jopp",
        constituency: "Spelthorne",
        email: "lincoln.jopp.mp@parliament.uk"
      },
      {
        name: "Gurinder Josan",
        constituency: "Smethwick",
        email: "gurinder.josan.mp@parliament.uk"
      },
      {
        name: "Sojan Joseph",
        constituency: "Ashford",
        email: "sojan.joseph.mp@parliament.uk"
      },
      {
        name: "Warinder Juss",
        constituency: "Wolverhampton West",
        email: "warinder.juss.mp@parliament.uk"
      },
      {
        name: "Chris Kane",
        constituency: "Stirling and Strathallan",
        email: "chris.kane.mp@parliament.uk"
      },
      {
        name: "Mike Kane",
        constituency: "Wythenshawe and Sale East",
        email: "mike.kane.mp@parliament.uk"
      },
      {
        name: "Satvir Kaur",
        constituency: "Southampton Test",
        email: "satvir.kaur.mp@parliament.uk"
      },
      {
        name: "Alicia Kearns",
        constituency: "Rutland and Stamford",
        email: "alicia.kearns.mp@parliament.uk"
      },
      {
        name: "Liz Kendall",
        constituency: "Leicester West",
        email: "liz.kendall.mp@parliament.uk"
      },
      {
        name: "Afzal Khan",
        constituency: "Manchester Rusholme",
        email: "afzal.khan.mp@parliament.uk"
      },
      {
        name: "Ayoub Khan",
        constituency: "Birmingham Perry Barr",
        email: "ayoub.khan.mp@parliament.uk"
      },
      {
        name: "Naushabah Khan",
        constituency: "Gillingham and Rainham",
        email: "naushabah.khan.mp@parliament.uk"
      },
      {
        name: "Stephen Kinnock",
        constituency: "Aberafan Maesteg",
        email: "stephen.kinnock.mp@parliament.uk"
      },
      {
        name: "Jayne Kirkham",
        constituency: "Truro and Falmouth",
        email: "jayne.kirkham.mp@parliament.uk"
      },
      {
        name: "Gen Kitchen",
        constituency: "Wellingborough and Rushden",
        email: "gen.kitchen.mp@parliament.uk"
      },
      {
        name: "Paul Kohler",
        constituency: "Wimbledon",
        email: "paul.kohler.mp@parliament.uk"
      },
      {
        name: "Danny Kruger",
        constituency: "East Wiltshire",
        email: "danny.kruger.mp@parliament.uk"
      },
      {
        name: "Sonia Kumar",
        constituency: "Dudley",
        email: "sonia.kumar.mp@parliament.uk"
      },
      {
        name: "Uma Kumaran",
        constituency: "Stratford and Bow",
        email: "uma.kumaran.mp@parliament.uk"
      },
      {
        name: "Peter Kyle",
        constituency: "Hove and Portslade",
        email: "peter.kyle.mp@parliament.uk"
      },
      {
        name: "Laura Kyrke-Smith",
        constituency: "Aylesbury",
        email: "laura.kyrke-smith.mp@parliament.uk"
      },
      {
        name: "Ben Lake",
        constituency: "Ceredigion Preseli",
        email: "ben.lake.mp@parliament.uk"
      },
      {
        name: "Katie Lam",
        constituency: "Weald of Kent",
        email: "katie.lam.mp@parliament.uk"
      },
      {
        name: "Peter Lamb",
        constituency: "Crawley",
        email: "peter.lamb.mp@parliament.uk"
      },
      {
        name: "David Lammy",
        constituency: "Tottenham",
        email: "david.lammy.mp@parliament.uk"
      },
      {
        name: "John Lamont",
        constituency: "Berwickshire, Roxburgh and Selkirk",
        email: "john.lamont.mp@parliament.uk"
      },
      {
        name: "Ian Lavery",
        constituency: "Blyth and Ashington",
        email: "ian.lavery.mp@parliament.uk"
      },
      {
        name: "Chris Law",
        constituency: "Dundee Central",
        email: "chris.law.mp@parliament.uk"
      },
      {
        name: "Noah Law",
        constituency: "St Austell and Newquay",
        email: "noah.law.mp@parliament.uk"
      },
      {
        name: "Kim Leadbeater",
        constituency: "Spen Valley",
        email: "kim.leadbeater.mp@parliament.uk"
      },
      {
        name: "Graham Leadbitter",
        constituency: "Moray West, Nairn and Strathspey",
        email: "graham.leadbitter.mp@parliament.uk"
      },
      {
        name: "Edward Leigh",
        constituency: "Gainsborough",
        email: "edward.leigh.mp@parliament.uk"
      },
      {
        name: "Brian Leishman",
        constituency: "Alloa and Grangemouth",
        email: "brian.leishman.mp@parliament.uk"
      },
      {
        name: "Emma Lewell-Buck",
        constituency: "South Shields",
        email: "emma.lewell-buck.mp@parliament.uk"
      },
      {
        name: "Andrew Lewin",
        constituency: "Welwyn Hatfield",
        email: "andrew.lewin.mp@parliament.uk"
      },
      {
        name: "Clive Lewis",
        constituency: "Norwich South",
        email: "clive.lewis.mp@parliament.uk"
      },
      {
        name: "Julian Lewis",
        constituency: "New Forest East",
        email: "julian.lewis.mp@parliament.uk"
      },
      {
        name: "Simon Lightwood",
        constituency: "Wakefield and Rothwell",
        email: "simon.lightwood.mp@parliament.uk"
      },
      {
        name: "Carla Lockhart",
        constituency: "Upper Bann",
        email: "carla.lockhart.mp@parliament.uk"
      },
      {
        name: "Seamus Logan",
        constituency: "Aberdeenshire North and Moray East",
        email: "seamus.logan.mp@parliament.uk"
      },
      {
        name: "Rebecca Long-Bailey",
        constituency: "Salford",
        email: "rebecca.long-bailey.mp@parliament.uk"
      },
      {
        name: "Julia Lopez",
        constituency: "Hornchurch and Upminster",
        email: "julia.lopez.mp@parliament.uk"
      },
      {
        name: "Rupert Lowe",
        constituency: "Great Yarmouth",
        email: "rupert.lowe.mp@parliament.uk"
      },
      {
        name: "Josh MacAlister",
        constituency: "Whitehaven and Workington",
        email: "josh.macalister.mp@parliament.uk"
      },
      {
        name: "James MacCleary",
        constituency: "Lewes",
        email: "james.maccleary.mp@parliament.uk"
      },
      {
        name: "Alice Macdonald",
        constituency: "Norwich North",
        email: "alice.macdonald.mp@parliament.uk"
      },
      {
        name: "Angus MacDonald",
        constituency: "Inverness, Skye and West Ross-shire",
        email: "angus.macdonald.mp@parliament.uk"
      },
      {
        name: "Andy MacNae",
        constituency: "Rossendale and Darwen",
        email: "andy.macnae.mp@parliament.uk"
      },
      {
        name: "Justin Madders",
        constituency: "Ellesmere Port and Bromborough",
        email: "justin.madders.mp@parliament.uk"
      },
      {
        name: "Ben Maguire",
        constituency: "North Cornwall",
        email: "ben.maguire.mp@parliament.uk"
      },
      {
        name: "Helen Maguire",
        constituency: "Epsom and Ewell",
        email: "helen.maguire.mp@parliament.uk"
      },
      {
        name: "Shabana Mahmood",
        constituency: "Birmingham Ladywood",
        email: "shabana.mahmood.mp@parliament.uk"
      },
      {
        name: "Alan Mak",
        constituency: "Havant",
        email: "alan.mak.mp@parliament.uk"
      },
      {
        name: "Seema Malhotra",
        constituency: "Feltham and Heston",
        email: "seema.malhotra.mp@parliament.uk"
      },
      {
        name: "Cathal Mallaghan",
        constituency: "Mid Ulster",
        email: "cathal.mallaghan.mp@parliament.uk"
      },
      {
        name: "Kit Malthouse",
        constituency: "North West Hampshire",
        email: "kit.malthouse.mp@parliament.uk"
      },
      {
        name: "Amanda Martin",
        constituency: "Portsmouth North",
        email: "amanda.martin.mp@parliament.uk"
      },
      {
        name: "Mike Martin",
        constituency: "Tunbridge Wells",
        email: "mike.martin.mp@parliament.uk"
      },
      {
        name: "Rachael Maskell",
        constituency: "York Central",
        email: "rachael.maskell.mp@parliament.uk"
      },
      {
        name: "Paul Maskey",
        constituency: "Belfast West",
        email: "paul.maskey.mp@parliament.uk"
      },
      {
        name: "Keir Mather",
        constituency: "Selby",
        email: "keir.mather.mp@parliament.uk"
      },
      {
        name: "Brian Mathew",
        constituency: "Melksham and Devizes",
        email: "brian.mathew.mp@parliament.uk"
      },
      {
        name: "Alex Mayer",
        constituency: "Dunstable and Leighton Buzzard",
        email: "alex.mayer.mp@parliament.uk"
      },
      {
        name: "Jerome Mayhew",
        constituency: "Broadland and Fakenham",
        email: "jerome.mayhew.mp@parliament.uk"
      },
      {
        name: "Charlie Maynard",
        constituency: "Witney",
        email: "charlie.maynard.mp@parliament.uk"
      },
      {
        name: "Douglas McAllister",
        constituency: "West Dunbartonshire",
        email: "douglas.mcallister.mp@parliament.uk"
      },
      {
        name: "Kerry McCarthy",
        constituency: "Bristol East",
        email: "kerry.mccarthy.mp@parliament.uk"
      },
      {
        name: "Martin McCluskey",
        constituency: "Inverclyde and Renfrewshire West",
        email: "martin.mccluskey.mp@parliament.uk"
      },
      {
        name: "Siobhain McDonagh",
        constituency: "Mitcham and Morden",
        email: "siobhain.mcdonagh.mp@parliament.uk"
      },
      {
        name: "Andy McDonald",
        constituency: "Middlesbrough and Thornaby East",
        email: "andy.mcdonald.mp@parliament.uk"
      },
      {
        name: "Chris McDonald",
        constituency: "Stockton North",
        email: "chris.mcdonald.mp@parliament.uk"
      },
      {
        name: "John Martin McDonnell",
        constituency: "Hayes and Harlington",
        email: "john martin.mcdonnell.mp@parliament.uk"
      },
      {
        name: "Blair McDougall",
        constituency: "East Renfrewshire",
        email: "blair.mcdougall.mp@parliament.uk"
      },
      {
        name: "Lola McEvoy",
        constituency: "Darlington",
        email: "lola.mcevoy.mp@parliament.uk"
      },
      {
        name: "Pat McFadden",
        constituency: "Wolverhampton South East",
        email: "pat.mcfadden.mp@parliament.uk"
      },
      {
        name: "Alison McGovern",
        constituency: "Birkenhead",
        email: "alison.mcgovern.mp@parliament.uk"
      },
      {
        name: "Alex McIntyre",
        constituency: "Gloucester",
        email: "alex.mcintyre.mp@parliament.uk"
      },
      {
        name: "Gordon McKee",
        constituency: "Glasgow South",
        email: "gordon.mckee.mp@parliament.uk"
      },
      {
        name: "Kevin McKenna",
        constituency: "Sittingbourne and Sheppey",
        email: "kevin.mckenna.mp@parliament.uk"
      },
      {
        name: "Catherine McKinnell",
        constituency: "Newcastle upon Tyne North",
        email: "catherine.mckinnell.mp@parliament.uk"
      },
      {
        name: "Jim McMahon",
        constituency: "Oldham West, Chadderton and Royton",
        email: "jim.mcmahon.mp@parliament.uk"
      },
      {
        name: "Anna McMorrin",
        constituency: "Cardiff North",
        email: "anna.mcmorrin.mp@parliament.uk"
      },
      {
        name: "James McMurdock",
        constituency: "South Basildon and East Thurrock",
        email: "james.mcmurdock.mp@parliament.uk"
      },
      {
        name: "Frank McNally",
        constituency: "Coatbridge and Bellshill",
        email: "frank.mcnally.mp@parliament.uk"
      },
      {
        name: "Kirsty McNeill",
        constituency: "Midlothian",
        email: "kirsty.mcneill.mp@parliament.uk"
      },
      {
        name: "Esther McVey",
        constituency: "Tatton",
        email: "esther.mcvey.mp@parliament.uk"
      },
      {
        name: "Llinos Medi",
        constituency: "Ynys Môn",
        email: "llinos.medi.mp@parliament.uk"
      },
      {
        name: "Anneliese Midgley",
        constituency: "Knowsley",
        email: "anneliese.midgley.mp@parliament.uk"
      },
      {
        name: "Ed Miliband",
        constituency: "Doncaster North",
        email: "ed.miliband.mp@parliament.uk"
      },
      {
        name: "Calum Miller",
        constituency: "Bicester and Woodstock",
        email: "calum.miller.mp@parliament.uk"
      },
      {
        name: "John Milne",
        constituency: "Horsham",
        email: "john.milne.mp@parliament.uk"
      },
      {
        name: "Julie Minns",
        constituency: "Carlisle",
        email: "julie.minns.mp@parliament.uk"
      },
      {
        name: "Navendu Mishra",
        constituency: "Stockport",
        email: "navendu.mishra.mp@parliament.uk"
      },
      {
        name: "Andrew Mitchell",
        constituency: "Sutton Coldfield",
        email: "andrew.mitchell.mp@parliament.uk"
      },
      {
        name: "Abtisam Mohamed",
        constituency: "Sheffield Central",
        email: "abtisam.mohamed.mp@parliament.uk"
      },
      {
        name: "Iqbal Mohamed",
        constituency: "Dewsbury and Batley",
        email: "iqbal.mohamed.mp@parliament.uk"
      },
      {
        name: "Gagan Mohindra",
        constituency: "South West Hertfordshire",
        email: "gagan.mohindra.mp@parliament.uk"
      },
      {
        name: "Perran Moon",
        constituency: "Camborne and Redruth",
        email: "perran.moon.mp@parliament.uk"
      },
      {
        name: "Robbie Moore",
        constituency: "Keighley and Ilkley",
        email: "robbie.moore.mp@parliament.uk"
      },
      {
        name: "Layla Moran",
        constituency: "Oxford West and Abingdon",
        email: "layla.moran.mp@parliament.uk"
      },
      {
        name: "Jessica Morden",
        constituency: "Newport East",
        email: "jessica.morden.mp@parliament.uk"
      },
      {
        name: "Edward Morello",
        constituency: "West Dorset",
        email: "edward.morello.mp@parliament.uk"
      },
      {
        name: "Helen Morgan",
        constituency: "North Shropshire",
        email: "helen.morgan.mp@parliament.uk"
      },
      {
        name: "Stephen Morgan",
        constituency: "Portsmouth South",
        email: "stephen.morgan.mp@parliament.uk"
      },
      {
        name: "Grahame Morris",
        constituency: "Easington",
        email: "grahame.morris.mp@parliament.uk"
      },
      {
        name: "Joe Morris",
        constituency: "Hexham",
        email: "joe.morris.mp@parliament.uk"
      },
      {
        name: "Tom Morrison",
        constituency: "Cheadle",
        email: "tom.morrison.mp@parliament.uk"
      },
      {
        name: "Joy Morrissey",
        constituency: "Beaconsfield",
        email: "joy.morrissey.mp@parliament.uk"
      },
      {
        name: "Wendy Morton",
        constituency: "Aldridge-Brownhills",
        email: "wendy.morton.mp@parliament.uk"
      },
      {
        name: "Kieran Mullan",
        constituency: "Bexhill and Battle",
        email: "kieran.mullan.mp@parliament.uk"
      },
      {
        name: "Margaret Mullane",
        constituency: "Dagenham and Rainham",
        email: "margaret.mullane.mp@parliament.uk"
      },
      {
        name: "David Mundell",
        constituency: "Dumfriesshire, Clydesdale and Tweeddale",
        email: "david.mundell.mp@parliament.uk"
      },
      {
        name: "Tessa Munt",
        constituency: "Wells and Mendip Hills",
        email: "tessa.munt.mp@parliament.uk"
      },
      {
        name: "Luke Murphy",
        constituency: "Basingstoke",
        email: "luke.murphy.mp@parliament.uk"
      },
      {
        name: "Chris Murray",
        constituency: "Edinburgh East and Musselburgh",
        email: "chris.murray.mp@parliament.uk"
      },
      {
        name: "Ian Murray",
        constituency: "Edinburgh South",
        email: "ian.murray.mp@parliament.uk"
      },
      {
        name: "James Murray",
        constituency: "Ealing North",
        email: "james.murray.mp@parliament.uk"
      },
      {
        name: "Katrina Murray",
        constituency: "Cumbernauld and Kirkintilloch",
        email: "katrina.murray.mp@parliament.uk"
      },
      {
        name: "Susan Murray",
        constituency: "Mid Dunbartonshire",
        email: "susan.murray.mp@parliament.uk"
      },
      {
        name: "Andrew Murrison",
        constituency: "South West Wiltshire",
        email: "andrew.murrison.mp@parliament.uk"
      },
      {
        name: "Luke Myer",
        constituency: "Middlesbrough South and East Cleveland",
        email: "luke.myer.mp@parliament.uk"
      },
      {
        name: "James Naish",
        constituency: "Rushcliffe",
        email: "james.naish.mp@parliament.uk"
      },
      {
        name: "Connor Naismith",
        constituency: "Crewe and Nantwich",
        email: "connor.naismith.mp@parliament.uk"
      },
      {
        name: "Lisa Nandy",
        constituency: "Wigan",
        email: "lisa.nandy.mp@parliament.uk"
      },
      {
        name: "Kanishka Narayan",
        constituency: "Vale of Glamorgan",
        email: "kanishka.narayan.mp@parliament.uk"
      },
      {
        name: "Pamela Nash",
        constituency: "Motherwell, Wishaw and Carluke",
        email: "pamela.nash.mp@parliament.uk"
      },
      {
        name: "Josh Newbury",
        constituency: "Cannock Chase",
        email: "josh.newbury.mp@parliament.uk"
      },
      {
        name: "Samantha Niblett",
        constituency: "South Derbyshire",
        email: "samantha.niblett.mp@parliament.uk"
      },
      {
        name: "Charlotte Nichols",
        constituency: "Warrington North",
        email: "charlotte.nichols.mp@parliament.uk"
      },
      {
        name: "Caroline Nokes",
        constituency: "Romsey and Southampton North",
        email: "caroline.nokes.mp@parliament.uk"
      },
      {
        name: "Jesse Norman",
        constituency: "Hereford and South Herefordshire",
        email: "jesse.norman.mp@parliament.uk"
      },
      {
        name: "Alex Norris",
        constituency: "Nottingham North and Kimberley",
        email: "alex.norris.mp@parliament.uk"
      },
      {
        name: "Dan Norris",
        constituency: "North East Somerset and Hanham",
        email: "dan.norris.mp@parliament.uk"
      },
      {
        name: "Neil O'Brien",
        constituency: "Harborough, Oadby and Wigston",
        email: "neil.o'brien.mp@parliament.uk"
      },
      {
        name: "Brendan O'Hara",
        constituency: "Argyll, Bute and South Lochaber",
        email: "brendan.o'hara.mp@parliament.uk"
      },
      {
        name: "Ben Obese-Jecty",
        constituency: "Huntingdon",
        email: "ben.obese-jecty.mp@parliament.uk"
      },
      {
        name: "Sarah Olney",
        constituency: "Richmond Park",
        email: "sarah.olney.mp@parliament.uk"
      },
      {
        name: "Melanie Onn",
        constituency: "Great Grimsby and Cleethorpes",
        email: "melanie.onn.mp@parliament.uk"
      },
      {
        name: "Chi Onwurah",
        constituency: "Newcastle upon Tyne Central and West",
        email: "chi.onwurah.mp@parliament.uk"
      },
      {
        name: "Simon Opher",
        constituency: "Stroud",
        email: "simon.opher.mp@parliament.uk"
      },
      {
        name: "Abena Oppong-Asare",
        constituency: "Erith and Thamesmead",
        email: "abena.oppong-asare.mp@parliament.uk"
      },
      {
        name: "Kate Osamor",
        constituency: "Edmonton and Winchmore Hill",
        email: "kate.osamor.mp@parliament.uk"
      },
      {
        name: "Kate Osborne",
        constituency: "Jarrow and Gateshead East",
        email: "kate.osborne.mp@parliament.uk"
      },
      {
        name: "Tristan Osborne",
        constituency: "Chatham and Aylesford",
        email: "tristan.osborne.mp@parliament.uk"
      },
      {
        name: "Taiwo Owatemi",
        constituency: "Coventry North West",
        email: "taiwo.owatemi.mp@parliament.uk"
      },
      {
        name: "Sarah Owen",
        constituency: "Luton North",
        email: "sarah.owen.mp@parliament.uk"
      },
      {
        name: "Darren Paffey",
        constituency: "Southampton Itchen",
        email: "darren.paffey.mp@parliament.uk"
      },
      {
        name: "Andrew Pakes",
        constituency: "Peterborough",
        email: "andrew.pakes.mp@parliament.uk"
      },
      {
        name: "Priti Patel",
        constituency: "Witham",
        email: "priti.patel.mp@parliament.uk"
      },
      {
        name: "Matthew Patrick",
        constituency: "Wirral West",
        email: "matthew.patrick.mp@parliament.uk"
      },
      {
        name: "Rebecca Paul",
        constituency: "Reigate",
        email: "rebecca.paul.mp@parliament.uk"
      },
      {
        name: "Michael Payne",
        constituency: "Gedling",
        email: "michael.payne.mp@parliament.uk"
      },
      {
        name: "Stephanie Peacock",
        constituency: "Barnsley South",
        email: "stephanie.peacock.mp@parliament.uk"
      },
      {
        name: "Jonathan Pearce",
        constituency: "High Peak",
        email: "jonathan.pearce.mp@parliament.uk"
      },
      {
        name: "Matthew Pennycook",
        constituency: "Greenwich and Woolwich",
        email: "matthew.pennycook.mp@parliament.uk"
      },
      {
        name: "Toby Perkins",
        constituency: "Chesterfield",
        email: "toby.perkins.mp@parliament.uk"
      },
      {
        name: "Manuela Perteghella",
        constituency: "Stratford-on-Avon",
        email: "manuela.perteghella.mp@parliament.uk"
      },
      {
        name: "Jess Phillips",
        constituency: "Birmingham Yardley",
        email: "jess.phillips.mp@parliament.uk"
      },
      {
        name: "Bridget Phillipson",
        constituency: "Houghton and Sunderland South",
        email: "bridget.phillipson.mp@parliament.uk"
      },
      {
        name: "Chris Philp",
        constituency: "Croydon South",
        email: "chris.philp.mp@parliament.uk"
      },
      {
        name: "Al Pinkerton",
        constituency: "Surrey Heath",
        email: "al.pinkerton.mp@parliament.uk"
      },
      {
        name: "David Pinto-Duschinsky",
        constituency: "Hendon",
        email: "david.pinto-duschinsky.mp@parliament.uk"
      },
      {
        name: "Lee Pitcher",
        constituency: "Doncaster East and the Isle of Axholme",
        email: "lee.pitcher.mp@parliament.uk"
      },
      {
        name: "Jo Platt",
        constituency: "Leigh and Atherton",
        email: "jo.platt.mp@parliament.uk"
      },
      {
        name: "Luke Pollard",
        constituency: "Plymouth Sutton and Devonport",
        email: "luke.pollard.mp@parliament.uk"
      },
      {
        name: "Joe Powell",
        constituency: "Kensington and Bayswater",
        email: "joe.powell.mp@parliament.uk"
      },
      {
        name: "Lucy Powell",
        constituency: "Manchester Central",
        email: "lucy.powell.mp@parliament.uk"
      },
      {
        name: "Gregor Poynton",
        constituency: "Livingston",
        email: "gregor.poynton.mp@parliament.uk"
      },
      {
        name: "Peter Prinsley",
        constituency: "Bury St Edmunds and Stowmarket",
        email: "peter.prinsley.mp@parliament.uk"
      },
      {
        name: "Mark Pritchard",
        constituency: "The Wrekin",
        email: "mark.pritchard.mp@parliament.uk"
      },
      {
        name: "Richard Quigley",
        constituency: "Isle of Wight West",
        email: "richard.quigley.mp@parliament.uk"
      },
      {
        name: "Yasmin Qureshi",
        constituency: "Bolton South and Walkden",
        email: "yasmin.qureshi.mp@parliament.uk"
      },
      {
        name: "Steve Race",
        constituency: "Exeter",
        email: "steve.race.mp@parliament.uk"
      },
      {
        name: "Shivani Raja",
        constituency: "Leicester East",
        email: "shivani.raja.mp@parliament.uk"
      },
      {
        name: "Adrian Ramsay",
        constituency: "Waveney Valley",
        email: "adrian.ramsay.mp@parliament.uk"
      },
      {
        name: "Connor Rand",
        constituency: "Altrincham and Sale West",
        email: "connor.rand.mp@parliament.uk"
      },
      {
        name: "Andrew Ranger",
        constituency: "Wrexham",
        email: "andrew.ranger.mp@parliament.uk"
      },
      {
        name: "Jack Rankin",
        constituency: "Windsor",
        email: "jack.rankin.mp@parliament.uk"
      },
      {
        name: "Angela Rayner",
        constituency: "Ashton-under-Lyne",
        email: "angela.rayner.mp@parliament.uk"
      },
      {
        name: "Mike Reader",
        constituency: "Northampton South",
        email: "mike.reader.mp@parliament.uk"
      },
      {
        name: "David Reed",
        constituency: "Exmouth and Exeter East",
        email: "david.reed.mp@parliament.uk"
      },
      {
        name: "Steve Reed",
        constituency: "Streatham and Croydon North",
        email: "steve.reed.mp@parliament.uk"
      },
      {
        name: "Ellie Reeves",
        constituency: "Lewisham West and East Dulwich",
        email: "ellie.reeves.mp@parliament.uk"
      },
      {
        name: "Rachel Reeves",
        constituency: "Leeds West and Pudsey",
        email: "rachel.reeves.mp@parliament.uk"
      },
      {
        name: "Joani Reid",
        constituency: "East Kilbride and Strathaven",
        email: "joani.reid.mp@parliament.uk"
      },
      {
        name: "Emma Reynolds",
        constituency: "Wycombe",
        email: "emma.reynolds.mp@parliament.uk"
      },
      {
        name: "Jonathan Reynolds",
        constituency: "Stalybridge and Hyde",
        email: "jonathan.reynolds.mp@parliament.uk"
      },
      {
        name: "Joshua Reynolds",
        constituency: "Maidenhead",
        email: "joshua.reynolds.mp@parliament.uk"
      },
      {
        name: "Martin Rhodes",
        constituency: "Glasgow North",
        email: "martin.rhodes.mp@parliament.uk"
      },
      {
        name: "Bell Ribeiro-Addy",
        constituency: "Clapham and Brixton Hill",
        email: "bell.ribeiro-addy.mp@parliament.uk"
      },
      {
        name: "Jake Richards",
        constituency: "Rother Valley",
        email: "jake.richards.mp@parliament.uk"
      },
      {
        name: "Jenny Riddell-Carpenter",
        constituency: "Suffolk Coastal",
        email: "jenny.riddell-carpenter.mp@parliament.uk"
      },
      {
        name: "Lucy Rigby",
        constituency: "Northampton North",
        email: "lucy.rigby.mp@parliament.uk"
      },
      {
        name: "Marie Rimmer",
        constituency: "St Helens South and Whiston",
        email: "marie.rimmer.mp@parliament.uk"
      },
      {
        name: "Dave Robertson",
        constituency: "Lichfield",
        email: "dave.robertson.mp@parliament.uk"
      },
      {
        name: "Joe Robertson",
        constituency: "Isle of Wight East",
        email: "joe.robertson.mp@parliament.uk"
      },
      {
        name: "Gavin Robinson",
        constituency: "Belfast East",
        email: "gavin.robinson.mp@parliament.uk"
      },
      {
        name: "Tim Roca",
        constituency: "Macclesfield",
        email: "tim.roca.mp@parliament.uk"
      },
      {
        name: "Matt Rodda",
        constituency: "Reading Central",
        email: "matt.rodda.mp@parliament.uk"
      },
      {
        name: "Ian Roome",
        constituency: "North Devon",
        email: "ian.roome.mp@parliament.uk"
      },
      {
        name: "Andrew Rosindell",
        constituency: "Romford",
        email: "andrew.rosindell.mp@parliament.uk"
      },
      {
        name: "Sam Rushworth",
        constituency: "Bishop Auckland",
        email: "sam.rushworth.mp@parliament.uk"
      },
      {
        name: "Sarah Russell",
        constituency: "Congleton",
        email: "sarah.russell.mp@parliament.uk"
      },
      {
        name: "Tom Rutland",
        constituency: "East Worthing and Shoreham",
        email: "tom.rutland.mp@parliament.uk"
      },
      {
        name: "Oliver Ryan",
        constituency: "Burnley",
        email: "oliver.ryan.mp@parliament.uk"
      },
      {
        name: "Anna Sabine",
        constituency: "Frome and East Somerset",
        email: "anna.sabine.mp@parliament.uk"
      },
      {
        name: "Sarah Sackman",
        constituency: "Finchley and Golders Green",
        email: "sarah.sackman.mp@parliament.uk"
      },
      {
        name: "Jeevun Sandher",
        constituency: "Loughborough",
        email: "jeevun.sandher.mp@parliament.uk"
      },
      {
        name: "Roz Savage",
        constituency: "South Cotswolds",
        email: "roz.savage.mp@parliament.uk"
      },
      {
        name: "Liz Saville-Roberts",
        constituency: "Dwyfor Meirionnydd",
        email: "liz.saville-roberts.mp@parliament.uk"
      },
      {
        name: "Michelle Scrogham",
        constituency: "Barrow and Furness",
        email: "michelle.scrogham.mp@parliament.uk"
      },
      {
        name: "Mark Sewards",
        constituency: "Leeds South West and Morley",
        email: "mark.sewards.mp@parliament.uk"
      },
      {
        name: "Naseem Shah",
        constituency: "Bradford West",
        email: "naseem.shah.mp@parliament.uk"
      },
      {
        name: "Baggy Shanker",
        constituency: "Derby South",
        email: "baggy.shanker.mp@parliament.uk"
      },
      {
        name: "Michael Shanks",
        constituency: "Rutherglen",
        email: "michael.shanks.mp@parliament.uk"
      },
      {
        name: "Jim Shannon",
        constituency: "Strangford",
        email: "jim.shannon.mp@parliament.uk"
      },
      {
        name: "Neil Shastri-Hurst",
        constituency: "Solihull West and Shirley",
        email: "neil.shastri-hurst.mp@parliament.uk"
      },
      {
        name: "Alec Shelbrooke",
        constituency: "Wetherby and Easingwold",
        email: "alec.shelbrooke.mp@parliament.uk"
      },
      {
        name: "Tulip Siddiq",
        constituency: "Hampstead and Highgate",
        email: "tulip.siddiq.mp@parliament.uk"
      },
      {
        name: "David Simmonds",
        constituency: "Ruislip, Northwood and Pinner",
        email: "david.simmonds.mp@parliament.uk"
      },
      {
        name: "Josh Simons",
        constituency: "Makerfield",
        email: "josh.simons.mp@parliament.uk"
      },
      {
        name: "Vikki Slade",
        constituency: "Mid Dorset and North Poole",
        email: "vikki.slade.mp@parliament.uk"
      },
      {
        name: "Andrew Slaughter",
        constituency: "Hammersmith and Chiswick",
        email: "andrew.slaughter.mp@parliament.uk"
      },
      {
        name: "John Slinger",
        constituency: "Rugby",
        email: "john.slinger.mp@parliament.uk"
      },
      {
        name: "Lisa Smart",
        constituency: "Hazel Grove",
        email: "lisa.smart.mp@parliament.uk"
      },
      {
        name: "Cat Smith",
        constituency: "Lancaster and Wyre",
        email: "cat.smith.mp@parliament.uk"
      },
      {
        name: "David Smith",
        constituency: "North Northumberland",
        email: "david.smith.mp@parliament.uk"
      },
      {
        name: "Greg Smith",
        constituency: "Mid Buckinghamshire",
        email: "greg.smith.mp@parliament.uk"
      },
      {
        name: "Jeff Smith",
        constituency: "Manchester Withington",
        email: "jeff.smith.mp@parliament.uk"
      },
      {
        name: "Julian Smith",
        constituency: "Skipton and Ripon",
        email: "julian.smith.mp@parliament.uk"
      },
      {
        name: "Nick Smith",
        constituency: "Blaenau Gwent and Rhymney",
        email: "nick.smith.mp@parliament.uk"
      },
      {
        name: "Rebecca Smith",
        constituency: "South West Devon",
        email: "rebecca.smith.mp@parliament.uk"
      },
      {
        name: "Sarah Smith",
        constituency: "Hyndburn",
        email: "sarah.smith.mp@parliament.uk"
      },
      {
        name: "Karin Smyth",
        constituency: "Bristol South",
        email: "karin.smyth.mp@parliament.uk"
      },
      {
        name: "Gareth Snell",
        constituency: "Stoke-on-Trent Central",
        email: "gareth.snell.mp@parliament.uk"
      },
      {
        name: "Andrew Snowden",
        constituency: "Fylde",
        email: "andrew.snowden.mp@parliament.uk"
      },
      {
        name: "Alex Sobel",
        constituency: "Leeds Central and Headingley",
        email: "alex.sobel.mp@parliament.uk"
      },
      {
        name: "Ian Sollom",
        constituency: "St Neots and Mid Cambridgeshire",
        email: "ian.sollom.mp@parliament.uk"
      },
      {
        name: "Ben Spencer",
        constituency: "Runnymede and Weybridge",
        email: "ben.spencer.mp@parliament.uk"
      },
      {
        name: "Patrick Spencer",
        constituency: "Central Suffolk and North Ipswich",
        email: "patrick.spencer.mp@parliament.uk"
      },
      {
        name: "Gregory Stafford",
        constituency: "Farnham and Bordon",
        email: "gregory.stafford.mp@parliament.uk"
      },
      {
        name: "Euan Stainbank",
        constituency: "Falkirk",
        email: "euan.stainbank.mp@parliament.uk"
      },
      {
        name: "Keir Starmer",
        constituency: "Holborn and St Pancras",
        email: "keir.starmer.mp@parliament.uk"
      },
      {
        name: "Blake Stephenson",
        constituency: "Mid Bedfordshire",
        email: "blake.stephenson.mp@parliament.uk"
      },
      {
        name: "Jo Stevens",
        constituency: "Cardiff East",
        email: "jo.stevens.mp@parliament.uk"
      },
      {
        name: "Kenneth Stevenson",
        constituency: "Airdrie and Shotts",
        email: "kenneth.stevenson.mp@parliament.uk"
      },
      {
        name: "Elaine Stewart",
        constituency: "Ayr, Carrick and Cumnock",
        email: "elaine.stewart.mp@parliament.uk"
      },
      {
        name: "Jamie Stone",
        constituency: "Caithness, Sutherland and Easter Ross",
        email: "jamie.stone.mp@parliament.uk"
      },
      {
        name: "Will Stone",
        constituency: "Swindon North",
        email: "will.stone.mp@parliament.uk"
      },
      {
        name: "Alistair Strathern",
        constituency: "Hitchin",
        email: "alistair.strathern.mp@parliament.uk"
      },
      {
        name: "Wes Streeting",
        constituency: "Ilford North",
        email: "wes.streeting.mp@parliament.uk"
      },
      {
        name: "Alan Strickland",
        constituency: "Newton Aycliffe and Spennymoor",
        email: "alan.strickland.mp@parliament.uk"
      },
      {
        name: "Mel Stride",
        constituency: "Central Devon",
        email: "mel.stride.mp@parliament.uk"
      },
      {
        name: "Graham Stringer",
        constituency: "Blackley and Middleton South",
        email: "graham.stringer.mp@parliament.uk"
      },
      {
        name: "Graham Stuart",
        constituency: "Beverley and Holderness",
        email: "graham.stuart.mp@parliament.uk"
      },
      {
        name: "Kirsteen Sullivan",
        constituency: "Bathgate and Linlithgow",
        email: "kirsteen.sullivan.mp@parliament.uk"
      },
      {
        name: "Lauren Sullivan",
        constituency: "Gravesham",
        email: "lauren.sullivan.mp@parliament.uk"
      },
      {
        name: "Zarah Sultana",
        constituency: "Coventry South",
        email: "zarah.sultana.mp@parliament.uk"
      },
      {
        name: "Rishi Sunak",
        constituency: "Richmond and Northallerton",
        email: "rishi.sunak.mp@parliament.uk"
      },
      {
        name: "Peter Swallow",
        constituency: "Bracknell",
        email: "peter.swallow.mp@parliament.uk"
      },
      {
        name: "Robin Swann",
        constituency: "South Antrim",
        email: "robin.swann.mp@parliament.uk"
      },
      {
        name: "Desmond Swayne",
        constituency: "New Forest West",
        email: "desmond.swayne.mp@parliament.uk"
      },
      {
        name: "Mark Tami",
        constituency: "Alyn and Deeside",
        email: "mark.tami.mp@parliament.uk"
      },
      {
        name: "Mike Tapp",
        constituency: "Dover and Deal",
        email: "mike.tapp.mp@parliament.uk"
      },
      {
        name: "Alison Taylor",
        constituency: "Paisley and Renfrewshire North",
        email: "alison.taylor.mp@parliament.uk"
      },
      {
        name: "David Taylor",
        constituency: "Hemel Hempstead",
        email: "david.taylor.mp@parliament.uk"
      },
      {
        name: "Luke Taylor",
        constituency: "Sutton and Cheam",
        email: "luke.taylor.mp@parliament.uk"
      },
      {
        name: "Rachel Taylor",
        constituency: "North Warwickshire and Bedworth",
        email: "rachel.taylor.mp@parliament.uk"
      },
      {
        name: "Bradley Thomas",
        constituency: "Bromsgrove",
        email: "bradley.thomas.mp@parliament.uk"
      },
      {
        name: "Cameron Thomas",
        constituency: "Tewkesbury",
        email: "cameron.thomas.mp@parliament.uk"
      },
      {
        name: "Fred Thomas",
        constituency: "Plymouth Moor View",
        email: "fred.thomas.mp@parliament.uk"
      },
      {
        name: "Gareth Thomas",
        constituency: "Harrow West",
        email: "gareth.thomas.mp@parliament.uk"
      },
      {
        name: "Nick Thomas-Symonds",
        constituency: "Torfaen",
        email: "nick.thomas-symonds.mp@parliament.uk"
      },
      {
        name: "Adam Thompson",
        constituency: "Erewash",
        email: "adam.thompson.mp@parliament.uk"
      },
      {
        name: "Emily Thornberry",
        constituency: "Islington South and Finsbury",
        email: "emily.thornberry.mp@parliament.uk"
      },
      {
        name: "Richard Tice",
        constituency: "Boston and Skegness",
        email: "richard.tice.mp@parliament.uk"
      },
      {
        name: "Marie Tidball",
        constituency: "Penistone and Stocksbridge",
        email: "marie.tidball.mp@parliament.uk"
      },
      {
        name: "Stephen Timms",
        constituency: "East Ham",
        email: "stephen.timms.mp@parliament.uk"
      },
      {
        name: "Nick Timothy",
        constituency: "West Suffolk",
        email: "nick.timothy.mp@parliament.uk"
      },
      {
        name: "Jessica Toale",
        constituency: "Bournemouth West",
        email: "jessica.toale.mp@parliament.uk"
      },
      {
        name: "Dan Tomlinson",
        constituency: "Chipping Barnet",
        email: "dan.tomlinson.mp@parliament.uk"
      },
      {
        name: "Jon Trickett",
        constituency: "Normanton and Hemsworth",
        email: "jon.trickett.mp@parliament.uk"
      },
      {
        name: "Laura Trott",
        constituency: "Sevenoaks",
        email: "laura.trott.mp@parliament.uk"
      },
      {
        name: "Henry Tufnell",
        constituency: "Mid and South Pembrokeshire",
        email: "henry.tufnell.mp@parliament.uk"
      },
      {
        name: "Thomas Tugendhat",
        constituency: "Tonbridge",
        email: "thomas.tugendhat.mp@parliament.uk"
      },
      {
        name: "Anna Turley",
        constituency: "Redcar",
        email: "anna.turley.mp@parliament.uk"
      },
      {
        name: "Matt Turmaine",
        constituency: "Watford",
        email: "matt.turmaine.mp@parliament.uk"
      },
      {
        name: "Karl Turner",
        constituency: "Kingston upon Hull East",
        email: "karl.turner.mp@parliament.uk"
      },
      {
        name: "Laurence Turner",
        constituency: "Birmingham Northfield",
        email: "laurence.turner.mp@parliament.uk"
      },
      {
        name: "Derek Twigg",
        constituency: "Widnes and Halewood",
        email: "derek.twigg.mp@parliament.uk"
      },
      {
        name: "Liz Twist",
        constituency: "Blaydon and Consett",
        email: "liz.twist.mp@parliament.uk"
      },
      {
        name: "Harpreet Uppal",
        constituency: "Huddersfield",
        email: "harpreet.uppal.mp@parliament.uk"
      },
      {
        name: "Freddie Van Mierlo",
        constituency: "Henley and Thame",
        email: "freddie.van mierlo.mp@parliament.uk"
      },
      {
        name: "Tony Vaughan",
        constituency: "Folkestone and Hythe",
        email: "tony.vaughan.mp@parliament.uk"
      },
      {
        name: "Valerie Vaz",
        constituency: "Walsall and Bloxwich",
        email: "valerie.vaz.mp@parliament.uk"
      },
      {
        name: "Martin Vickers",
        constituency: "Brigg and Immingham",
        email: "martin.vickers.mp@parliament.uk"
      },
      {
        name: "Matt Vickers",
        constituency: "Stockton West",
        email: "matt.vickers.mp@parliament.uk"
      },
      {
        name: "Christopher Vince",
        constituency: "Harlow",
        email: "christopher.vince.mp@parliament.uk"
      },
      {
        name: "Caroline Voaden",
        constituency: "South Devon",
        email: "caroline.voaden.mp@parliament.uk"
      },
      {
        name: "Christian Wakeford",
        constituency: "Bury South",
        email: "christian.wakeford.mp@parliament.uk"
      },
      {
        name: "Imogen Walker",
        constituency: "Hamilton and Clyde Valley",
        email: "imogen.walker.mp@parliament.uk"
      },
      {
        name: "Chris Ward",
        constituency: "Brighton Kemptown and Peacehaven",
        email: "chris.ward.mp@parliament.uk"
      },
      {
        name: "Melanie Ward",
        constituency: "Cowdenbeath and Kirkcaldy",
        email: "melanie.ward.mp@parliament.uk"
      },
      {
        name: "Paul Waugh",
        constituency: "Rochdale",
        email: "paul.waugh.mp@parliament.uk"
      },
      {
        name: "Chris Webb",
        constituency: "Blackpool South",
        email: "chris.webb.mp@parliament.uk"
      },
      {
        name: "Michelle Welsh",
        constituency: "Sherwood Forest",
        email: "michelle.welsh.mp@parliament.uk"
      },
      {
        name: "Catherine West",
        constituency: "Hornsey and Friern Barnet",
        email: "catherine.west.mp@parliament.uk"
      },
      {
        name: "Andrew Western",
        constituency: "Stretford and Urmston",
        email: "andrew.western.mp@parliament.uk"
      },
      {
        name: "Matt Western",
        constituency: "Warwick and Leamington",
        email: "matt.western.mp@parliament.uk"
      },
      {
        name: "Helen Whately",
        constituency: "Faversham and Mid Kent",
        email: "helen.whately.mp@parliament.uk"
      },
      {
        name: "Michael Wheeler",
        constituency: "Worsley and Eccles",
        email: "michael.wheeler.mp@parliament.uk"
      },
      {
        name: "John Whitby",
        constituency: "Derbyshire Dales",
        email: "john.whitby.mp@parliament.uk"
      },
      {
        name: "Jo White",
        constituency: "Bassetlaw",
        email: "jo.white.mp@parliament.uk"
      },
      {
        name: "Katie White",
        constituency: "Leeds North West",
        email: "katie.white.mp@parliament.uk"
      },
      {
        name: "John Whittingdale",
        constituency: "Maldon",
        email: "john.whittingdale.mp@parliament.uk"
      },
      {
        name: "Nadia Whittome",
        constituency: "Nottingham East",
        email: "nadia.whittome.mp@parliament.uk"
      },
      {
        name: "James Wild",
        constituency: "North West Norfolk",
        email: "james.wild.mp@parliament.uk"
      },
      {
        name: "Max Wilkinson",
        constituency: "Cheltenham",
        email: "max.wilkinson.mp@parliament.uk"
      },
      {
        name: "David Williams",
        constituency: "Stoke-on-Trent North",
        email: "david.williams.mp@parliament.uk"
      },
      {
        name: "Gavin Williamson",
        constituency: "Stone, Great Wyrley and Penkridge",
        email: "gavin.williamson.mp@parliament.uk"
      },
      {
        name: "Munira Wilson",
        constituency: "Twickenham",
        email: "munira.wilson.mp@parliament.uk"
      },
      {
        name: "Sammy Wilson",
        constituency: "East Antrim",
        email: "sammy.wilson.mp@parliament.uk"
      },
      {
        name: "Pete Wishart",
        constituency: "Perth and Kinross-shire",
        email: "pete.wishart.mp@parliament.uk"
      },
      {
        name: "Steve Witherden",
        constituency: "Montgomeryshire and Glyndŵr",
        email: "steve.witherden.mp@parliament.uk"
      },
      {
        name: "Mike Wood",
        constituency: "Kingswinford and South Staffordshire",
        email: "mike.wood.mp@parliament.uk"
      },
      {
        name: "Sean Woodcock",
        constituency: "Banbury",
        email: "sean.woodcock.mp@parliament.uk"
      },
      {
        name: "Jeremy Wright",
        constituency: "Kenilworth and Southam",
        email: "jeremy.wright.mp@parliament.uk"
      },
      {
        name: "Rosie Wrighting",
        constituency: "Kettering",
        email: "rosie.wrighting.mp@parliament.uk"
      },
      {
        name: "Martin Wrigley",
        constituency: "Newton Abbot",
        email: "martin.wrigley.mp@parliament.uk"
      },
      {
        name: "Yuan Yang",
        constituency: "Earley and Woodley",
        email: "yuan.yang.mp@parliament.uk"
      },
      {
        name: "Mohammad Yasin",
        constituency: "Bedford",
        email: "mohammad.yasin.mp@parliament.uk"
      },
      {
        name: "Steve Yemm",
        constituency: "Mansfield",
        email: "steve.yemm.mp@parliament.uk"
      },
      {
        name: "Claire Young",
        constituency: "Thornbury and Yate",
        email: "claire.young.mp@parliament.uk"
      },
      {
        name: "Daniel Zeichner",
        constituency: "Cambridge",
        email: "daniel.zeichner.mp@parliament.uk"
      }
    ]
  };

  const formSection = document.getElementById("formSection");
  const startButton = document.getElementById("startButton");
  const nameSection = document.getElementById("nameSection");
  const mpSection = document.getElementById("mpSection");
  const emailPreviewSection = document.getElementById("emailPreviewSection");
  const sendEmailBtn = document.getElementById("sendEmailBtn");
  const fallbackSection = document.getElementById("fallbackSection");

  const userNameInput = document.getElementById("userName");
  const mpSelect = document.getElementById("mpSelect");

  const copyEmailButton = document.getElementById("copyEmailButton");
  const copyEmailContent = document.getElementById("copyEmailContent");

  // Social Media Share Buttons
  document.getElementById('xShare').addEventListener('click', function () {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("I'm helping Ukraine by contacting my MP. You can too! Email your MP here:");
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  });

  document.getElementById('telegramShare').addEventListener('click', function () {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("I'm supporting Ukraine by contacting my MP. You can too! Email your MP here:");
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  });

  document.getElementById('facebookShare').addEventListener('click', function () {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("I'm helping Ukraine by contacting my MP. You can too! Email your MP here:");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
  });

  document.getElementById('whatsappShare').addEventListener('click', function () {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("I'm supporting Ukraine by contacting my MP. You can too! Email your MP here:");
    window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
  });

  // Scroll to the top of the page on refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // Smoothly scroll down so the form is fully at the top of the viewport
  startButton.addEventListener("click", function () {
    formSection.classList.remove("hidden");
    
    // Scroll the form section into view
    const yOffset = -50; // Adjusted to ensure the form is properly aligned across devices
    const yPosition = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: "smooth"
    });

    mpSection.classList.remove("hidden"); // Show MP selection dropdown first
    nameSection.classList.remove("hidden"); // Show name input
    emailPreviewSection.classList.remove("hidden"); // Show email preview
    updatePreview(); // Immediately update the email preview
  });

  // Populate the MP dropdown on load and enable it
  populateMPs(mpDataByCountry["UK"]);

  function populateMPs(mpData) {
    mpSelect.innerHTML = '<option value="" disabled selected>Select your MP/Representative</option>';
    mpData.forEach(mp => {
      const option = document.createElement("option");
      option.value = mp.email;
      option.dataset.name = mp.name;
      option.dataset.constituency = mp.constituency;
      option.textContent = `${mp.name} - ${mp.constituency}`;
      mpSelect.appendChild(option);
    });

    $(mpSelect).select2({
      width: '100%'
    });
  }

  // Event listeners for MP selection and name input
  mpSelect.addEventListener("change", function () {
    updatePreview();
    checkFormCompletion();
  });

  userNameInput.addEventListener("input", function () {
    updatePreview();
    checkFormCompletion();
  });

  // Check if the form is complete and enable the Send Email button
  function checkFormCompletion() {
    const userName = userNameInput.value.trim();
    const mpSelected = mpSelect.value;

    if (userName && mpSelected) {
      sendEmailBtn.classList.remove("hidden");
      sendEmailBtn.disabled = false;
    } else {
      sendEmailBtn.classList.add("hidden");
      sendEmailBtn.disabled = true;
    }
  }

  // Update live email preview and allow it to be editable
  function updatePreview() {
    const selectedMP = mpSelect.options[mpSelect.selectedIndex];

    let mpName = "[MP Name]";
    let constituency = "[Constituency]";

    if (selectedMP && selectedMP.dataset.name && selectedMP.dataset.constituency) {
      mpName = selectedMP.dataset.name;
      constituency = selectedMP.dataset.constituency;
    }

    const userName = userNameInput.value || "[Your Name]";
    const emailPreview = `
      <p>Dear ${mpName},</p>
      <p>My name is ${userName}, from ${constituency}, and I am writing to strongly urge you to support Ukraine in its rightful efforts to defend itself.</p>
      <p>Kind regards,<br>${userName}<br>${constituency}</p>
    `;

    document.getElementById("emailPreview").innerHTML = emailPreview;
  }

  // Handle copy email to clipboard
  copyEmailButton.addEventListener("click", function () {
    copyEmailContent.value = document.getElementById("emailPreview").innerText; // Get the plain text from the preview
    copyEmailContent.select(); // Select the text
    document.execCommand("copy"); // Copy it to clipboard
    alert("Email content copied to clipboard!"); // Feedback to user
  });

  // Handle form submission and open mailto link
  document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const selectedMP = mpDataByCountry["UK"]?.find(mp => mp.email === mpSelect.value);

    const subject = "Urgent Support for Ukraine's Full Right to Defend Itself";
    const body = `
      Dear ${selectedMP.name},

      My name is ${userNameInput.value}, from ${selectedMP.constituency}, and I am writing to strongly urge you to support Ukraine.

      Kind regards,
      ${userNameInput.value}
      ${selectedMP.constituency}
    `;

    const mailtoLink = `mailto:${selectedMP.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');

    fallbackSection.classList.remove("hidden"); // Show fallback section after submission
  });

  // Open email client functions for different providers
  document.getElementById("openGmail").addEventListener("click", function () {
    openEmailClient("https://mail.google.com/mail/?view=cm&fs=1&to=", mpSelect.value);
  });

  document.getElementById("openYahoo").addEventListener("click", function () {
    openEmailClient("https://compose.mail.yahoo.com/?to=", mpSelect.value);
  });

  document.getElementById("openOutlook").addEventListener("click", function () {
    openEmailClient("https://outlook.live.com/owa/?path=/mail/action/compose&to=", mpSelect.value);
  });

  document.getElementById("openAppleMail").addEventListener("click", function () {
    const subject = "Urgent Support for Ukraine's Full Right to Defend Itself";
    const body = document.getElementById("emailPreview").innerText;
    const mailtoLink = `mailto:${mpSelect.value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  });

  function openEmailClient(baseURL, mpEmail) {
    if (!mpEmail) {
      alert("Please select an MP first.");
      return;
    }

    const subject = "Urgent Support for Ukraine's Full Right to Defend Itself";
    const body = document.getElementById("emailPreview").innerText;

    const fullLink = `${baseURL}${encodeURIComponent(mpEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(fullLink, '_blank');
  }
});
