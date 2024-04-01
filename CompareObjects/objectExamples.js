let user1 = {
    name: "John",
    age: 30,
    isAdmin: true,
    friends1: ["Alice", "Bob"],
    address: {
        city: "New York",
        street: "Broadway",
        zip: 10001
    },
    friends: ["Alice", "Bob"]
};

let user2 = {
    name: "John",
    age: 30,
    isAdmin: true,
        friends1: ["Alice", "Bob"],

    address: {
        city: "New York",
        street: "Broadway",
        zip: 10001
    },
    friends: ["Alice", "Bob", 'Hi']
};

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    features: {
        engine: "V6",
        transmission: "Automatic",
        options: ["Navigation", "Leather seats", "Sunroof"]
    },
    owner: {
        name: "Emily",
        age: 25,
        address: {
            city: "Los Angeles",
            street: "Main St",
            zip: 90001
        }
    }
};

let product = {
    name: "Smartphone",
    price: 499.99,
    inStock: true,
    specifications: {
        brand: "Samsung",
        model: "Galaxy S20",
        color: "Black"
    },
    calculateDiscount: function(discountPercentage) {
        return this.price * (1 - discountPercentage / 100);
    }
};


let company = {
    name: "ABC Corporation",
    address: {
        city: "San Francisco",
        street: "Market St",
        zip: 94105
    },
    departments: {
        hr: {
            manager: "Alice",
            employees: ["John", "Emily", "Michael"]
        },
        it: {
            manager: "Bob",
            employees: ["Sarah", "David", "Jessica"],
            technologies: {
                frontEnd: ["HTML", "CSS", "JavaScript"],
                backEnd: ["Node.js", "Express", "MongoDB"]
            }
        }
    }
};

let school = {
    name: "XYZ High School",
    location: {
        city: "Chicago",
        state: "Illinois",
        zip: 60601
    },
    classes: {
        math: {
            teacher: "Mr. Smith",
            students: ["Tom", "Emma", "Sophia"],
            schedule: {
                monday: "Algebra",
                tuesday: "Geometry",
                wednesday: "Trigonometry"
            }
        },
        science: {
            teacher: "Ms. Johnson",
            students: ["Ryan", "Olivia", "Ethan"],
            labs: {
                biology: ["Microscope", "Slides", "Specimens"],
                chemistry: ["Test tubes", "Bunsen burner", "Chemicals"]
            }
        }
    }
}


