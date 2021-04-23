const LOCATIONS = [
    {
        "location": "Airplane",
        "roles": [
            "First Class Passenger",
            "Air Marshall",
            "Mechanic",
            "Economy Class Passenger",
            "Stewardess",
            "Co-Pilot",
            "Captain"
        ]
    },
    {
        "location": "Bank",
        "roles": [
            "Armored Car Driver",
            "Manager",
            "Consultant",
            "Customer",
            "Robber",
            "Security Guard",
            "Teller"
        ]
    },
    {
        "location": "Beach",
        "roles": [
            "Beach Waitress",
            "Kite Surfer",
            "Lifeguard",
            "Thief",
            "Beach Goer",
            "Beach Photographer",
            "Ice Cream Truck Driver"
        ]
    },
    {
        "location": "Broadway Theater",
        "roles": [
            "Coat Check Lady",
            "Prompter",
            "Cashier",
            "Visitor",
            "Director",
            "Actor",
            "Crewman"
        ]
    },
    {
        "location": "Casino",
        "roles": [
            "Bartender",
            "Head Security Guard",
            "Bouncer",
            "Manager",
            "Hustler",
            "Dealer",
            "Gambler"
        ]
    },
    {
        "location": "Cathedral",
        "roles": [
            "Priest",
            "Beggar",
            "Sinner",
            "Parishioner",
            "Tourist",
            "Sponsor",
            "Choir Singer"
        ]
    },
    {
        "location": "Circus Tent",
        "roles": [
            "Acrobat",
            "Animal Trainer",
            "Magician",
            "Visitor",
            "Fire Eater",
            "Clown",
            "Juggler"
        ]
    },
    {
        "location": "Corporate Party",
        "roles": [
            "Entertainer",
            "Manager",
            "Unwelcomed Guest",
            "Owner",
            "Secretary",
            "Accountant",
            "Delivery Boy"
        ]
    },
    {
        "location": "Crusader Army",
        "roles": [
            "Monk",
            "Imprisoned Arab",
            "Servant",
            "Bishop",
            "Squire",
            "Archer",
            "Knight"
        ]
    },
    {
        "location": "Day Spa",
        "roles": [
            "Customer",
            "Stylist",
            "Masseuse",
            "Manicurist",
            "Makeup Artist",
            "Dermatologist",
            "Beautician"
        ]
    },
    {
        "location": "Embassy",
        "roles": [
            "Security Guard",
            "Secretary",
            "Ambassador",
            "Government Official",
            "Tourist",
            "Refugee",
            "Diplomat"
        ]
    },
    {
        "location": "Hospital",
        "roles": [
            "Nurse",
            "Doctor",
            "Anesthesiologist",
            "Intern",
            "Patient",
            "Therapist",
            "Surgeon"
        ]
    },
    {
        "location": "Hotel",
        "roles": [
            "Doorman",
            "Security Guard",
            "Manager",
            "Housekeeper",
            "Customer",
            "Bartender",
            "Bellman"
        ]
    },
    {
        "location": "Military Base",
        "roles": [
            "Deserter",
            "Colonel",
            "Medic",
            "Soldier",
            "Sniper",
            "Officer",
            "Tank Engineer"
        ]
    },
    {
        "location": "Movie Studio",
        "roles": [
            "Stuntman",
            "Sound Engineer",
            "Cameraman",
            "Director",
            "Costume Artist",
            "Actor",
            "Producer"
        ]
    },
    {
        "location": "Ocean Liner",
        "roles": [
            "Rich Passenger",
            "Cook",
            "Captain",
            "Bartender",
            "Musician",
            "Waiter",
            "Mechanic"
        ]
    },
    {
        "location": "Passenger Train",
        "roles": [
            "Mechanic",
            "Border Patrol",
            "Train Attendant",
            "Passenger",
            "Restaurant Chef",
            "Engineer",
            "Stoker"
        ]
    },
    {
        "location": "Pirate Ship",
        "roles": [
            "Cook",
            "Sailor",
            "Slave",
            "Cannoneer",
            "Bound Prisoner",
            "Cabin Boy",
            "Brave Captain"
        ]
    },
    {
        "location": "Polar Station",
        "roles": [
            "Medic",
            "Geologist",
            "Expedition Leader",
            "Biologist",
            "Radioman",
            "Hydrologist",
            "Meteorologist"
        ]
    },
    {
        "location": "Police Station",
        "roles": [
            "Detective",
            "Lawyer",
            "Journalist",
            "Criminalist",
            "Archivist",
            "Patrol Officer",
            "Criminal"
        ]
    },
    {
        "location": "Restaurant",
        "roles": [
            "Musician",
            "Customer",
            "Bouncer",
            "Hostess",
            "Head Chef",
            "Food Critic",
            "Waiter"
        ]
    },
    {
        "location": "School",
        "roles": [
            "Gym Teacher",
            "Student",
            "Principal",
            "Security Guard",
            "Janitor",
            "Lunch Lady",
            "Maintenance Man"
        ]
    },
    {
        "location": "Service Station",
        "roles": [
            "Manager",
            "Tire Specialist",
            "Biker",
            "Car Owner",
            "Car Wash Operator",
            "Electrician",
            "Auto Mechanic"
        ]
    },
    {
        "location": "Space Station",
        "roles": [
            "Engineer",
            "Alien",
            "Space Tourist",
            "Pilot",
            "Commander",
            "Scientist",
            "Doctor"
        ]
    },
    {
        "location": "Submarine",
        "roles": [
            "Cook",
            "Commander",
            "Sonar Technician",
            "Electronics Technician",
            "Sailor",
            "Radioman",
            "Navigator"
        ]
    },
    {
        "location": "Supermarket",
        "roles": [
            "Customer",
            "Cashier",
            "Butcher",
            "Janitor",
            "Security Guard",
            "Food Sample Demonstrator",
            "Shelf Stocker"
        ]
    },
    {
        "location": "University",
        "roles": [
            "Graduate Student",
            "Professor",
            "Dean",
            "Psychologist",
            "Maintenance Man",
            "Student",
            "Janitor"
        ]
    },
    {
        "location": "Amusement Park",
        "roles": [
            "Ride Operator",
            "Parent",
            "Food Vendor",
            "Cashier",
            "Happy Child",
            "Annoying Child",
            "Teenager",
            "Janitor",
            "Security Guard",
            "Parent"
        ]
    },
    {
        "location": "Art Museum",
        "roles": [
            "Ticket Seller",
            "Student",
            "Visitor",
            "Teacher",
            "Security Guard",
            "Painter",
            "Art Collector",
            "Art Critic",
            "Photographer",
            "Tourist"
        ]
    },
    {
        "location": "Candy Factory",
        "roles": [
            "Madcap Redhead",
            "Pastry Chef",
            "Visitor",
            "Truffle Maker",
            "Taster",
            "Supply Worker",
            "Oompa Loompa",
            "Inspector",
            "Machine Operator"
        ]
    },
    {
        "location": "Cat Show",
        "roles": [
            "Judge",
            "Cat-Handler",
            "Veterinarian",
            "Security Guard",
            "Cat Trainer",
            "Crazy Cat Lady",
            "Animal Lover",
            "Cat Owner",
            "Cat"
        ]
    },
    {
        "location": "Cemetery",
        "roles": [
            "Priest",
            "Goth Girl",
            "Grave Robber",
            "Poet",
            "Mourning Person",
            "Gatekeeper",
            "Dead Person",
            "Relative",
            "Flower Seller",
            "Grave Digger"
        ]
    },
    {
        "location": "Coal Mine",
        "roles": [
            "Safety Inspector",
            "Miner",
            "Driller",
            "Coordinator",
            "Blasting Engineer",
            "Solid Waste Engineer",
            "Worker"
        ]
    },
    {
        "location": "Construction Site",
        "roles": [
            "Free-Roaming Toddler",
            "Contractor",
            "Crane Driver",
            "Trespasser",
            "Safety Officer",
            "Electrician",
            "Engineer",
            "Architect",
            "Construction Worker"
        ]
    },
    {
        "location": "Gaming Convention",
        "roles": [
            "Blogger",
            "Cosplayer",
            "Gamer",
            "Exhibitor",
            "Collector",
            "Child",
            "Security Guard",
            "Geek",
            "Shy Person",
            "Famous Person"
        ]
    },
    {
        "location": "Gas Station",
        "roles": [
            "Car Enthusiast",
            "Service Attendant",
            "Shopkeeper",
            "Customer",
            "Car Washer",
            "Cashier",
            "Customer",
            "Climate Change Activist",
            "Service Attendant",
            "Manager"
        ]
    },
    {
        "location": "Harbor Docks",
        "roles": [
            "Loader",
            "Salty Old Pirate",
            "Captain",
            "Sailor",
            "Loader",
            "Fisherman",
            "Exporter",
            "Cargo Inspector",
            "Smuggler"
        ]
    },
    {
        "location": "Ice Hockey Stadium",
        "roles": [
            "Hockey Fan",
            "Medic",
            "Hockey Player",
            "Food Vendor",
            "Security Guard",
            "Goaltender",
            "Coach",
            "Referee",
            "Spectator",
            "Hockey Player"
        ]
    },
    {
        "location": "Jail",
        "roles": [
            "Wrongly Accused Man",
            "CCTV Operator",
            "Guard",
            "Visitor",
            "Lawyer",
            "Janitor",
            "Jailkeeper",
            "Criminal",
            "Correctional Officer",
            "Maniac"
        ]
    },
    {
        "location": "Jazz Club",
        "roles": [
            "Bouncer",
            "Drummer",
            "Pianist",
            "Saxophonist",
            "Singer",
            "Jazz Fanatic",
            "Dancer",
            "Barman",
            "VIP",
            "Waiter"
        ]
    },
    {
        "location": "Library",
        "roles": [
            "Old Man",
            "Journalist",
            "Author",
            "Volunteer",
            "Know-It-All",
            "Student",
            "Librarian",
            "Loudmouth",
            "Book Fanatic",
            "Nerd"
        ]
    },
    {
        "location": "Night Club",
        "roles": [
            "Regular",
            "Bartender",
            "Security Guard",
            "Dancer",
            "Pick-Up Artist",
            "Party Girl",
            "Model",
            "Muscly Guy",
            "Drunk Person",
            "Shy Person"
        ]
    },
    {
        "location": "Race Track",
        "roles": [
            "Team Owner",
            "Driver",
            "Engineer",
            "Spectator",
            "Referee",
            "Mechanic",
            "Food Vendor",
            "Commentator",
            "Bookmaker",
            "Spectator"
        ]
    },
    {
        "location": "Retirement Home",
        "roles": [
            "Relative",
            "Cribbage Player",
            "Old Person",
            "Janitor",
            "Cook",
            "Blind Person",
            "Psychologist",
            "Old Person",
            "Nurse"
        ]
    },
    {
        "location": "Rock Concert",
        "roles": [
            "Dancer",
            "Singer",
            "Fan",
            "Guitarist",
            "Drummer",
            "Roadie",
            "Stage Diver",
            "Security Guard",
            "Bassist",
            "Technical Support"
        ]
    },
    {
        "location": "Sightseeing Bus",
        "roles": [
            "Old Man",
            "Lone Tourist",
            "Driver",
            "Annoying Child",
            "Tourist",
            "Tour Guide",
            "Photographer",
            "Tourist",
            "Lost Person",
            "Tourist"
        ]
    },
    {
        "location": "Stadium",
        "roles": [
            "Medic",
            "Hammer Thrower",
            "Athlete",
            "Commentator",
            "Spectator",
            "Security Guard",
            "Referee",
            "Food Vendor",
            "High Jumper",
            "Sprinter"
        ]
    },
    {
        "location": "Subway",
        "roles": [
            "Tourist",
            "Subway Operator",
            "Ticket Inspector",
            "Pregnant Lady",
            "Pickpocket",
            "Cleaner",
            "Businessman",
            "Ticket Seller",
            "Old Lady",
            "Blind Man"
        ]
    },
    {
        "location": "The U.N.",
        "roles": [
            "Diplomat",
            "Interpreter",
            "Blowhard",
            "Tourist",
            "Napping Delegate",
            "Journalist",
            "Secretary of State",
            "Speaker",
            "Secretary-General",
            "Lobbyist"
        ]
    },
    {
        "location": "Vineyard",
        "roles": [
            "Gardener",
            "Gourmet Guide",
            "Winemaker",
            "Exporter",
            "Butler",
            "Wine Taster",
            "Sommelier",
            "Rich Lord",
            "Vineyard Manager",
            "Enologist"
        ]
    },
    {
        "location": "Wedding",
        "roles": [
            "Ring Bearer",
            "Groom",
            "Bride",
            "Officiant",
            "Photographer",
            "Flower Girl",
            "Father of the Bride",
            "Wedding Crasher",
            "Best Man",
            "Relative"
        ]
    },
    {
        "location": "Zoo",
        "roles": [
            "Zookeeper",
            "Visitor",
            "Photographer",
            "Child",
            "Veterinarian",
            "Tourist",
            "Food Vendor",
            "Cashier",
            "Zookeeper",
            "Researcher"
        ]
    }
];
