const destinations = [
    {
        id: 1,
        name: "Gosaikunda",
        region: "langtang",
        description: "Gosaikunda is a sacred alpine lake in the Langtang National Park at an altitude of 4,380 meters. It's a significant pilgrimage site for Hindus and offers breathtaking views of the surrounding Himalayas.",
        information:"4 day trip, Spring (march april,may), Autumn (September October November and early December), Completely safe, Rasuwa district",
        images: ["../images/gosaikunda.png"],
        rating: 4.8,
        reviews: 124,
        bus: {
            duration: "5 hours",
            price: "rs.1500/-",
            condition: "Moderate, some rough patches",
            considerations: "Bring motion sickness medicine if prone to car sickness"
        },
        plane: {
            duration: "45 minutes",
            price: "Rs15000",
            weather: "Flights may be delayed due to mountain weather",
            considerations: "Limited baggage allowance (15kg)"
        },
        helicopter: {
            duration: "30 minutes",
            price: "Rs50000",
            capacity: "5 passengers max",
            considerations: "Highly weather dependent, book with flexibility"
        }
    },
    {
        id: 2,
        name: "Paach Pokhari",
        region: "eastern",
        description: "Paach Pokhari, meaning 'Five Ponds' in Nepali, is a group of five high-altitude lakes situated at 4,100 meters. It's a remote and pristine destination offering spectacular views of the Himalayan range.",
        information: "3-4 days,Altitude:4100m,Moderate trek,Costs: 1000-1500 per day( total trip cost comes around 6-8k),Spring(march to may) and autmn(September to November),Moderately challenging trek",
        images: ["../images/paachpokhari.png"],
        rating: 4.5,
        reviews: 87,
        bus: {
            duration: "5 hours",
            price: "rs.1000/-",
            condition: "Challenging, many rough sections",
            considerations: "Not recommended during monsoon season"
        },
        plane: {
            duration: "N/A",
            price: "N/A",
            weather: "N/A",
            considerations: "N/A"
        },
        helicopter: {
            duration: "90 minutes",
            price: "Rs.40000/-",
            capacity: "4 passengers max",
            considerations: "Advance booking required"
        }
    },
    {
        id: 3,
        name: "Annapurna Base Camp",
        region: "annapurna",
        description: "Annapurna Base Camp (4,130m) offers one of the most spectacular mountain panoramas in the world, with views of Annapurna I, Machapuchare, Hiunchuli, and other peaks.",
        information:"Altitude: 4130m, 11 Days, suitable for beginners,best season: Spring (March-May) and Autumn (September-November)",
        images: ["../images/AbcCamp.png"],
        rating: 4.9,
        reviews: 215,
        bus: {
            duration: "6 hours to starting point",
            price: "rs.2000/-",
            condition: "Good road to Pokhara, then trek",
            considerations: "Multi-day trek required after bus ride"
        },
        plane: {
            duration: "25 minutes to Pokhara",
            price: "rs.5500/-",
            weather: "Generally reliable",
            considerations: "Still requires several days of trekking"
        },
        helicopter: {
            duration: "45 minutes",
            price: "rs.50000/-",
            capacity: "5 passengers max",
            considerations: "Can land near base camp in good weather"
        }
    },
    {
        id: 4,
        name: "Kori Himal",
        region: "annapurna",
        description: "Kori Mardi is a stunning viewpoint in the Annapurna region offering magnificent views of Machapuchare (Fishtail Mountain) and the Annapurna range. It's a less crowded alternative to Poon Hill.",
        information:"Altitude- 4115 m, Best season- sep to jan, march to august, Moderate trek ,Duration:8 days, Total cost: 1500-2000 per day",
        images: ["../images/kori.png"],
        rating: 4.6,
        reviews: 76,
        bus: {
            duration: "6 hours to starting point",
            price: "rs.1500/-",
            condition: "Good road to Pokhara, then trek",
            considerations: "Requires 5-7 days of trekking"
        },
        plane: {
            duration: "25 minutes to Pokhara",
            price: "rs.4500/-",
            weather: "Generally reliable",
            considerations: "Still requires trekking"
        },
        helicopter: {
            duration: "40 minutes",
            price: "rs.55000/-",
            capacity: "5 passengers max",
            considerations: "Can land nearby in good weather"
        }
    },
    {
        id: 5,
        name: "Langtang Valley",
        region: "langtang",
        description: "Langtang Valley, often called the 'valley of glaciers', offers beautiful landscapes, rich Tamang culture, and relatively easy access from Kathmandu. The valley was affected by the 2015 earthquake but has largely recovered.",
        images: ["../images/langtang.png"],
        rating: 4.7,
        reviews: 142,
        bus: {
            duration: "7 hours",
            price: "rs.2000/-",
            condition: "Moderate, some rough sections",
            considerations: "Road goes up to Syabrubesi, trek required"
        },
        plane: {
            duration: "N/A",
            price: "N/A",
            weather: "N/A",
            considerations: "No direct flight service"
        },
        helicopter: {
            duration: "35 minutes",
            price: "rs.60000/-",
            capacity: "5 passengers max",
            considerations: "Can land in Kyanjin Gompa in good weather"

        }
    },
    {
        id: 6,
        name: "Everest Base Camp",
        region: "everest",
        description: "The trek to Everest Base Camp (5,364m) is one of the most famous in the world, offering incredible views of Mt. Everest and other 8,000m peaks. The journey takes you through Sherpa villages and Buddhist monasteries.",
        information: "Location: Khumbu Region, Nepal, Height of EBC: 5,364 meters (17,598 ft),Total Trekking Days: 12–14 days (Lukla to EBC and return), Starting Point: Lukla (2,860 m), Best Time to Go, Spring: March to May, Autumn: September to November",
        images: ["../images/EBC.png"],
        rating: 4.9,
        reviews: 298,
        bus: {
            duration: "10 hours to starting point",
            price: "rs.2700/-",
            condition: "Long and tiring road to Salleri or Jiri",
            considerations: "Adds several days to the trek"
        },
        plane: {
            duration: "45 minutes to Lukla",
            price: "rs.6000/-",
            weather: "Frequently delayed due to weather",
            considerations: "Small aircraft, strict baggage limits"
        },
        helicopter: {
            duration: "1 hour to base camp",
            price: "rs.110000/-",
            capacity: "5 passengers max",
            considerations: "Can land at base camp in good conditions"
        }
    },
    {
        id: 7,
        name: "Badimalika",
        region: "western",
        description: "Badimalika is a sacred temple located at 4,200 meters in the Bajura district. It's an important pilgrimage site with stunning mountain views and a unique cultural experience in far-western Nepal.",
        information: "15 days trek,moderatelly challenging to difficult,cost: 15000-2000,altitude:4200m.",
        images: ["../images/badimalika.png"],
        rating: 4.3,
        reviews: 53,
        bus: {
            duration: "18 hours",
            price: "rs.2500/-",
            condition: "Very challenging, rough roads",
            considerations: "Not recommended in monsoon or winter"
        },
        plane: {
            duration: "1 hour to nearby airport",
            price: "rs.7000/-",
            weather: "Unpredictable, frequent cancellations",
            considerations: "Still requires long jeep ride"
        },
        helicopter: {
            duration: "1.5 hours",
            price: "rs.68000/-",
            capacity: "5 passengers max",
            considerations: "Only practical option for many visitors"
        }
    },
    {
        id: 8,
        name: "Ghandruk-Poonhill",
        region: "annapurna",
        description: "The Ghandruk-Poonhill trek is one of Nepal's most popular short treks, offering magnificent views of Annapurna South, Hiunchuli, and Machapuchare, along with rich Gurung culture.",
        images: ["../images/ghandruk.png"],
        rating: 4.8,
        reviews: 187,
        bus: {
            duration: "6 hours to starting point",
            price: "rs.1500/-",
            condition: "Good road to Nayapul",
            considerations: "Classic 4-5 day trek"
        },
        plane: {
            duration: "25 minutes to Pokhara",
            price: "rs.4500/-",
            weather: "Generally reliable",
            considerations: "Still requires drive to trek start"
        },
        helicopter: {
            duration: "35 minutes",
            price: "rs.45000/-",
            capacity: "5 passengers max",
            considerations: "Can land in Ghandruk in good weather"
        }
    },
    {
        id: 9,
        name: "Lower Mustang",
        region: "mustang",
        description: "Lower Mustang, the gateway to the Upper Mustang restricted area, features dramatic arid landscapes, Tibetan-influenced culture, and the famous Muktinath Temple at 3,800 meters.",
        images: ["../images/lower.png"],
        rating: 4.7,
        reviews: 134,
        bus: {
            duration: "10 hours to Pokhara, then more",
            price: "rs.2000/-",
            condition: "Long journey with rough sections",
            considerations: "Multi-day trek required"
        },
        plane: {
            duration: "20 minutes to Jomsom",
            price: "rs.5500/-",
            weather: "Frequently windy, morning flights best",
            considerations: "Special permit required for Mustang"
        },
        helicopter: {
            duration: "1 hour",
            price: "rs.65000/-",
            capacity: "5 passengers max",
            considerations: "Can land in Jomsom or Muktinath"
        }
    },
    {
        id: 10,
        name: "Kanchenjunga",
        region: "eastern",
        description: "The Kanchenjunga region offers one of Nepal's most remote and spectacular treks to the base camp of the world's third highest mountain. The area is rich in biodiversity and traditional cultures.",
        images: ["../images/kanchenjungaCircuitTrek.png"],
        rating: 4.6,
        reviews: 89,
        bus: {
            duration: "16 hours to starting point",
            price: "2500/-",
            condition: "Very challenging roads",
            considerations: "Long, demanding 3-week trek required"
        },
        plane: {
            duration: "1 hour to Taplejung",
            price: "rs.5000/-",
            weather: "Unpredictable, frequent cancellations",
            considerations: "Still requires long trek"
        },
        helicopter: {
            duration: "1.5 hours",
            price: "rs.79000/-",
            capacity: "5 passengers max",
            considerations: "Special permit required, expensive"
        }
    }
];