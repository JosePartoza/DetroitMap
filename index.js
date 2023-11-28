function handleHoverIn(event) {
    var gElement = event.currentTarget;
    var polygonElement = gElement.querySelector('polygon');
    
    if (!polygonElement) return; // Ensure polygon exists

    // Clone the polygon
    var clonedPolygon = polygonElement.cloneNode(true);
    clonedPolygon.classList.add('cloned');

    // Distributing colors across the cities
    switch (gElement.id) {

        case 'Boston Edison':
        case 'Brush Park':
        case 'Gold Coast':
        case 'Eastern Market':
        case 'Elmwood Park':
        case 'Hubbard Farms':
        case 'Hubbard Richard':
        case 'Cass Corridor':
        case 'Midtown':
        case 'Alden Park':
        case 'University District':
        case 'Virginia Park':
        case 'North Corktown':
        case 'West Side Industrial':
        case 'Bagley':
        case 'Corktown Shores':
        case 'Art Center':
        case 'Joseph Barry Sub':
        case 'New Center':
        case 'Lafayette Park':
        case 'Indian Village':
        case 'Corktown':
        case 'Milwaukee Junction':
        case 'Detroit Golf':
        case 'Green Acres':
        case 'West Village':
        case 'Sherwood Forest':
        case 'Woodbridge':
        case 'Downtown':
        case 'Palmer Woods':
        case 'Rivertown':
        case 'Marina District':
        case 'Oakwood Heights':
        case 'Rosedale Park':
        case 'North Rosedale Park':

            clonedPolygon.style.fill = '#008000'; // Green
            break;

        case 'IslandView':
        case 'East English Village':
        case 'River Rouge':
        case 'Old Redford':
        case 'English Village':
        case 'Far West Parklane':
        case 'Core City':
        case 'LaSalle Gardens':
        case 'Grandmont Rosedale':
        case 'North End':
        case 'Martin Park':
        case 'Palmer Park':
        case 'Jefferson Chalmers':
        case 'Mexicantown':
        case 'Morningside':
        case 'Berg-Lahser':
        case 'Grandmont':
        case 'Russel Woods':
        case 'Balduck Hill':
        case 'Mexicantown':

            clonedPolygon.style.fill = '#0000FF'; // Blue
            break;

        case 'Five Points':
        case 'Castle Rouge':
        case 'NorHam':
        case 'Belmont':
        case 'The Eye':
        case 'Kettering':
        case 'Eliza Howell':
        case 'Fitzgerald':
        case 'Southwest':
        case 'Seven Mile Evergreen':
        case 'Minock Park':
        case 'Riverdale':
        case 'Grixdale Farms':
        case 'Pembroke':
        case 'Springwells':
        case 'Greenfield-Grand River':
        case 'Herman Gardens':
        case 'East Village':
        case 'Foch':
        case 'Mohican Regent':
        case 'Michigan Martin':
        case 'Westwood Park':
        case 'Eight Mile Wyoming':
        case 'Denby':
        case 'Aviation Subdivision':
        case 'Blackstone Park':
        case 'Cornerstone Village':

            clonedPolygon.style.fill = '#FFFF00'; // Yellow
            break;

        case 'Conner Creek':
        case 'Dexter-Linwood':
        case 'State Fair':
        case 'Krainz Woods':
        case 'Osborn':
        case 'Grand Meyer': //Please check this on excel file and also on main map reference
        case 'Chadsey':
        case 'Grandale':
        case 'Petosky-Otsego':
        case 'Hope Village':
        case 'Davison':
        case 'Grixdale':
        case 'Nortown':
        case 'Regent Park':
        case 'Warrendale':
        case 'Ravendale':
        case 'NW Goldberg':
        case 'Conant Gardens':
        case 'City Airport':
        case 'Burbank':
        case 'Littlefield':
        case 'Boynton':
        case 'Barton McFarland':
        case 'Brightmoor':
        case 'Poletown East':
        case 'LaSalle College Park':
        case 'St. Jean':
        case 'Delray':
        case 'McDougall Hunt':
        case 'Fiskorn':
        case 'Van Steuban':
        case 'Franklin Park':
        case 'Greenfield':
        case 'Fox Creek':
        case 'Weatherby':
        case 'Chaldean Town':
        case 'Chandler Park':
        case 'Condon':
        case 'Jefferson-Mack':

            clonedPolygon.style.fill = '#FF0000'; // Red
            break;

        default:
            break;
    }
    clonedPolygon.style.opacity = '0.6';
    gElement.appendChild(clonedPolygon);
}