let lObj1 = {
    "result": [
        {
            "parentId": "root",
            "menu_parent_id": "root",
            "text": "Formula 1!",
            "is_hidden": "0",
            "entity_type": "race_type",
            "entity_id": "3399",
            "target": "0",
            "is_leaf": "0",
            "color": null,
            "url": null,
            "menu_id": "28113",
            "leaf": false,
            "children": [
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "news",
                    "is_hidden": "0",
                    "entity_type": "article",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28114",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "photos",
                    "is_hidden": "0",
                    "entity_type": "photo",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28115",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "videos",
                    "is_hidden": "0",
                    "entity_type": "video",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28116",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "schedule",
                    "is_hidden": "0",
                    "entity_type": "schedule",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28117",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "results",
                    "is_hidden": "0",
                    "entity_type": "results",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28118",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "standings",
                    "is_hidden": "0",
                    "entity_type": "standings",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28119",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "drivers",
                    "is_hidden": "0",
                    "entity_type": "driver",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28120",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "teams",
                    "is_hidden": "0",
                    "entity_type": "team",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28121",
                    "leaf": false,
                    "children": []
                }
            ],
            "order": "1",
            "is_featured": "1"
        },
        {
            "parentId": "root",
            "menu_parent_id": "root",
            "text": "MotoGP",
            "is_hidden": "0",
            "entity_type": "race_type",
            "entity_id": "3421",
            "target": "0",
            "is_leaf": "0",
            "color": null,
            "url": null,
            "menu_id": "27975",
            "leaf": false,
            "children": [
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "news",
                    "is_hidden": "0",
                    "entity_type": "article",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27976",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "photos",
                    "is_hidden": "0",
                    "entity_type": "photo",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27977",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "videos",
                    "is_hidden": "0",
                    "entity_type": "video",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27978",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "schedule",
                    "is_hidden": "0",
                    "entity_type": "schedule",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27979",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "results",
                    "is_hidden": "0",
                    "entity_type": "results",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27980",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "standings",
                    "is_hidden": "0",
                    "entity_type": "standings",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27981",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "drivers",
                    "is_hidden": "0",
                    "entity_type": "driver",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27982",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "teams",
                    "is_hidden": "0",
                    "entity_type": "team",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27983",
                    "leaf": false,
                    "children": []
                }
            ],
            "order": "2",
            "is_featured": "1"
        },
        {
            "parentId": "root",
            "menu_parent_id": "root",
            "text": "NASCAR Cup",
            "is_hidden": "0",
            "entity_type": "race_type",
            "entity_id": "3424",
            "target": "0",
            "is_leaf": "0",
            "color": null,
            "url": null,
            "menu_id": "28122",
            "leaf": false,
            "children": [
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "news",
                    "is_hidden": "0",
                    "entity_type": "article",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28123",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "photos",
                    "is_hidden": "0",
                    "entity_type": "photo",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28124",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "videos",
                    "is_hidden": "0",
                    "entity_type": "video",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28125",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "schedule",
                    "is_hidden": "0",
                    "entity_type": "schedule",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28126",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "results",
                    "is_hidden": "0",
                    "entity_type": "results",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28127",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "standings",
                    "is_hidden": "0",
                    "entity_type": "standings",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28128",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "drivers",
                    "is_hidden": "0",
                    "entity_type": "driver",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28129",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "teams",
                    "is_hidden": "0",
                    "entity_type": "team",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28130",
                    "leaf": false,
                    "children": []
                }
            ],
            "order": "3",
            "is_featured": "1"
        },
        {
            "parentId": "root",
            "menu_parent_id": "root",
            "text": "IndyCar",
            "is_hidden": "0",
            "entity_type": "race_type",
            "entity_id": "3413",
            "target": "0",
            "is_leaf": "0",
            "color": null,
            "url": null,
            "menu_id": "28131",
            "leaf": false,
            "children": [
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "news",
                    "is_hidden": "0",
                    "entity_type": "article",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28132",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "photos",
                    "is_hidden": "0",
                    "entity_type": "photo",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28133",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "videos",
                    "is_hidden": "0",
                    "entity_type": "video",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28134",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "schedule",
                    "is_hidden": "0",
                    "entity_type": "schedule",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28135",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "results",
                    "is_hidden": "0",
                    "entity_type": "results",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28136",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "standings",
                    "is_hidden": "0",
                    "entity_type": "standings",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28137",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "drivers",
                    "is_hidden": "0",
                    "entity_type": "driver",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28138",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "teams",
                    "is_hidden": "0",
                    "entity_type": "team",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28139",
                    "leaf": false,
                    "children": []
                }
            ],
            "order": "4",
            "is_featured": "1"
        },
        {
            "parentId": "root",
            "menu_parent_id": "root",
            "text": "WEC",
            "is_hidden": "0",
            "entity_type": "race_type",
            "entity_id": "3457",
            "target": "0",
            "is_leaf": "0",
            "color": null,
            "url": null,
            "menu_id": "28140",
            "leaf": false,
            "children": [
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "news",
                    "is_hidden": "0",
                    "entity_type": "article",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28141",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "photos",
                    "is_hidden": "0",
                    "entity_type": "photo",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28142",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "videos",
                    "is_hidden": "0",
                    "entity_type": "video",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28143",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "schedule",
                    "is_hidden": "0",
                    "entity_type": "schedule",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28144",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "results",
                    "is_hidden": "0",
                    "entity_type": "results",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28145",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "standings",
                    "is_hidden": "0",
                    "entity_type": "standings",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28146",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "drivers",
                    "is_hidden": "0",
                    "entity_type": "driver",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28147",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "teams",
                    "is_hidden": "0",
                    "entity_type": "team",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28148",
                    "leaf": false,
                    "children": []
                }
            ],
            "order": "5",
            "is_featured": "1"
        },
        {
            "text": "Open wheel",
            "entity_id": "300",
            "entity_type": "category",
            "title": "Open wheel",
            "color": null,
            "target": "0",
            "children": [
                {
                    "entity_type": "race_type",
                    "entity_id": "3406",
                    "text": "FIA F2",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 3,
                            "parentId": 2
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 4,
                            "parentId": 2
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 5,
                            "parentId": 2
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 6,
                            "parentId": 2
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 7,
                            "parentId": 2
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 8,
                            "parentId": 2
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 9,
                            "parentId": 2
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 10,
                            "parentId": 2
                        }
                    ],
                    "title": "FIA F2",
                    "color": null,
                    "target": "0",
                    "leaf": false,
                    "menu_id": 2,
                    "parentId": 1
                },
                {
                    "entity_type": "race_type",
                    "entity_id": "3460",
                    "text": "Formula E",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 12,
                            "parentId": 11
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 13,
                            "parentId": 11
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 14,
                            "parentId": 11
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 15,
                            "parentId": 11
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 16,
                            "parentId": 11
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 17,
                            "parentId": 11
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 18,
                            "parentId": 11
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 19,
                            "parentId": 11
                        }
                    ],
                    "title": "Formula E",
                    "color": null,
                    "target": "0",
                    "leaf": false,
                    "menu_id": 11,
                    "parentId": 1
                },
                {
                    "entity_type": "race_type",
                    "entity_id": "3459",
                    "text": "IMSA",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 21,
                            "parentId": 20
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 22,
                            "parentId": 20
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 23,
                            "parentId": 20
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 24,
                            "parentId": 20
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 25,
                            "parentId": 20
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 26,
                            "parentId": 20
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 27,
                            "parentId": 20
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 28,
                            "parentId": 20
                        }
                    ],
                    "title": "IMSA",
                    "color": null,
                    "target": "0",
                    "leaf": false,
                    "menu_id": 20,
                    "parentId": 1
                }
            ],
            "leaf": false,
            "menu_id": 1,
            "parentId": "root",
            "menu_parent_id": "root"
        },
        {
            "text": "RALLİ",
            "entity_id": "163",
            "entity_type": "category",
            "title": "RALLİ",
            "color": null,
            "target": "0",
            "children": [
                {
                    "entity_type": "race_type",
                    "entity_id": "3394",
                    "text": "Dakar",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 31,
                            "parentId": 30
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 32,
                            "parentId": 30
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 33,
                            "parentId": 30
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 34,
                            "parentId": 30
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 35,
                            "parentId": 30
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 36,
                            "parentId": 30
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 37,
                            "parentId": 30
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 38,
                            "parentId": 30
                        }
                    ],
                    "title": "Dakar",
                    "color": null,
                    "target": "0",
                    "leaf": false,
                    "menu_id": 30,
                    "parentId": 29
                },
                {
                    "entity_type": "race_type",
                    "entity_id": "3449",
                    "text": "WRC",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 40,
                            "parentId": 39
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 41,
                            "parentId": 39
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 42,
                            "parentId": 39
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 43,
                            "parentId": 39
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 44,
                            "parentId": 39
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 45,
                            "parentId": 39
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 46,
                            "parentId": 39
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 47,
                            "parentId": 39
                        }
                    ],
                    "title": "WRC",
                    "color": null,
                    //
                    "target": '0',
                    "leaf": false,
                    "menu_id": 39,
                    "parentId": 29
                }
            ],
            "leaf": false,
            "menu_id": 29,
            "parentId": "root",
            "menu_parent_id": "root"
        },
        {
            "text": "Touring",
            "entity_id": "303",
            "entity_type": "category",
            "title": "Touring",
            "color": null,
            "target": "0",
            "children": [
                {
                    "entity_type": "race_type",
                    "entity_id": "3396",
                    "text": "DTM",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 50,
                            "parentId": 49
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 51,
                            "parentId": 49
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 52,
                            "parentId": 49
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 53,
                            "parentId": 49
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 54,
                            "parentId": 49
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 55,
                            "parentId": 49
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 56,
                            "parentId": 49
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 57,
                            "parentId": 49
                        }
                    ],
                    "title": "DTM",
                    "color": null,
                    "target": "0",
                    "leaf": false,
                    "menu_id": 49,
                    "parentId": 48
                },
                {
                    "entity_type": "race_type",
                    "entity_id": "3388",
                    "text": "BTCC",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 59,
                            "parentId": 58
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 60,
                            "parentId": 58
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 61,
                            "parentId": 58
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 62,
                            "parentId": 58
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 63,
                            "parentId": 58
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 64,
                            "parentId": 58
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 65,
                            "parentId": 58
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 66,
                            "parentId": 58
                        }
                    ],
                    "title": "BTCC",
                    "color": null,
                    "target": "0",
                    "leaf": false,
                    "menu_id": 58,
                    "parentId": 48
                }
            ],
            "leaf": false,
            "menu_id": 48,
            "parentId": "root",
            "menu_parent_id": "root"
        }
    ]
}