function handleHoverOut(event) {
    const gElement = event.currentTarget;
    const polygonElement = gElement.querySelector('polygon:not(.cloned)'); // Select the original polygon, not the cloned one
    const clonedPolygon = gElement.querySelector('polygon.cloned'); // Select the cloned polygon
    
    // Reset fill color of the original polygon if it exists
    if (polygonElement) {
        polygonElement.style.fill = '';
    }

    // Remove the cloned polygon if it exists
    if (clonedPolygon) {
        gElement.removeChild(clonedPolygon);
    }
}


function showPopover(event, headerText, contentText, linkHref, linkText) {
    const popover = document.querySelector('.popover');

    if (!popover) return;

    const popoverHeader = popover.querySelector('.popover-header');
    const popoverBody = popover.querySelector('.popover-body');
    const popoverLink = popover.querySelector('.popover-link');

    if (popoverHeader) {
        popoverHeader.textContent = headerText;
    }

    if (popoverBody) {
        popoverBody.textContent = contentText;
    }

    if (popoverLink) {
        popoverLink.href = linkHref;
        popoverLink.textContent = linkText;
    }

    const boundingBox = event.currentTarget.getBoundingClientRect();
    popover.style.left = `${boundingBox.left}px`;
    popover.style.top = `${boundingBox.bottom}px`;
    popover.style.display = 'block';
    
    // Close popover when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.popover') && !e.target.closest('g')) {
            popover.style.display = 'none';
        }
    }, { once: true });  // This ensures the listener is removed after it's executed once.
}

// Get all g elements with the city names
const cityIds = [
    'Five Points', 'Boston Edison', 'Brush Park', 'Gold Coast', 'Eastern Market', 'Castle Rouge', 'Elmwood Park', 
    'IslandView', 'Cass Corridor', 'Midtown', 'Alden Park', 'Dexter-Linwood', 'University District', 'NorHam', 
    'State Fair', 'Krainz Woods', 'Osborn', 'East English Village', 'North Corktown', 'Bagley', 'Grand Meyer', 
    'Chadsey', 'Belmont', 'The Eye', 'Grandale', 'River Rouge', 'Old Redford', 'New Center', 
    'English Village', 'Lafayette Park', 'Indian Village', 'Eliza Howell', 'Core City', 'Corktown', 'Milwaukee Junction', 
    'LaSalle Gardens', 'Petosky-Otsego', 'Hope Village', 'Detroit Golf', 'Davison', 'Grixdale', 'Nortown', 
    'Regent Park', 'Jefferson-Mack', 'Green Acres', 'Fitzgerald', 'Southwest', 'Condon', 'Grandmont Rosedale', 
    'Seven Mile Evergreen', 'Warrendale', 'Ravendale', 'Minock Park', 'West Village', 'Corktown Shores', 
    'Sherwood Forest', 'Hubbard Farms', 'NW Goldberg', 'Woodbridge', 'Downtown', 'North End', 'Martin Park', 
    'Palmer Park', 'Grixdale Farms', 'Conant Gardens', 'City Airport', 'Burbank', 'Jefferson Chalmers', 'Pembroke', 
    'Littlefield', 'Mexicantown', 'Springwells', 'Boynton', 'Barton McFarland', 'Greenfield-Grand River', 
    'Herman Gardens', 'Brightmoor', 'Berg-Lahser', 'Westwood Park', 'Grandmont', 'Palmer Woods', 'Russel Woods', 
    'Rivertown', 'Marina District', 'Foch', 'Poletown East', 'LaSalle College Park', 'Denby', 'St. Jean', 'Balduck Hill', 
    'West Side Industrial', 'Mexicantown', 'Delray', 'Oakwood Heights', 'Aviation Subdivision', 'Fiskorn', 
    'Rosedale Park', 'Franklin Park', 'Greenfield', 'North Rosedale Park', 'Kettering', 'McDougall Hunt', 'Riverdale',
    'Chandler Park', 'Mohican Regent', 'Art Center', 'Joseph Barry Sub', 'Hubbard Richard', 'East Village', 'Cornerstone Village', 'Fox Creek', 'Weatherby', 'Far West Parklane', 'Morningside', 'Virginia Park', 'Chaldean Town', 'Blackstone Park', 'Eight Mile Wyoming', 'Michigan Martin', 'Conner Creek', 'Van Steuban'
];

const cityData = {
    'Five Points': {
        content: 'Insights about Five Points.',
        link: 'https://example.com/five-points',
        linkText: 'Learn More'
    },
    'Mohican Regent': {
        content: 'Insights about Mohican Regent.',
        link: 'https://example.com/mohican-regent',
        linkText: 'Learn More'
    },
    'Art Center': {
        content: 'Insights about Art Center.',
        link: 'https://example.com/art-center',
        linkText: 'Learn More'
    },
    'Joseph Barry Sub': {
        content: 'Insights about Joseph Barry Sub.',
        link: 'https://example.com/joseph-barry-sub',
        linkText: 'Learn More'
    },
    'Hubbard Richard': {
        content: 'Insights about Hubbard Richard.',
        link: 'https://example.com/hubbard-richard',
        linkText: 'Learn More'
    },
    'East Village': {
        content: 'Insights about East Village.',
        link: 'https://example.com/east-village',
        linkText: 'Learn More'
    },
    'Cornerstone Village': {
        content: 'Insights about Cornerstone Village.',
        link: 'https://example.com/cornerstone-village',
        linkText: 'Learn More'
    },
    'Fox Creek': {
        content: 'Insights about Fox Creek.',
        link: 'https://example.com/fox-creek',
        linkText: 'Learn More'
    },
    'Weatherby': {
        content: 'Insights about Weatherby.',
        link: 'https://example.com/seatherby',
        linkText: 'Learn More'
    },
    'Far West Parklane': {
        content: 'Insights about Far West Parklane.',
        link: 'https://example.com/far-west-parklane',
        linkText: 'Learn More'
    },
    'Virginia Park': {
        content: 'Insights about Virginia Park.',
        link: 'https://example.com/virginia-park',
        linkText: 'Learn More'
    },
    'Michigan Martin': {
        content: 'Insights about Michigan Martin.',
        link: 'https://example.com/michigan-martin',
        linkText: 'Learn More'
    },
    'Van Steuban': {
        content: 'Insights about Van Steuban.',
        link: 'https://example.com/van-steuban',
        linkText: 'Learn More'
    },
    'Conner Creek': {
        content: 'Insights about Conner Creek.',
        link: 'https://example.com/conner-creek',
        linkText: 'Learn More'
    },
    'Eight Mile Wyoming': {
        content: 'Insights about Eight Mile Wyoming.',
        link: 'https://example.com/Eight-Mile-Wyoming',
        linkText: 'Learn More'
    },
    'Old Redford': {
        content: 'Insights about Old Redford.',
        link: 'https://example.com/old-redford',
        linkText: 'Learn More'
    },
    'Minock Park': {
        content: 'Insights about Minock Park.',
        link: 'https://example.com/minock-park',
        linkText: 'Learn More'
    },
    'Westwood Park': {
        content: 'Insights about Westwood Park.',
        link: 'https://example.com/westwood-park',
        linkText: 'Learn More'
    },
    'Grandmont': {
        content: 'Insights about Grandmont.',
        link: 'https://example.com/grandmont',
        linkText: 'Learn More'
    },
    'Sherwood Forest': {
        content: 'Insights about Sherwood Forest.',
        link: 'https://example.com/sherwood-forest',
        linkText: 'Learn More'
    },
    'Palmer Woods': {
        content: 'Insights about Palmer Woods.',
        link: 'https://example.com/palmer-woods',
        linkText: 'Learn More'
    },
    'Boston Edison': {
        content: 'Insights about Boston Edison.',
        link: 'https://example.com/boston-edison',
        linkText: 'Learn More'
    },
    'New Center': {
        content: 'Insights about New Center.',
        link: 'https://example.com/new-center',
        linkText: 'Learn More'
    },
    'West Village': {
        content: 'Insights about West Village.',
        link: 'https://example.com/west-village',
        linkText: 'Learn More'
    },
    'English Village': {
        content: 'Insights about English Village.',
        link: 'https://example.com/english-village',
        linkText: 'Learn More'
    },
    'Corktown Shores': {
        content: 'Insights about Corktown Shores.',
        link: 'https://example.com/corktown-shores',
        linkText: 'Learn More'
    },
    'Brush Park': {
        content: 'Insights about Brush Park.',
        link: 'https://example.com/brush-park',
        linkText: 'Learn More'
    },
    'Lafayette Park': {
        content: 'Insights about Lafayette Park.',
        link: 'https://example.com/lafayette-park',
        linkText: 'Learn More'
    },
    'Gold Coast': {
        content: 'Insights about Gold Coast.',
        link: 'https://example.com/gold-coast',
        linkText: 'Learn More'
    },
    'Indian Village': {
        content: 'Insights about Indian Village.',
        link: 'https://example.com/indian-village',
        linkText: 'Learn More'
    },
    'Hubbard Farms': {
        content: 'Insights about Hubbard Farms.',
        link: 'https://example.com/hubbard-farms',
        linkText: 'Learn More'
    },
    'Eastern Market': {
        content: 'Insights about Eastern Market.',
        link: 'https://example.com/eastern-market',
        linkText: 'Learn More'
    },
    'Russel Woods': {
        content: 'Insights about Russel Woods.',
        link: 'https://example.com/russel-woods',
        linkText: 'Learn More'
    },
    'Castle Rouge': {
        content: 'Insights about Castle Rouge.',
        link: 'https://example.com/castle-rouge',
        linkText: 'Learn More'
    },
    'Eliza Howell': {
        content: 'Insights about Eliza Howell.',
        link: 'https://example.com/eliza-howell',
        linkText: 'Learn More'
    },
    'NW Goldberg': {
        content: 'Insights about NW Goldberg.',
        link: 'https://example.com/nw-goldberg',
        linkText: 'Learn More'
    },
    'Core City': {
        content: 'Insights about Core City.',
        link: 'https://example.com/core-city',
        linkText: 'Learn More'
    },
    'Woodbridge': {
        content: 'Insights about Woodbridge.',
        link: 'https://example.com/woodbridge',
        linkText: 'Learn More'
    },
    'Rivertown': {
        content: 'Insights about Rivertown.',
        link: 'https://example.com/rivertown',
        linkText: 'Learn More'
    },
    'Elmwood Park': {
        content: 'Insights about Elmwood Park.',
        link: 'https://example.com/elmwood-park',
        linkText: 'Learn More'
    },
    'McDougall Hunt': {
        content: 'Insights about McDougall Hunt.',
        link: 'https://example.com/mcdougall-hunt',
        linkText: 'Learn More'
    },
    'IslandView': {
        content: 'Insights about IslandView.',
        link: 'https://example.com/islandview',
        linkText: 'Learn More'
    },
    'Marina District': {
        content: 'Insights about Marina District.',
        link: 'https://example.com/marina-district',
        linkText: 'Learn More'
    },
    'Foch': {
        content: 'Insights about Foch.',
        link: 'https://example.com/foch',
        linkText: 'Learn More'
    },
    'Kettering': {
        content: 'Insights about Kettering.',
        link: 'https://example.com/kettering',
        linkText: 'Learn More'
    },
    'Poletown East': {
        content: 'Insights about Poletown East.',
        link: 'https://example.com/poletown-east',
        linkText: 'Learn More'
    },
    'Cass Corridor': {
        content: 'Insights about Cass Corridor.',
        link: 'https://example.com/cass-corridor',
        linkText: 'Learn More'
    },
    'Downtown': {
        content: 'Insights about Downtown.',
        link: 'https://example.com/downtown',
        linkText: 'Learn More'
    },
    'Midtown': {
        content: 'Insights about Midtown.',
        link: 'https://example.com/midtown',
        linkText: 'Learn More'
    },
    'Milwaukee Junction': {
        content: 'Insights about Milwaukee Junction.',
        link: 'https://example.com/milwaukee-junction',
        linkText: 'Learn More'
    },
    'North End': {
        content: 'Insights about North End.',
        link: 'https://example.com/north-end',
        linkText: 'Learn More'
    },
    'LaSalle Gardens': {
        content: 'Insights about LaSalle Gardens.',
        link: 'https://example.com/lasalle-gardens',
        linkText: 'Learn More'
    },
    'Alden Park': {
        content: 'Insights about Alden Park.',
        link: 'https://example.com/alden-park',
        linkText: 'Learn More'
    },
    'Petosky-Otsego': {
        content: 'Insights about Petosky-Otsego.',
        link: 'https://example.com/petosky-otsego',
        linkText: 'Learn More'
    },
    'Dexter-Linwood': {
        content: 'Insights about Dexter-Linwood.',
        link: 'https://example.com/dexter-linwood',
        linkText: 'Learn More'
    },
    'Hope Village': {
        content: 'Insights about Hope Village.',
        link: 'https://example.com/hope-village',
        linkText: 'Learn More'
    },
    'Martin Park': {
        content: 'Insights about Martin Park.',
        link: 'https://example.com/martin-park',
        linkText: 'Learn More'
    },
    'University District': {
        content: 'Insights about University District.',
        link: 'https://example.com/university-district',
        linkText: 'Learn More'
    },
    'Detroit Golf': {
        content: 'Insights about Detroit Golf.',
        link: 'https://example.com/detroit-golf',
        linkText: 'Learn More'
    },
    'Palmer Park': {
        content: 'Insights about Palmer Park.',
        link: 'https://example.com/palmer-park',
        linkText: 'Learn More'
    },
    'Grixdale Farms': {
        content: 'Insights about Grixdale Farms.',
        link: 'https://example.com/grixdale-farms',
        linkText: 'Learn More'
    },
    'NorHam': {
        content: 'Insights about NorHam.',
        link: 'https://example.com/norham',
        linkText: 'Learn More'
    },
    'Davison': {
        content: 'Insights about Davison.',
        link: 'https://example.com/davison',
        linkText: 'Learn More'
    },
    'State Fair': {
        content: 'Insights about State Fair.',
        link: 'https://example.com/state-fair',
        linkText: 'Learn More'
    },
    'Grixdale': {
        content: 'Insights about Grixdale.',
        link: 'https://example.com/grixdale',
        linkText: 'Learn More'
    },
    'Conant Gardens': {
        content: 'Insights about Conant Gardens.',
        link: 'https://example.com/conant-gardens',
        linkText: 'Learn More'
    },
    'Krainz Woods': {
        content: 'Insights about Krainz Woods.',
        link: 'https://example.com/krainz-woods',
        linkText: 'Learn More'
    },
    'Nortown': {
        content: 'Insights about Nortown.',
        link: 'https://example.com/nortown',
        linkText: 'Learn More'
    },
    'City Airport': {
        content: 'Insights about City Airport.',
        link: 'https://example.com/city-airport',
        linkText: 'Learn More'
    },
    'Osborn': {
        content: 'Insights about Osborn.',
        link: 'https://example.com/osborn',
        linkText: 'Learn More'
    },
    'Regent Park': {
        content: 'Insights about Regent Park.',
        link: 'https://example.com/regent-park',
        linkText: 'Learn More'
    },
    'Burbank': {
        content: 'Insights about Burbank.',
        link: 'https://example.com/burbank',
        linkText: 'Learn More'
    },
    'LaSalle College Park': {
        content: 'Insights about LaSalle College Park.',
        link: 'https://example.com/lasalle-college-park',
        linkText: 'Learn More'
    },
    'Ravendale': {
        content: 'Insights about Ravendale.',
        link: 'https://example.com/ravendale',
        linkText: 'Learn More'
    },
    'Denby': {
        content: 'Insights about Denby.',
        link: 'https://example.com/denby',
        linkText: 'Learn More'
    },
    'St. Jean': {
        content: 'Insights about St. Jean.',
        link: 'https://example.com/st-jean',
        linkText: 'Learn More'
    },
    'Chandler Park': {
        content: 'Insights about Chandler Park.',
        link: 'https://example.com/chandler-park',
        linkText: 'Learn More'
    },
    'Morningside': {
        content: 'Insights about Morningside.',
        link: 'https://example.com/morningside',
        linkText: 'Learn More'
    },
    'East English Village': {
        content: 'Insights about East English Village.',
        link: 'https://example.com/east-english-village',
        linkText: 'Learn More'
    },
    'Balduck Hill': {
        content: 'Insights about Balduck Hill.',
        link: 'https://example.com/balduck-hill',
        linkText: 'Learn More'
    },
    'Jefferson-Mack': {
        content: 'Insights about Jefferson-Mack.',
        link: 'https://example.com/jefferson-mack',
        linkText: 'Learn More'
    },
    'Jefferson Chalmers': {
        content: 'Insights about Jefferson Chalmers.',
        link: 'https://example.com/jefferson-chalmers',
        linkText: 'Learn More'
    },
    'West Side Industrial': {
        content: 'Insights about West Side Industrial.',
        link: 'https://example.com/west-side-industrial',
        linkText: 'Learn More'
    },
    'North Corktown': {
        content: 'Insights about North Corktown.',
        link: 'https://example.com/north-corktown',
        linkText: 'Learn More'
    },
    'Green Acres': {
        content: 'Insights about Green Acres.',
        link: 'https://example.com/green-acres',
        linkText: 'Learn More'
    },
    'Pembroke': {
        content: 'Insights about Pembroke.',
        link: 'https://example.com/pembroke',
        linkText: 'Learn More'
    },
    'Bagley': {
        content: 'Insights about Bagley.',
        link: 'https://example.com/bagley',
        linkText: 'Learn More'
    },
    'Fitzgerald': {
        content: 'Insights about Fitzgerald.',
        link: 'https://example.com/fitzgerald',
        linkText: 'Learn More'
    },
    'Littlefield': {
        content: 'Insights about Littlefield.',
        link: 'https://example.com/littlefield',
        linkText: 'Learn More'
    },
    'Grand Meyer': {
        content: 'Insights about Grand Meyer.',
        link: 'https://example.com/grand-meyer',
        linkText: 'Learn More'
    },
    'Southwest': {
        content: 'Insights about Southwest.',
        link: 'https://example.com/southwest',
        linkText: 'Learn More'
    },
    'Mexicantown': {
        content: 'Insights about Mexicantown.',
        link: 'https://example.com/mexicantown',
        linkText: 'Learn More'
    },
    'Delray': {
        content: 'Insights about Delray.',
        link: 'https://example.com/delray',
        linkText: 'Learn More'
    },
    'Springwells': {
        content: 'Insights about Springwells.',
        link: 'https://example.com/springwells',
        linkText: 'Learn More'
    },
    'Oakwood Heights': {
        content: 'Insights about Oakwood Heights.',
        link: 'https://example.com/oakwood-heights',
        linkText: 'Learn More'
    },
    'Boynton': {
        content: 'Insights about Boynton.',
        link: 'https://example.com/boynton',
        linkText: 'Learn More'
    },
    'Condon': {
        content: 'Insights about Condon.',
        link: 'https://example.com/condon',
        linkText: 'Learn More'
    },
    'Chadsey': {
        content: 'Insights about Chadsey.',
        link: 'https://example.com/chadsey',
        linkText: 'Learn More'
    },
    'Barton McFarland': {
        content: 'Insights about Barton McFarland.',
        link: 'https://example.com/barton-mcfarland',
        linkText: 'Learn More'
    },
    'Aviation Subdivision': {
        content: 'Insights about Aviation Subdivision.',
        link: 'https://example.com/aviation-subdivision',
        linkText: 'Learn More'
    },
    'Fiskorn': {
        content: 'Insights about Fiskorn.',
        link: 'https://example.com/fiskorn',
        linkText: 'Learn More'
    },
    'Greenfield-Grand River': {
        content: 'Insights about Greenfield-Grand River.',
        link: 'https://example.com/greenfield-grand-river',
        linkText: 'Learn More'
    },
    'Belmont': {
        content: 'Insights about Belmont.',
        link: 'https://example.com/belmont',
        linkText: 'Learn More'
    },
    'Grandmont Rosedale': {
        content: 'Insights about Grandmont Rosedale.',
        link: 'https://example.com/grandmont-rosedale',
        linkText: 'Learn More'
    },
    'Rosedale Park': {
        content: 'Insights about Rosedale Park.',
        link: 'https://example.com/rosedale-park',
        linkText: 'Learn More'
    },
    'The Eye': {
        content: 'Insights about The Eye.',
        link: 'https://example.com/the-eye',
        linkText: 'Learn More'
    },
    'Seven Mile Evergreen': {
        content: 'Insights about Seven Mile Evergreen.',
        link: 'https://example.com/seven-mile-evergreen',
        linkText: 'Learn More'
    },
    'Grandale': {
        content: 'Insights about Grandale.',
        link: 'https://example.com/grandale',
        linkText: 'Learn More'
    },
    'Herman Gardens': {
        content: 'Insights about Herman Gardens.',
        link: 'https://example.com/herman-gardens',
        linkText: 'Learn More'
    },
    'Franklin Park': {
        content: 'Insights about Franklin Park.',
        link: 'https://example.com/franklin-park',
        linkText: 'Learn More'
    },
    'Warrendale': {
        content: 'Insights about Warrendale.',
        link: 'https://example.com/warrendale',
        linkText: 'Learn More'
    },
    'River Rouge': {
        content: 'Insights about River Rouge.',
        link: 'https://example.com/river-rouge',
        linkText: 'Learn More'
    },
    'Brightmoor': {
        content: 'Insights about Brightmoor.',
        link: 'https://example.com/brightmoor',
        linkText: 'Learn More'
    },
    'Riverdale': {
        content: 'Insights about Riverdale.',
        link: 'https://example.com/riverdale',
        linkText: 'Learn More'
    },
    'Greenfield': {
        content: 'Insights about Greenfield.',
        link: 'https://example.com/greenfield',
        linkText: 'Learn More'
    },
    'Berg-Lahser': {
        content: 'Insights about Berg-Lahser.',
        link: 'https://example.com/berg-lahser',
        linkText: 'Learn More'
    },
    'North Rosedale Park': {
        content: 'Insights about North Rosedale Park.',
        link: 'https://example.com/north-rosedale-park',
        linkText: 'Learn More'
    },
    'Blackstone Park': {
        content: 'Insights about Blackstone Park.',
        link: 'https://example.com/blackstone-park',
        linkText: 'Learn More'
    },
    'Chaldean Town': {
        content: 'Insights about Chaldean Town.',
        link: 'https://example.com/chaldean-town',
        linkText: 'Learn More'
    }
    
};



const gElements = document.querySelectorAll(cityIds.map(id => `g[id="${id}"]`).join(','));

gElements.forEach(function(gElement) {
    gElement.addEventListener('mouseenter', handleHoverIn);
    gElement.addEventListener('mouseleave', handleHoverOut);
    gElement.addEventListener('click', function(event) {
        const city = event.currentTarget.id;
        const data = cityData[city];
        if (data) {
            showPopover(event, city, data.content, data.link, data.linkText);
        }
    });
});


// Function to close the popover
function closePopover() {
    const popover = document.querySelector('.popover');
    if (popover) {
        popover.style.display = 'none';
    }
}

// Event listener for the close button inside the popover
document.querySelector('.popover-close-btn').addEventListener('click', closePopover);