let lObj2 = {
    "result": [
        {
            "parentId": "root",
            "menu_parent_id": "root",
            "text": "Formula 1!",
            "is_hidden": "0",
            "entity_type": "race_type",
            "entity_id": "3399",
            "target": "0",
            "is_leaf": "0",
            "color": null,
            "url": null,
            "menu_id": "28113",
            "leaf": false,
            "children": [
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "news",
                    "is_hidden": "0",
                    "entity_type": "article",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28114",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "photos",
                    "is_hidden": "0",
                    "entity_type": "photo",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28115",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "videos",
                    "is_hidden": "0",
                    "entity_type": "video",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28116",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "schedule",
                    "is_hidden": "0",
                    "entity_type": "schedule",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28117",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "results",
                    "is_hidden": "0",
                    "entity_type": "results",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28118",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "standings",
                    "is_hidden": "0",
                    "entity_type": "standings",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28119",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "drivers",
                    "is_hidden": "0",
                    "entity_type": "driver",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28120",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28113",
                    "menu_parent_id": "28113",
                    "text": "teams",
                    "is_hidden": "0",
                    "entity_type": "team",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28121",
                    "leaf": false,
                    "children": []
                }
            ],
            "order": "1",
            "is_featured": "1"
        },
        {
            "parentId": "root",
            "menu_parent_id": "root",
            "text": "MotoGP",
            "is_hidden": "0",
            "entity_type": "race_type",
            "entity_id": "3421",
            "target": "0",
            "is_leaf": "0",
            "color": null,
            "url": null,
            "menu_id": "27975",
            "leaf": false,
            "children": [
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "news",
                    "is_hidden": "0",
                    "entity_type": "article",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27976",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "photos",
                    "is_hidden": "0",
                    "entity_type": "photo",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27977",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "videos",
                    "is_hidden": "0",
                    "entity_type": "video",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27978",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "schedule",
                    "is_hidden": "0",
                    "entity_type": "schedule",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27979",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "results",
                    "is_hidden": "0",
                    "entity_type": "results",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27980",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "standings",
                    "is_hidden": "0",
                    "entity_type": "standings",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27981",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "drivers",
                    "is_hidden": "0",
                    "entity_type": "driver",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27982",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "27975",
                    "menu_parent_id": "27975",
                    "text": "teams",
                    "is_hidden": "0",
                    "entity_type": "team",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "27983",
                    "leaf": false,
                    "children": []
                }
            ],
            "order": "2",
            "is_featured": "1"
        },
        {
            "parentId": "root",
            "menu_parent_id": "root",
            "text": "NASCAR Cup",
            "is_hidden": "0",
            "entity_type": "race_type",
            "entity_id": "3424",
            "target": "0",
            "is_leaf": "0",
            "color": null,
            "url": null,
            "menu_id": "28122",
            "leaf": false,
            "children": [
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "news",
                    "is_hidden": "0",
                    "entity_type": "article",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28123",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "photos",
                    "is_hidden": "0",
                    "entity_type": "photo",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28124",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "videos",
                    "is_hidden": "0",
                    "entity_type": "video",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28125",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "schedule",
                    "is_hidden": "0",
                    "entity_type": "schedule",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28126",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "results",
                    "is_hidden": "0",
                    "entity_type": "results",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28127",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "standings",
                    "is_hidden": "0",
                    "entity_type": "standings",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28128",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "drivers",
                    "is_hidden": "0",
                    "entity_type": "driver",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28129",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28122",
                    "menu_parent_id": "28122",
                    "text": "teams",
                    "is_hidden": "0",
                    "entity_type": "team",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28130",
                    "leaf": false,
                    "children": []
                }
            ],
            "order": "3",
            "is_featured": "1"
        },
        {
            "parentId": "root",
            "menu_parent_id": "root",
            "text": "IndyCar",
            "is_hidden": "0",
            "entity_type": "race_type",
            "entity_id": "3413",
            "target": "0",
            "is_leaf": "0",
            "color": null,
            "url": null,
            "menu_id": "28131",
            "leaf": false,
            "children": [
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "news",
                    "is_hidden": "0",
                    "entity_type": "article",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28132",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "photos",
                    "is_hidden": "0",
                    "entity_type": "photo",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28133",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "videos",
                    "is_hidden": "0",
                    "entity_type": "video",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28134",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "schedule",
                    "is_hidden": "0",
                    "entity_type": "schedule",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28135",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "results",
                    "is_hidden": "0",
                    "entity_type": "results",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28136",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "standings",
                    "is_hidden": "0",
                    "entity_type": "standings",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28137",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "drivers",
                    "is_hidden": "0",
                    "entity_type": "driver",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28138",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28131",
                    "menu_parent_id": "28131",
                    "text": "teams",
                    "is_hidden": "0",
                    "entity_type": "team",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28139",
                    "leaf": false,
                    "children": []
                }
            ],
            "order": "4",
            "is_featured": "1"
        },
        {
            "parentId": "root",
            "menu_parent_id": "root",
            "text": "WEC",
            "is_hidden": "0",
            "entity_type": "race_type",
            "entity_id": "3457",
            "target": "0",
            "is_leaf": "0",
            "color": null,
            "url": null,
            "menu_id": "28140",
            "leaf": false,
            "children": [
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "news",
                    "is_hidden": "0",
                    "entity_type": "article",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28141",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "photos",
                    "is_hidden": "0",
                    "entity_type": "photo",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28142",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "videos",
                    "is_hidden": "0",
                    "entity_type": "video",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28143",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "schedule",
                    "is_hidden": "0",
                    "entity_type": "schedule",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28144",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "results",
                    "is_hidden": "0",
                    "entity_type": "results",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28145",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "standings",
                    "is_hidden": "0",
                    "entity_type": "standings",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28146",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "drivers",
                    "is_hidden": "0",
                    "entity_type": "driver",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28147",
                    "leaf": false,
                    "children": []
                },
                {
                    "parentId": "28140",
                    "menu_parent_id": "28140",
                    "text": "teams",
                    "is_hidden": "0",
                    "entity_type": "team",
                    "entity_id": null,
                    "target": "0",
                    "is_leaf": "0",
                    "color": null,
                    "url": null,
                    "menu_id": "28148",
                    "leaf": false,
                    "children": []
                }
            ],
            "order": "5",
            "is_featured": "1"
        },
        {
            "text": "Open wheel",
            "entity_id": "300",
            "entity_type": "category",
            "title": "Open wheel",
            "color": null,
            "target": "0",
            "children": [
                {
                    "entity_type": "race_type",
                    "entity_id": "3406",
                    "text": "FIA F2",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 3,
                            "parentId": 2
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 4,
                            "parentId": 2
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 5,
                            "parentId": 2
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 6,
                            "parentId": 2
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 7,
                            "parentId": 2
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 8,
                            "parentId": 2
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 9,
                            "parentId": 2
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 10,
                            "parentId": 2
                        }
                    ],
                    "title": "FIA F2",
                    "color": null,
                    "target": "0",
                    "leaf": false,
                    "menu_id": 2,
                    "parentId": 1
                },
                {
                    "entity_type": "race_type",
                    "entity_id": "3460",
                    "text": "Formula E",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 12,
                            "parentId": 11
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 13,
                            "parentId": 11
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 14,
                            "parentId": 11
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 15,
                            "parentId": 11
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 16,
                            "parentId": 11
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 17,
                            "parentId": 11
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 18,
                            "parentId": 11
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 19,
                            "parentId": 11
                        }
                    ],
                    "title": "Formula E",
                    "color": null,
                    "target": "0",
                    "leaf": false,
                    "menu_id": 11,
                    "parentId": 1
                },
                {
                    "entity_type": "race_type",
                    "entity_id": "3459",
                    "text": "IMSA",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 21,
                            "parentId": 20
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 22,
                            "parentId": 20
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 23,
                            "parentId": 20
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 24,
                            "parentId": 20
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 25,
                            "parentId": 20
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 26,
                            "parentId": 20
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 27,
                            "parentId": 20
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 28,
                            "parentId": 20
                        }
                    ],
                    "title": "IMSA",
                    "color": null,
                    "target": "0",
                    "leaf": false,
                    "menu_id": 20,
                    "parentId": 1
                }
            ],
            "leaf": false,
            "menu_id": 1,
            "parentId": "root",
            "menu_parent_id": "root"
        },
        {
            "text": "RALLİ",
            "entity_id": "163",
            "entity_type": "category",
            "title": "RALLİ",
            "color": null,
            "target": "0",
            "children": [
                {
                    "entity_type": "race_type",
                    "entity_id": "3394",
                    "text": "Dakar",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 31,
                            "parentId": 30
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 32,
                            "parentId": 30
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 33,
                            "parentId": 30
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 34,
                            "parentId": 30
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 35,
                            "parentId": 30
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 36,
                            "parentId": 30
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 37,
                            "parentId": 30
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 38,
                            "parentId": 30
                        }
                    ],
                    "title": "Dakar",
                    "color": null,
                    "target": "0",
                    "leaf": false,
                    "menu_id": 30,
                    "parentId": 29
                },
                {
                    "entity_type": "race_type",
                    "entity_id": "3449",
                    "text": "WRC",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 40,
                            "parentId": 39
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 41,
                            "parentId": 39
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 42,
                            "parentId": 39
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 43,
                            "parentId": 39
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 44,
                            "parentId": 39
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 45,
                            "parentId": 39
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 46,
                            "parentId": 39
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 47,
                            "parentId": 39
                        }
                    ],
                    "title": "WRC",
                    "color": null,
                    //
                    "target": '0',
                    "leaf": false,
                    "menu_id": 39,
                    "parentId": 29
                }
            ],
            "leaf": false,
            "menu_id": 29,
            "parentId": "root",
            "menu_parent_id": "root"
        },
        {
            "text": "Touring",
            "entity_id": "303",
            "entity_type": "category",
            "title": "Touring",
            "color": null,
            "target": "0",
            "children": [
                {
                    "entity_type": "race_type",
                    "entity_id": "3396",
                    "text": "DTM",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 50,
                            "parentId": 49
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 51,
                            "parentId": 49
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 52,
                            "parentId": 49
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 53,
                            "parentId": 49
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 54,
                            "parentId": 49
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 55,
                            "parentId": 49
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 56,
                            "parentId": 49
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 57,
                            "parentId": 49
                        }
                    ],
                    "title": "DTM",
                    "color": null,
                    "target": "0",
                    "leaf": false,
                    "menu_id": 49,
                    "parentId": 48
                },
                {
                    "entity_type": "race_type",
                    "entity_id": "3388",
                    "text": "BTCC",
                    "children": [
                        {
                            "entity_type": "article",
                            "title": "News",
                            "text": "News",
                            "leaf": true,
                            "children": [],
                            "menu_id": 59,
                            "parentId": 58
                        },
                        {
                            "entity_type": "photo",
                            "title": "Photos",
                            "text": "Photos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 60,
                            "parentId": 58
                        },
                        {
                            "entity_type": "video",
                            "title": "Videos",
                            "text": "Videos",
                            "leaf": true,
                            "children": [],
                            "menu_id": 61,
                            "parentId": 58
                        },
                        {
                            "entity_type": "schedule",
                            "title": "Schedule",
                            "text": "Schedule",
                            "leaf": true,
                            "children": [],
                            "menu_id": 62,
                            "parentId": 58
                        },
                        {
                            "entity_type": "results",
                            "title": "Results",
                            "text": "Results",
                            "leaf": true,
                            "children": [],
                            "menu_id": 63,
                            "parentId": 58
                        },
                        {
                            "entity_type": "standings",
                            "title": "Standings",
                            "text": "Standings",
                            "leaf": true,
                            "children": [],
                            "menu_id": 64,
                            "parentId": 58
                        },
                        {
                            "entity_type": "driver",
                            "title": "Drivers",
                            "text": "Drivers",
                            "leaf": true,
                            "children": [],
                            "menu_id": 65,
                            "parentId": 58
                        },
                        {
                            "entity_type": "team",
                            "title": "Teams",
                            "text": "Teams",
                            "leaf": true,
                            "children": [],
                            "menu_id": 66,
                            "parentId": 58
                        }
                    ],
                    "title": "BTCC",
                    "color": null,
                    "target": "0",
                    "leaf": false,
                    "menu_id": 58,
                    "parentId": 48
                }
            ],
            "leaf": false,
            "menu_id": 48,
            "parentId": "root",
            "menu_parent_id": "root"
        }
    ]
}

module.exports ={user1, user2, car, product, company, school}
//export default [user, car, product, company, school]
